const VOID_TAGS = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const RAW_TEXT_TAGS = new Set(['script','style']);

const ATTR_RENAME = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  crossorigin: 'crossOrigin',
  autoplay: 'autoPlay',
  autofocus: 'autoFocus',
  contenteditable: 'contentEditable',
  allowfullscreen: 'allowFullScreen',
  playsinline: 'playsInline',
  novalidate: 'noValidate',
  spellcheck: 'spellCheck',
  frameborder: 'frameBorder',
  enctype: 'encType',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  usemap: 'useMap',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  'xlink:href': 'xlinkHref',
  'xlink:role': 'xlinkRole',
  'xlink:title': 'xlinkTitle',
  'xlink:show': 'xlinkShow',
  'xlink:actuate': 'xlinkActuate',
  'xml:base': 'xmlBase',
  'xml:lang': 'xmlLang',
  'xml:space': 'xmlSpace',
};

// SVG/CSS presentation attributes that need camelCasing in JSX
const SVG_CAMEL = [
  'accent-height','alignment-baseline','arabic-form','baseline-shift','cap-height','clip-path','clip-rule',
  'color-interpolation','color-interpolation-filters','color-profile','color-rendering','dominant-baseline',
  'enable-background','fill-opacity','fill-rule','flood-color','flood-opacity','font-family','font-size',
  'font-size-adjust','font-stretch','font-style','font-variant','font-weight','glyph-name','glyph-orientation-horizontal',
  'glyph-orientation-vertical','horiz-adv-x','horiz-origin-x','image-rendering','letter-spacing','lighting-color',
  'marker-end','marker-mid','marker-start','overline-position','overline-thickness','paint-order','panose-1',
  'pointer-events','rendering-intent','shape-rendering','stop-color','stop-opacity','strikethrough-position',
  'strikethrough-thickness','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit',
  'stroke-opacity','stroke-width','text-anchor','text-decoration','text-rendering','underline-position','underline-thickness',
  'unicode-bidi','unicode-range','units-per-em','v-alphabetic','v-hanging','v-ideographic','v-mathematical','vector-effect',
  'vert-adv-y','vert-origin-x','vert-origin-y','word-spacing','writing-mode','x-height',
];
for (const a of SVG_CAMEL) {
  ATTR_RENAME[a] = a.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function camelizeStyleProp(prop) {
  if (prop.startsWith('--')) return prop; // CSS custom property, keep as-is
  if (prop.startsWith('-ms-')) return 'ms' + prop.slice(3).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

function parseStyleString(styleStr) {
  const decls = styleStr.split(';').map(s => s.trim()).filter(Boolean);
  const obj = {};
  for (const decl of decls) {
    const idx = decl.indexOf(':');
    if (idx === -1) continue;
    const prop = decl.slice(0, idx).trim();
    const val = decl.slice(idx + 1).trim();
    if (!prop) continue;
    obj[camelizeStyleProp(prop)] = val;
  }
  return obj;
}

function styleObjToJsx(obj) {
  const entries = Object.entries(obj).map(([k, v]) => {
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    return `${key}: ${JSON.stringify(v)}`;
  });
  return `{{ ${entries.join(', ')} }}`;
}

function jsStringLiteral(str) {
  return JSON.stringify(str);
}

function escapeTemplateLiteral(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function attrToJsx(attr) {
  let name = attr.name;
  if (name.startsWith('on')) {
    // inline event handler attrs (onclick="...") - keep as plain string attr, inert in React unless renamed;
    // these originals are mostly absent in this export, but guard anyway by dropping (no-op in static export).
    return null;
  }
  const renamed = ATTR_RENAME[name] || name;

  if (name === 'style') {
    const obj = parseStyleString(attr.value);
    // Framer bakes opacity:0 into SSR markup as the pre-mount state for its
    // scroll/load "appear" animations, which only resolve to opacity:1 once
    // Framer's own JS runtime runs. We don't ship that runtime, so without
    // this override this content would stay permanently invisible.
    if (obj.opacity === '0') obj.opacity = '1';
    return `style=${styleObjToJsx(obj)}`;
  }

  if (attr.value === '') {
    // boolean-ish / valueless attribute, e.g. `alt` with no value
    return renamed;
  }

  return `${renamed}=${jsStringLiteral(attr.value)}`;
}

function serializeAttrs(attrs) {
  const parts = [];
  for (const attr of attrs || []) {
    const out = attrToJsx(attr);
    if (out) parts.push(out);
  }
  return parts.length ? ' ' + parts.join(' ') : '';
}

function normalizeJsxWhitespace(text) {
  // Mimic JSX's own whitespace handling for literal text: any run of
  // whitespace containing a newline collapses to a single space, and
  // leading/trailing newline-padded runs (pure indentation) disappear.
  // Needed because we wrap text in template literals, which preserve
  // whitespace verbatim instead of collapsing it like plain JSX text does.
  return text
    .replace(/^[ \t]*\n[ \t\n]*/, '')
    .replace(/[ \t\n]*\n[ \t]*$/, '')
    .replace(/[ \t]*\n[ \t]*/g, ' ');
}

function serializeText(text) {
  if (text.trim() === '') return text; // preserve pure whitespace as-is
  return `{${'`'}${escapeTemplateLiteral(normalizeJsxWhitespace(text))}${'`'}}`;
}

function serializeRawText(text) {
  return `{${'`'}${escapeTemplateLiteral(text)}${'`'}}`;
}

function serializeNode(node) {
  if (node.nodeName === '#text') {
    return serializeText(node.value);
  }
  if (node.nodeName === '#comment') {
    const data = node.data || '';
    if (data.includes('*/')) return '';
    return `{/*${data}*/}`;
  }
  if (!node.tagName) return '';

  const tag = node.tagName;
  const attrsStr = serializeAttrs(node.attrs);

  if (VOID_TAGS.has(tag)) {
    return `<${tag}${attrsStr} />`;
  }

  if (RAW_TEXT_TAGS.has(tag)) {
    const rawText = (node.childNodes || []).map(c => c.value || '').join('');
    if (rawText.trim() === '') {
      return `<${tag}${attrsStr}></${tag}>`;
    }
    return `<${tag}${attrsStr}>${serializeRawText(rawText)}</${tag}>`;
  }

  const children = (node.childNodes || []).map(serializeNode).join('');
  return `<${tag}${attrsStr}>${children}</${tag}>`;
}

function serializeChildren(node) {
  return (node.childNodes || []).map(serializeNode).join('');
}

module.exports = { serializeNode, serializeChildren };

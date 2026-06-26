const fs = require('fs');
const path = require('path');
const parse5 = require('parse5');
const { serializeChildren, serializeNode } = require('./jsx-serializer.cjs');

const SRC_HTML = 'C:/Users/yaswa/Downloads/source-code-downloader-result-2026-06-26-1426.html';
const PROJECT_ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'src', 'components');
const STYLES_DIR = path.join(PROJECT_ROOT, 'src', 'styles');

fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
fs.mkdirSync(STYLES_DIR, { recursive: true });

const html = fs.readFileSync(SRC_HTML, 'utf8');
const doc = parse5.parse(html);

function findTag(node, tag) {
  if (node.tagName === tag) return node;
  if (node.childNodes) for (const c of node.childNodes) { const r = findTag(c, tag); if (r) return r; }
  return null;
}
function findByClassToken(node, cls) {
  if (node.attrs) {
    const c = node.attrs.find(a => a.name === 'class');
    if (c && c.value.split(/\s+/).includes(cls)) return node;
  }
  if (node.childNodes) for (const c of node.childNodes) { const r = findByClassToken(c, cls); if (r) return r; }
  return null;
}
function findById(node, id) {
  if (node.attrs) {
    const a = node.attrs.find(a => a.name === 'id');
    if (a && a.value === id) return node;
  }
  if (node.childNodes) for (const c of node.childNodes) { const r = findById(c, id); if (r) return r; }
  return null;
}

const head = findTag(doc, 'head');
const body = findTag(doc, 'body');

// ---------- 1. Extract head <style> blocks into global.css ----------
const headStyles = (head.childNodes || []).filter(n => n.tagName === 'style');
let cssOut = '';
for (const styleNode of headStyles) {
  const text = (styleNode.childNodes || []).map(c => c.value || '').join('');
  cssOut += text + '\n\n';
}
fs.writeFileSync(path.join(STYLES_DIR, 'global.css'), cssOut, 'utf8');
console.log('Wrote global.css, bytes:', cssOut.length);

// ---------- 2. Locate structural anchors ----------
const main1rjwmcz = findByClassToken(body, 'framer-1rjwmcz');
const wrap = findByClassToken(body, 'framer-4gyze');
const navContainer = findByClassToken(body, 'framer-2ahsdz-container');
const footerContainer = findByClassToken(body, 'framer-1nhh2yw-container');

if (!main1rjwmcz || !wrap || !navContainer || !footerContainer) {
  console.error('Structural anchor missing!', { main1rjwmcz: !!main1rjwmcz, wrap: !!wrap, navContainer: !!navContainer, footerContainer: !!footerContainer });
  process.exit(1);
}

const mainChildren = main1rjwmcz.childNodes.filter(n => n.tagName);
const navIdx = mainChildren.indexOf(navContainer);
const wrapIdx = mainChildren.indexOf(wrap);
const footerIdx = mainChildren.indexOf(footerContainer);

// Nodes between nav and wrap (e.g., scoped <style> for nav) -> attach to Header
const headerExtra = mainChildren.slice(navIdx + 1, wrapIdx);
// Nodes between wrap and footer (e.g., scoped <style>, spacer div) -> attach to Footer (rendered before footer markup)
const footerExtra = mainChildren.slice(wrapIdx + 1, footerIdx);

// ---------- 3. Component-scoped in-body <style data-framer-html-style> blocks ----------
// Collect every <style> anywhere in body (these are scoped CSS chunks Framer emits inline) and
// append them to global.css too, in document order, EXCLUDING the head ones already captured.
function collectStyles(node, out) {
  if (node.tagName === 'style') { out.push(node); return; }
  if (node.childNodes) for (const c of node.childNodes) collectStyles(c, out);
}
const bodyStyleNodes = [];
collectStyles(body, bodyStyleNodes);
let bodyCss = '';
for (const s of bodyStyleNodes) {
  const text = (s.childNodes || []).map(c => c.value || '').join('');
  bodyCss += text + '\n\n';
}
fs.appendFileSync(path.join(STYLES_DIR, 'global.css'), bodyCss, 'utf8');
console.log('Appended body-scoped CSS, bytes:', bodyCss.length);

// The nav's inline backgroundColor ships transparent (rgba(255,255,255,0)) in the
// SSR markup; the original site swaps it to solid via a scroll-listener once the
// user scrolls past the hero. We don't ship that runtime, so without this override
// the nav stays permanently transparent and bleeds into whatever scrolls beneath it.
// The logo SVG asset shipped in the SSR markup is the "White" wordmark variant,
// meant for the transparent state over the dark hero photo. The original site
// swaps it for a dark variant once scrolled; that alternate asset isn't present
// anywhere in the static export (Framer only sends it via the client runtime),
// so we recolor the existing white logo to black with a CSS filter instead.
// Scroll-toggled state: transparent + white logo over the hero photo at the
// top of the page, solid cream background + black logo once scrolled past it.
// This is restored below with a real scroll listener (Header.jsx), since the
// original site did this via Framer's own JS runtime, which we don't ship.
// Nav link labels and the mobile hamburger lines are styled white (and the
// active-page link uses the orange brand token) for the transparent state
// over the dark hero photo. Once solid/scrolled, white-on-cream is
// unreadable, so we redefine the underlying CSS custom properties they read
// from — scoped to the scrolled nav only, so nothing elsewhere on the page
// (which legitimately uses the same "white text" token) is affected.
const navOverride = `
nav.framer-7EmCy.is-scrolled {
  background-color: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, #f5f1e5) !important;
  --token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2: rgb(0, 0, 0);
  --variable-reference-fgn0epMCb-c0gKo6pCr: rgb(0, 0, 0);
}

nav.framer-7EmCy.is-scrolled .framer-A06nM {
  filter: brightness(0);
}
`;
fs.appendFileSync(path.join(STYLES_DIR, 'global.css'), navOverride, 'utf8');
console.log('Appended nav scroll-state override');

// Hero background slow zoom-in (Ken Burns) + generic scroll-reveal animation
// used by the Reveal wrapper component (src/components/Reveal.jsx).
const animationOverride = `
@keyframes heroZoomIn {
  from { transform: scale(1); }
  to { transform: scale(1.12); }
}

.hero-zoom-bg {
  animation: heroZoomIn 18s ease-out forwards;
}

.reveal {
  opacity: 0;
  transform: translateY(48px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
`;
fs.appendFileSync(path.join(STYLES_DIR, 'global.css'), animationOverride, 'utf8');
console.log('Appended hero-zoom + reveal animation CSS');

// ---------- 4. Write a JSX component file for a given DOM node (or array of nodes) ----------
function writeComponent(name, nodes) {
  const list = Array.isArray(nodes) ? nodes : [nodes];
  const inner = list.map(serializeNode).join('\n      ');
  const code = `export default function ${name}() {
  return (
    <>
      ${inner}
    </>
  );
}
`;
  fs.writeFileSync(path.join(COMPONENTS_DIR, `${name}.jsx`), code, 'utf8');
  console.log('Wrote component', name, 'size', code.length);
}

// ---------- 5. Header (with a scroll listener restoring transparent->solid nav transition) ----------
function writeHeaderComponent(name, nodes) {
  const list = Array.isArray(nodes) ? nodes : [nodes];
  let inner = list.map(serializeNode).join('\n      ');
  // Append the `is-scrolled` class to each <nav> variant's className based on scroll state.
  inner = inner.replace(/<nav className="(framer-7EmCy[^"]*)"/g, '<nav className={`$1${scrolled ? \' is-scrolled\' : \'\'}`}');
  const code = `import { useEffect, useState } from 'react';

export default function ${name}() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      ${inner}
    </>
  );
}
`;
  fs.writeFileSync(path.join(COMPONENTS_DIR, `${name}.jsx`), code, 'utf8');
  console.log('Wrote component', name, 'size', code.length);
}

writeHeaderComponent('Header', [navContainer, ...headerExtra]);

// ---------- 6. Footer ----------
writeComponent('Footer', [...footerExtra, footerContainer]);

// ---------- 7. Main content sections, grouped by leading named <section> ----------
const wrapChildren = wrap.childNodes.filter(n => n.tagName);
const SECTION_NAMES = ['Hero', 'About', 'Projects', 'Why', 'Achievement', 'Testimonials', 'Blog'];
const groups = []; // { name, nodes: [] }
for (const child of wrapChildren) {
  const dfn = (child.attrs || []).find(a => a.name === 'data-framer-name');
  if (child.tagName === 'section' && dfn && SECTION_NAMES.includes(dfn.value)) {
    groups.push({ name: dfn.value, nodes: [child] });
  } else if (groups.length > 0) {
    groups[groups.length - 1].nodes.push(child);
  } else {
    console.warn('Orphan node before first named section:', child.tagName);
  }
}
for (const g of groups) {
  writeComponent(g.name, g.nodes);
}
console.log('Section groups:', groups.map(g => `${g.name}(${g.nodes.length})`).join(', '));

// ---------- 8. Framer chrome (badge, overlay template, svg-templates, #overlay, #template-overlay) ----------
const overlayDiv = findById(body, 'overlay');
const templateOverlay = findById(body, 'template-overlay');
const badgeContainer = findById(body, '__framer-badge-container');
const svgTemplates = findById(body, 'svg-templates');

const chromeNodes = [overlayDiv, templateOverlay, badgeContainer, svgTemplates].filter(Boolean);
writeComponent('FramerChrome', chromeNodes);

// ---------- 9. Extract top-level <script> tags from <body> (for index.html injection) ----------
function collectScripts(node, out, skip) {
  if (skip && skip.has(node)) return;
  if (node.tagName === 'script') { out.push(node); return; }
  if (node.childNodes) for (const c of node.childNodes) collectScripts(c, out, skip);
}
const allScripts = [];
collectScripts(body, allScripts);
let scriptsOut = '';
for (const s of allScripts) {
  const srcAttr = (s.attrs || []).find(a => a.name === 'src');
  const typeAttr = (s.attrs || []).find(a => a.name === 'type');
  const idAttr = (s.attrs || []).find(a => a.name === 'id');
  const asyncAttr = (s.attrs || []).find(a => a.name === 'async');
  const text = (s.childNodes || []).map(c => c.value || '').join('');
  const attrParts = [];
  if (srcAttr) attrParts.push(`src="${srcAttr.value}"`);
  if (typeAttr) attrParts.push(`type="${typeAttr.value}"`);
  if (idAttr) attrParts.push(`id="${idAttr.value}"`);
  if (asyncAttr) attrParts.push(`async`);
  scriptsOut += `<script${attrParts.length ? ' ' + attrParts.join(' ') : ''}>${text}</script>\n`;
}
fs.writeFileSync(path.join(PROJECT_ROOT, 'scripts', 'extracted-scripts.html'), scriptsOut, 'utf8');
console.log('Wrote extracted-scripts.html, scripts found:', allScripts.length);

console.log('DONE');

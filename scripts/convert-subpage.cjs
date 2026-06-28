// Converts a secondary Framer-exported page (about/service/project.html) into
// a React page component. Unlike the home page, nav/footer are NOT
// re-extracted here — Header.jsx/Footer.jsx are already shared, router-aware
// components reused across every route. Only the page's own main-content wrap
// div is extracted, and crucially we keep ITS OWN unique Framer root classes
// (e.g. "framer-rxrBM framer-qP3pu framer-4gyze ...") baked into the component
// itself, since each Framer page has a different auto-generated root class
// that its page-specific CSS is scoped under. Hardcoding the home page's
// root classes for every route (the previous approach) silently broke any
// CSS rule scoped like ".framer-rxrBM .some-class { ... }".
const fs = require('fs');
const path = require('path');
const parse5 = require('parse5');
const { serializeNode } = require('./jsx-serializer.cjs');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(PROJECT_ROOT, 'src', 'pages');
const STYLES_DIR = path.join(PROJECT_ROOT, 'src', 'styles');
fs.mkdirSync(PAGES_DIR, { recursive: true });

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

const PAGES = [
  { html: 'about.html', component: 'AboutPage' },
  { html: 'service.html', component: 'ServicePage' },
  { html: 'project.html', component: 'ProjectPage' },
];

let cssAccum = '';

for (const { html: htmlFile, component } of PAGES) {
  const html = fs.readFileSync(path.join(PROJECT_ROOT, 'pageshtml', htmlFile), 'utf8');
  const doc = parse5.parse(html);
  const head = findTag(doc, 'head');
  const body = findTag(doc, 'body');

  // Page-specific <style> blocks (head + any body-scoped ones), appended to
  // global.css. Some overlap with what's already there from the home page
  // (shared design-system rules) is expected and harmless — duplicate
  // identical rules don't change rendering, just add a little file size.
  const headStyles = (head.childNodes || []).filter(n => n.tagName === 'style');
  for (const s of headStyles) {
    cssAccum += (s.childNodes || []).map(c => c.value || '').join('') + '\n\n';
  }
  function collectBodyStyles(node, out) {
    if (node.tagName === 'style') { out.push(node); return; }
    if (node.childNodes) for (const c of node.childNodes) collectBodyStyles(c, out);
  }
  const bodyStyleNodes = [];
  collectBodyStyles(body, bodyStyleNodes);
  for (const s of bodyStyleNodes) {
    cssAccum += (s.childNodes || []).map(c => c.value || '').join('') + '\n\n';
  }

  // The main content wrap div — keep it whole (incl. its own root classes).
  const wrap = findByClassToken(body, 'framer-4gyze');
  if (!wrap) {
    console.error(htmlFile, '-> could not find framer-4gyze wrap div');
    process.exit(1);
  }

  const inner = serializeNode(wrap);
  const code = `export default function ${component}() {
  return (
    <>
      ${inner}
    </>
  );
}
`;
  fs.writeFileSync(path.join(PAGES_DIR, `${component}.jsx`), code, 'utf8');
  console.log('Wrote', component, 'size', code.length);
}

fs.appendFileSync(path.join(STYLES_DIR, 'global.css'), '\n/* --- sub-page CSS (about/service/project) --- */\n' + cssAccum, 'utf8');
console.log('Appended sub-page CSS, bytes:', cssAccum.length);
console.log('DONE');

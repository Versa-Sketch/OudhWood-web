// Converts a standalone Framer-exported page (about.html / service.html /
// project.html) into a content-only React component. Unlike convert.cjs
// (which builds the whole Home page including Header/Footer/nav), this only
// extracts the page's unique data-framer-root content — the new page reuses
// the SAME <Header/>/<Footer/> components already built for Home, so nav and
// footer chrome here are discarded.
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
function findByAttr(node, name) {
  if (node.attrs && node.attrs.find(a => a.name === name)) return node;
  if (node.childNodes) for (const c of node.childNodes) { const r = findByAttr(c, name); if (r) return r; }
  return null;
}

function convertPage(htmlFile, componentName) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const doc = parse5.parse(html);
  const head = findTag(doc, 'head');
  const body = findTag(doc, 'body');
  const root = findByAttr(body, 'data-framer-root');
  if (!root) throw new Error('data-framer-root not found in ' + htmlFile);

  // Page-specific CSS: head <style> blocks (Framer bundles this page's own
  // component CSS together with the shared global rules in here).
  const headStyles = (head.childNodes || []).filter(n => n.tagName === 'style');
  let css = '';
  for (const s of headStyles) {
    css += (s.childNodes || []).map(c => c.value || '').join('') + '\n\n';
  }
  fs.appendFileSync(path.join(STYLES_DIR, 'global.css'), css, 'utf8');

  const inner = root.childNodes.map(serializeNode).join('\n      ');
  const code = `export default function ${componentName}() {
  return (
    <>
      ${inner}
    </>
  );
}
`;
  fs.writeFileSync(path.join(PAGES_DIR, `${componentName}.jsx`), code, 'utf8');
  console.log('Wrote', componentName, 'size', code.length, '| css appended', css.length, 'bytes');
}

convertPage(path.join(PROJECT_ROOT, 'pageshtml', 'about.html'), 'AboutPage');
convertPage(path.join(PROJECT_ROOT, 'pageshtml', 'service.html'), 'ServicePage');
convertPage(path.join(PROJECT_ROOT, 'pageshtml', 'project.html'), 'ProjectPage');
console.log('DONE');

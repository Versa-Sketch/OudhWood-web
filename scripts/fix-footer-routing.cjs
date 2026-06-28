const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'components', 'Footer.jsx');
let c = fs.readFileSync(file, 'utf8');

function rep(oldStr, newStr, expectedCount) {
  const count = c.split(oldStr).length - 1;
  if (expectedCount !== undefined && count !== expectedCount) {
    console.warn(`WARNING: expected ${expectedCount}, found ${count}: ${oldStr.slice(0, 60)}`);
  }
  if (count === 0) { console.warn('MISSING:', oldStr.slice(0, 60)); return; }
  c = c.split(oldStr).join(newStr);
}

rep('href="./about"', 'to="/about"', 3);
rep('href="./service"', 'to="/service"', 3);
rep('href="./project"', 'to="/project"', 3);
rep('href="./"', 'to="/"', 6); // logo x3 + Home quick-link x3

function convertAnchorToLink(toValue, expectedCount) {
  const re = new RegExp(`<a([^>]*?)to="${toValue.replace(/\//g, '\\/')}"([^>]*?)>([\\s\\S]*?)<\\/a>`, 'g');
  let n = 0;
  c = c.replace(re, (whole, before, after, inner) => {
    n++;
    return `<Link${before}to="${toValue}"${after}>${inner}</Link>`;
  });
  if (expectedCount !== undefined && n !== expectedCount) {
    console.warn(`WARNING: convertAnchorToLink(${toValue}) expected ${expectedCount}, converted ${n}`);
  }
}
convertAnchorToLink('/', 6);
convertAnchorToLink('/about', 3);
convertAnchorToLink('/service', 3);
convertAnchorToLink('/project', 3);

fs.writeFileSync(file, c, 'utf8');
console.log('Footer.jsx nav routing fixed');

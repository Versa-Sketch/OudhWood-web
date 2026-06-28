const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'components', 'Header.jsx');
let c = fs.readFileSync(file, 'utf8');

function rep(oldStr, newStr, expectedCount) {
  const count = c.split(oldStr).length - 1;
  if (expectedCount !== undefined && count !== expectedCount) {
    console.warn(`WARNING: expected ${expectedCount} occurrences, found ${count}: ${oldStr.slice(0, 60)}`);
  }
  if (count === 0) { console.warn('MISSING:', oldStr.slice(0, 60)); return; }
  c = c.split(oldStr).join(newStr);
}

// 1. Fix wrong anchor hrefs left over from the interrupted session: Services
// and Projects should point to their real dedicated pages, not in-page anchors.
rep('href="#how-it-works"', 'to="/service"', 2);
rep('href="#projects"', 'to="/project"', 2);
rep('href="/about"', 'to="/about"', 2);
rep('href="#"', 'to="/"', 2); // Home nav item
rep('href="./"', 'to="/"', 3); // logo link x3 (Desktop/Tablet/Phone)

// 2. Normalize Home's hardcoded "always orange" color refs to use the same
// shared CSS variable indirection the other nav items use, so its active
// color can be toggled by activePage instead of being permanently orange
// (which was wrong on /about, /service, /project).
rep(
  '"--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))"',
  '"--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)"',
  6
);
rep(
  '"--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))"',
  '"--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))"',
  6
);

// 3. Convert <a> -> <Link> for the 4 routable nav items + 3 logo instances.
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
convertAnchorToLink('/'); // Home nav item (2x) + logo (3x) = 5
convertAnchorToLink('/about', 2);
convertAnchorToLink('/service', 2);
convertAnchorToLink('/project', 2);

// 4. Give the 4 routable nav items a dynamic className that adds
// 'nav-link-active' when `activePage` matches, so the active page's link is
// highlighted correctly instead of "Home" always being hardcoded active.
const KEY_BY_NAME = { Home: 'home', About: 'about', Services: 'service', Projects: 'project' };
c = c.replace(/name="(Home|About|Services|Projects)" className="([^"]*)"/g, (whole, name, staticClass) => {
  const key = KEY_BY_NAME[name];
  return `name="${name}" className={\`${staticClass}\${activePage === '${key}' ? ' nav-link-active' : ''}\`}`;
});

fs.writeFileSync(file, c, 'utf8');
console.log('Header.jsx nav routing fixed');

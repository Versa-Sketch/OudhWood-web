const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'src', 'components', 'Projects.jsx');
let c = fs.readFileSync(p, 'utf8');

function rep(oldStr, newStr, all) {
  const count = c.split(oldStr).length - 1;
  if (count === 0) { console.warn('MISSING:', oldStr.slice(0, 70)); return; }
  if (all) c = c.split(oldStr).join(newStr);
  else c = c.replace(oldStr, newStr);
}

rep('{`Our Projects`}', '{`Active Plantation Sites`}', false);
rep('{`Transforming ideas into exceptional architectural landmarks`}', '{`A growing portfolio of managed Agarwood plantation sites`}', false);
rep('{`Explore selected residential, commercial, and architectural projects crafted with modern design, precision, and lasting quality.`}',
    '{`Our projects span sites across Assam and Tripura — every farmer partnership supported by surveying, professional inoculation, monitoring, and full traceability from tagging to settlement.`}', false);
rep('{`VIew Project`}', '{`View Site`}', true);
rep('{`“Architecture is not only about building spaces, but about creating experiences that inspire people and endure for generations. At Cerette, every project is designed with purpose, precision, and timeless craftsmanship.”`}',
    "{`“We don't see farmers as suppliers or investors as outsiders. We see partners. One proven model. Fair to farmers. Credible for investors. Built to scale across India.”`}", true);
rep('{`Adrian Varell`}', '{`Mrida Infra LLP`}', true);
rep('{`Founder & CEO, Cerette`}', '{`The Mrida Team`}', true);
rep('{`Our Services`}', '{`Our Process`}', true);
rep('{`Complete architecture and construction solutions for modern projects`}', '{`Five steps from survey to settlement`}', true);
rep('{`Cerette delivers innovative design, strategic planning, and high-quality construction services tailored for residential and commercial developments.`}',
    '{`Every Mrida partnership runs through the same clear, fair workflow — from your first site survey to the moment harvest proceeds are settled.`}', true);
rep('{`Architecture`}', '{`Survey`}', true);
rep('{`Construction`}', '{`Split & Agree`}', true);
rep('{`Interior`}', '{`Inoculate`}', true);
rep('{`Planning`}', '{`Monitor`}', true);
rep('{`Renovation`}', '{`Harvest & Settle`}', true);
rep('{`Landscape`}', '{`Full Traceability`}', true);
rep('{`Innovative architectural design solutions that combine creativity, functionality, and modern aesthetics to create spaces with long-term value and identity.`}',
    '{`Mrida visits your site, assesses your mature Agarwood trees, and tags every eligible tree for the record — at no cost to you.`}', true);

fs.writeFileSync(p, c, 'utf8');
console.log('Projects.jsx text migration done');

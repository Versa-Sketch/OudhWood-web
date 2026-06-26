const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '..', 'src', 'components');

// Map: old Framer image base-id -> new Unsplash photo id
// Each entry is scoped to the file(s) listed; same old id can map to a
// different new id in a different file (avoids cross-section duplicates
// while still treating same-id-repeated-within-one-file as one logical slot
// (responsive Desktop/Tablet/Phone variants of the same photo).
const PLAN = [
  { file: 'About.jsx', oldId: 'I0cnjDWb4oGWpeDaPsD4qiY6cQY', newId: '1680614038587-9de698612c78' },
  { file: 'Why.jsx', oldId: 'FggfPpdPuqaGqBwjp2BPR4YUAvI', newId: '1766025066682-0d330ffc9e7a' },
  { file: 'Why.jsx', oldId: 'SGwLaeqOj7Ptpc2RXAiTg8KOlmA', newId: '1781622196320-24a458a02660' },
  { file: 'Achievement.jsx', oldId: 'wJ6MdEOXcAhV9acUpRaqC4ZFRM', newId: '1519606247872-0440aae9b827' },
  { file: 'Achievement.jsx', oldId: 'rEDxSJKs9cUh2hgqSLhnTfuPqHM', newId: '1631322342429-5897e52b0f64' },
  { file: 'Achievement.jsx', oldId: '0Qi49okaL1XIuXJIZLs09dOVBk', newId: '1773165896916-e13ff8e0f801' },
  { file: 'Testimonials.jsx', oldId: '5KHxGbMn1k2q3xmOW9ds5ty3axc', newId: '1782192496614-d2e98e5f96e0' },
  { file: 'Testimonials.jsx', oldId: 'JnABGSV0pSjtkvOYn2bfK8UnEU', newId: '1527873722743-67759f0854aa' },
  { file: 'Testimonials.jsx', oldId: 'yPvzv2fkSTODpjKl8lh0KWknX9o', newId: '1758343660101-10ee4fa1ca68' },
  { file: 'Testimonials.jsx', oldId: 'XPnODoeIaZsubOMouu2T7G7jY1U', newId: '1647804134576-7229cbeaf443' },
  { file: 'Testimonials.jsx', oldId: 'njKbw51Yb3eunr6RXK71RMhR5Tw', newId: '1517200578024-62d131797ec8' },
  { file: 'Testimonials.jsx', oldId: 'WlctXPMSzbekszNCwLGRBubipI', newId: '1541187001234-c02113b648d4' },
  { file: 'Projects.jsx', oldId: 'hN1AydOsZSuTV1f6s06Brri8', newId: '1605000797499-95a51c5269ae' },
  { file: 'Projects.jsx', oldId: '8XsoVEAERb5PuQTguncli0zzyFE', newId: '1419833173245-f59e1b93f9ee' },
  { file: 'Projects.jsx', oldId: '7D0tOWdSg84UAdUiJHhvMGfONDQ', newId: '1763229759060-50db1e4bf9ad' },
  { file: 'Projects.jsx', oldId: 'KrOiqTpjPhTqTh5NHMDHt4SiPw', newId: '1730086144061-769be13b08e5' },
  { file: 'Projects.jsx', oldId: 'tIVUg6S0Z296VOdjuXej9G2tNA', newId: '1765053257298-a56a929afeec' },
  { file: 'Projects.jsx', oldId: 'nsgUp04wvHumuHCaIYaWpwzg0', newId: '1730086146417-7c7524fc95c8' },
  { file: 'Projects.jsx', oldId: 'iI1VALvuBwZvh5yoJz2hZxPeprs', newId: '1500382017468-9049fed747ef' },
  { file: 'Projects.jsx', oldId: 'wN6xya66hvNEKqDUQC90F970o', newId: '1700592478407-3981353caecb' },
  { file: 'Projects.jsx', oldId: 'gpObS3onkapaBu1GuAVtQ6zp4', newId: '1668349009173-237d80cb8e22' },
  { file: 'Blog.jsx', oldId: 'mHXkmW0Jfupllqyy8XPFTDe0k', newId: '1742544686146-413ae28f0e05' },
  { file: 'Blog.jsx', oldId: 'gpObS3onkapaBu1GuAVtQ6zp4', newId: '1636686775076-f0f393323876' },
  { file: 'Blog.jsx', oldId: 'bSQ1UciLKs4a6y4oSUz99A', newId: '1761839259494-71caddcdd6b3' },
];

const FOOTER_BG_REPLACEMENT = null; // Footer has no content <img>, only logo (kept).

function buildSrcset(newId, width, height) {
  const widths = [512, 1024, 2048, 4096].filter(w => w <= width * 2);
  if (!widths.includes(width) && width < 4096) widths.push(width);
  const sorted = [...new Set(widths)].sort((a, b) => a - b);
  return sorted
    .map(w => `https://images.unsplash.com/photo-${newId}?w=${w}&h=${Math.round((height / width) * w)}&fit=crop&q=80&auto=format ${w}w`)
    .join(',');
}

function buildSrc(newId, width, height) {
  return `https://images.unsplash.com/photo-${newId}?w=${width}&h=${height}&fit=crop&q=80&auto=format`;
}

for (const file of [...new Set(PLAN.map(p => p.file))]) {
  const filePath = path.join(COMPONENTS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const entries = PLAN.filter(p => p.file === file);
  let totalReplacements = 0;

  for (const { oldId, newId } of entries) {
    // Match the whole <img ...> tag whose src/srcset reference this oldId.
    const imgTagRe = new RegExp(`<img([^>]*?)src="https://framerusercontent\\.com/images/${oldId}[^"]*"([^>]*?)/>`, 'g');
    content = content.replace(imgTagRe, (whole, beforeSrc, afterSrc) => {
      totalReplacements++;
      const widthMatch = whole.match(/width="(\d+)"/);
      const heightMatch = whole.match(/height="(\d+)"/);
      const width = widthMatch ? parseInt(widthMatch[1], 10) : 1920;
      const height = heightMatch ? parseInt(heightMatch[1], 10) : 1080;

      let tag = whole;
      tag = tag.replace(/srcset="[^"]*"/, `srcset="${buildSrcset(newId, width, height)}"`);
      tag = tag.replace(/src="https:\/\/framerusercontent\.com\/images\/[^"]*"/, `src="${buildSrc(newId, width, height)}"`);
      return tag;
    });
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(file, '-> replaced', totalReplacements, 'img tags');
}

console.log('DONE');

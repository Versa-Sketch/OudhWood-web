// Re-applies the full Mrida content migration on top of freshly-regenerated
// (Cerette-original) component files. Needed because convert.cjs regenerates
// components from the original source HTML and has no knowledge of later
// hand-edits — running it wipes prior content/image work, which is what
// happened here. This script replays that work programmatically.
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'src', 'components');

function apply(file, replacements) {
  const p = path.join(DIR, file);
  let c = fs.readFileSync(p, 'utf8');
  for (const [oldStr, newStr, all] of replacements) {
    if (all) {
      const count = c.split(oldStr).length - 1;
      if (count === 0) { console.warn(`[${file}] MISSING (replaceAll): ${oldStr.slice(0, 60)}`); continue; }
      c = c.split(oldStr).join(newStr);
    } else {
      if (!c.includes(oldStr)) { console.warn(`[${file}] MISSING: ${oldStr.slice(0, 60)}`); continue; }
      c = c.replace(oldStr, newStr);
    }
  }
  fs.writeFileSync(p, c, 'utf8');
  console.log('Updated', file);
}

// ---------- Header.jsx ----------
apply('Header.jsx', [
  ['{`Services`}', '{`How It Works`}', true],
  ['{`About`}', '{`About Us`}', true],
  [`{\`Let's talk\`}`, '{`Partner With Us`}', true],
]);

// ---------- Hero.jsx ----------
apply('Hero.jsx', [
  ['{`Welcome Cerette`}', '{`Welcome to Mrida`}', false],
  ['{`Innovative architecture and construction solutions crafted with precision and purpose.`}',
   '{`Mrida links farmers and Agarwood Plantations in a transparent, profitable partnership — built to pay you first.`}', false],
  ['{`Building timeless architecture and modern spaces for future living`}',
   `{\`India's most transparent Agarwood farming partnership — built to pay you first\`}`, false],
  ['{`Book a call`}', '{`Partner With Us`}', true],
  ['{`Our Services`}', '{`Talk to Our Team`}', true],
  ['poster="https://framerusercontent.com/images/YpOIVICheuHpK0YSFDaiplJk.png?width=1920&height=1080"',
   'poster="https://images.unsplash.com/photo-1683858222142-e5596d680fe3?w=2400&h=1350&fit=crop&q=90&auto=format"', false],
]);

// ---------- About.jsx ----------
apply('About.jsx', [
  ['{`About us`}', '{`About Mrida`}', false],
  ['{`275`}', '{`20`}', false],
  ['<h5 className="framer-text framer-styles-preset-p4dtye" data-styles-preset="jU7110XJJ" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`+`}</h5>\n                    </div>\n                  </div>\n                  <div className="framer-gii23q"',
   '<h5 className="framer-text framer-styles-preset-p4dtye" data-styles-preset="jU7110XJJ" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`%`}</h5>\n                    </div>\n                  </div>\n                  <div className="framer-gii23q"', false],
  ['{`Projects Completed`}', '{`Upfront Tree Payment`}', false],
  ['{`18`}', '{`5`}', false],
  ['{`Years Experience`}', '{`Year Partnership Horizon`}', false],
  ['{`98`}', '{`100`}', false],
  ['{`Client Satisfaction`}', '{`Tree Traceability`}', false],
  ['{`Designing spaces that balance vision, function, and lasting value`}',
   '{`Building Agarwood farmer partnerships across India`}', false],
  ['{`Cerette delivers modern architecture and construction solutions focused on quality, innovation, and timeless design for residential and commercial projects.`}',
   `{\`We unlock the value of India's most extraordinary tree by partnering with farmers and landowners through a fair, transparent, and structured Agarwood farming partnership.\`}`, false],
  ['{`Architectural Excellence`}', '{`Upfront Payment, Real Income`}', false],
  ['{`Thoughtfully designed spaces built with precision, creativity, and functionality.`}',
   '{`Farmers earn from day one, not just at a distant harvest — on a minimum of 20% of your mature Agarwood trees.`}', false],
  ['{`End-to-End Construction`}', '{`Zero Inoculation Cost`}', false],
  ['{`From planning to execution, every stage is managed with detail and efficiency.`}',
   '{`We fund and manage inoculation and monitoring on shared trees entirely at our own expense.`}', false],
  ['{`Sustainable Approach`}', '{`Full Traceability`}', false],
  ['{`Smart building solutions designed for long-term performance and environmental impact.`}',
   '{`Unique Site and Tree Numbers mean every figure is accountable and every tree is trackable.`}', false],
  ['{`More about us`}', '{`Partner With Us`}', true],
  ['{`Our works`}', '{`Talk to Our Team`}', true],
]);

// ---------- Why.jsx ----------
apply('Why.jsx', [
  ['{`Why Cerette`}', '{`Why Mrida`}', false],
  ['{`Built with precision, designed for lasting impact`}', '{`What sets Mrida apart`}', false],
  ['{`Cerette combines modern architecture, technical expertise, and quality construction to deliver spaces that are functional, timeless, and built around your vision.`}',
   `{\`Plenty of operations talk about Agarwood. Here's what makes our approach genuinely different.\`}`, false],
  ['{`Innovative Design`}', '{`Guaranteed Upfront Payment`}', false],
  ['{`Creative architectural concepts developed to match modern lifestyles, business needs, and future growth.`}',
   '{`On a minimum of 20% of your mature Agarwood trees — paid before harvest, not after.`}', false],
  ['{`Quality Construction`}', '{`Zero Inoculation Cost`}', false],
  ['{`Professional construction standards focused on precision, durability, and exceptional craftsmanship.`}',
   '{`Your trees, professionally managed — we fund and run inoculation entirely at our own expense.`}', false],
  ['{`Expert Collaboration`}', '{`Land Stays With the Farmer`}', false],
  ['{`Experienced architects, designers, and project specialists working together through every project phase.`}',
   `{\`Only the minimum 20% of purchased trees transfer to us — the rest stay in the farmer's name.\`}`, false],
  ['{`Transparent Process`}', '{`End-to-End Management`}', false],
  ['{`Clear communication, organized timelines, and efficient project management from start to completion.`}',
   '{`We handle survey, tagging, inoculation, monitoring, harvesting, grading, and sale through our buyer network.`}', false],
  ['{`Sustainable Thinking`}', '{`Full Traceability`}', false],
  ['{`Environmentally conscious solutions integrated into architecture, materials, and construction processes.`}',
   '{`Unique Site and Tree Numbers mean every figure is accountable and every tree is trackable.`}', false],
  ['{`Complete Solutions`}', '{`Signed Agreements, No Surprises`}', false],
  ['{`Integrated architecture and construction services delivered under one streamlined workflow.`}',
   '{`All terms are confirmed in writing before any work begins.`}', false],
  ['{`Let’s create architecture that inspires and endures`}', '{`Ready when you are`}', true],
  ['{`Partner with Cerette to transform your vision into thoughtfully designed spaces built with precision, innovation, and lasting quality.`}',
   `{\`One message starts everything. Tell us about your mature Agarwood trees or your investment goals, and let's build a partnership worth growing.\`}`, true],
  ['{`Schedule Consultation`}', '{`Partner With Us`}', true],
]);

// ---------- Achievement.jsx ----------
apply('Achievement.jsx', [
  ['{`320K`}', '{`50`}', false],
  ['<h5 className="framer-text framer-styles-preset-p4dtye" data-styles-preset="jU7110XJJ" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`+`}</h5>\n                  </div>\n                </div>\n                <div className="framer-sid2p0"',
   '<h5 className="framer-text framer-styles-preset-p4dtye" data-styles-preset="jU7110XJJ" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`B+`}</h5>\n                  </div>\n                </div>\n                <div className="framer-sid2p0"', false],
  ['{`Area Developed`}', '{`Global Market by 2035`}', false],
  ['{`95`}', '{`45`}', false],
  ['{`On-Time Delivery`}', '{`Fragrance & Perfumery Share`}', false],
  ['{`40`}', '{`5`}', false],
  ['{`Industry Experts`}', '{`Year Investment Horizon`}', false],
  ['{`12`}', '{`20`}', false],
  ['{`y`}', '{`%`}', false],
  ['{`Years Guaranteed`}', '{`Guaranteed Upfront Payment`}', false],
  ['{`Our Achievements`}', '{`Risk & Mitigation`}', true],
  ['{`Award`}', '{`Risk`}', true],
  ['{`Description`}', '{`How We Mitigate It`}', true],
  ['{`Global Design Award`}', '{`Long Maturity Timeline`}', true],
  ['{`Architecture`}', '{`Timeline`}', true],
  ['{`Recognized for innovative residential architecture and modern spatial design excellence.`}',
   '{`A long-term (5+ year) model with upfront farmer payments keeps partnerships stable and supply dependable through the full cycle.`}', true],
  ['{`Urban Vision Honor`}', '{`Inoculation & Yield Variability`}', true],
  ['{`Development`}', '{`Yield`}', true],
  ['{`Awarded for outstanding contribution to sustainable urban development projects.`}',
   '{`Proven inoculation methods, professional monitoring, and tree-by-tree tracking support consistent, reliable resin development.`}', true],
  ['{`Interior Concept Award`}', '{`Supply Reliability`}', true],
  ['{`Interior`}', '{`Supply`}', true],
  ['{`Celebrated for refined interior architecture and contemporary design innovation.`}',
   '{`Fair farmer partnerships and signed agreements secure dependable, long-term access to mature Agarwood trees.`}', true],
  ['{`Excellence Build Award`}', '{`Transparency & Accounting`}', true],
  ['{`Construction`}', '{`Accounting`}', true],
  ['{`Honored for exceptional construction quality, project execution, and craftsmanship.`}',
   '{`Unique Site and Tree Numbers deliver full traceability from tagging through to final settlement.`}', true],
  ['{`Modern Space Recognition`}', '{`Market & Price Movement`}', true],
  ['{`Commercial`}', '{`Market`}', true],
  ['{`Recognized for creating functional and visually impactful commercial environments.`}',
   '{`Demand diversified across fragrance, wellness, incense, and medicine — supported by multiple global buyer markets.`}', true],
  ['{`Sustainable Future Award`}', '{`Compliance`}', true],
  ['{`Sustainability`}', '{`Compliance`}', true],
  ['{`Awarded for environmentally conscious architecture and efficient building solutions.`}',
   '{`Farmers secure required permissions; all commercial terms are documented and confirmed before any work begins.`}', true],
  ['{`2025`}', '{`Mitigated`}', true],
  ['{`2024`}', '{`Mitigated`}', true],
  ['{`2023`}', '{`Mitigated`}', true],
  ['{`2022`}', '{`Mitigated`}', true],
]);

// ---------- Testimonials.jsx ----------
apply('Testimonials.jsx', [
  ['{`Client Experiences`}', '{`Why Partners Choose Mrida`}', true],
  ['{`Trusted by clients who value exceptional design`}', '{`Built on signed agreements, fair terms, and full traceability`}', true],
  ['{`“The interior design exceeded everything we imagined. Every material, layout decision, and finishing detail felt intentional, refined, and perfectly aligned with our vision for the space.”`}',
   `{\`“Signed agreements, no surprises — all prices, sharing ratios, and responsibilities are confirmed in writing before any work begins. What's agreed is what happens.”\`}`, true],
  ['{`Olivia Bennett`}', '{`Transparency`}', true],
  ['{`Interior Client • 2025`}', '{`For Farmers & Investors`}', true],
  ['{`“Cerette delivered our commercial project with outstanding professionalism and attention to detail. Their ability to manage timelines, construction quality, and design consistency made the entire process smooth and efficient.”`}',
   '{`“We don\'t see farmers as suppliers or investors as outsiders. We see partners. A fair farmer partnership secures reliable supply and strengthens the long-term sustainability of everything we build.”`}', true],
  ['{`Daniel Carter`}', '{`Partnership`}', true],
  ['{`Commercial Client • 2024`}', '{`About Mrida`}', true],
  ['{`“Working with Cerette was an incredible experience from concept to completion. The team understood exactly how to balance modern aesthetics with practical living, creating a home that feels both luxurious and welcoming.”`}',
   '{`“Scarcity supports pricing — limited natural supply against rising demand creates structural support for value over time.”`}', true],
  ['{`Amanda Lewis`}', '{`Why It Works for Investors`}', true],
  ['{`Residential Client • 2025`}', '{`For Investors`}', true],
  ['{`“What impressed us most was their collaborative approach and technical expertise. Cerette created a development project that feels modern, functional, and designed for long-term value.”`}',
   '{`“Every Site Number and Tree Number is tracked through inoculation, inspection, harvest, and settlement. Accounting is always clear.”`}', true],
  ['{`Michael Turner`}', '{`Full Traceability`}', true],
  ['{`Development Client • 2023`}', '{`Why Partners Choose Mrida`}', true],
  ['{`“The team brought creativity, structure, and innovative thinking into every stage of the project. The final result reflects a strong architectural identity while remaining highly functional for our business operations.”`}',
   "{`“We respect your time and keep our response process straightforward — within 1 business day we'll acknowledge your inquiry and confirm it's been received.”`}", true],
  ['{`Sophia Miller`}', '{`Responsive Support`}', true],
  ['{`Corporate Client • 2024`}', '{`Contact Mrida`}', true],
  ['{`“Cerette managed every phase with transparency and precision. From early planning discussions to final construction delivery, the communication and craftsmanship remained exceptional throughout the entire project.”`}',
   '{`“No hidden terms — no surprise deductions, no shifting goalposts. The model is transparent by design.”`}', true],
  ['{`Ethan Walker`}', '{`No Hidden Terms`}', true],
  ['{`Private Client • 2022`}', '{`Why Partners Choose Mrida`}', true],
  ['{`4.9`}', '{`—`}', true],
  ['{`4.8`}', '{`—`}', true],
]);

// ---------- Blog.jsx ----------
apply('Blog.jsx', [
  ['{`Latest Insights`}', '{`The Mrida Agarwood Journal`}', false],
  ['{`Exploring ideas, trends, and perspectives in modern architecture`}', '{`Honest, practical insight on what your Agarwood trees are worth`}', false],
  ['{`Discover insights on architecture, construction, interior design, sustainable development, and modern living through curated articles, industry perspectives, and creative inspiration.`}',
   '{`For farmers and investors who want to understand what their trees are worth, and an inside look at the world of Agarwood, clearly, so you can invest with confidence.`}', false],
  ['{`Interior`}', '{`For Farmers`}', false],
  ['{`Creating timeless interiors for modern lifestyles`}', '{`What Is Agarwood Inoculation? And Why Does It Matter for Your Trees`}', false],
  ['{`Discover how balanced layouts, refined materials, and minimalist aesthetics create interior spaces that feel modern, functional, and timeless.`}',
   '{`Honest, practical insight — for farmers and investors who want to understand what their trees are worth and how professional inoculation transforms a standard mature tree into a high-value commodity.`}', false],
  ['{`Architecture`}', '{`For Investors`}', false],
  ['{`Designing sustainable spaces for future living`}', '{`Why the Global Agarwood Market Is Growing — And What It Means for Investors in India`}', false],
  ['{`Explore how sustainable architecture combines modern aesthetics, energy efficiency, and smart materials to create environmentally responsible spaces for future generations.`}',
   `{\`The global Agarwood market is projected to grow at a strong CAGR through 2035, driven by fragrance, perfumery, and wellness demand — here's what genuinely sets an Agarwood cultivation investment apart.\`}`, false],
  ['{`Construction`}', '{`For Farmers`}', false],
  ['{`Smart construction planning for efficient projects`}', '{`How a Mature Agarwood Tree Earns Income Without You Selling Land`}', false],
  ['{`Discover how strategic planning, timeline management, and coordinated workflows improve project efficiency and delivery.`}',
   '{`Most agricultural investments compete on volume. With Agarwood, a single resin-bearing mature tree can earn upfront income with only a minimum 20% of your trees changing hands — the rest stays farmed for free.`}', false],
]);

// ---------- Footer.jsx ----------
apply('Footer.jsx', [
  ['style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Services`}',
   'style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Resources`}', true],
  ['{`Services`}', '{`How It Works`}', true],
  ['{`Modern architecture and construction studio creating timeless residential, commercial, and interior spaces with precision, innovation, and lasting quality.`}',
   `{\`We unlock the value of India's most extraordinary tree by partnering with farmers and landowners through a fair, transparent, and structured Agarwood farming partnership.\`}`, true],
  ['{`About`}', '{`About Us`}', true],
  ['{`Architecture`}', '{`For Farmers`}', true],
  ['{`Construction`}', '{`For Investors`}', true],
  ['{`Interior`}', '{`Agarwood Cultivation`}', true],
  ['{`Planning`}', '{`Business Model`}', true],
  ['{`Renovation`}', '{`Traceability`}', true],
  ['{`Landscape`}', '{`FAQs`}', true],
  ['{`+1 (000) 123-4567`}', '{`+91 XXXXX XXXXX`}', true],
  ['{`hello@cerette.com`}', '{`hello@mridaplantations.com`}', true],
  ['href="mailto:hello@cerette.com"', 'href="mailto:hello@mridaplantations.com"', true],
  ['{`245 Madison Avenue, Suite 1200 New York, NY 10016`}', '{`Office name, street, area, city, state, PIN code`}', true],
  ['{`© 2026 Cerette. All rights reserved.`}', '{`© 2026 Mrida. All rights reserved.`}', true],
]);

console.log('TEXT MIGRATION DONE');

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ── Data (unchanged from the previous implementation) ──────────────────────
const CATEGORIES = ['All', 'For Farmers & Landowners', 'For Investors', 'General'];

const RISK_TABLE = [
  { risk: 'Long maturity timeline', mitigation: 'Upfront farmer payments keep partnerships stable through the full cycle.' },
  { risk: 'Yield variability', mitigation: 'Proven inoculation methods, professional monitoring, and tree-by-tree tracking.' },
  { risk: 'Supply reliability', mitigation: 'Fair, long-term farmer partnerships backed by signed agreements.' },
  { risk: 'Market price movement', mitigation: 'Demand diversified across fragrance, wellness, incense, and traditional medicine.' },
  { risk: 'Traceability and compliance', mitigation: 'Unique Site and Tree Numbers document every stage; all commercial terms are in writing.' },
];

const FAQS = [
  {
    category: 'For Farmers & Landowners',
    q: 'What is the Mrida partnership model in plain terms?',
    a: "We split your eligible mature Agarwood trees into two parts. We buy a minimum of 20% of them outright and pay you upfront — guaranteed income before any harvest takes place. The remaining trees stay in your name. We fund and manage the entire inoculation process at our own cost. After harvest and sale, harvesting expenses are deducted, and the remaining returns are shared transparently between you and Mrida.\n\nYou keep your land. You earn early. You pay nothing for inoculation.",
  },
  {
    category: 'For Farmers & Landowners',
    q: 'How does the 20% upfront purchase work?',
    a: "Once we complete a site survey and confirm eligibility, we buy a minimum of 20% of your mature Agarwood trees at an agreed price — paid to you upfront. Those trees transfer fully to us. The income is yours from day one, with no risk carried on your side.\n\nThe 20% is a minimum, not a cap. If you'd like to sell a higher share, that's a conversation we can have.",
  },
  {
    category: 'For Farmers & Landowners',
    q: 'Do I have to pay for inoculation on my remaining trees?',
    a: "No — not a single rupee. Mrida funds and manages inoculation and ongoing monitoring entirely at its own expense on all shared trees. You won't pay for materials, expertise, site inspections, or labor. Your trees gain real, lasting value without you carrying the cost.",
  },
  {
    category: 'For Farmers & Landowners',
    q: 'How and when do I get paid?',
    a: "You receive income in two stages:\n\n1. Upfront — an agreed payment when we purchase the minimum 20% of your mature trees, paid before inoculation begins.\n2. At harvest — once the resin matures and trees are sold, harvesting expenses are deducted from the proceeds, and your share of the remaining returns is paid to you.\n\nEvery price and sharing ratio is fixed in your signed agreement before any work begins. Nothing changes after you sign.",
  },
  {
    category: 'For Farmers & Landowners',
    q: 'Will I lose ownership of my land?',
    a: 'Never. Your land always stays yours. Only the minimum 20% of trees we buy outright transfer to us — and even then, only the trees, not the land. Your remaining trees stay fully in your name throughout the partnership, right through to final settlement.',
  },
  {
    category: 'For Farmers & Landowners',
    q: 'What is my role as a farmer or landowner?',
    a: 'Your responsibilities are clear and manageable:\n\n• Provide eligible mature Agarwood trees for the partnership.\n• Maintain and protect those trees through the inoculation-to-harvest period.\n• Secure any necessary permissions from the relevant authorities.\n\nMrida takes care of everything else — survey, tagging, inoculation, monitoring, harvesting, grading, and sale.',
  },
  {
    category: 'For Farmers & Landowners',
    q: 'How do I know if my trees are eligible?',
    a: "Eligibility depends on the maturity and condition of your Agarwood trees. During our site visit, we assess every tree individually and tag the ones that qualify. A survey costs you nothing — and we'll explain clearly which trees are eligible and why before any agreement is signed.",
  },
  {
    category: 'For Farmers & Landowners',
    q: 'What if I only have a few mature trees?',
    a: 'The same model applies. Whether you have a handful of mature Agarwood trees or a full plantation, the terms are fair and consistent — upfront payment on the minimum 20%, zero inoculation cost on the rest, and a transparent share of returns after harvest. Reach out and we’ll assess what your trees could earn.',
  },
  {
    category: 'For Investors',
    q: 'Why is Agarwood considered such a valuable investment?',
    a: "Agarwood is rare, deeply sought-after, and driven by durable global demand. The resin that forms inside mature Aquilaria trees is one of the most valuable natural materials on earth — prized across luxury fragrance, wellness, incense, and traditional medicine.\n\nNatural supply is limited and slow to form. That persistent gap between rising demand and constrained supply is what sustains long-term value. Managed cultivation, done professionally and at scale, is one of the few credible ways to access this opportunity.",
  },
  {
    category: 'For Investors',
    q: "How does Mrida's model work for investors?",
    a: 'You back one coordinated, managed operation — from survey and tree acquisition through inoculation, monitoring, harvesting, and final settlement. Every stage is run by our team. Every site and tree is individually tagged and tracked. And our fair farmer partnerships secure dependable supply over the long term.\n\nThe result is a scalable, traceable, end-to-end cultivation model — not a patchwork of disconnected parts.',
  },
  {
    category: 'For Investors',
    q: 'What kind of returns can I expect?',
    a: "Agarwood is a long-term agricultural asset. Returns depend on harvest outcomes, market conditions, and operational performance, and we won't make promises we can't keep. What we can share clearly are the value drivers: a scarce, appreciating commodity; value created through professional inoculation; and access to established global buyer markets.\n\nWe'll walk you through the full ROI logic and value framework when we talk.\n\nAll return considerations are illustrative. They are not guarantees of future performance.",
  },
  {
    category: 'For Investors',
    q: 'How long is the investment horizon?',
    a: "Agarwood rewards patience. It's best suited to a 5+ year horizon, because resin development and tree maturity take time. Our model is structured around this — with upfront farmer payments that keep partnerships stable and supply reliable throughout the full cycle. We'll outline expected stages and timelines in detail during your consultation.",
  },
  {
    category: 'For Investors',
    q: 'How is supply kept reliable and consistent?',
    a: 'Reliable supply starts with fair farmer partnerships. Because farmers earn upfront and share in returns at harvest, they remain committed partners through the full growth cycle. Every tree is tagged and tracked, and all terms are locked in a signed agreement — so supply is both dependable and fully traceable.',
  },
  {
    category: 'For Investors',
    q: 'What are the main risks, and how does Mrida manage them?',
    a: '',
    table: RISK_TABLE,
  },
  {
    category: 'For Investors',
    q: 'Why focus on Agarwood cultivation in India?',
    a: "India offers ideal conditions for high-quality resin — the soil, climate, and tradition of prime production belts like Assam and Tripura all work in its favor. The sector is also gaining real institutional backing: in January 2026, the Indian government launched an ₹80 crore Agarwood value chain scheme in Tripura.\n\nWith Asia Pacific leading global demand, India-based cultivation sits close to both the source and key buyers — a meaningful strategic advantage.\n\nMarket data and scheme details should be independently verified before use in investment decisions.",
  },
  {
    category: 'General',
    q: 'What is inoculation, and why does it matter?',
    a: "Inoculation is the process that triggers a mature Agarwood tree to produce its prized, resin-bearing heartwood — the part buyers pay most for. In the wild, this process is rare, slow, and impossible to predict reliably. Professional inoculation turns an uncertain natural event into a planned, monitored process, transforming an ordinary tree into a high-value, resin-bearing asset.\n\nIt's the step that unlocks most of the tree's commercial worth.",
  },
  {
    category: 'General',
    q: 'How does the signed agreement process work?',
    a: "Every partnership is confirmed in writing before any work begins. The agreement records agreed prices, return-sharing ratios, each party's responsibilities, and which trees are purchased upfront versus included in the shared arrangement.\n\nBoth sides sign before inoculation starts. There are no moving terms, no surprise deductions, and no ambiguity. What's agreed is exactly what happens.",
  },
  {
    category: 'General',
    q: 'How are trees tracked throughout the partnership?',
    a: 'We track every partnership at two levels:\n\n• Unique Site Number — each plantation site gets its own identifier for clean, separate record-keeping.\n• Unique Tree Number — every eligible mature Agarwood tree is tagged and logged through survey, inoculation, monitoring, harvest, and settlement.\n\nPurchased trees and shared trees are always flagged separately. You can follow each tree from the day it’s tagged to the day its returns are settled — clearly, accurately, and at any point during the partnership.',
  },
  {
    category: 'General',
    q: 'What happens at harvest and settlement?',
    a: 'When the resin reaches maturity, we manage the harvest, grading, and sale through our buyer network. Settlement then follows a clear, documented sequence:\n\n1. Trees are harvested and sold.\n2. Harvesting expenses are deducted from the total sale proceeds.\n3. Remaining returns are shared on the exact percentage fixed in your signed agreement.\n\nBecause every tree is individually tracked, every figure traces back precisely to your tagged trees.',
  },
  {
    category: 'General',
    q: 'What counts as a "mature Agarwood tree"?',
    a: "Mature Agarwood trees are well-established trees that have developed enough to respond reliably to inoculation and produce valuable resin. Younger saplings haven't yet reached this stage and aren't part of the model. Our partnership is built specifically around mature trees — trees that are ready to be assessed, tagged, and brought into production.",
  },
  {
    category: 'General',
    q: 'Who handles permissions and legal requirements?',
    a: 'The farmer or landowner is responsible for securing the necessary permissions from the relevant authorities for their trees. Mrida manages the operational and commercial side — survey, inoculation, monitoring, harvesting, grading, and sale. All roles and responsibilities are clearly set out in the signed agreement before any work begins, so both sides always know exactly where they stand.',
  },
  {
    category: 'General',
    q: 'How do I get started?',
    a: "It starts with a simple conversation. From there, we arrange a site survey at no cost to you — we assess and tag eligible trees, confirm all terms in a signed agreement, and begin the partnership.\n\nFarmer or investor, the first step is just to reach out. We'll handle the rest clearly, fairly, and without pressure.",
  },
];

// "Most Asked" shortcuts — each just pre-fills the search box with a term
// that surfaces the relevant question(s); no separate data path.
const POPULAR_SHORTCUTS = [
  { label: 'Payment Process', term: 'paid' },
  { label: 'Ownership', term: 'ownership' },
  { label: 'Harvest', term: 'harvest' },
  { label: 'Investor Returns', term: 'returns' },
];

const EASE = [0.16, 1, 0.3, 1];

function highlightMatch(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="faq-highlight">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function FAQAccordionItem({ item, isOpen, onToggle, query }) {
  return (
    <div className={`faq-card ${isOpen ? 'open' : ''}`}>
      <button className="faq-card-question" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-card-question-text">{highlightMatch(item.q, query)}</span>
        <span className="faq-card-badge">{item.category.replace('For ', '')}</span>
        <motion.span
          className="faq-card-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              className="faq-card-answer"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05, ease: EASE }}
            >
              {item.a && item.a.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {item.table && (
                <div className="faq-risk-table">
                  {item.table.map((row) => (
                    <div className="faq-risk-row" key={row.risk}>
                      <span className="faq-risk-name">{row.risk}</span>
                      <span className="faq-risk-mitigation">{row.mitigation}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState('');

  const counts = useMemo(() => {
    const map = { All: FAQS.length };
    for (const cat of CATEGORIES) {
      if (cat === 'All') continue;
      map[cat] = FAQS.filter((f) => f.category === cat).length;
    }
    return map;
  }, []);

  // Searching looks across every FAQ regardless of category, matching the
  // "search across all FAQs" requirement; clearing search returns to the
  // selected category's filtered list.
  const visibleFaqs = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (q) {
      return FAQS.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
    }
    return activeCategory === 'All' ? FAQS : FAQS.filter((f) => f.category === activeCategory);
  }, [activeCategory, search]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setSearch('');
    setOpenIndex(0);
    document.getElementById('faq-content-top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleShortcut = (term) => {
    setSearch(term);
    setOpenIndex(0);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <p className="contact-eyebrow" style={{ textAlign: 'center' }}>FAQs</p>
        <h2 className="faq-heading">Your Questions, Answered Honestly</h2>
        <p className="faq-intro">
          We believe a good partnership starts with complete clarity. Below, you'll find straightforward
          answers to the questions farmers, landowners, and investors ask us most — covering how our model
          works, what you're responsible for, and exactly what to expect at every stage. If your question
          isn't here, we're always happy to explain things directly.
        </p>

        <div className="faq-layout">
          {/* Sticky sidebar */}
          <aside className="faq-sidebar">
            <p className="faq-sidebar-title">FAQs</p>
            <nav className="faq-sidebar-list">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat && !search;
                return (
                  <button
                    key={cat}
                    className={`faq-sidebar-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="faq-sidebar-indicator"
                        className="faq-sidebar-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="faq-sidebar-dot">{isActive ? '●' : '○'}</span>
                    <span className="faq-sidebar-label">{cat}</span>
                    <span className="faq-sidebar-count">{counts[cat]}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Content */}
          <div className="faq-content">
            <span id="faq-content-top" />

            <div className="faq-sticky-header">
              <div className="faq-search-wrap">
                <input
                  type="text"
                  className="faq-search-input"
                  placeholder="Search Questions..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setOpenIndex(0); }}
                />
              </div>

              {!search && (
                <div className="faq-popular">
                  <span className="faq-popular-label">Most Asked</span>
                  {POPULAR_SHORTCUTS.map((s) => (
                    <button key={s.label} className="faq-popular-chip" onClick={() => handleShortcut(s.term)}>
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="faq-list">
              {visibleFaqs.length === 0 ? (
                <div className="faq-empty">
                  <p>No matching questions found.</p>
                  <button className="btn-secondary" onClick={() => { setSearch(''); setActiveCategory('All'); }}>
                    Clear Search
                  </button>
                </div>
              ) : (
                visibleFaqs.map((item, i) => (
                  <FAQAccordionItem
                    key={item.q}
                    item={item}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                    query={search}
                  />
                ))
              )}
            </div>
          </div>
        </div>

        <div className="faq-closing">
          <h3>Still have questions?</h3>
          <p>
            The best answers come from a real conversation. Whether you own mature Agarwood trees or you're
            seriously exploring an Agarwood cultivation investment in India, our team is ready to explain
            everything — clearly, honestly, and with no pressure.
          </p>
          <div className="contact-cta-pair" style={{ justifyContent: 'center' }}>
            <a href="/contact" className="btn-primary">Partner With Us</a>
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}

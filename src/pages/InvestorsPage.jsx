import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ── Inline SVG Icons for Investors Page ── */
const IconTrendUp = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconTractor = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="18" r="2"></circle>
    <circle cx="18" cy="18" r="2"></circle>
    <path d="M11 11H5v3h6v-3z"></path>
    <path d="M16 15v-4h-5v4"></path>
    <path d="M16 11V5h-3v4"></path>
  </svg>
);

const IconRefresh = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
  </svg>
);

const IconLeaf = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 20 11 20z"></path>
    <path d="M19 2L9.8 11.2"></path>
  </svg>
);

const IconUsers = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);


const DEMAND_PILLARS = [
  { title: 'Fragrance and perfumery', share: '~45% of market share', description: 'the largest demand driver, holding roughly 45% of market share. Oud remains a signature note in luxury and premium scent categories globally.', image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Wellness', share: 'Growing segment', description: 'a growing appetite for natural, premium botanicals across aromatherapy, self-care, and holistic health.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Incense', share: 'Deep-rooted demand', description: 'deep-rooted cultural and religious demand across Asia and the Middle East, sustained across generations.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Traditional medicine', share: 'Consistent demand', description: 'long-established use in respected healing traditions with consistent, loyal demand.', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&q=80&auto=format' },
];

const MRIDA_MODEL_PILLARS = [
  { title: 'Managed end to end', description: 'From the first site survey through inoculation, monitoring, harvesting, and final settlement — every stage is coordinated and run by our team. You back one cohesive operation, not a fragile chain of independent variables.', icon: <IconShield /> },
  { title: 'Scalable by design', description: 'Our five-step workflow is identical across every plantation site. As new partnerships come on board, the model repeats cleanly across regions — growing without losing consistency, control, or accountability.', icon: <IconTractor /> },
  { title: 'Fully traceable supply', description: 'Every site carries a unique Site Number. Every eligible mature Agarwood tree carries a unique Tree Number — logged through inoculation, inspection, harvest, and sale. Traceable supply means cleaner accounting, clearer accountability, and a credible sustainability story.', icon: <IconRefresh /> },
  { title: 'A fair farmer partnership', description: "Our farmer-first model isn't just ethical — it's commercially smart. Farmers earn upfront and again at harvest, which keeps partnerships stable, supply dependable, and the operation sustainable over the long term.", icon: <IconUsers /> },
  { title: 'Signed agreements, always', description: "All prices, sharing ratios, and responsibilities are fixed in a signed agreement before any work begins. No ambiguous terms, no moving goalposts. What's agreed is what happens.", icon: <IconLeaf /> },
];

const ROI_DRIVERS = [
  { title: 'Scarcity supports pricing', description: 'limited natural supply against rising demand creates structural support for value over time.', icon: <IconTrendUp /> },
  { title: 'Inoculation creates the asset', description: 'professional inoculation transforms a standard mature tree into a resin-bearing, high-value commodity ready for premium markets.', icon: <IconLeaf /> },
  { title: 'Global market access', description: 'our established buyer network connects harvests directly to premium buyers across the Middle East, Asia, and beyond.', icon: <IconTractor /> },
  { title: 'A long-term horizon', description: 'Agarwood rewards patience. The 5+ year investment timeline aligns naturally with how value is built and realized in this market.', icon: <IconRefresh /> },
  { title: 'Diversified demand', description: 'across fragrance, wellness, incense, and medicine, demand is spread across multiple durable markets — reducing exposure to any single sector.', icon: <IconUsers /> },
];


const RISK_TABLE = [
  { risk: 'Long maturity timeline', mitigation: 'A long-term (5+ year) model with upfront farmer payments that keep partnerships stable and supply dependable through the full cycle.' },
  { risk: 'Inoculation and yield variability', mitigation: 'Proven inoculation methods, professional monitoring, and tree-by-tree tracking to support consistent, reliable resin development.' },
  { risk: 'Supply reliability', mitigation: 'Fair farmer partnerships and signed agreements secure dependable, long-term access to mature Agarwood trees.' },
  { risk: 'Transparency and accounting', mitigation: 'Unique Site and Tree Numbers deliver full traceability from the day of tagging through to final settlement.' },
  { risk: 'Market and price movement', mitigation: 'Demand diversified across fragrance, wellness, incense, and medicine — supported by multiple global buyer markets.' },
  { risk: 'Compliance', mitigation: 'Farmers secure the required permissions; all commercial terms are documented and confirmed in signed agreements before work begins.' },
];

const INDIA_ADVANTAGE = [
  { val: 'Prime production heartland', label: 'Assam and Tripura offer the soil, climate, and generations of tradition that favor the growth of high-quality, resin-rich Agarwood.' },
  { val: 'Government momentum', label: "the Indian government's ₹80 crore Agarwood value chain scheme in Tripura (January 2026) signals strong institutional commitment to the sector's long-term development." },
  { val: 'Close to the market', label: "with Asia Pacific leading global demand, India-based cultivation sits close to both the source and the region's most active buyers." },
];

const MARKET_STATS = [
  { source: 'Precedence Research', from: 'USD 44.29B', fromYear: '2025', to: 'USD 90.56B', toYear: '2035', cagr: '7.41% CAGR' },
  { source: 'Persistence Market Research', from: 'USD 47.4B', fromYear: '2026', to: 'USD 81.8B', toYear: '2033', cagr: '8.1% CAGR' },
];

/* ── Animation Configs ── */
const EASE_CURVE = [0.16, 1, 0.3, 1];

const sectionReveal = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.85, ease: EASE_CURVE } 
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


const cardAnimation = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.7, ease: EASE_CURVE } 
  }
};

const nodeAnimation = {
  hidden: { opacity: 0, scale: 0.8, y: 25 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: EASE_CURVE } 
  }
};

const railItemAnimation = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_CURVE }
  }
};



export default function InvestorsPage() {
  const [activePillar, setActivePillar] = useState(null);
  const [activeItem, setActiveItem] = useState(1);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    document.title = 'Agarwood Cultivation Investment in India | Mrida Infra & Plantations';
  }, []);

  return (
    <div className="contact-page inv-page-redesign">

      {/* 1. HERO */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Investors</p>
        <h1>Invest in One of the World's Most Valuable Commodities</h1>
        <p className="contact-hero-sub">
          Agarwood — the resin the world calls "liquid gold" — sits at the heart of a fast-growing
          global market. Mrida offers a scalable, managed, end-to-end cultivation investment, backed
          by traceable supply and fair farmer partnerships across India's prime Agarwood-producing belts.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      {/* 2. THE OPPORTUNITY */}
      <motion.section
        ref={containerRef}
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="inv-redesign-section"
      >
        <style>{`
          .opp-editorial-grid {
            display: grid;
            grid-template-columns: 5.5fr 4.5fr;
            gap: 80px;
            align-items: start;
            text-align: left;
            margin-top: 40px;
          }
          .opp-left-col {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .opp-new-paras {
            display: flex;
            flex-direction: column;
            gap: 28px;
            margin-top: 48px;
            max-width: 680px;
          }
          .opp-new-para {
            font-size: 16px;
            line-height: 1.8;
            color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
            margin: 0;
          }
          .opp-new-para strong {
            font-weight: 600;
            color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
          }
          .opp-rail-wrapper {
            position: relative;
            padding-left: 48px;
            width: 100%;
          }
          .opp-rail-progress-track {
            position: absolute;
            left: 8px;
            top: 24px;
            bottom: 24px;
            width: 2px;
            background: rgba(0, 0, 0, 0.06);
          }
          .opp-rail-progress-bar {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
            transform-origin: top;
          }
          .opp-right-col {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .opp-rail-item {
            position: relative;
            padding: 48px 24px 48px 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: transform 280ms ease-out;
          }
          .opp-rail-item::before {
            content: '';
            position: absolute;
            left: -48px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
            transition: opacity 280ms ease-out, transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 2;
          }
          .opp-rail-item:hover::before {
            opacity: 1;
            transform: scaleY(1);
          }
          .opp-rail-item:hover {
            transform: translateY(-4px);
          }
          .opp-rail-num {
            font-size: 54px;
            font-weight: 300;
            color: rgba(0, 0, 0, 0.08);
            line-height: 1;
            margin-bottom: 16px;
            transition: color 280ms ease-out;
            font-family: inherit;
          }
          .opp-rail-num.active,
          .opp-rail-item:hover .opp-rail-num {
            color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
          }
          .opp-rail-title {
            font-size: 20px;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.4);
            margin: 0 0 24px 0;
            transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1), color 280ms ease-out;
          }
          .opp-rail-title.active,
          .opp-rail-item:hover .opp-rail-title {
            color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
          }
          .opp-rail-item:hover .opp-rail-title {
            transform: translateX(4px);
          }
          .opp-rail-desc {
            font-size: 15px;
            line-height: 1.7;
            color: var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112,112,112));
            margin: 0;
            transition: color 280ms ease-out;
          }
          .opp-rail-desc.active,
          .opp-rail-item:hover .opp-rail-desc {
            color: var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0,0,0));
          }
          .opp-rail-arrow {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%) translateX(-8px);
            opacity: 0;
            transition: opacity 280ms ease-out, transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
            color: var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54));
          }
          .opp-rail-item:hover .opp-rail-arrow {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
          .opp-rail-divider {
            border: 0;
            height: 1px;
            background: rgba(0, 0, 0, 0.08);
            margin: 0;
            width: 100%;
          }
          @media (max-width: 900px) {
            .opp-editorial-grid {
              grid-template-columns: 1fr;
              gap: 64px;
            }
            .opp-rail-wrapper {
              margin-top: 24px;
            }
          }
          @media (max-width: 600px) {
            .opp-rail-wrapper {
              padding-left: 36px;
            }
            .opp-rail-progress-track {
              left: 4px;
            }
            .opp-rail-item::before {
              left: -36px;
            }
          }
        `}</style>

        <div className="opp-editorial-grid">
          {/* Left Column (55%) */}
          <div className="opp-left-col">
            <p className="contact-eyebrow" style={{ marginBottom: '14px' }}>The Opportunity</p>
            <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2, maxWidth: '80%' }}>
              Scarcity, rising demand, and strong long-term pricing.
            </h2>
            <div className="opp-new-paras">
              <p className="opp-new-para">
                Few natural commodities combine <strong>genuine scarcity, rising demand, and strong long-term pricing</strong> the way Agarwood does. The resin that forms inside mature Aquilaria trees is one of the most sought-after raw materials on earth — prized across fine perfumery, wellness, incense, and traditional medicine markets worldwide.
              </p>
              <p className="opp-new-para">
                The challenge has always been <strong>supply</strong>. Wild Agarwood is scarce and slow to form. Most farmers who own suitable trees lack the inoculation expertise, materials, and market connections needed to produce resin at scale. That gap between soaring demand and constrained supply is precisely where the investment value lies.
              </p>
              <p className="opp-new-para">
                Mrida bridges it — <strong>professionally and transparently</strong>. We bring the inoculation method, specialist monitoring, harvesting, and a global buyer network. Farmers bring their mature trees and their land. Together, we run a managed, traceable operation built to scale — and investors share in the upside of a market with genuine structural tailwinds.
              </p>
            </div>
          </div>

          {/* Right Column (45%) */}
          <div className="opp-rail-wrapper">
            <div className="opp-rail-progress-track">
              <motion.div 
                className="opp-rail-progress-bar"
                style={{ scaleY: scrollYProgress, originY: 0 }}
              />
            </div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="opp-right-col"
            >
              <motion.div 
                variants={railItemAnimation} 
                className="opp-rail-item"
                onViewportEnter={() => setActiveItem(1)}
              >
                <span className={`opp-rail-num ${activeItem >= 1 ? 'active' : ''}`}>01</span>
                <h3 className={`opp-rail-title ${activeItem >= 1 ? 'active' : ''}`}>Rare Commodity</h3>
                <p className={`opp-rail-desc ${activeItem >= 1 ? 'active' : ''}`}>One of the most sought-after raw materials on earth — prized across fine perfumery, wellness, incense, and traditional medicine markets worldwide.</p>
                <div className="opp-rail-arrow"><IconArrowRight /></div>
              </motion.div>
              <div className="opp-rail-divider" />
              
              <motion.div 
                variants={railItemAnimation} 
                className="opp-rail-item"
                onViewportEnter={() => setActiveItem(2)}
              >
                <span className={`opp-rail-num ${activeItem >= 2 ? 'active' : ''}`}>02</span>
                <h3 className={`opp-rail-title ${activeItem >= 2 ? 'active' : ''}`}>Supply Constraint</h3>
                <p className={`opp-rail-desc ${activeItem >= 2 ? 'active' : ''}`}>Wild Agarwood is scarce and slow to form. That gap between soaring demand and constrained supply is precisely where the investment value lies.</p>
                <div className="opp-rail-arrow"><IconArrowRight /></div>
              </motion.div>
              <div className="opp-rail-divider" />
              
              <motion.div 
                variants={railItemAnimation} 
                className="opp-rail-item"
                onViewportEnter={() => setActiveItem(3)}
              >
                <span className={`opp-rail-num ${activeItem >= 3 ? 'active' : ''}`}>03</span>
                <h3 className={`opp-rail-title ${activeItem >= 3 ? 'active' : ''}`}>Mrida's Solution</h3>
                <p className={`opp-rail-desc ${activeItem >= 3 ? 'active' : ''}`}>A managed, traceable operation built to scale — investors share in the upside of a market with genuine structural tailwinds.</p>
                <div className="opp-rail-arrow"><IconArrowRight /></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. A MARKET BUILT ON GROWTH */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="inv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Market Demand</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 16px' }}>A Market Built on Growth</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '40px' }}>
          The numbers tell a clear, consistent story: demand is climbing steadily, and the market is
          expanding year over year across multiple high-value segments.
        </p>
        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
          {MARKET_STATS.map((s) => (
            <motion.div key={s.source} variants={cardAnimation}
              style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '16px', padding: '28px 32px', display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}
            >
              <div style={{ minWidth: '180px' }}>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgb(112,112,112)', marginBottom: '6px' }}>{s.source}</p>
                <p style={{ fontSize: '28px', fontWeight: 700, color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', margin: 0 }}>{s.cagr}</p>
              </div>
              <div style={{ flex: 1, display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center', padding: '12px 20px', background: 'rgba(0,0,0,0.03)', borderRadius: '10px' }}>
                  <p style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>{s.from}</p>
                  <p style={{ fontSize: '12px', color: 'rgb(112,112,112)', margin: '4px 0 0' }}>{s.fromYear}</p>
                </div>
                <span style={{ fontSize: '20px', color: 'rgb(112,112,112)' }}>→</span>
                <div style={{ textAlign: 'center', padding: '12px 20px', background: 'rgba(195,96,54,0.07)', borderRadius: '10px' }}>
                  <p style={{ fontSize: '20px', fontWeight: 700, color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', margin: 0 }}>{s.to}</p>
                  <p style={{ fontSize: '12px', color: 'rgb(112,112,112)', margin: '4px 0 0' }}>{s.toYear}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '13px', color: 'rgb(112,112,112)', fontStyle: 'italic' }}>
          <strong style={{ color: 'rgb(0,0,0)' }}>USD {MARKET_STATS[0].from}</strong> — global Agarwood chips market in {MARKET_STATS[0].fromYear}, projected to reach <strong style={{ color: 'rgb(0,0,0)' }}>USD {MARKET_STATS[0].to} by {MARKET_STATS[0].toYear}</strong> at a <strong style={{ color: 'rgb(0,0,0)' }}>{MARKET_STATS[0].cagr}</strong> ({MARKET_STATS[0].source} — projection)
        </p>
        <p style={{ fontSize: '13px', color: 'rgb(112,112,112)', fontStyle: 'italic', marginTop: '10px', marginBottom: '24px' }}>
          <strong style={{ color: 'rgb(0,0,0)' }}>USD {MARKET_STATS[1].from}</strong> in {MARKET_STATS[1].fromYear}, projected to reach <strong style={{ color: 'rgb(0,0,0)' }}>USD {MARKET_STATS[1].to} by {MARKET_STATS[1].toYear}</strong> at an <strong style={{ color: 'rgb(0,0,0)' }}>{MARKET_STATS[1].cagr}</strong> ({MARKET_STATS[1].source} — projection)
        </p>
        <p style={{ fontSize: '13px', color: 'rgb(112,112,112)', fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '16px' }}>
          All market figures are third-party projections, shared for informational purposes only. They are not guarantees of future performance or investment returns.
        </p>
      </motion.section>

      {/* 4. WHAT'S DRIVING DEMAND */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Demand Sectors</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '16px' }}>What's Driving Demand</h2>
        <p className="inv-vision-statement-sub" style={{ textAlign: 'center', margin: '0 auto 48px', maxWidth: '680px' }}>
          Agarwood's growth isn't built on a single trend. It's supported by several established, durable markets pulling demand forward simultaneously — which makes the opportunity more resilient over the long term.
        </p>
        <motion.div variants={staggerContainer} className="inv-pillars-grid">
          {DEMAND_PILLARS.map((item) => (
            <motion.div key={item.title} variants={cardAnimation} className="inv-pillar-card" style={{ padding: '0', overflow: 'hidden' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgb(112,112,112)', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '14px', color: 'rgb(112,112,112)', marginTop: '32px', textAlign: 'center' }}>
          Geographically, <strong>Asia Pacific leads the global market with roughly 38% share</strong> — placing India-based cultivation close to both the source and the most active buyers.
        </p>
      </motion.section>

      {/* 5. THE SUPPLY-DEMAND GAP */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} className="inv-redesign-section"
      >
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 16px' }}>The Supply-Demand Gap</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '24px', maxWidth: '720px' }}>
          This is the structural foundation of the investment case. Demand keeps climbing while natural supply stays constrained — and that widening gap supports strong, durable pricing over the long term.
        </p>
        <p className="inv-vision-statement-sub" style={{ maxWidth: '720px' }}>
          Wild Agarwood forms rarely, slowly, and unpredictably. Meeting market demand requires something more reliable — professional inoculation, specialist management, and a scalable cultivation framework. That's exactly what Mrida's model is built to deliver.
        </p>
      </motion.section>

      {/* 6. WHY THE MRIDA MODEL WORKS */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} className="inv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>The Model</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 16px' }}>Why the Mrida Model Works for Investors</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '48px', maxWidth: '720px' }}>
          We've built an operation that transforms a slow, uncertain natural event into a planned, accountable, and repeatable process — one that scales consistently across sites without compromising quality, traceability, or farmer fairness.
        </p>
        <motion.div variants={staggerContainer} className="inv-pillars-grid">
          {MRIDA_MODEL_PILLARS.map((pillar, i) => (
            <motion.div key={pillar.title} variants={cardAnimation} className="inv-pillar-card"
              onMouseEnter={() => setActivePillar(i)} onMouseLeave={() => setActivePillar(null)}
              style={{ borderColor: activePillar === i ? 'var(--token-97443185-d1fc-462c-b307-21c354347358)' : 'rgba(0,0,0,0.08)' }}
            >
              <div className="inv-pillar-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="inv-pillar-icon">{pillar.icon}</div>
              <h3 style={{ fontWeight: 700 }}>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 7. ROI LOGIC AND VALUE DRIVERS */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Returns</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 16px' }}>ROI Logic and Value Drivers</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '40px', maxWidth: '720px' }}>
          Several clear, compounding factors shape the long-term return potential of an Agarwood cultivation investment with Mrida.
        </p>
        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {ROI_DRIVERS.map((driver, i) => (
            <motion.div key={driver.title} variants={cardAnimation}
              style={{ display: 'flex', gap: '28px', padding: '28px 0', borderBottom: '1px solid rgba(0,0,0,0.07)', alignItems: 'flex-start' }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', minWidth: '28px', paddingTop: '4px' }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', paddingTop: '2px', flexShrink: 0 }}>{driver.icon}</div>
              <div>
                <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', lineHeight: '1.7', margin: 0 }}>
                  <strong style={{ color: 'rgb(0,0,0)', fontWeight: 700 }}>{driver.title}</strong> — {driver.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '13px', color: 'rgb(112,112,112)', fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '20px', marginTop: '8px' }}>
          All ROI considerations above are illustrative and based on third-party market projections. They are not guarantees of returns. Agarwood is a long-term agricultural asset, and actual outcomes depend on harvest, market, and operational conditions.
        </p>
      </motion.section>

      {/* 8. RISK AND MITIGATION */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="inv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Risk Profile</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 12px' }}>Risk and Mitigation</h2>
        <p style={{ color: 'rgb(112,112,112)', fontSize: '16px', marginBottom: '36px', maxWidth: '640px' }}>
          Every serious investment starts with an honest look at the risks. Here's how Mrida's model is built to address each of the main ones.
        </p>
        <div style={{ border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden', background: '#fff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', background: 'rgba(0,0,0,0.03)', padding: '14px 28px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'rgb(112,112,112)', margin: 0 }}>Risk</p>
            <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', margin: 0 }}>How Mrida Mitigates It</p>
          </div>
          <motion.div variants={staggerContainer}>
            {RISK_TABLE.map((row, i) => (
              <motion.div key={row.risk} variants={cardAnimation}
                style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', padding: '20px 28px', borderBottom: i < RISK_TABLE.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none', alignItems: 'start', gap: '24px' }}
              >
                <p style={{ fontSize: '15px', fontWeight: 600, margin: 0, color: 'rgb(0,0,0)' }}>{row.risk}</p>
                <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', margin: 0, lineHeight: '1.6' }}>{row.mitigation}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 9. THE INDIA ADVANTAGE */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Geography</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 16px' }}>The India Advantage</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '48px', maxWidth: '680px' }}>
          India is one of the world's most favorable environments for Agarwood cultivation — and growing institutional support is reinforcing that position.
        </p>
        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {INDIA_ADVANTAGE.map((item, i) => (
            <motion.div key={item.val} variants={cardAnimation}
              style={{ display: 'flex', gap: '24px', padding: '28px 32px', background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '16px', alignItems: 'flex-start' }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
              <div>
                <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', margin: 0, lineHeight: '1.7' }}>
                  <strong style={{ color: 'rgb(0,0,0)', fontWeight: 700 }}>{item.val}</strong> — {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', marginTop: '32px', lineHeight: '1.7' }}>
          Taken together — ideal geography, institutional backing, and a professionally managed partnership model — Mrida's Agarwood cultivation investment is both credible and well-timed.
        </p>
      </motion.section>

      {/* 10. CLOSING CTA */}
      <motion.section
        variants={cardAnimation} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ padding: '40px 20px 100px' }}
      >
        <div className="inv-cta-wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="inv-cta-accent-dot"></div>
          <h2>Ready to Explore the Opportunity?</h2>
          <p>
            If you're looking for a scalable, managed, and traceable entry into one of the world's
            most valuable commodities, the conversation starts here. We'll walk you through the model,
            the workflow, and what an Agarwood cultivation investment with Mrida could mean for your portfolio.
          </p>
          <div className="inv-cta-btn-group">
            <Link to="/contact" className="btn-primary">Partner With Us</Link>
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}

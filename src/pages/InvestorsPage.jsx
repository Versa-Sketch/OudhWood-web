import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

const DEMAND_PILLARS = [
  { title: 'Fragrance and Perfumery', share: '~45% market share', description: 'The largest demand driver, holding roughly 45% of market share. Oud remains a signature note in luxury and premium scent categories globally.', image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Wellness', share: 'Growing segment', description: 'A growing appetite for natural, premium botanicals across aromatherapy, self-care, and holistic health.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Incense', share: 'Deep-rooted demand', description: 'Deep-rooted cultural and religious demand across Asia and the Middle East, sustained across generations.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Traditional Medicine', share: 'Consistent demand', description: 'Long-established use in respected healing traditions with consistent, loyal demand.', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&q=80&auto=format' },
];

const MRIDA_MODEL_PILLARS = [
  { title: 'Managed End to End', description: 'From the first site survey through inoculation, monitoring, harvesting, and final settlement — every stage is coordinated and run by our team. You back one cohesive operation, not a fragile chain of independent variables.', icon: <IconShield /> },
  { title: 'Scalable by Design', description: 'Our five-step workflow is identical across every plantation site. As new partnerships come on board, the model repeats cleanly across regions — growing without losing consistency, control, or accountability.', icon: <IconTractor /> },
  { title: 'Fully Traceable Supply', description: 'Every site carries a unique Site Number. Every eligible mature Agarwood tree carries a unique Tree Number — logged through inoculation, inspection, harvest, and sale. Traceable supply means cleaner accounting and a credible sustainability story.', icon: <IconRefresh /> },
  { title: 'A Fair Farmer Partnership', description: 'Our farmer-first model isn\'t just ethical — it\'s commercially smart. Farmers earn upfront and again at harvest, which keeps partnerships stable, supply dependable, and the operation sustainable over the long term.', icon: <IconUsers /> },
  { title: 'Signed Agreements, Always', description: 'All prices, sharing ratios, and responsibilities are fixed in a signed agreement before any work begins. No ambiguous terms, no moving goalposts. What\'s agreed is what happens.', icon: <IconLeaf /> },
];

const ROI_DRIVERS = [
  { title: 'Scarcity Supports Pricing', description: 'Limited natural supply against rising demand creates structural support for value over time.', icon: <IconTrendUp /> },
  { title: 'Inoculation Creates the Asset', description: 'Professional inoculation transforms a standard mature tree into a resin-bearing, high-value commodity ready for premium markets.', icon: <IconLeaf /> },
  { title: 'Global Market Access', description: 'Our established buyer network connects harvests directly to premium buyers across the Middle East, Asia, and beyond.', icon: <IconTractor /> },
  { title: 'A Long-Term Horizon', description: 'Agarwood rewards patience. The 5+ year investment timeline aligns naturally with how value is built and realized in this market.', icon: <IconRefresh /> },
  { title: 'Diversified Demand', description: 'Across fragrance, wellness, incense, and medicine, demand is spread across multiple durable markets — reducing exposure to any single sector.', icon: <IconUsers /> },
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
  { val: 'Prime Production Heartland', label: 'Assam and Tripura offer the soil, climate, and generations of tradition that favour the growth of high-quality, resin-rich Agarwood.' },
  { val: '₹80 Crore Government Scheme', label: 'Indian government\'s Agarwood value chain scheme in Tripura (January 2026) signals strong institutional commitment to the sector.' },
  { val: '~38% Asia Pacific Share', label: 'Asia Pacific leads global demand — India-based cultivation sits close to both the source and the region\'s most active buyers.' },
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

/* ── Opportunity Story Cards ── */
const STORY_CARDS = [
  {
    id: 'rare',
    eyebrow: 'Rare Commodity',
    heading: 'One of the rarest natural materials on earth',
    body: 'Few natural commodities combine genuine scarcity, rising demand, and strong longterm pricing the way Agarwood does. The resin that forms inside mature Aquilaria trees is one of the most sought-after raw materials on earth - prized across fine perfumery, wellness, incense, and traditional medicine markets worldwide.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    stat: 'USD 44.29B+ Market',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=600&fit=crop&q=80&auto=format',
    imageAlt: 'Luxury Perfumery Bottling'
  },
  {
    id: 'demand',
    eyebrow: 'Growing Demand',
    heading: 'Global demand is climbing — and accelerating',
    body: 'Agarwood is not a niche product. It anchors billion-dollar fragrance houses, fuels a booming wellness industry, and sits at the heart of cultural traditions across Asia and the Middle East that have sustained demand for centuries. Multiple high-value markets pull in the same direction — simultaneously.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    stat: 'Billion-Dollar Scent Industry',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=800&h=600&fit=crop&q=80&auto=format',
    imageAlt: 'Luxury Oils & Incense'
  },
  {
    id: 'supply',
    eyebrow: 'Supply Constraint',
    heading: 'Supply cannot keep up — and that gap is the opportunity',
    body: 'The challenge has always been supply. Wild Agarwood is scarce and slow to form. Most farmers who own suitable trees lack the inoculation expertise, materials, and market connections needed to produce resin at scale. That gap between soaring demand and constrained supply is precisely where the investment value lies.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 20 11 20z"></path>
        <path d="M19 2L9.8 11.2"></path>
      </svg>
    ),
    stat: '5+ Year Resin Maturity Gap',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&q=80&auto=format',
    imageAlt: 'Farming Inoculated Trees'
  },
  {
    id: 'solution',
    eyebrow: "Mrida's Solution",
    heading: 'We bridge the gap — professionally and transparently',
    body: 'Mrida bridges it - professionally and transparently. We bring the inoculation method, specialist monitoring, harvesting, and a global buyer network. Farmers bring their mature trees and their land. Together, we run a managed, traceable operation built to scale - and investors share in the upside of a market with genuine structural tailwinds.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    stat: 'End-to-End Managed & Traceable',
    image: 'https://images.unsplash.com/photo-1464241353293-0f15fec31a69?w=800&h=600&fit=crop&q=80&auto=format',
    imageAlt: 'Managed Plantation'
  }
];

function StoryBlock({ card, index, onActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-35% 0px -35% 0px' });

  useEffect(() => {
    if (isInView) {
      onActive(index);
    }
  }, [isInView, index, onActive]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
      }}
      className="opp-right-panel"
    >
      <div 
        className="opp-story-panel-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '48px',
          alignItems: 'center',
          width: '100%',
          direction: isEven ? 'ltr' : 'rtl'
        }}
      >
        {/* Text Column */}
        <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="opp-card-icon" style={{ margin: 0 }}>{card.icon}</div>
            <span className="opp-card-eyebrow" style={{ margin: 0 }}>{card.eyebrow}</span>
          </div>
          <h3 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, margin: 0, color: 'rgb(0,0,0)', lineHeight: '1.2', letterSpacing: '-0.02em' }}>{card.heading}</h3>
          <p className="opp-card-body" style={{ margin: 0 }}>{card.body}</p>
          
          {card.stat && (
            <div style={{ alignSelf: 'flex-start', background: 'rgba(195,96,54,0.06)', border: '1px solid rgba(195,96,54,0.12)', borderRadius: '12px', padding: '16px 20px', marginTop: '8px' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--token-97443185-d1fc-462c-b307-21c354347358)', fontWeight: 700, margin: '0 0 4px' }}>Key Metric</p>
              <p style={{ fontSize: '20px', fontWeight: 700, color: 'rgb(0,0,0)', margin: 0, lineHeight: '1.1' }}>{card.stat}</p>
            </div>
          )}
          
          <div className="opp-card-index" style={{ marginTop: '12px' }}>{String(index + 1).padStart(2, '0')} / {String(STORY_CARDS.length).padStart(2, '0')}</div>
        </div>

        {/* Image/Visual Column */}
        <div style={{ direction: 'ltr', position: 'relative' }}>
          <div style={{ overflow: 'hidden', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.05)', aspectRatio: '4/3', width: '100%', background: 'rgb(240,240,240)' }}>
            <motion.img 
              src={card.image} 
              alt={card.imageAlt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              animate={{ scale: isInView ? 1.05 : 0.98 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function OpportunitySection() {
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const leftRef = useRef(null);

  /* Set the subpage wrapper layout overflow to visible to enable smooth native CSS position:sticky */
  useEffect(() => {
    const wrapper = document.querySelector('.framer-1iaudjf');
    if (wrapper) {
      wrapper.style.overflow = 'visible';
    }
  }, []);

  const progress = (activeCard + 1) / STORY_CARDS.length;

  return (
    <div ref={sectionRef} className="opp-section">
      {/* LEFT — sticky panel */}
      <div className="opp-left-wrap">
        <div ref={leftRef} className="opp-left">
          <p className="opp-left-label">The Opportunity</p>
          <h2 className="opp-left-headline">Scarcity,<br/>rising demand,<br/>and strong <br/>long-term pricing.</h2>
          <p className="opp-left-sub">
            A market built on structural tailwinds — and a supply gap only managed cultivation can bridge.
          </p>

          {/* Progress indicator */}
          <div className="opp-progress-wrap">
            <div className="opp-progress-track">
              <motion.div
                className="opp-progress-fill"
                animate={{ height: `${progress * 100}%` }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="opp-progress-labels">
              {STORY_CARDS.map((c, i) => (
                <motion.span
                  key={c.id}
                  animate={{ opacity: i === activeCard ? 1 : 0.35, fontWeight: i === activeCard ? 600 : 400 }}
                  transition={{ duration: 0.3 }}
                  className="opp-progress-label"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    const els = document.querySelectorAll('.opp-right-panel');
                    if (els[i]) {
                      els[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  {c.eyebrow}
                </motion.span>
              ))}
            </div>
          </div>

         
        </div>
      </div>

      {/* RIGHT — scrolling cards */}
      <div className="opp-right">
        {STORY_CARDS.map((card, i) => (
          <StoryBlock key={card.id} card={card} index={i} onActive={setActiveCard} />
        ))}
      </div>
    </div>
  );
}

export default function InvestorsPage() {
  const [activePillar, setActivePillar] = useState(null);

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

      {/* 2. THE OPPORTUNITY — editorial scroll story */}
      <OpportunitySection />

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
          Agarwood's growth isn't built on a single trend. It's supported by several established, durable
          markets pulling demand forward simultaneously — which makes the opportunity more resilient over the long term.
        </p>
        <motion.div variants={staggerContainer} className="inv-pillars-grid">
          {DEMAND_PILLARS.map((item) => (
            <motion.div key={item.title} variants={cardAnimation} className="inv-pillar-card" style={{ padding: '0', overflow: 'hidden' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '28px' }}>
                <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', fontWeight: 600, marginBottom: '8px' }}>{item.share}</p>
                <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgb(112,112,112)', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '14px', color: 'rgb(112,112,112)', marginTop: '32px', textAlign: 'center' }}>
          Geographically, Asia Pacific leads the global market with roughly <strong>38% share</strong> — placing India-based cultivation close to both the source and the most active buyers.
        </p>
      </motion.section>

      {/* 5. WHY THE MRIDA MODEL WORKS */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} className="inv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>The Model</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 16px' }}>Why the Mrida Model Works for Investors</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '48px', maxWidth: '720px' }}>
          We've built an operation that transforms a slow, uncertain natural event into a planned,
          accountable, and repeatable process — one that scales consistently across sites without
          compromising quality, traceability, or farmer fairness.
        </p>
        <motion.div variants={staggerContainer} className="inv-pillars-grid">
          {MRIDA_MODEL_PILLARS.map((pillar, i) => (
            <motion.div key={pillar.title} variants={cardAnimation} className="inv-pillar-card"
              onMouseEnter={() => setActivePillar(i)} onMouseLeave={() => setActivePillar(null)}
              style={{ borderColor: activePillar === i ? 'var(--token-97443185-d1fc-462c-b307-21c354347358)' : 'rgba(0,0,0,0.08)' }}
            >
              <div className="inv-pillar-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="inv-pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 6. ROI LOGIC AND VALUE DRIVERS */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.15 }} className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Returns</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 48px' }}>ROI Logic and Value Drivers</h2>
        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {ROI_DRIVERS.map((driver, i) => (
            <motion.div key={driver.title} variants={cardAnimation}
              style={{ display: 'flex', gap: '28px', padding: '28px 0', borderBottom: '1px solid rgba(0,0,0,0.07)', alignItems: 'flex-start' }}
            >
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', minWidth: '28px', paddingTop: '4px' }}>{String(i + 1).padStart(2, '0')}</div>
              <div style={{ color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', paddingTop: '2px', flexShrink: 0 }}>{driver.icon}</div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px' }}>{driver.title}</h3>
                <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', lineHeight: '1.6', margin: 0 }}>{driver.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '13px', color: 'rgb(112,112,112)', fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '20px', marginTop: '8px' }}>
          All ROI considerations above are illustrative and based on third-party market projections. They are not guarantees of returns. Agarwood is a long-term agricultural asset, and actual outcomes depend on harvest, market, and operational conditions.
        </p>
      </motion.section>

      {/* 7. RISK AND MITIGATION */}
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

      {/* 8. THE INDIA ADVANTAGE */}
      <motion.section
        variants={sectionReveal} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Geography</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '12px 0 16px' }}>The India Advantage</h2>
        <p className="inv-vision-statement-sub" style={{ marginBottom: '48px', maxWidth: '680px' }}>
          India is one of the world's most favourable environments for Agarwood cultivation — and growing institutional support is reinforcing that position.
        </p>
        <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {INDIA_ADVANTAGE.map((item, i) => (
            <motion.div key={item.val} variants={cardAnimation}
              style={{ display: 'flex', gap: '24px', padding: '28px 32px', background: '#fff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '16px', alignItems: 'flex-start' }}
            >
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195,96,54))', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
              <div>
                <p style={{ fontSize: '17px', fontWeight: 700, margin: '0 0 8px', color: 'rgb(0,0,0)' }}>{item.val}</p>
                <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', margin: 0, lineHeight: '1.6' }}>{item.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p style={{ fontSize: '15px', color: 'rgb(112,112,112)', marginTop: '32px', lineHeight: '1.7' }}>
          Taken together — ideal geography, institutional backing, and a professionally managed partnership model — Mrida's Agarwood cultivation investment is both credible and well-timed.
        </p>
      </motion.section>

      {/* 9. CLOSING CTA */}
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

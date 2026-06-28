import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  { title: 'Fragrance and Perfumery', description: 'The largest demand driver, used in luxury perfume, attar, and oud-based scents across Middle Eastern, Asian, and European markets.', image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Wellness', description: 'A growing appetite for natural, premium botanicals across aromatherapy, self-care, and rituals.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Incense', description: 'Deep-rooted cultural and religious demand across Asia and the Middle East, Gulf states.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&q=80&auto=format' },
  { title: 'Traditional Medicine', description: 'Long-held use in respected traditional medicine systems with consistent, loyal demand.', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop&q=80&auto=format' },
];

const ROI_DRIVERS = [
  { title: 'Scarcity Supports Pricing', description: 'Limited natural supply against rising demand creates structural support for value over time.', icon: <IconTrendUp /> },
  { title: 'Inoculation Creates the Asset', description: 'Professional inoculation transforms a standard mature tree into a resin-bearing, high-value commodity.', icon: <IconLeaf /> },
  { title: 'Global Market Access', description: 'Our established buyer network connects harvests directly to premium buyers across the Middle East and Asia.', icon: <IconTractor /> },
  { title: 'A Long-Term Horizon', description: 'Agarwood rewards patience. The 5+ year timeline aligns naturally with value development.', icon: <IconRefresh /> },
  { title: 'Diversified Demand', description: 'Across fragrance, wellness, incense, and medicine, demand is spread across multiple durable sectors.', icon: <IconUsers /> },
  { title: 'Prime Production zones', description: 'Cultivated in prime Indian belts with optimal climate and soil conditions.', icon: <IconShield /> },
];

const PROCESS_STEPS = [
  { step: '01', name: 'Survey', desc: 'Assessing trees for eligibility.' },
  { step: '02', name: 'Agree', desc: 'Signing terms on shared arrangements.' },
  { step: '03', name: 'Inoculate', desc: 'Injecting trees to trigger resin development.' },
  { step: '04', name: 'Monitor', desc: 'Tracking tree health and resin progress.' },
  { step: '05', name: 'Harvest', desc: 'Scientific extraction of Agarwood chips.' },
  { step: '06', name: 'Settle', desc: 'Connecting chips to markets and returns settlement.' },
];

const JOURNEY = [
  { year: 'Stage 1', title: 'Site Survey & Selection', desc: 'Identifying eligible Aquilaria trees and generating unique Site IDs.' },
  { year: 'Stage 2', title: 'Partnership Execution', desc: 'Signing arrangements with the landowner and executing upfront terms.' },
  { year: 'Stage 3', title: 'Professional Inoculation', desc: 'Administering professional inoculants to trigger Agarwood formation.' },
  { year: 'Stage 4', title: 'Ongoing Monitoring', desc: 'Checking tree vitals and wood transformation cycles over a 5+ year span.' },
  { year: 'Stage 5', title: 'Maturity & Grading', desc: 'Delineating resin concentration to categorize premium Agarwood chips.' },
  { year: 'Stage 6', title: 'Harvest & Settlement', desc: 'Scientific extraction and sale distribution per agreement terms.' },
];

const RISK_TABLE = [
  { risk: 'Long Maturity Timeline', mitigation: 'A long-term (5+ year) model with upfront farmer payments keeps partnerships stable and supply dependable through the full cycle.' },
  { risk: 'Inoculation & Yield Variability', mitigation: 'Proven inoculation methods, professional monitoring, and tree-by-tree tracking support consistent, reliable resin development.' },
  { risk: 'Supply Reliability', mitigation: 'Fair farmer partnerships and signed agreements secure dependable, long-term access to mature Agarwood trees.' },
  { risk: 'Transparency & Accounting', mitigation: 'Unique Site and Tree Numbers deliver full traceability from tagging through to final settlement.' },
  { risk: 'Market & Price Movement', mitigation: 'Demand diversified across fragrance, wellness, incense, and medicine — supported by multiple global buyer markets.' },
  { risk: 'Compliance', mitigation: 'Farmers secure required permissions; all commercial terms are documented and confirmed before any work begins.' },
];

const INDIA_ADVANTAGE = [
  { val: '₹80 Crore Scheme', label: 'Government’s scheme signals institutional commitment to Indian Agarwood.' },
  { val: '35% Global Share', label: 'Asia Pacific market dominance close to key buyer terminals.' },
  { val: 'Assam & Tripura', label: 'Prime climate and natural soil conditions for Aquilaria cultivation.' },
  { val: 'Traceable Supply', label: 'Complete validation from inoculation through export shipment.' },
];

const METRICS = [
  { value: '5+ Years', title: 'Partnership Horizon', sub: 'Aligning timeline with natural resin formation' },
  { value: '20%', title: 'Upfront Tree Payment', sub: 'Guaranteed purchase paid at partnership start' },
  { value: '100%', title: 'Tree Traceability', sub: 'Logged via Site Number and Tree Number' },
  { value: '7.61% CAGR', label: 'Chip Market Growth', sub: 'Global projection between 2025 and 2035' },
  { value: 'Zero Cost', title: 'Inoculation Expense', sub: 'Funded and executed entirely by Mrida' },
  { value: 'Prime Belts', title: 'Indian Production', sub: 'Cultivated in ideal climate and soils' },
];

const PRESS = [
  { publication: 'Precedence Research', title: 'Global Agarwood chips market projected to grow from $44.29B to $90.56B.' },
  { publication: 'Market Outlook', title: 'How traceability frameworks are securing the supply of premium resin.' },
  { publication: 'Agricultural Excellence', title: 'Managed partnership models are stabilizing the Indian Agarwood trade.' }
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

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_CURVE }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_CURVE }
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

export default function InvestorsPage() {
  const [activePillar, setActivePillar] = useState(null);

  useEffect(() => {
    document.title = 'Agarwood Cultivation Investment in India | Mrida Infra & Plantations';
  }, []);

  return (
    <div className="inv-page-redesign">
      {/* 1. HERO SECTION (Unchanged layout, restored Agarwood copy) */}
      <section className="contact-hero" style={{ maxWidth: '1200px', margin: '0 auto', padding: '140px 30px 60px' }}>
        <p className="contact-eyebrow">Investors</p>
        <h1>Invest in One of the World's Most Valuable Commodities</h1>
        <p className="contact-hero-sub">
          Agarwood — the resin the world calls "liquid gold" — sits at the heart of a fast-growing 
          global market. Mrida cultivates Agarwood, backed by traceable cultivation methods across 
          India's prime Agarwood-producing belts.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      {/* 2. INVESTMENT VISION (Restored original opportunity copy) */}
      <motion.section 
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="inv-redesign-section"
      >
        <div className="inv-vision-layout">
          <div className="inv-vision-title-area">
            <p className="contact-eyebrow" style={{ marginBottom: '16px' }}>The Opportunity</p>
            <h2 className="inv-vision-huge-statement">
              scarcity, rising demand, and strong long-term pricing.
            </h2>
          </div>
          <div className="inv-vision-content-area">
            <p className="inv-vision-statement-sub" style={{ marginBottom: '24px' }}>
              Few natural commodities combine genuine scarcity, rising demand, and strong long-term 
              pricing the way Agarwood does. The resin that forms inside Aquilaria trees is one of the 
              most sought-after raw materials in fragrance, wellness, incense, and traditional medicine 
              markets worldwide.
            </p>
            <p className="inv-vision-statement-sub">
              The challenge has always been supply — wild Agarwood is scarce and slow to mature, and 
              farmers who control trees lack the scale, capital, and operational expertise needed to produce 
              resin at scale. That gap is exactly where Mrida's structured, scalable cultivation framework comes in.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 3. WHY INVEST IN THE MRIDA MODEL (Pillars with original ROI drivers) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className="inv-redesign-section" 
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Why Invest</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '40px' }}>ROI Logic and Value Drivers</h2>
        
        <motion.div 
          variants={staggerContainer}
          className="inv-pillars-grid"
        >
          {ROI_DRIVERS.map((pillar, i) => (
            <motion.div 
              key={pillar.title} 
              variants={cardAnimation}
              className="inv-pillar-card"
              onMouseEnter={() => setActivePillar(i)}
              onMouseLeave={() => setActivePillar(null)}
              style={{
                borderColor: activePillar === i ? 'var(--token-97443185-d1fc-462c-b307-21c354347358)' : 'rgba(0,0,0,0.08)'
              }}
            >
              <div className="inv-pillar-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="inv-pillar-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 4. THE BUSINESS MODEL (Original 6 steps workflow) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Operational framework</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '60px' }}>The Five-Step Repeatable Playbook</h2>
        
        <motion.div 
          variants={staggerContainer}
          className="inv-process-container"
        >
          <div className="inv-process-line"></div>
          {PROCESS_STEPS.map((step) => (
            <motion.div 
              key={step.name} 
              variants={nodeAnimation}
              className="inv-process-node"
            >
              <div className="inv-process-circle">{step.step}</div>
              <h4>{step.name}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 5. GROWTH JOURNEY (Alternating Left/Right History Timeline) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className="inv-redesign-section" 
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Value Journey</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '60px' }}>Cultivation Cycle Milestones</h2>
        
        <div className="inv-timeline-wrapper">
          <div className="inv-timeline-track"></div>
          {JOURNEY.map((item, idx) => (
            <motion.div 
              key={item.title} 
              variants={idx % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="inv-timeline-item"
            >
              <div className="inv-timeline-dot"></div>
              {idx % 2 === 0 ? (
                <>
                  <div className="inv-timeline-col inv-timeline-left-align">
                    <div className="inv-timeline-year">{item.year}</div>
                    <div className="inv-timeline-card">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                  <div className="inv-timeline-col"></div>
                </>
              ) : (
                <>
                  <div className="inv-timeline-col"></div>
                  <div className="inv-timeline-col inv-timeline-right-align">
                    <div className="inv-timeline-year">{item.year}</div>
                    <div className="inv-timeline-card">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 6. MARKET OPPORTUNITY (Original chip market CAGR stats) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        className="inv-redesign-section"
      >
        <p className="contact-eyebrow">Market Demand</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '16px 0 32px' }}>A Global Market Built on Growth</h2>
        <div className="inv-market-grid">
          <div className="inv-market-desc" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="inv-vision-statement-sub" style={{ marginBottom: '20px' }}>
              The global Agarwood chips market is witnessing consistent volume expansions. Deep-rooted cultural demand 
              across key Asian and Middle Eastern buyer terminals is coupled with limited wild supply.
            </p>
            <p className="inv-vision-statement-sub">
              India based Agarwood cultivation places plantations close to key source and buyer corridors. Mrida's 
              framework enables investors to capture this structural supply gap.
            </p>
          </div>
          <motion.div 
            variants={staggerContainer}
            className="inv-market-visual"
          >
            {INDIA_ADVANTAGE.map((opt, i) => (
              <motion.div 
                key={opt.val} 
                variants={nodeAnimation}
                className={`inv-market-stat-box ${i === 2 ? 'inv-market-stat-box-large' : ''}`}
              >
                <div className="inv-market-stat-val">{opt.val}</div>
                <div className="inv-market-stat-lbl">{opt.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 7. COMPETITIVE ADVANTAGES (Original Risk Table Mitigations) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        className="inv-redesign-section" 
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow">Risk Profile</p>
        <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '16px 0 12px' }}>Risk and Mitigation</h2>
        <p style={{ color: 'rgb(112,112,112)', fontSize: '16px', marginBottom: '30px' }}>A documented view of how the Mrida model addresses key agricultural risk factors.</p>
        
        <div className="inv-comparison-box">
          <div className="inv-comp-header">
            <div>Risk Category</div>
            <div>Potential Hazard</div>
            <div style={{ color: 'var(--token-97443185-d1fc-462c-b307-21c354347358)' }}>Mrida Mitigation</div>
          </div>
          <motion.div variants={staggerContainer}>
            {RISK_TABLE.map((comp) => (
              <motion.div 
                key={comp.risk} 
                variants={cardAnimation}
                className="inv-comp-row"
              >
                <div className="inv-comp-feature">{comp.risk}</div>
                <div className="inv-comp-bad">High variability, regulatory restrictions and maturity timeline delays.</div>
                <div className="inv-comp-good">{comp.mitigation}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 8. WHAT'S DRIVING DEMAND (Demand pillars grid) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Demand sectors</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '60px' }}>What's Driving Global Demand</h2>
        
        <motion.div 
          variants={staggerContainer}
          className="inv-pillars-grid"
        >
          {DEMAND_PILLARS.map((item) => (
            <motion.div 
              key={item.title} 
              variants={cardAnimation}
              className="inv-pillar-card"
              style={{ padding: '0px', overflow: 'hidden' }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '18px', margin: '0 0 12px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgb(112, 112, 112)', lineHeight: '1.5' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 9. BUSINESS METRICS (Stats Dashboard with original values) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        className="inv-redesign-section" 
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Summary Metrics</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '40px' }}>The Opportunity in Numbers</h2>
        <div className="inv-metrics-panel">
          {METRICS.map((metric) => (
            <motion.div 
              key={metric.title || metric.value} 
              variants={nodeAnimation}
              className="inv-metric-tile"
            >
              <div className="inv-metric-huge-val">{metric.value}</div>
              <div className="inv-metric-title">{metric.title || 'Market CAGR'}</div>
              <p className="inv-metric-sub">{metric.sub || metric.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 10. MEDIA RECOGNITION (Press Showcase with original precedence research citations) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionReveal}
        className="inv-redesign-section"
      >
        <p className="contact-eyebrow" style={{ textAlign: 'center', marginBottom: '12px' }}>Recognition</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 600, marginBottom: '40px' }}>Market Projections & Citations</h2>
        <div className="inv-press-container">
          <motion.div 
            variants={staggerContainer}
            className="inv-press-marquee"
          >
            {PRESS.map((item) => (
              <motion.div 
                key={item.publication} 
                variants={nodeAnimation}
                className="inv-press-item"
              >
                <div className="inv-press-publication">{item.publication}</div>
                <p className="inv-press-title">"{item.title}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 11. INVESTOR CTA (Restored original talk team CTA copy) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardAnimation}
        style={{ padding: '40px 20px 100px' }}
      >
        <div className="inv-cta-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '0px' }}>
          <div className="inv-cta-accent-dot"></div>
          <h2>Ready to Explore the Opportunity?</h2>
          <p>
            If you're looking for a scalable, managed, and traceable entry into one of the world's 
            most valuable commodities, let's talk through what an Agarwood cultivation investment with 
            Mrida can mean for your portfolio.
          </p>
          <div className="inv-cta-btn-group">
            <Link to="/contact" className="btn-primary">Partner With Us</Link>
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
            <Link to="/contact" className="btn-secondary" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>Request Investor Deck</Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

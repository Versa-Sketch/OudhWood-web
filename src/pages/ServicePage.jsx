import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── Inline SVG Icons for Services Page ── */
const IconSearch = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconFileText = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
  </svg>
);

const IconDroplet = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);

const IconEye = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const IconSprout = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V10"></path>
    <path d="M12 10a6 6 0 0 1 6-6"></path>
    <path d="M12 14a6 6 0 0 0-6-6"></path>
  </svg>
);

const IconTarget = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
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

const IconShield = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconTrendingUp = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const IconHeart = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
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

const IconLeaf = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 20 11 20z"></path>
    <path d="M19 2L9.8 11.2"></path>
  </svg>
);

const WORKFLOW_STEPS = [
  {
    title: 'Survey',
    description: 'We visit your site, assess every tree for eligibility, and tag every eligible tree with a unique, traceable number.',
    image: 'https://images.unsplash.com/photo-1758343660101-10ee4fa1ca68?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconSearch />
  },
  {
    title: 'Split & Agree',
    description: 'We confirm the 20% upfront vs. shared-arrangement terms for every tree on your land, and we both sign before any work begins.',
    image: 'https://images.unsplash.com/photo-1517200578024-62d131797ec8?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconFileText />
  },
  {
    title: 'Inoculate',
    description: 'Professional inoculation transforms a mature tree into a resin-bearing, high-value commodity ready for premium markets — entirely at our expense.',
    image: 'https://images.unsplash.com/photo-1763229759060-50db1e4bf9ad?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconDroplet />
  },
  {
    title: 'Monitor',
    description: 'We monitor tree health and resin development throughout, covering all inoculation and monitoring costs on your shared trees.',
    image: 'https://images.unsplash.com/photo-1680614038587-9de698612c78?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconEye />
  },
  {
    title: 'Harvest & Settle',
    description: 'Mrida manages harvesting, grading, sale, and full coordination with buyers, then shares the remaining returns per your signed agreement.',
    image: 'https://images.unsplash.com/photo-1730086144061-769be13b08e5?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconSprout />
  },
  {
    title: 'Full Traceability',
    description: 'Every eligible Agarwood tree is individually tracked and tagged — a unique Site Number per plantation, a unique Tree Number per tree.',
    image: 'https://images.unsplash.com/photo-1782192496614-d2e98e5f96e0?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconTarget />
  },
];

const FLOW_STEPS = [
  { step: '01', title: 'Survey', desc: 'Eligibility checks and tag allocations.', icon: <IconSearch /> },
  { step: '02', title: 'Agreement', desc: 'Signing 20% vs. 80% terms before operations.', icon: <IconFileText /> },
  { step: '03', title: 'Inoculate', desc: 'Professional inoculation at Mrida\'s expense.', icon: <IconDroplet /> },
  { step: '04', name: 'Monitor', desc: 'Checking resin accumulation and vitals.', icon: <IconEye /> },
  { step: '05', title: 'Harvest', desc: 'Extracting resinous Agarwood chips.', icon: <IconSprout /> },
  { step: '06', title: 'Settlement', desc: 'Connecting harvests directly to buyer networks.', icon: <IconTarget /> },
];

const WHY_FARMERS = [
  { title: 'Guaranteed Upfront Income', description: 'On a minimum of 20% of your mature trees, paid at the start of the partnership before harvesting begins.', icon: <IconTrendingUp /> },
  { title: 'Zero Inoculation Cost', description: 'Your remaining trees are fully managed and professionally cared for by Mrida.', icon: <IconDroplet /> },
  { title: 'Full Land & Tree Ownership Retained', description: 'Your remaining trees stay yours throughout the partnership. Your land title remains untouched.', icon: <IconShield /> },
  { title: 'Transparent Profit Sharing', description: 'Sharing ratios confirmed in writing, with no hidden cuts or opaque deductions.', icon: <IconFileText /> },
  { title: 'Complete Traceability', description: 'Every tree individually numbered, logged, and tracked from tagging through to final settlement.', icon: <IconTarget /> },
  { title: 'Signed Agreements, No Surprises', description: 'All prices, sharing ratios, and responsibilities are written into agreement before any work begins.', icon: <IconHeart /> },
];

const RESPONSIBILITIES = [
  { num: '01', who: 'Farmer', text: 'Provide eligible mature Agarwood trees.' },
  { num: '02', who: 'Farmer', text: 'Maintain and protect trees through to harvest.' },
  { num: '03', who: 'Farmer', text: 'Secure required permissions from authorities.' },
  { num: '04', who: 'Mrida', text: 'Survey the site and tag every eligible tree.' },
  { num: '05', who: 'Mrida', text: 'Fund and carry out all professional inoculation.' },
  { num: '06', who: 'Mrida', text: 'Monitor tree health and resin development.' },
  { num: '07', who: 'Mrida', text: 'Cover all inoculation and monitoring costs.' },
  { num: '08', who: 'Mrida', text: 'Manage harvesting, grading, and sale.' },
  { num: '09', who: 'Mrida', text: 'Connect harvest to global buyers and markets.' },
];

const HARVEST_STEPS = [
  'Trees are harvested and sold — managed end to end through Mrida’s buyer network.',
  'Harvesting expenses are deducted transparently from total sale proceeds.',
  'Remaining returns are shared on the exact percentage agreed and fixed in your signed agreement.',
];

/* ── Scroll Animation Easing & Variants ── */
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

export default function ServicePage() {
  useEffect(() => {
    document.title = 'How Our Agarwood Farmer Partnership Works | Mrida Infra';
  }, []);

  return (
    <div className="contact-page srv-page-redesign">
      {/* 1. HERO SECTION */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Business Model</p>
        <h1>How Our Agarwood Farmer Partnership Works</h1>
        <p className="contact-hero-sub">
          A transparent, farmer-first partnership that puts real income in your hands today and 
          fair returns after harvest. Zero inoculation cost on your remaining trees, no hidden 
          fees — confirmed in writing before any work begins.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      {/* 2. TWO PARTS, ONE PARTNERSHIP & BUSINESS MODEL FLOW */}
      <motion.section 
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="srv-redesign-section"
      >
        <div className="srv-split-section">
          {/* Left Column: Text & Path Cards */}
          <div className="srv-left-col">
            <p className="contact-eyebrow" style={{ marginBottom: '12px' }}>Business Model</p>
            <h2 style={{ fontSize: '36px', fontWeight: 600, margin: '0 0 20px', letterSpacing: '-0.02em' }}>
              Two parts, one partnership
            </h2>
            <p className="contact-section-intro" style={{ maxWidth: '100%', margin: '0 0 28px' }}>
              Most farmers who own mature Agarwood trees have genuine, significant value — but unlocking 
              it through professional inoculation takes capital, expertise, and time most landowners 
              don't have. Mrida's mixed-arrangement model brings that opportunity to your land without 
              carrying any of that burden.
            </p>
            
            <div className="srv-left-paths">
              <div className="srv-left-path-card">
                <h3>Part 1 — The 20% Upfront Tree Purchase</h3>
                <p>
                  Paid at the start of the partnership, before any harvest. A minimum of 20%, not a fixed 
                  number — if you'd like to discuss selling a higher share, we're open to that 
                  conversation. Zero ongoing responsibility on purchased trees once bought.
                </p>
              </div>
              <div className="srv-left-path-card">
                <h3>Part 2 — The 80% Shared Arrangement</h3>
                <p>
                  Your remaining trees stay in your name. You provide eligible trees, maintain and 
                  protect them, and secure required permissions. Mrida funds inoculation, monitoring, 
                  and harvest at our own expense — you pay nothing toward it.
                </p>
              </div>
            </div>

            <div className="contact-cta-pair" style={{ marginTop: '35px' }}>
              <Link to="/contact" className="btn-primary">Partner With Us</Link>
              <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
            </div>
          </div>

          {/* Right Column: Visual Business Model Workflow */}
          <div className="srv-right-col">
            <div className="srv-flow-track"></div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {FLOW_STEPS.map((step) => (
                <motion.div 
                  key={step.title || step.step} 
                  variants={cardAnimation} 
                  className="srv-flow-card"
                >
                  <div className="srv-flow-icon-circle">
                    {step.icon}
                  </div>
                  <div className="srv-flow-content">
                    <div className="srv-flow-meta">
                      <span className="srv-flow-num">{step.step}</span>
                      <h4 className="srv-flow-title">{step.title || 'Monitor'}</h4>
                    </div>
                    <p className="srv-flow-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. PROCESS CYCLE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className="srv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <p className="contact-eyebrow">Our Process</p>
        <h2>Five Steps From Survey to Settlement</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px', marginBottom: '50px' }}>
          Every Mrida partnership follows the same clear, documented workflow — from the first site 
          visit to the final settlement payment. The process is the same on every site, so you always 
          know exactly where you stand.
        </p>
        
        <motion.div 
          variants={staggerContainer}
          className="srv-why-grid"
        >
          {WORKFLOW_STEPS.map((step) => (
            <motion.div 
              key={step.title} 
              variants={cardAnimation}
              className="srv-why-card"
            >
              <div className="srv-why-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 4. HARVEST SHARINGS */}
      <motion.section 
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="srv-redesign-section"
      >
        <h2>How Harvest Returns Are Shared</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px', marginBottom: '30px' }}>
          When the resin reaches its full potential, Mrida manages the harvest, sale, and full 
          coordination with buyers, monitoring quality and pricing step-by-step.
        </p>
        <ol className="bm-harvest-list">
          {HARVEST_STEPS.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <p className="contact-section-intro" style={{ maxWidth: '780px' }}>
          No surprise deductions. No revised terms after the fact. No ambiguity. Every figure traces 
          directly back to the trees tagged under your partnership.
        </p>
      </motion.section>

      {/* 5. RESPONSIBILITIES TABLE */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className="srv-redesign-section"
        style={{ backgroundColor: 'rgba(0,0,0,0.01)' }}
      >
        <h2>Partnership Responsibilities: Who Does What</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px' }}>
          A clear, documented division of responsibilities keeps the partnership fair, accountable, 
          and easy to follow at every stage — for both parties.
        </p>
        
        <div className="srv-table">
          <motion.div variants={staggerContainer}>
            {RESPONSIBILITIES.map((row) => (
              <motion.div 
                key={row.num} 
                variants={cardAnimation}
                className="srv-table-row"
              >
                <span className="srv-table-num">{row.num}</span>
                <span className="srv-table-text">{row.text}</span>
                <span className={`srv-table-who srv-table-who-${row.who.toLowerCase()}`}>{row.who}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 6. WHY CHOOSE MRIDA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className="srv-redesign-section"
      >
        <h2>Why Farmers Choose the Mrida Agarwood Farmer Partnership</h2>
        <p className="contact-section-intro" style={{ maxWidth: '780px' }}>
          Whether you own a few mature Agarwood trees or a full plantation, here's what makes our 
          partnership model worth your full attention.
        </p>
        
        <motion.div 
          variants={staggerContainer}
          className="srv-why-grid"
        >
          {WHY_FARMERS.map((item) => (
            <motion.div 
              key={item.title} 
              variants={cardAnimation}
              className="srv-why-card"
            >
              <div className="srv-why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="srv-trust-quote"
        >
          "Real income, guaranteed upfront, and a transparent share at the end."
        </motion.p>
      </motion.section>

      {/* 7. CLOSING CTA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardAnimation}
        style={{ padding: '40px 20px 100px' }}
      >
        <div className="inv-cta-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '0px' }}>
          <div className="inv-cta-accent-dot"></div>
          <h2>Ready to See What Your Trees Could Earn?</h2>
          <p>
            Whether you own a handful of mature Agarwood trees or a full plantation, this model is 
            built to deliver real income — guaranteed upfront and a transparent share at the end.
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

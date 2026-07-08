import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── Inline icons, matching the line-icon style already used in Why.jsx ── */
const IconFarmer = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c3-3 5-8 5-13 0 0 4 0 7 3s3 7 3 7-5 0-8-3" /><line x1="7" y1="22" x2="12" y2="17" />
  </svg>
);
const IconTransparent = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
  </svg>
);
const IconSustainable = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconFairness = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M5 8l-3 6a4 4 0 008 0l-3-6M19 8l-3 6a4 4 0 008 0l-3-6M5 8h14" />
  </svg>
);
const IconTraceability = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconPartnership = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconPayment = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);
const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c3-3 5-8 5-13 0 0 4 0 7 3s3 7 3 7-5 0-8-3" /><line x1="7" y1="22" x2="12" y2="17" />
  </svg>
);
const IconLand = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconManagement = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const IconTrace2 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
const IconAgreement = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
  </svg>
);
const IconTrendingUp = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const CORE_PRINCIPLES = [
  { title: 'Farmer-First', description: "We lead with the farmer's benefit: upfront income, zero inoculation cost on shared trees, and a clear share of returns.", icon: <IconFarmer /> },
  { title: 'Transparent', description: 'Every figure traces back to a tagged tree and a signed agreement. No hidden deductions, no moving terms.', icon: <IconTransparent /> },
  { title: 'Sustainable', description: 'We build long-term partnerships that strengthen rural livelihoods and create reliable, traceable supply.', icon: <IconSustainable /> },
];

const CORE_VALUES = [
  { title: 'Fairness', description: "We lead with the farmer's benefit, always. Prices, sharing ratios, and responsibilities are agreed in writing before any work begins — so what's promised is exactly what's delivered.", icon: <IconFairness /> },
  { title: 'Traceability', description: 'Every plantation site carries a unique Site Number, and every eligible tree a unique Tree Number, logged through inoculation, inspection, harvest, and sale. Sold trees and shared trees are flagged separately, so accounting stays clear from tagging to settlement.', icon: <IconTraceability /> },
  { title: 'Partnership', description: "We don't see farmers as suppliers or investors as outsiders. We see partners. A fair farmer partnership secures reliable supply and strengthens the long-term sustainability of everything we build.", icon: <IconPartnership /> },
];

const MODEL_STEPS = [
  { number: '01', title: 'The 20% Upfront Purchase', description: 'We buy a minimum of 20% of your eligible mature Agarwood trees at an agreed price, paid upfront. That gives farmers guaranteed income from day one, with zero risk on the trees we purchase.' },
  { number: '02', title: 'The 80% Shared Arrangement', description: "The remaining trees stay in the farmer's name. We fund and manage the entire inoculation and monitoring process at our own cost. After harvest and sale, harvesting expenses are deducted, and the remaining returns are shared transparently." },
  { number: '03', title: 'Why It Works for Investors Too', description: 'Because farmers earn upfront and again at harvest, partnerships stay stable and supply stays dependable over the long term — giving investors a scalable, managed, and traceable Agarwood cultivation model rather than a patchwork of moving parts.' },
];

const APART_CARDS = [
  { title: 'Upfront Payment, Real Income', description: 'Farmers earn from day one, not just at a distant harvest.', icon: <IconPayment /> },
  { title: 'Zero Inoculation Cost for Farmers', description: 'We fund and manage inoculation and monitoring on shared trees entirely at our own expense.', icon: <IconLeaf /> },
  { title: 'Land Stays With the Farmer', description: "Only the minimum 20% of purchased trees transfer to us; the rest stay in the farmer's name.", icon: <IconLand /> },
  { title: 'End-to-End Management', description: 'We handle survey, tagging, inoculation, monitoring, harvesting, grading, and sale through our buyer network.', icon: <IconManagement /> },
  { title: 'Full Traceability', description: 'Unique Site and Tree Numbers mean every figure is accountable and every tree is trackable.', icon: <IconTrace2 /> },
  { title: 'Signed Agreements, No Surprises', description: 'All terms are confirmed in writing before any work begins.', icon: <IconAgreement /> },
];

const IMPACT_STATS = [
  { value: '20', suffix: '%+', label: 'Upfront Tree Payment' },
  { value: '100', suffix: '%', label: 'Tree Traceability' },
  { value: '5', suffix: '+', label: 'Year Partnership Horizon' },
  { value: '0', suffix: '', label: 'Inoculation Cost to Farmers' },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Mrida Infra & Plantations Agarwood Farmer Partnership India';
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="ab-hero-section">
        <div className="ab-hero-inner">
          <div className="ab-hero-title">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              Building a Fairer Future for Agarwood Farmers in India
            </motion.h1>
          </div>
          <div className="ab-hero-details">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Mrida Infra and Plantations LLP exists for one reason: to help farmers earn real value from their mature Agarwood trees, while building a transparent, traceable supply for one of the world's most valuable commodities. We put farmers first, share returns fairly, and back every promise with a signed agreement.
            </motion.p>
            <motion.div className="ab-hero-actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-primary">
                Talk to Our Team
                <span className="ab-btn-dot"></span>
              </a>
              <Link to="/contact" className="ab-btn ab-btn-secondary">
                Partner With Us
                <span className="ab-btn-dot"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Banner image */}
      <section className="ab-main-banner">
        <div className="ab-banner-wrap">
          <img src="https://images.unsplash.com/photo-1730086144061-769be13b08e5?w=2048&h=900&fit=crop&q=85&auto=format" alt="A mature Agarwood plantation in India at golden hour" />
          <div className="ab-banner-overlay" />
        </div>
      </section>

      {/* Who We Are — text + image split for visual rhythm */}
      <motion.section className="ab-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
        <div className="ab-section-inner">
          <div className="ab-split-layout">
            <div className="ab-split-text">
              <p className="contact-eyebrow">Who We Are</p>
              <h2 className="ab-section-heading">A simple belief: the people who own the trees deserve a fair share of the value those trees create</h2>
              <p className="ab-lead">
                Mrida is an Agarwood cultivation and acquisition company built around a simple belief: the people who own the trees deserve a fair, honest share of the value those trees create.
              </p>
              <p className="ab-body">
                For years, farmers and landowners across India have held mature Agarwood trees with enormous potential — yet most never saw that value. They lacked the expertise, the inoculation materials, and the market access needed to turn standing trees into resin-bearing assets. We were founded to close that gap.
              </p>
              <p className="ab-body">
                We bring the method, the management, and the buyers. Farmers bring their land and their mature Agarwood trees. Together, we create a partnership that pays from day one and shares returns transparently at harvest.
              </p>
            </div>
            <div className="ab-split-image">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=1100&fit=crop&q=85&auto=format" alt="Agarwood farmland in India" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision — two premium cards */}
      <motion.section className="ab-section ab-section-tint" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
        <div className="ab-section-inner">
          {/* <p className="contact-eyebrow" style={{ textAlign: 'center' }}>Mission &amp; Vision</p> */}
          <h2 className="ab-section-heading ab-center">What we're building, and why</h2>
          <div className="ab-mv-grid">
            <motion.div className="ab-mv-card" variants={fadeUp}>
              <span className="ab-mv-card-tag">Our Mission</span>
              <p className="ab-mv-card-statement">To unlock the true value of India's mature Agarwood trees through a farmer-first, transparent, and sustainable partnership model.</p>
              <p className="ab-mv-card-body">We measure our success by the trust our partners place in us and the income they earn. Every survey we run, every tree we tag, and every payment we make is designed to keep that trust intact.</p>
            </motion.div>
            <motion.div className="ab-mv-card" variants={fadeUp}>
              <span className="ab-mv-card-tag">Our Vision</span>
              <p className="ab-mv-card-statement">We see an India where cultivating Agarwood is a respected, professionally managed
path to long-term prosperity-for farmers who own the trees and investors who back the
harvest alike.</p>
              <p className="ab-mv-card-body">As global demand for Agarwood climbs and supply stays scarce, we want managed
cultivation to become the credible answer to that gap. Our goal is a scalable model that
grows across India's prime production belts without ever losing the fairness it was built
on.
</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Principles — lightweight feature blocks, no card backgrounds */}
      <motion.section className="ab-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="ab-section-inner">
          <p className="contact-eyebrow" style={{ textAlign: 'center' }}>Core Principles</p>
          <h2 className="ab-section-heading ab-center">The three values behind every decision</h2>
          <div className="ab-feature-row">
            {CORE_PRINCIPLES.map((p, i) => (
              <motion.div className="ab-feature-block" key={p.title} variants={fadeUp}>
                {i > 0 && <span className="ab-feature-divider" />}
                <span className="ab-feature-block-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How We Work — stepper + feature grid + values */}
      <motion.section className="ab-section ab-section-tint" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp}>
        <div className="ab-section-inner">
          <p className="contact-eyebrow" style={{ textAlign: 'center' }}>How We Work</p>
          <h2 className="ab-section-heading ab-center">The story behind our model</h2>
          <p className="ab-lead ab-center">
Most Agarwood arrangements force a hard choice on farmers: sell your land and trees
outright for a one-time sum, or take on heavy inoculation costs and years of risk with no
guarantee of return. Neither felt fair. So we designed a third way.
We call it our mixed commercial acquisition model. It splits a farmer's eligible mature
Agarwood trees into two parts, balancing immediate income with long-term upside.          </p>

          <div className="ab-stepper">
            {MODEL_STEPS.map((step, i) => (
              <motion.div className="ab-stepper-item" key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}>
                <div className="ab-stepper-marker">
                  <span className="ab-stepper-num">{step.number}</span>
                  {i < MODEL_STEPS.length - 1 && <span className="ab-stepper-line" />}
                </div>
                <div className="ab-stepper-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
   <h3 className="ab-subsection-heading">Our Core Values</h3>
   <p className='ab-lead ab-center'>Three values guide every decision we make, every site we survey, and every partnership
we sign.</p>
          <div className="ab-value-strip">
            {CORE_VALUES.map((v) => (
              <motion.div className="ab-value-strip-item" key={v.title} variants={fadeUp}>
                <span className="ab-value-strip-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </motion.div>
            ))}
          </div>
          <h3 className="ab-subsection-heading" style={{ textAlign: 'center' }}>What Sets Mrida Apart</h3>
          <p className="ab-lead ab-center" style={{ textAlign: 'center' }}>Plenty of operations talk about Agarwood. Here's what makes our approach genuinely different.</p>
          <div className="ab-apart-grid">
            {APART_CARDS.map((card, i) => (
              <motion.div
                className="ab-apart-card"
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
              >
                <div className="ab-apart-card-accent" />
                <div className="ab-apart-card-icon-wrap">
                  {card.icon}
                </div>
                <h4 className="ab-apart-card-title">{card.title}</h4>
                <p className="ab-apart-card-desc">{card.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="ab-lead ab-center" style={{ marginTop: '32px' }}>
            One proven model. Fair to farmers. Credible for investors. Built to scale across India.
          </p>
        </div>
      </motion.section>

      {/* Why It Works for Investors Too */}
      <motion.section 
        className="ab-section ab-investor-section" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }} 
        variants={fadeUp}
      >
        <div className="ab-section-inner">
          <div className="ab-investor-split">
            <div className="ab-investor-left">
              <div className="process-badge">
                <span className="process-badge-dot" />
                <p className="process-badge-text">For Investors</p>
              </div>
              <h2 className="ab-investor-heading">Why It Works for Investors Too</h2>
              <div className="ab-investor-icon-big">
                <IconTrendingUp />
              </div>
            </div>
            <div className="ab-investor-right">
              <div className="ab-investor-card">
                <div className="ab-investor-card-accent" />
                <div className="ab-investor-content-block">
                  <h4 className="ab-investor-card-subtitle">Smart Business &amp; Long-Term Stability</h4>
                  <p className="ab-investor-text">
                    A fair farmer partnership isn't only the right thing to do—it's smart business. Because
                    farmers earn upfront and again at harvest, partnerships stay stable and supply stays
                    dependable over the long term.
                  </p>
                </div>
                <div className="ab-investor-divider" />
                <div className="ab-investor-content-block">
                  <h4 className="ab-investor-card-subtitle">Scalable, Managed &amp; Traceable</h4>
                  <p className="ab-investor-text">
                    That gives investors a scalable, managed, and traceable Agarwood cultivation model
                    rather than a patchwork of moving parts. Fairness at the source is what makes the whole
                    operation reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quote Banner */}
      <section className="ab-quote-banner">
        <div className="ab-quote-wrap" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1365&fit=crop&q=80&auto=format')` }}>
          <div className="ab-quote-darken" />
          <div className="ab-quote-inner">
            <p className="ab-quote-text">"We don't see farmers as suppliers or investors as outsiders. We see partners."</p>
            <div className="ab-quote-author">
              <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=200&fit=crop&q=80&auto=format" alt="Our Founding Principle" className="ab-quote-author-img" />
              <div>
                <p className="ab-quote-author-name">Mrida Infra &amp; Plantations</p>
                <p className="ab-quote-author-role">Our Founding Principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact — dedicated highlighted band, distinct from the light sections around it */}
      <motion.section className="ab-section ab-section-dark" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="ab-section-inner">
          <p className="contact-eyebrow ab-eyebrow-dark" style={{ textAlign: 'center' }}>Our Impact</p>
          <h2 className="ab-section-heading ab-center ab-heading-dark">Rooted in India's Agarwood Heartland</h2>
          <p className="ab-lead ab-center ab-lead-dark">
            India offers some of the best conditions in the world for cultivating mature Agarwood trees — ideal soil, climate, and a long tradition of high-quality resin, especially across prime belts like Assam and Tripura. The sector is gaining momentum too, with growing institutional support for the Agarwood value chain, making our farmer-first model both timely and credible.
          </p>
          <div className="ab-impact-grid">
            {IMPACT_STATS.map((s) => (
              <motion.div className="ab-impact-card" key={s.label} variants={fadeUp}>
                <p className="ab-impact-value">{s.value}<span>{s.suffix}</span></p>
                <p className="ab-impact-label">{s.label}</p>
              </motion.div>
            ))}
          </div>
          {/* <p className="ab-heartland-note ab-center">
            Note: Regional and sector details should be verified before relying on them for decisions.
          </p> */}
        </div>
      </motion.section>

      {/* CTA section */}
      <section className="ab-cta-section">
        <div className="ab-cta-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1536&fit=crop&q=80&auto=format')` }}>
          <div className="ab-cta-darken" />
          <div className="ab-cta-inner">
            <h2>Let's Build Something Valuable Together</h2>
            <p>
              Whether you own mature Agarwood trees or you're exploring a serious Agarwood cultivation investment, we'd love to tell you more about who we are and how our partnership works. The first step is simply a conversation — clear, honest, and with no pressure.
            </p>
            <div className="ab-cta-actions">
              <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-white">
                Talk to Our Team
                <span className="ab-btn-dot"></span>
              </a>
              <Link to="/contact" className="ab-btn ab-btn-secondary">
                Partner With Us
                <span className="ab-btn-dot"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

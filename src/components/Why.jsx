import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TC = 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))';
const TK = 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))';
const TG = 'var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))';
const BG = 'var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))';
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:      { opacity: 0, y: 22 },
  whileInView:  { opacity: 1, y: 0  },
  viewport:     { once: true, margin: '-60px' },
  transition:   { duration: 0.55, ease: EASE, delay },
});

const IconPayment = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c3-3 5-8 5-13 0 0 4 0 7 3s3 7 3 7-5 0-8-3"/><line x1="7" y1="22" x2="12" y2="17"/>
  </svg>
);
const IconTraceability = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);
const IconAgreement = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const COMMITMENTS = [
  {
    no: '01',
    title: 'Upfront Payment',
    label: 'Upfront Payment on Mature Agarwood Trees',
    description: 'We buy a minimum of 20% of your eligible mature Agarwood trees and pay you immediately at an agreed price. Real income, before inoculation even begins.',
    icon: <IconPayment />,
  },
  {
    no: '02',
    title: 'Zero Inoculation Cost',
    label: 'Zero Inoculation Cost on Your Remaining Trees',
    description: 'We fund and manage the full inoculation and monitoring process on your remaining trees, entirely at our own expense. You pay nothing - not a single rupee.',
    icon: <IconLeaf />,
  },
  {
    no: '03',
    title: 'Full Traceability',
    label: 'Full Tree-Level Traceability',
    description: 'Every eligible tree receives a unique Tree Number, tracked through inoculation, inspection, harvest, and final sale. Every figure traces back to your trees. Always.',
    icon: <IconTraceability />,
  },
  {
    no: '04',
    title: 'Signed Agreements',
    label: 'Signed Agreements Before Any Work Begins',
    description: 'All prices, sharing ratios, and responsibilities are confirmed in writing. No moving terms. No surprises. No exceptions.',
    icon: <IconAgreement />,
  },
];

const STYLES = `
  /* ─── Section Layout ─────────────────────────────────────────────────── */
  .why-section {
    padding: 62px 24px 60px;
    background-color: ${BG};
    width: 100%;
  }
  .why-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  /* ─── Responsive Two-Column Header ───────────────────────────────────── */
  .why-header {
    display: grid;
    grid-template-columns: 60fr 40fr;
    gap: 48px;
    align-items: center;
    margin-bottom: 72px;
    width: 100%;
  }
  .why-header-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .why-badge-row {
    margin-bottom: 24px;
  }
  .why-heading {
    font-size: clamp(2rem, 3.2vw, 2.6rem);
    font-weight: 750;
    line-height: 1.2;
    letter-spacing: -0.035em;
    color: ${TK};
    margin: 0;
    max-width: 620px;
    text-wrap: balance;
  }
  .why-header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .why-header-desc {
    font-size: 1.05rem;
    line-height: 1.68;
    color: ${TG};
    margin: 0;
  }

  /* ─── Trust Grid Container ───────────────────────────────────────────── */
  .why-grid-layout {
    width: 100%;
    box-sizing: border-box;
  }

  /* ─── Trust Dashboard Hero Panel ─────────────────────────────────────── */
  .why-dashboard {
    background: #ffffff;
    border: 1px solid rgba(26, 21, 18, 0.06);
    border-radius: 24px;
    box-shadow: var(--pw-shadow-lg);
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .why-dashboard::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${TC} 0%, rgba(195, 96, 54, 0.2) 100%);
  }

  .why-db-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .why-db-eyebrow {
    font-size: 0.72rem;
    font-weight: 850;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${TC};
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 0;
  }
  .why-db-eyebrow-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${TC};
  }
  .why-db-desc {
    font-size: 0.95rem;
    line-height: 1.5;
    color: ${TG};
    margin: 0;
  }

  .why-db-divider {
    height: 1px;
    background: rgba(26, 21, 18, 0.07);
    width: 100%;
    margin: 28px 0;
  }

  .why-db-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }
  .why-metric-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .why-metric-value {
    font-size: clamp(2.4rem, 3.8vw, 3.2rem);
    font-weight: 850;
    letter-spacing: -0.04em;
    color: ${TK};
    line-height: 1;
    margin-bottom: 6px;
  }
  .why-metric-label {
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.35;
    color: ${TG};
  }

  .why-db-verification {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 20px;
  }
  .why-verif-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.86rem;
    font-weight: 700;
    color: rgb(70, 65, 60);
  }
  .why-verif-check {
    color: #22c55e;
    flex-shrink: 0;
  }

  /* ─── Commitment Cards Grid (2x2) ────────────────────────────────────── */
  .why-commitments-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    height: 100%;
    width: 100%;
  }

  .why-commitments-grid > div {
    display: flex;
  }

  .why-card {
    background: #ffffff;
    border: 1px solid rgba(26, 21, 18, 0.06);
    border-radius: 24px;
    box-shadow:
      0 1px 3px rgba(26, 21, 18, 0.02),
      0 8px 32px -12px rgba(26, 21, 18, 0.06);
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    text-decoration: none;
    transition:
      transform        0.28s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow       0.28s cubic-bezier(0.16, 1, 0.3, 1),
      border-color     0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .why-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--pw-shadow-lg);
    border-color: ${TC};
  }

  .why-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .why-card-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(195, 96, 54, 0.05);
    border: 1px solid rgba(195, 96, 54, 0.08);
    color: ${TC};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .why-card:hover .why-card-icon {
    transform: scale(1.08);
  }

  .why-card-step-num {
    font-size: 0.85rem;
    font-weight: 850;
    letter-spacing: 0.05em;
    color: ${TG};
    opacity: 0.6;
  }

  .why-card-title {
    font-size: 1.15rem;
    font-weight: 750;
    color: ${TK};
    margin: 0 0 10px;
    line-height: 1.35;
    letter-spacing: -0.01em;
  }
  
  .why-card-desc {
    font-size: 0.92rem;
    line-height: 1.6;
    color: ${TG};
    margin: 0 0 20px;
  }

  .why-card-cta {
    font-size: 0.88rem;
    font-weight: 750;
    color: ${TC};
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: auto;
  }
  .why-card-cta span {
    transition: transform 0.25s ease;
  }
  .why-card:hover .why-card-cta span {
    transform: translateX(4px);
  }

  /* ─── Responsive Layouts ──────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .why-header {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-bottom: 56px;
    }
  }

  @media (max-width: 768px) {
    .why-section {
      padding: 80px 24px 88px;
    }
    .why-commitments-grid {
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    .why-dashboard {
      padding: 40px;
    }
  }

  @media (max-width: 640px) {
    .why-section {
      padding: 56px 16px 64px;
    }
    .why-commitments-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .why-dashboard {
      padding: 32px 24px;
    }
    .why-db-metrics {
      grid-template-columns: 1fr 1fr;
      gap: 24px 16px;
    }
    .why-card {
      padding: 24px;
      min-height: auto;
    }
    .why-db-verification {
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
  }
`;

export default function Why() {
  return (
    <>
      <style>{STYLES}</style>
      <section className="why-section" id="how-it-works" style={{paddingTop:30}}>
        <div className="why-inner">

          {/* Two-Column Responsive Header */}
          <div className="why-header">
            <div className="why-header-left">
              <motion.div className="why-badge-row" {...fadeUp(0)}>
                <div className="process-badge">
                  <span className="process-badge-dot" />
                  <p className="process-badge-text">Our Commitments</p>
                </div>
              </motion.div>
              <motion.h2 className="why-heading" {...fadeUp(0.05)}>
                Four Commitments Every Agarwood Farmer Partnership Must Have - Confirmed in Writing Before We Begin
              </motion.h2>
            </div>
            <div className="why-header-right">
              <motion.p className="why-header-desc" {...fadeUp(0.1)}>
                Every Mrida partnership starts with four non-negotiable promises. They don't change at harvest. They don't shift with the market. They're locked into your signed agreement from day one.
              </motion.p>
            </div>
          </div>

          {/* Grid Layout: Trust Dashboard + Commitment Grid */}
          <div className="why-grid-layout">
            
            {/* Left Column: Trust Dashboard */}
            

            {/* Right Column: 2x2 Commitment Grid */}
            <div className="why-commitments-grid">
              {COMMITMENTS.map((c, idx) => (
                <motion.div key={c.no} {...fadeUp(0.2 + idx * 0.05)}>
                  <Link to="/project" className="why-card">
                    <div className="why-card-top">
                      <div className="why-card-icon">
                        {c.icon}
                      </div>
                      <span className="why-card-step-num">{c.no}</span>
                    </div>
                    <h3 className="why-card-title">{c.title}</h3>
                    <p className="why-card-desc">{c.description}</p>
                    <div className="why-card-cta">
                      Learn More <span>→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TC   = 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))';
const TK   = 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))';
const TG   = 'var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))';
const BG   = 'var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))';
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:      { opacity: 0, y: 22 },
  whileInView:  { opacity: 1, y: 0  },
  viewport:     { once: true, margin: '-60px' },
  transition:   { duration: 0.55, ease: EASE, delay },
});

const STYLES = `
  /* ─── Section shell ──────────────────────────────────────────────────── */
  .ach-section {
    padding: 60px 24px 60px;
    background-color: ${BG};
  }
  .ach-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  /* ─── Header block (60/40 Layout) ────────────────────────────────────── */
  .ach-header {
    display: grid;
    grid-template-columns: 60fr 40fr;
    gap: 40px;
    width: 100%;
    margin-bottom: 56px;
  }
  .ach-header-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .ach-badge-row {
    margin-bottom: 24px;
  }
  .ach-heading {
    font-size: clamp(2.1rem, 3.2vw, 2.8rem);
    font-weight: 750;
    line-height: 1.18;
    letter-spacing: -0.035em;
    color: ${TK};
    margin: 0 0 24px;
    max-width: 650px;
    text-wrap: balance;
  }
  .ach-desc {
    font-size: 1.05rem;
    line-height: 1.7;
    color: ${TG};
    margin: 0;
    max-width: 650px;
  }
  .ach-header-right {
    /* Whitespace for clean layout */
  }

  /* ─── Dashboard Cards Common Styles ─────────────────────────────────── */
  .ach-dashboard-card {
    background: #ffffff;
    border: 1px solid rgba(26, 21, 18, 0.05);
    border-radius: 24px;
    box-shadow:
      0 1px 3px rgba(26, 21, 18, 0.02),
      0 10px 40px -12px rgba(26, 21, 18, 0.07),
      0 2px 8px -2px rgba(26, 21, 18, 0.04);
    transition:
      box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1),
      transform  0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: default;
    box-sizing: border-box;
  }
  .ach-dashboard-card:hover {
    transform: translateY(-4px);
    box-shadow:
      0 1px 3px rgba(26, 21, 18, 0.02),
      0 24px 64px -16px rgba(26, 21, 18, 0.12),
      0 4px 12px -2px rgba(26, 21, 18, 0.06);
  }

  /* ─── Hero Dashboard Card (Split 45 / 55) ───────────────────────────── */
  .ach-hero-card {
    width: 100%;
    min-height: 350px;
    padding: 48px 56px;
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: 45fr 55fr;
    gap: 48px;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-left: 4px solid #c36036 !important; /* Left vertical accent line */
  }

  .ach-hero-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    z-index: 2;
  }
  .ach-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    font-weight: 850;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${TC};
  }
  .ach-hero-eyebrow-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${TC};
  }
  .ach-hero-num {
    display: flex;
    align-items: baseline;
    line-height: 1;
    margin-bottom: 4px;
  }
  .ach-hero-num-main {
    font-size: clamp(3.2rem, 5.5vw, 4.8rem);
    font-weight: 850;
    letter-spacing: -0.04em;
    color: ${TK};
    line-height: 1;
  }
  .ach-hero-num-unit {
    font-size: clamp(1.8rem, 3.2vw, 2.5rem);
    font-weight: 850;
    color: ${TC};
    line-height: 1;
    margin-left: 2px;
  }
  .ach-hero-title {
    font-size: 1.15rem;
    font-weight: 750;
    color: ${TK};
    margin: 0;
    letter-spacing: -0.01em;
  }
  .ach-hero-desc {
    font-size: 0.95rem;
    line-height: 1.62;
    color: ${TG};
    margin: 0;
  }

  /* Right column: Growth Chart Visualization */
  .ach-hero-right {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    min-height: 200px;
    z-index: 1;
  }
  .ach-chart-badge {
    position: absolute;
    top: 0;
    left: 20px;
    background: rgba(195, 96, 54, 0.08);
    border: 1px solid rgba(195, 96, 54, 0.18);
    color: ${TC};
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 750;
    letter-spacing: 0.02em;
    z-index: 2;
  }

  /* ─── Supporting Statistics (Two-column grid below hero) ─────────────── */
  .ach-stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    width: 100%;
    margin-bottom: 56px;
  }
  .ach-stat-card {
    min-height: 240px;
    padding: 32px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }
  .ach-stat-icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(195, 96, 54, 0.05);
    border: 1px solid rgba(195, 96, 54, 0.08);
    color: ${TC};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ach-stat-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
  .ach-stat-num-row {
    display: flex;
    align-items: baseline;
    line-height: 1;
    margin-bottom: 12px;
  }
  .ach-stat-num-main {
    font-size: clamp(2.4rem, 3.6vw, 3.2rem);
    font-weight: 850;
    letter-spacing: -0.04em;
    color: ${TK};
  }
  .ach-stat-num-unit {
    font-size: 1.6rem;
    font-weight: 800;
    color: ${TC};
    margin-left: 1px;
  }
  .ach-stat-title {
    font-size: 1.05rem;
    font-weight: 750;
    color: ${TK};
    margin: 0 0 8px;
    line-height: 1.4;
  }
  .ach-stat-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${TG};
    margin: 0;
  }

  /* ─── Bottom Information Bar ─────────────────────────────────────────── */
  .ach-bottom-bar {
    border-top: 1px solid rgba(26, 21, 18, 0.08);
    padding-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .ach-bottom-left {
    display: flex;
    align-items: center;
    gap: 20px;
    flex: 1;
  }
  .ach-bottom-icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(195, 96, 54, 0.05);
    border: 1px solid rgba(195, 96, 54, 0.08);
    color: ${TC};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ach-bottom-para {
    font-size: 1.05rem;
    line-height: 1.68;
    color: ${TK};
    font-weight: 500;
    margin: 0;
    max-width: 680px;
  }
  
  .ach-bottom-right {
    flex-shrink: 0;
  }
  .ach-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background-color: ${TK};
    color: #ffffff;
    text-decoration: none;
    padding: 18px 36px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: -0.01em;
    width: fit-content;
    white-space: nowrap;
    transition:
      background-color 0.25s ease,
      box-shadow       0.25s ease,
      transform        0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ach-cta-btn span {
    font-size: 1.25rem;
    line-height: 1;
    transition: transform 0.25s ease;
  }
  .ach-cta-btn:hover {
    background-color: rgb(30, 25, 22);
    box-shadow: 0 12px 32px -4px rgba(26, 21, 18, 0.25);
    transform: translateY(-2px);
  }
  .ach-cta-btn:hover span {
    transform: translateX(4px);
  }

  .ach-disclaimer-wrapper {
    width: 100%;
    margin-top: 16px;
  }
  .ach-disclaimer {
    font-size: 0.8rem;
    color: ${TG};
    font-style: italic;
    line-height: 1.65;
    margin: 0;
  }

  /* ─── Responsive ─────────────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .ach-header {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .ach-hero-card {
      grid-template-columns: 1fr;
      gap: 36px;
      padding: 40px;
      min-height: auto;
    }
    .ach-hero-right {
      min-height: 180px;
    }
    .ach-bottom-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 28px;
      padding: 32px 0 0;
    }
    .ach-bottom-right {
      width: 100%;
    }
    .ach-cta-btn {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    .ach-section {
      padding: 80px 24px 88px;
    }
    .ach-stats-grid {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .ach-stat-card {
      padding: 28px;
    }
  }

  @media (max-width: 640px) {
    .ach-section {
      padding: 56px 16px 64px;
    }
    .ach-hero-card {
      padding: 32px 24px;
      border-radius: 20px;
    }
    .ach-stat-card {
      padding: 24px 20px;
      border-radius: 20px;
      flex-direction: column;
      gap: 16px;
    }
    .ach-bottom-bar {
      padding: 24px 0 0;
    }
    .ach-bottom-left {
      flex-direction: column;
      gap: 16px;
    }
  }
`;

export default function Achievement() {
  return (
    <>
      <style>{STYLES}</style>
      <section
        className="framer-yje7i4 ach-section"
        data-framer-name="Achievement"
      >
        <div className="framer-idrj2n ach-inner" data-framer-name="Inner" style={{gap:0}}>

          {/* ── Header block (60/40 Layout) ─────────────────────────────── */}
          <div className="ach-header">
            <div className="ach-header-left">
              <motion.div className="ach-badge-row" {...fadeUp(0)}>
                <div className="process-badge">
                  <span className="process-badge-dot" />
                  <p className="process-badge-text">Market Insights</p>
                </div>
              </motion.div>

              <motion.h2
                className="framer-text framer-styles-preset-1vb0x0m ach-heading"
                style={{marginTop:10}}
                {...fadeUp(0.05)}
              >
                Why Mature Agarwood Trees Are Among the World's Most Valuable Agricultural Assets
              </motion.h2>

              <motion.p
                className="framer-text framer-styles-preset-12akawa ach-desc"
                {...fadeUp(0.10)}
              >
                Agarwood is one of the rarest and most valuable natural raw materials on earth. Prized across luxury fragrance, wellness, incense, and traditional medicine, it commands premium prices that very few agricultural commodities can match - and global demand is still climbing.
              </motion.p>
            </div>
            <div className="ach-header-right" />
          </div>

          {/* ── Hero Dashboard Card (USD 90.56B) ───────────────────────── */}
          <motion.div
            className="ach-dashboard-card ach-hero-card"
            {...fadeUp(0.14)}
          >
            {/* Left: market label, number, title, description */}
            <div className="ach-hero-left">
              <div className="ach-hero-eyebrow">
                <span className="ach-hero-eyebrow-dot" />
                Global Market Projection
              </div>
              <div className="ach-hero-num">
                <span className="ach-hero-num-main">USD 90.56</span>
                <span className="ach-hero-num-unit">B</span>
              </div>
              <div className="ach-hero-title">Projected Global Market by 2035</div>
              <p className="framer-text framer-styles-preset-12akawa ach-hero-desc">
                The global Agarwood chips market was valued at approximately{' '}
                <strong>USD 44.29 billion in 2025</strong>, with projections reaching{' '}
                <strong>USD 90.56 billion by 2035</strong> at a <strong>7.41% CAGR</strong>{' '}
                <em>(Precedence Research, projection)</em>.
              </p>
            </div>

            {/* Right: Growth Chart Visualization */}
            <div className="ach-hero-right">
              <div className="ach-chart-badge">
                7.41% CAGR ↗
              </div>
              <svg viewBox="0 0 460 180" width="100%" height="100%">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(195, 96, 54, 0.22)"/>
                    <stop offset="100%" stopColor="rgba(195, 96, 54, 0.0)"/>
                  </linearGradient>
                </defs>
                {/* Vertical Grid Lines */}
                <line x1="20" y1="10" x2="20" y2="140" stroke="rgba(26,21,18,0.06)" strokeWidth="1" />
                <line x1="104" y1="10" x2="104" y2="140" stroke="rgba(26,21,18,0.06)" strokeWidth="1" />
                <line x1="188" y1="10" x2="188" y2="140" stroke="rgba(26,21,18,0.06)" strokeWidth="1" />
                <line x1="272" y1="10" x2="272" y2="140" stroke="rgba(26,21,18,0.06)" strokeWidth="1" />
                <line x1="356" y1="10" x2="356" y2="140" stroke="rgba(26,21,18,0.06)" strokeWidth="1" />
                <line x1="440" y1="10" x2="440" y2="140" stroke="rgba(26,21,18,0.06)" strokeWidth="1" />
                
                {/* Baseline */}
                <line x1="20" y1="140" x2="440" y2="140" stroke="rgba(26,21,18,0.08)" strokeWidth="1" />

                {/* Area under curve */}
                <path d="M 20 120 C 60 115, 80 110, 104 105 C 130 100, 160 98, 188 93 C 218 88, 245 80, 272 72 C 300 64, 330 56, 356 50 C 385 43, 410 32, 440 24 L 440 140 L 20 140 Z" fill="url(#chartGrad)"/>
                
                {/* Main curve */}
                <path d="M 20 120 C 60 115, 80 110, 104 105 C 130 100, 160 98, 188 93 C 218 88, 245 80, 272 72 C 300 64, 330 56, 356 50 C 385 43, 410 32, 440 24" fill="none" stroke="#c36036" strokeWidth="2" strokeLinecap="round" />
                
                {/* Data dots */}
                <circle cx="20" cy="120" r="4.5" fill="#c36036" stroke="#ffffff" strokeWidth="1" />
                <circle cx="104" cy="105" r="4.5" fill="#c36036" stroke="#ffffff" strokeWidth="1" />
                <circle cx="188" cy="93" r="4.5" fill="#c36036" stroke="#ffffff" strokeWidth="1" />
                <circle cx="272" cy="72" r="4.5" fill="#c36036" stroke="#ffffff" strokeWidth="1" />
                <circle cx="356" cy="50" r="4.5" fill="#c36036" stroke="#ffffff" strokeWidth="1" />
                <circle cx="440" cy="24" r="4.5" fill="#c36036" stroke="#ffffff" strokeWidth="1" />
                
                {/* Year Labels */}
                <text x="20" y="162" fontSize="10.5" fill="rgb(112, 112, 112)" textAnchor="middle" fontWeight="500">2025</text>
                <text x="104" y="162" fontSize="10.5" fill="rgb(112, 112, 112)" textAnchor="middle" fontWeight="500">2027</text>
                <text x="188" y="162" fontSize="10.5" fill="rgb(112, 112, 112)" textAnchor="middle" fontWeight="500">2029</text>
                <text x="272" y="162" fontSize="10.5" fill="rgb(112, 112, 112)" textAnchor="middle" fontWeight="500">2031</text>
                <text x="356" y="162" fontSize="10.5" fill="rgb(112, 112, 112)" textAnchor="middle" fontWeight="500">2033</text>
                <text x="440" y="162" fontSize="10.5" fill="rgb(112, 112, 112)" textAnchor="middle" fontWeight="500">2035</text>
              </svg>
            </div>
          </motion.div>

          {/* ── Supporting stats (Two-column grid) ─────────────────────── */}
          <div className="ach-stats-grid">
            {/* 38% */}
            <motion.div className="ach-dashboard-card ach-stat-card" {...fadeUp(0.18)}>
              <div className="ach-stat-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="ach-stat-content">
                <div className="ach-stat-num-row">
                  <span className="ach-stat-num-main">38</span>
                  <span className="ach-stat-num-unit">%</span>
                </div>
                <h3 className="ach-stat-title">Asia Pacific</h3>
                <p className="framer-text framer-styles-preset-12akawa ach-stat-desc">
                  <strong>Asia Pacific holds approximately 38% of global market share</strong>{' '}
                  — placing India-based Agarwood cultivation close to both the source and key buyers.
                </p>
              </div>
            </motion.div>

            {/* 45% */}
            <motion.div className="ach-dashboard-card ach-stat-card" {...fadeUp(0.22)}>
              <div className="ach-stat-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div className="ach-stat-content">
                <div className="ach-stat-num-row">
                  <span className="ach-stat-num-main">45</span>
                  <span className="ach-stat-num-unit">%</span>
                </div>
                <h3 className="ach-stat-title">Fragrance Industry</h3>
                <p className="framer-text framer-styles-preset-12akawa ach-stat-desc">
                  <strong>Fragrance accounts for approximately 45% of demand</strong>{' '}
                  — the largest and most enduring driver of Agarwood value worldwide.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom Section (Information bar) ───────────────────────── */}
          <motion.div className="ach-bottom-bar" {...fadeUp(0.26)}>
            <div className="ach-bottom-left">
              <div className="ach-bottom-icon-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  <path d="M12 12V22"></path>
                </svg>
              </div>
              <p className="framer-text framer-styles-preset-12akawa ach-bottom-para">
                For investors, this means a scalable, traceable model backed by genuine and growing long-term demand. For farmers, it means your mature Agarwood trees have never carried more value - and Mrida is the partner that helps you realize that value on fair, transparent terms.
              </p>
            </div>
            
            <div className="ach-bottom-right">
              <Link
                to="/investors"
                className="ach-cta-btn"
              >
               Explore the Opportunity <span>→</span>
              </Link>
            </div>
          </motion.div>

          {/* Disclaimer section */}
          <div className="ach-disclaimer-wrapper">
            <em className="ach-disclaimer">
              All market figures are third-party projections provided for informational purposes only. They do not constitute guarantees of future performance or investment returns.
            </em>
          </div>

        </div>
      </section>
    </>
  );
}

import { useState, useEffect, useRef } from 'react';
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
  /* ─── Section Shell ─────────────────────────────────────────────────── */
  .www-section {
    padding: 50px 24px 50px;
    background-color: ${BG};
    width: 100%;
  }
  .www-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  /* ─── Header Block ───────────────────────────────────────────────────── */
  .www-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    max-width: 720px;
  }
  .www-badge-row {
    margin-bottom: 24px;
  }
  .www-heading {
    font-size: clamp(2.1rem, 3.2vw, 2.8rem);
    font-weight: 750;
    line-height: 1.18;
    letter-spacing: -0.03em;
    color: ${TK};
    margin: 0 0 20px;
  }
  .www-desc {
    font-size: 1.08rem;
    line-height: 1.68;
    color: ${TG};
    margin: 0;
  }

  /* ─── Cards Grid ─────────────────────────────────────────────────────── */
  .www-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    width: 100%;
    margin-bottom: 48px;
    box-sizing: border-box;
  }

  /* ─── Card Core Styling ──────────────────────────────────────────────── */
  .www-card {
    background-color: #faf8f5;
    border: 1px solid rgba(26, 21, 18, 0.05);
    border-radius: 24px;
    box-shadow: var(--pw-shadow-md);
    display: grid;
    grid-template-columns: 55fr 45fr;
    overflow: hidden;
    position: relative;
    min-height: 520px;
    box-sizing: border-box;
    transition:
      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1),
      transform  0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .www-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--pw-shadow-lg);
  }

  /* Left Column Content Area */
  .www-content-col {
    padding: 44px 0 44px 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 3;
    box-sizing: border-box;
  }

  .www-card-icon-container {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }
  .www-card-icon-container.farmers {
    background: rgba(86, 112, 63, 0.06);
    border: 1px solid rgba(86, 112, 63, 0.15);
    color: #4b6b30;
  }
  .www-card-icon-container.investors {
    background: rgba(195, 96, 54, 0.06);
    border: 1px solid rgba(195, 96, 54, 0.15);
    color: ${TC};
  }

  .www-card-title {
    font-size: 1.68rem;
    font-weight: 750;
    line-height: 1.25;
    color: ${TK};
    margin: 0 0 6px;
    letter-spacing: -0.015em;
  }
  .www-card-subtitle {
    font-size: 0.72rem;
    font-weight: 850;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .www-card-subtitle.farmers {
    color: #4b6b30;
  }
  .www-card-subtitle.investors {
    color: ${TC};
  }

  .www-card-text {
    font-size: 0.96rem;
    line-height: 1.62;
    color: ${TG};
    margin: 0 0 28px;
  }

  /* Bullet Lists */
  /* Bullet Lists */
  .www-bullet-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: auto; /* Pushes button to bottom */
    width: 100%;
  }
  .www-bullet-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.92rem;
    line-height: 1.45;
    color: rgb(70, 65, 60);
    opacity: 0;
    transform: translateX(-12px);
    will-change: transform, opacity;
    transition: transform 200ms ease-out;
  }
  .www-bullet-list.animate-in .www-bullet-item {
    animation: revealItem 550ms ease-out forwards;
    animation-delay: calc(var(--item-idx) * 250ms);
  }
  .www-bullet-list.animate-in .www-bullet-item:hover {
    transform: translateX(4px) !important;
    cursor: pointer;
  }

  @keyframes revealItem {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .www-bullet-check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    opacity: 0;
    transform: scale(0.85);
    will-change: transform, opacity;
    transition:
      background-color 200ms ease,
      color 200ms ease,
      transform 200ms ease;
  }
  .www-bullet-list.animate-in .www-bullet-item .www-bullet-check {
    animation: scaleCheck 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    animation-delay: calc(var(--item-idx) * 250ms);
  }

  @keyframes scaleCheck {
    0% {
      opacity: 0;
      transform: scale(0.85);
    }
    70% {
      opacity: 1;
      transform: scale(1.08);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .www-bullet-check.farmers {
    background: rgba(86, 112, 63, 0.08);
    color: #4b6b30;
  }
  .www-bullet-list.animate-in .www-bullet-item:hover .www-bullet-check.farmers {
    background-color: #4b6b30;
    color: #ffffff;
  }

  .www-bullet-check.investors {
    background: rgba(195, 96, 54, 0.08);
    color: ${TC};
  }
  .www-bullet-list.animate-in .www-bullet-item:hover .www-bullet-check.investors {
    background-color: ${TC};
    color: #ffffff;
  }

  .www-bullet-text {
    opacity: 0;
    transform: translateX(-6px);
    display: inline-block;
    font-weight: 500;
    transition: font-weight 200ms ease, transform 200ms ease;
  }
  .www-bullet-list.animate-in .www-bullet-item .www-bullet-text {
    animation: revealText 550ms ease-out forwards;
    animation-delay: calc((var(--item-idx) * 250ms) + 80ms);
  }
  .www-bullet-list.animate-in .www-bullet-item:hover .www-bullet-text {
    font-weight: 600;
  }

  @keyframes revealText {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Respect prefers-reduced-motion */
  @media (prefers-reduced-motion: reduce) {
    .www-bullet-item,
    .www-bullet-item .www-bullet-check,
    .www-bullet-text {
      opacity: 1 !important;
      transform: none !important;
      animation: none !important;
    }
  }

  /* Pill Buttons */
  .www-card-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    text-decoration: none;
    padding: 14px 28px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.92rem;
    margin-top: 36px;
    transition:
      background-color 0.25s ease,
      box-shadow       0.25s ease,
      transform        0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .www-card-btn span {
    transition: transform 0.25s ease;
  }
  .www-card-btn.farmers {
    background-color: ${TK};
  }
  .www-card-btn.farmers:hover {
    background-color: rgb(30, 25, 22);
    box-shadow: 0 8px 24px -4px rgba(26, 21, 18, 0.25);
    transform: translateY(-1px);
  }
  .www-card-btn.investors {
    background-color: #c36036;
  }
  .www-card-btn.investors:hover {
    background-color: #a84e27;
    box-shadow: 0 8px 24px -4px rgba(195, 96, 54, 0.3);
    transform: translateY(-1px);
  }
  .www-card-btn:hover span {
    transform: translateX(4px);
  }

  /* Right Column Image & Wave Mask */
  .www-img-col {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .www-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
    transition: transform 0.4s ease;
  }
  .www-card:hover .www-card-img {
    transform: scale(1.04);
  }

  /* Wave S-Curve Overlay */
  .www-wave-mask {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 70px;
    height: 101%;
    z-index: 2;
    pointer-events: none;
  }
  
  /* Frosted Glass Overlay Badge on Image */
  .www-glass-badge {
    position: absolute;
    bottom: 24px;
    left: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 14px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 3;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
  .www-glass-badge-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    flex-shrink: 0;
  }
  .www-glass-badge-text-col {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .www-glass-badge-title {
    font-size: 0.85rem;
    font-weight: 750;
    color: #ffffff;
    margin: 0;
    letter-spacing: -0.01em;
  }
  .www-glass-badge-subtitle {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* ─── Bottom Info Bar ────────────────────────────────────────────────── */
  .www-bottom-bar {
    background-color: rgba(26, 21, 18, 0.025);
    border: 1px solid rgba(26, 21, 18, 0.05);
    border-radius: 12px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    box-sizing: border-box;
  }
  .www-bottom-icon {
    color: ${TC};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .www-bottom-text {
    font-size: 0.95rem;
    color: rgb(80, 75, 70);
    margin: 0;
    line-height: 1.5;
  }
  .www-bottom-text strong {
    color: ${TK};
  }

  /* ─── Responsive ─────────────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .www-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  @media (max-width: 768px) {
    .www-section {
      padding: 80px 24px 88px;
    }
  }

  @media (max-width: 640px) {
    .www-section {
      padding: 56px 16px 64px;
    }
    .www-card {
      grid-template-columns: 1fr;
      min-height: auto;
    }
    .www-content-col {
      padding: 32px 24px;
    }
    .www-img-col {
      height: 280px;
    }
    .www-wave-mask {
      display: none; /* Hide S-curve on stacked mobile */
    }
    .www-glass-badge {
      bottom: 16px;
      left: 16px;
      right: 16px;
    }
    .www-bottom-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }
`;

export default function WhoWeWorkWith() {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const [animateCard1, setAnimateCard1] = useState(false);
  const [animateCard2, setAnimateCard2] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === card1Ref.current) {
            setAnimateCard1(true);
            observer.unobserve(entry.target);
          } else if (entry.target === card2Ref.current) {
            setAnimateCard2(true);
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <section className="www-section" id="who-we-work-with">
        <div className="www-inner">
          
          {/* Header Block */}
          <div className="www-header">
            <motion.div className="www-badge-row" {...fadeUp(0)}>
              <div className="process-badge">
                <span className="process-badge-dot" />
                <p className="process-badge-text">Partners</p>
              </div>
            </motion.div>

            <motion.h2 className="www-heading" {...fadeUp(0.05)}>
              Who We Work With
            </motion.h2>
          </div>

          {/* Cards Grid */}
          <div className="www-grid">
            
            {/* Card 1: Farmers & Landowners */}
            <motion.div ref={card1Ref} className="www-card" {...fadeUp(0.15)}>
              <div className="www-content-col">
                <div className="www-card-icon-container farmers">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    <path d="M12 12V22"></path>
                  </svg>
                </div>
                
                <h3 className="www-card-title">For Farmers &<br />Landowners</h3>
                <span className="www-card-subtitle farmers">Unlock value from your land</span>
                
                <p className="www-card-text">
                  We partner with you to maximize the value of your mature Agarwood trees with zero upfront cost.
                </p>

                <div className={`www-bullet-list ${animateCard1 ? 'animate-in' : ''}`}>
                  <div className="www-bullet-item" style={{ '--item-idx': 0 }}>
                    <span className="www-bullet-check farmers">✓</span>
                    <span className="www-bullet-text">Upfront payment of minimum 20% of tree value</span>
                  </div>
                  <div className="www-bullet-item" style={{ '--item-idx': 1 }}>
                    <span className="www-bullet-check farmers">✓</span>
                    <span className="www-bullet-text">No cost for inoculation or cultivation</span>
                  </div>
                  <div className="www-bullet-item" style={{ '--item-idx': 2 }}>
                    <span className="www-bullet-check farmers">✓</span>
                    <span className="www-bullet-text">Fair, transparent share of returns at harvest</span>
                  </div>
                  <div className="www-bullet-item" style={{ '--item-idx': 3 }}>
                    <span className="www-bullet-check farmers">✓</span>
                    <span className="www-bullet-text">You retain full ownership of your land</span>
                  </div>
                </div>

                <Link to="/contact" className="www-card-btn farmers">
                  Start Partnership <span>→</span>
                </Link>
              </div>

              <div className="www-img-col">
                {/* SVG wave overlay covering left of image */}
                <svg className="www-wave-mask" viewBox="0 0 70 500" preserveAspectRatio="none">
                  <path d="M0,0 L70,0 C30,120 100,280 20,500 L0,500 Z" fill="#faf8f5" />
                </svg>
                <img
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&fit=crop&q=80&auto=format"
                  alt="Farmers and Landowners"
                  className="www-card-img"
                />
                
                {/* Glass Badge */}
                {/* <div className="www-glass-badge">
                  <div className="www-glass-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <div className="www-glass-badge-text-col">
                    <p className="www-glass-badge-title">Growing together</p>
                    <p className="www-glass-badge-subtitle">for generations</p>
                  </div>
                </div> */}
              </div>
            </motion.div>

            {/* Card 2: Investors & Agri-Partners */}
            <motion.div ref={card2Ref} className="www-card" {...fadeUp(0.2)}>
              <div className="www-content-col">
                <div className="www-card-icon-container investors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                
                <h3 className="www-card-title">For Investors &<br />Agri-Partners</h3>
                <span className="www-card-subtitle investors">Invest in a traceable asset</span>
                
                <p className="www-card-text">
                  A professionally managed Agarwood cultivation investment with full transparency and security.
                </p>

                <div className={`www-bullet-list ${animateCard2 ? 'animate-in' : ''}`}>
                  <div className="www-bullet-item" style={{ '--item-idx': 0 }}>
                    <span className="www-bullet-check investors">✓</span>
                    <span className="www-bullet-text">Managed end-to-end cultivation process</span>
                  </div>
                  <div className="www-bullet-item" style={{ '--item-idx': 1 }}>
                    <span className="www-bullet-check investors">✓</span>
                    <span className="www-bullet-text">High-value, high-demand global market</span>
                  </div>
                  <div className="www-bullet-item" style={{ '--item-idx': 2 }}>
                    <span className="www-bullet-check investors">✓</span>
                    <span className="www-bullet-text">Full traceability with regular monitoring</span>
                  </div>
                  <div className="www-bullet-item" style={{ '--item-idx': 3 }}>
                    <span className="www-bullet-check investors">✓</span>
                    <span className="www-bullet-text">Secure agreements & transparent returns</span>
                  </div>
                </div>

                <Link to="/investors" className="www-card-btn investors">
                  Explore Opportunities <span>→</span>
                </Link>
              </div>

              <div className="www-img-col">
                {/* SVG wave overlay covering left of image */}
                <svg className="www-wave-mask" viewBox="0 0 70 500" preserveAspectRatio="none">
                  <path d="M0,0 L70,0 C30,120 100,280 20,500 L0,500 Z" fill="#faf8f5" />
                </svg>
                <img
                  src="https://images.unsplash.com/photo-1758390286386-87c9d78cf9be?w=800&fit=crop&q=80&auto=format"
                  alt="Agri-Investors"
                  className="www-card-img"
                />
                
                {/* Glass Badge */}
                {/* <div className="www-glass-badge">
                  <div className="www-glass-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="www-glass-badge-text-col">
                    <p className="www-glass-badge-title">Secure. Traceable.</p>
                    <p className="www-glass-badge-subtitle">Future-ready.</p>
                  </div>
                </div> */}
              </div>
            </motion.div>

          </div>


        </div>
      </section>
    </>
  );
}

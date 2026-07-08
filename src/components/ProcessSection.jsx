import { useState, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

const STEPS = [
  {
    number: 'Step 1',
    short: 'Upfront Purchase',
    title: 'Upfront Purchase of a Minimum 20% of Your Mature Agarwood Trees',
    description:
      "After a site survey, we purchase at least 20% of your eligible mature Agarwood trees at an agreed price and pay you upfront. These trees transfer fully to us. That income is yours immediately - secured and guaranteed, regardless of what follows.",
    image:
      'https://images.unsplash.com/photo-1698025594761-39e52299b9a7?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: '/service',
  },
  {
    number: 'Step 2',
    short: 'Growth at Our Cost',
    title: 'Your Remaining Trees Grow in Value, Entirely at Our Cost',
    description:
      "Your other trees stay in your name throughout the partnership. We fund and carry out the full inoculation and monitoring process - every specialist visit, every inspection, every cost. You maintain and protect the trees; we handle everything technical.",
    image:
      'https://images.unsplash.com/photo-1681438080729-5c62d90f9416?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: '/service',
  },
  {
    number: 'Step 3',
    short: 'Transparent Profit Share',
    title: 'Transparent Profit Sharing After Agarwood Harvest and Sale',
    description:
      "When the resin matures, we manage harvesting, grading, and sale through our established buyer network. Harvesting expenses are deducted from the proceeds, and the remaining returns are split between you and Mrida at the exact percentage fixed in your signed agreement. Clear, fair, and fully traceable.",
    image:
      'https://images.unsplash.com/photo-1550305490-75e5ba3e301c?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: '/service',
  },
];

const TEXTURE =
  'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';
const EASE = [0.16, 1, 0.3, 1];
const TC = 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))';

export default function ProcessSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (isMobile) return;
    const i = v >= 0.66 ? 2 : v >= 0.33 ? 1 : 0;
    if (i !== activeIndexRef.current) {
      activeIndexRef.current = i;
      setActiveIndex(i);
    }
  });

  // State-based progress animation rather than raw scroll value transforms

  const scrollToStep = (i) => {
    if (isMobile) {
      setActiveIndex(i);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const start = window.scrollY + el.getBoundingClientRect().top;
    const targets = [0.16, 0.5, 0.85];
    window.scrollTo({ top: start + total * targets[i], behavior: 'smooth' });
  };

  const styles = `
    /* ── Wrapper & stage ─────────────────────────────────────────── */
    .proc3-wrap {
      position: relative;
      background-color: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229));
    }
    .proc3-stage {
      position: sticky;
      top: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      overflow: hidden;
      padding: 64px 80px 72px;
      box-sizing: border-box;
    }
    .proc3-glow {
      position: absolute;
      width: 900px;
      height: 900px;
      border-radius: 50%;
      right: -250px;
      top: -200px;
      background: radial-gradient(circle, rgba(195,96,54,0.10), transparent 72%);
      pointer-events: none;
    }

    /* ── Section intro (badge row above the two-column grid) ──────── */
    .proc3-intro {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      flex-shrink: 0;
    }

    /* ── Two-column grid ─────────────────────────────────────────── */
    .proc3-inner {
      position: relative;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 42fr 58fr;
      gap: 56px;
      align-items: stretch;
      flex: 1;
      min-height: 0;
      box-sizing: border-box;
    }

    /* ── Left column ─────────────────────────────────────────────── */
    .proc3-left {
      display: grid;
      grid-template-rows: auto 1fr;
      gap: 24px;
      height: 100%;
      min-height: 0;
      box-sizing: border-box;
    }
    .proc3-heading-block {
      display: flex;
      flex-direction: column;
      gap: 16px;
      /* No top padding so h2 shares exact baseline with tabs */
    }
    .proc3-heading {
      font-size: clamp(1.75rem, 2.2vw, 2.4rem);
      line-height: 1.22;
      letter-spacing: -0.03em;
      color: rgb(26,21,18);
      margin: 0;
      font-weight: 750;
      text-wrap: balance;
    }
    .proc3-subhead {
      font-size: 1rem;
      line-height: 1.65;
      color: rgb(112,112,112);
      margin: 0;
      max-width: 460px;
    }

    /* ── Left image ──────────────────────────────────────────────── */
    .proc3-visual {
      position: relative;
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      background-color: rgb(200,196,188);
      box-shadow: 0 8px 40px -8px rgba(26,21,18,0.18), 0 2px 8px rgba(26,21,18,0.06);
      height: 100%;
      min-height: 0;
    }
    .proc3-visual img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      will-change: transform, opacity;
    }
    .proc3-texture {
      position: absolute;
      inset: 0;
      background-image: url(${TEXTURE});
      background-repeat: repeat;
      background-position: left top;
      background-size: 128px auto;
      opacity: 0.35;
      pointer-events: none;
    }
    .proc3-visual-count {
      position: absolute;
      right: 20px;
      top: 20px;
      z-index: 3;
      font-size: 0.75rem;
      font-weight: 700;
      color: #fff;
      background: rgba(26,21,18,0.42);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 5px 14px;
      border-radius: 999px;
      letter-spacing: 0.1em;
    }

    /* ── Right column ────────────────────────────────────────────── */
    .proc3-right {
      height: 100%;
      min-height: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    /* ── Card container (tabs + content = unified card) ──────────── */
    .proc3-card-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-height: 0;
      background: #ffffff;
      border: 1px solid rgba(26, 21, 18, 0.07);
      border-radius: 24px;
      box-shadow: 0 4px 24px -4px rgba(26,21,18,0.08), 0 1px 4px rgba(26,21,18,0.04);
      overflow: hidden;
      box-sizing: border-box;
      transition: box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .proc3-card-container:hover {
      box-shadow: 0 24px 72px -12px rgba(26,21,18,0.14), 0 4px 16px rgba(26,21,18,0.06);
    }

    /* ── Tabs (header of the card) ───────────────────────────────── */
    .proc3-tabs {
      display: flex;
      gap: 6px;
      background: rgba(26, 21, 18, 0.025);
      padding: 10px;
      border-bottom: 1px solid rgba(26, 21, 18, 0.06);
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .proc3-tab {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      padding: 14px 18px;
      border-radius: 14px;
      border: 1.5px solid transparent;
      background: transparent;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
      outline: none;
      position: relative;
    }
    .proc3-tab:hover:not(.is-active) {
      background: rgba(26, 21, 18, 0.04);
      transform: translateY(-2px);
      border-color: rgba(26, 21, 18, 0.06);
    }
    .proc3-tab.is-active {
      background: #ffffff;
      border-color: rgba(195, 96, 54, 0.18);
      box-shadow:
        0 2px 16px rgba(26, 21, 18, 0.07),
        0 0 0 0 rgba(195, 96, 54, 0);
    }
    /* Orange accent stripe at top of active tab */
    .proc3-tab.is-active::before {
      content: '';
      position: absolute;
      top: 0;
      left: 14px;
      right: 14px;
      height: 2px;
      border-radius: 0 0 2px 2px;
      background: ${TC};
    }

    .proc3-tab-num {
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${TC};
      margin-bottom: 4px;
      opacity: 0.5;
      transition: opacity 0.28s ease;
    }
    .proc3-tab.is-active .proc3-tab-num {
      opacity: 1;
    }
    .proc3-tab-short {
      font-size: 0.9rem;
      font-weight: 700;
      color: rgb(26,21,18);
      opacity: 0.4;
      transition: opacity 0.28s ease;
      line-height: 1.3;
    }
    .proc3-tab.is-active .proc3-tab-short {
      opacity: 1;
    }

    /* Progress bar under each tab */
    .proc3-tab-progress-bg {
      position: relative;
      width: 100%;
      height: 2px;
      background: rgba(26, 21, 18, 0.08);
      border-radius: 99px;
      margin-top: 10px;
      overflow: hidden;
    }
    .proc3-tab-progress-fill {
      height: 100%;
      background: ${TC};
      transform-origin: left;
      width: 100%;
    }

    /* ── Card content area ───────────────────────────────────────── */
    .proc3-card-area {
      position: relative;
      flex: 1;
      min-height: 0;
      display: grid;
      grid-template-columns: 1fr;
      align-items: stretch;
    }
    .proc3-card {
      grid-area: 1 / 1 / 2 / 2;
      width: 100%;
      background: #ffffff;
      padding: 48px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      overflow-y: auto;
      max-height: 100%;
    }

    .proc3-card-mobile-visual {
      display: none;
    }

    .proc3-card-eyebrow {
      display: inline-flex;
      align-items: center;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: ${TC};
      margin-bottom: 16px;
    }
    .proc3-card-title {
      font-size: clamp(1.45rem, 1.8vw, 1.9rem);
      line-height: 1.35;
      letter-spacing: -0.02em;
      color: rgb(26,21,18);
      margin: 0 0 20px;
      font-weight: 750;
      text-wrap: balance;
    }
    .proc3-card-desc {
      font-size: 1rem;
      line-height: 1.72;
      color: rgb(90,84,80);
      margin: 0 0 32px;
    }
    .proc3-card-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.97rem;
      font-weight: 750;
      color: ${TC};
      text-decoration: none;
      transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
      width: fit-content;
    }
    .proc3-card-link:hover {
      gap: 14px;
      transform: translateX(4px);
    }

    /* ── Height-based responsiveness for Desktop ────────────────────── */
    @media (min-width: 991px) and (max-height: 850px) {
      .proc3-stage {
        padding: 40px 60px 48px;
      }
      .proc3-intro {
        margin-bottom: 20px;
      }
      .proc3-heading-block {
        gap: 12px;
      }
      .proc3-card {
        padding: 32px;
      }
      .proc3-card-desc {
        margin: 0 0 20px;
      }
      .proc3-tabs {
        padding: 8px;
      }
      .proc3-tab {
        padding: 10px 14px;
      }
    }
    @media (min-width: 991px) and (max-height: 720px) {
      .proc3-stage {
        padding: 24px 40px 32px;
      }
      .proc3-intro {
        margin-bottom: 12px;
      }
      .proc3-heading-block {
        gap: 8px;
      }
      .proc3-card {
        padding: 20px 24px;
      }
      .proc3-card-desc {
        margin: 0 0 12px;
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .proc3-card-title {
        font-size: 1.5rem;
        margin: 0 0 12px;
      }
    }

    /* ── Mobile / tablet ─────────────────────────────────────────── */
    @media (max-width: 990px) {
      .proc3-wrap {
        height: auto !important;
      }
      .proc3-stage {
        position: relative !important;
        height: auto !important;
        padding: 48px 24px 64px !important;
        align-items: stretch !important;
      }
      .proc3-intro {
        margin-bottom: 24px !important;
      }
      .proc3-inner {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
        height: auto !important;
        flex: none !important;
      }
      .proc3-left,
      .proc3-right {
        display: block !important;
        height: auto !important;
      }
      .proc3-heading-block {
        gap: 12px !important;
        margin-bottom: 32px !important;
      }
      .proc3-card-container {
        height: auto !important;
        flex: none !important;
      }
      .proc3-card-area {
        height: auto !important;
        min-height: 0 !important;
      }
      .proc3-card {
        position: relative !important;
        padding: 32px 24px !important;
        height: auto !important;
        justify-content: flex-start !important;
        overflow: visible !important;
        max-height: none !important;
      }
      .proc3-card-mobile-visual {
        display: block;
        width: 100%;
        height: 280px;
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        margin-bottom: 24px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.06);
      }
      .proc3-card-mobile-visual img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .proc3-card-title {
        font-size: 1.4rem !important;
        line-height: 1.3 !important;
      }
      .proc3-visual {
        display: none !important;
      }
      .proc3-tabs {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        display: flex;
        gap: 8px;
        padding: 12px 16px !important;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
      }
      .proc3-tabs::-webkit-scrollbar {
        display: none;
      }
      .proc3-tab {
        flex: 0 0 auto !important;
        width: 180px !important;
        scroll-snap-align: start;
        padding: 12px 14px !important;
        border-radius: 12px !important;
      }
      .proc3-tab-short {
        font-size: 0.84rem !important;
      }
      .proc3-tab-progress-bg {
        margin-top: 8px !important;
      }
    }

    @media (max-width: 640px) {
      .proc3-stage {
        padding: 48px 16px 56px !important;
      }
      .proc3-heading {
        font-size: 1.65rem !important;
      }
      .proc3-card {
        padding: 24px 20px 28px !important;
      }
      .proc3-card-mobile-visual {
        height: 200px;
        margin-bottom: 20px;
      }
      .proc3-tab {
        width: 155px !important;
        padding: 10px 12px !important;
        border-radius: 10px !important;
      }
      .proc3-tab-short {
        font-size: 0.78rem !important;
      }
      .proc3-tab-num {
        font-size: 0.65rem !important;
      }
    }
  `;

  return (
    <div ref={containerRef} className="proc3-wrap" style={{ height: isMobile ? 'auto' : '300vh' }}>
      <section className="proc3-stage">
        <style>{styles}</style>
        <div className="proc3-glow" />

        {/* Badge row — sits above both columns so it doesn't offset the heading baseline */}
        <motion.div
          className="proc3-intro"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="process-badge">
            <span className="process-badge-dot" />
            <p className="process-badge-text">Our Model</p>
          </div>
        </motion.div>

        <div className="proc3-inner">
          {/* LEFT — heading + image */}
          <div className="proc3-left">
            <motion.div
              className="proc3-heading-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            >
              <h2 className="proc3-heading">
                How Our Agarwood Farming Partnership Model Works: Upfront Payment, Zero Cost, Fair
                Returns
              </h2>
              <p className="proc3-subhead">
                We call it the <strong>mixed commercial acquisition model</strong> - built so
                farmers benefit from day one, with a clear and transparent share of the upside when
                harvest arrives.
              </p>
            </motion.div>

            <motion.div
              className="proc3-visual"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              {STEPS.map((step, i) => (
                <motion.img
                  key={step.number}
                  src={step.image || '/placeholder.svg'}
                  alt={step.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{
                    opacity: activeIndex === i ? 1 : 0,
                    scale: activeIndex === i ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.5, ease: EASE }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ))}
              <div className="proc3-texture" />
              <span className="proc3-visual-count">
                {String(activeIndex + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
              </span>
            </motion.div>
          </div>

          {/* RIGHT — unified card: tabs header + content */}
          <motion.div
            className="proc3-right"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
          >
            <div className="proc3-card-container">
              {/* Tabs — the "header" of the card */}
              <div className="proc3-tabs" role="tablist" aria-label="Partnership process steps">
                {STEPS.map((step, i) => (
                  <button
                    key={step.number}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    className={`proc3-tab${i === activeIndex ? ' is-active' : ''}`}
                    onClick={() => scrollToStep(i)}
                  >
                    <span className="proc3-tab-num">{step.number}</span>
                    <span className="proc3-tab-short">{step.short}</span>
                    <div className="proc3-tab-progress-bg">
                      <motion.div
                        className="proc3-tab-progress-fill"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: i <= activeIndex ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Card content area */}
              <div className="proc3-card-area">
                {STEPS.map((step, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;

                  return (
                    <motion.div
                      key={step.number}
                      className="proc3-card"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : isPast ? -16 : 16,
                        scale: isActive ? 1 : 0.985,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                      transition={{ duration: 0.32, ease: EASE }}
                    >
                      <div className="proc3-card-mobile-visual">
                        <img src={step.image || '/placeholder.svg'} alt={step.title} />
                        <div className="proc3-texture" />
                      </div>
                      <span className="proc3-card-eyebrow">{step.number}</span>
                      <h3 className="proc3-card-title">{step.title}</h3>
                      <p className="proc3-card-desc">{step.description}</p>
                      <a className="proc3-card-link" href={step.ctaHref}>
                        Explore the full Agarwood business model →
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

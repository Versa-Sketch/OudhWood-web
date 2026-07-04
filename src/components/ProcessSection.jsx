import { useState, useEffect, useRef } from 'react';
import {
  AnimatePresence,
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

  // Advance the active step as scroll progress crosses each threshold.
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const i = v >= 0.66 ? 2 : v >= 0.33 ? 1 : 0;
    if (i !== activeIndexRef.current) {
      activeIndexRef.current = i;
      setActiveIndex(i);
    }
  });

  // Continuous cross-fade + parallax zoom, one transform per image (stable hook order).
  const op0 = useTransform(scrollYProgress, [0, 0.3, 0.4], [1, 1, 0]);
  const op1 = useTransform(scrollYProgress, [0.3, 0.4, 0.63, 0.73], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.63, 0.73, 1], [0, 1, 1]);
  const sc0 = useTransform(scrollYProgress, [0, 0.4], [1, 1.12]);
  const sc1 = useTransform(scrollYProgress, [0.3, 0.4, 0.63, 0.73], [1.08, 1, 1, 1.1]);
  const sc2 = useTransform(scrollYProgress, [0.63, 0.73, 1], [1.08, 1, 1.04]);
  const imgStyles = [
    { opacity: op0, scale: sc0 },
    { opacity: op1, scale: sc1 },
    { opacity: op2, scale: sc2 },
  ];

  const scrollToStep = (i) => {
    const el = containerRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const start = window.scrollY + el.getBoundingClientRect().top;
    const targets = [0.16, 0.5, 0.85];
    window.scrollTo({ top: start + total * targets[i], behavior: 'smooth' });
  };

  const styles = `
    .proc2-wrap { position: relative; background-color: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229)); }
    .proc2-stage { position: sticky; top: 0; height: 100vh; display: flex; align-items: center; overflow: hidden; padding: 0 40px; }
    .proc2-glow { position: absolute; width: 620px; height: 620px; border-radius: 50%; right: -140px; top: -160px; background: radial-gradient(circle, rgba(195,96,54,0.10), transparent 68%); pointer-events: none; }
    .proc2-inner { position: relative; width: 100%; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 64px; align-items: center; }

    .proc2-heading-block { display: flex; flex-direction: column; gap: 16px; margin-bottom: 26px; }
    .proc2-heading { font-size: clamp(1.7rem, 2.4vw, 2.25rem); line-height: 1.18; letter-spacing: -0.02em; color: rgb(26,21,18); margin: 0; font-weight: 600; text-wrap: balance; }
    .proc2-subhead { font-size: 0.98rem; line-height: 1.6; color: rgb(112,112,112); margin: 0; max-width: 460px; }

    .proc2-visual { position: relative; width: 100%; height: clamp(340px, 52vh, 520px); border-radius: 22px; overflow: hidden; background-color: rgb(112,112,112); box-shadow: 0 40px 90px -50px rgba(26,21,18,0.55); }
    .proc2-visual img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; will-change: transform, opacity; }
    .proc2-texture { position: absolute; inset: 0; background-image: url(${TEXTURE}); background-repeat: repeat; background-position: left top; background-size: 128px auto; opacity: 0.5; pointer-events: none; }
    .proc2-visual-tag { position: absolute; left: 20px; bottom: 20px; z-index: 3; display: inline-flex; align-items: center; gap: 8px; padding: 9px 15px; border-radius: 999px; background: rgba(26,21,18,0.55); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); color: #fff; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.01em; }
    .proc2-visual-count { position: absolute; right: 20px; top: 20px; z-index: 3; font-size: 0.82rem; font-weight: 600; color: #fff; background: rgba(26,21,18,0.4); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); padding: 7px 13px; border-radius: 999px; letter-spacing: 0.06em; }

    .proc2-right { display: grid; grid-template-columns: 148px 1fr; gap: 28px; align-items: stretch; }

    .proc2-timeline { position: relative; display: flex; flex-direction: column; justify-content: space-between; padding: 8px 0; }
    .proc2-rail { position: absolute; left: 9px; top: 14px; bottom: 14px; width: 2px; background: rgba(26,21,18,0.10); border-radius: 2px; overflow: hidden; }
    .proc2-rail-fill { position: absolute; inset: 0; background: ${TC}; transform-origin: top; border-radius: 2px; }
    .proc2-node { position: relative; display: flex; align-items: flex-start; gap: 12px; background: none; border: none; padding: 6px 0; text-align: left; cursor: pointer; font-family: inherit; z-index: 1; }
    .proc2-node-dot { flex: 0 0 auto; width: 20px; height: 20px; margin-top: 1px; border-radius: 50%; background: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245,241,229)); border: 2px solid rgba(26,21,18,0.18); display: grid; place-items: center; transition: border-color .4s var(--pw-ease,ease), background .4s var(--pw-ease,ease), transform .4s var(--pw-ease,ease); }
    .proc2-node-dot::after { content: ''; width: 7px; height: 7px; border-radius: 50%; background: ${TC}; opacity: 0; transform: scale(0); transition: opacity .4s ease, transform .4s ease; }
    .proc2-node-label { display: flex; flex-direction: column; gap: 2px; opacity: 0.5; transition: opacity .4s ease; }
    .proc2-node-num { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgb(112,112,112); }
    .proc2-node-title { font-size: 0.82rem; font-weight: 600; color: rgb(26,21,18); line-height: 1.25; }
    .proc2-node.is-active .proc2-node-dot { border-color: ${TC}; transform: scale(1.15); }
    .proc2-node.is-active .proc2-node-dot::after { opacity: 1; transform: scale(1); }
    .proc2-node.is-active .proc2-node-label { opacity: 1; }
    .proc2-node.is-done .proc2-node-dot { border-color: ${TC}; background: ${TC}; }
    .proc2-node.is-done .proc2-node-dot::after { background: #fff; opacity: 1; transform: scale(1); }

    .proc2-card-area { position: relative; min-height: 300px; display: flex; }
    .proc2-card { position: relative; width: 100%; background: #fff; border: 1px solid rgba(26,21,18,0.06); border-radius: 24px; padding: 40px; box-shadow: 0 30px 70px -40px rgba(26,21,18,0.4); display: flex; flex-direction: column; }
    .proc2-card-eyebrow { display: inline-flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: ${TC}; margin-bottom: 18px; }
    .proc2-card-eyebrow span { width: 22px; height: 1px; background: ${TC}; opacity: 0.5; }
    .proc2-card-title { font-size: 1.3rem; line-height: 1.32; letter-spacing: -0.01em; color: rgb(26,21,18); margin: 0 0 16px; font-weight: 600; text-wrap: balance; }
    .proc2-card-desc { font-size: 0.98rem; line-height: 1.68; color: rgb(90,84,80); margin: 0 0 26px; }
    .proc2-card-link { display: inline-flex; align-items: center; gap: 6px; margin-top: auto; font-size: 0.95rem; font-weight: 600; color: ${TC}; text-decoration: none; transition: gap .35s var(--pw-ease,ease); }
    .proc2-card-link:hover { gap: 11px; }

    /* ---- Mobile / tablet: graceful stacked story ---- */
    .proc2-mobile { padding: 64px 20px; background-color: var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245,241,229)); }
    .proc2-mobile-head { max-width: 640px; margin: 0 auto 40px; display: flex; flex-direction: column; gap: 14px; text-align: center; align-items: center; }
    .proc2-mobile-list { display: flex; flex-direction: column; gap: 28px; max-width: 640px; margin: 0 auto; }
    .proc2-mcard { background: #fff; border: 1px solid rgba(26,21,18,0.06); border-radius: 22px; overflow: hidden; box-shadow: 0 24px 50px -34px rgba(26,21,18,0.4); }
    .proc2-mimg { position: relative; width: 100%; aspect-ratio: 16 / 10; overflow: hidden; background: rgb(112,112,112); }
    .proc2-mimg img { width: 100%; height: 100%; object-fit: cover; }
    .proc2-mimg .proc2-texture { opacity: 0.5; }
    .proc2-mimg-num { position: absolute; left: 16px; bottom: 16px; z-index: 2; display: inline-flex; align-items: center; gap: 8px; padding: 8px 13px; border-radius: 999px; background: rgba(26,21,18,0.55); backdrop-filter: blur(8px); color: #fff; font-size: 0.78rem; font-weight: 600; }
    .proc2-mbody { padding: 26px 24px 28px; }
    .proc2-mtitle { font-size: 1.12rem; line-height: 1.34; color: rgb(26,21,18); margin: 0 0 12px; font-weight: 600; }
    .proc2-mdesc { font-size: 0.94rem; line-height: 1.66; color: rgb(90,84,80); margin: 0 0 18px; }

    @media (prefers-reduced-motion: reduce) {
      .proc2-visual img { transition: none !important; }
    }
  `;

  if (isMobile) {
    return (
      <section className="proc2-mobile">
        <style>{styles}</style>
        <div className="proc2-mobile-head">
          <div className="process-badge">
            <span className="process-badge-dot" />
            <p className="process-badge-text">Our Model</p>
          </div>
          <h2 className="proc2-heading">
            How Our Agarwood Farming Partnership Model Works: Upfront Payment, Zero Cost, Fair Returns
          </h2>
          <p className="proc2-subhead" style={{ maxWidth: '540px' }}>
            We call it the <strong>mixed commercial acquisition model</strong> - built so farmers
            benefit from day one, with a clear and transparent share of the upside when harvest
            arrives.
          </p>
        </div>
        <div className="proc2-mobile-list">
          {STEPS.map((step) => (
            <motion.article
              key={step.number}
              className="proc2-mcard"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <div className="proc2-mimg">
                <img src={step.image || '/placeholder.svg'} alt={step.title} />
                <div className="proc2-texture" />
                <span className="proc2-mimg-num">{step.number}</span>
              </div>
              <div className="proc2-mbody">
                <h3 className="proc2-mtitle">{step.title}</h3>
                <p className="proc2-mdesc">{step.description}</p>
                <a className="proc2-card-link" href={step.ctaHref}>
                  Explore the full Agarwood business model →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={containerRef} className="proc2-wrap" style={{ height: '360vh' }}>
      <section className="proc2-stage">
        <div className="proc2-glow" />
        <div className="proc2-inner">
          {/* LEFT — sticky heading + cross-fading parallax visual */}
          <div className="proc2-left">
            <div className="proc2-heading-block">
              <div className="process-badge">
                <span className="process-badge-dot" />
                <p className="process-badge-text">Our Model</p>
              </div>
              <h2 className="proc2-heading">
                How Our Agarwood Farming Partnership Model Works: Upfront Payment, Zero Cost, Fair
                Returns
              </h2>
              <p className="proc2-subhead">
                We call it the <strong>mixed commercial acquisition model</strong> - built so
                farmers benefit from day one, with a clear and transparent share of the upside when
                harvest arrives.
              </p>
            </div>

            <div className="proc2-visual">
              {STEPS.map((step, i) => (
                <motion.img
                  key={step.number}
                  src={step.image || '/placeholder.svg'}
                  alt={step.title}
                  style={imgStyles[i]}
                />
              ))}
              <div className="proc2-texture" />
              <span className="proc2-visual-count">
                {String(activeIndex + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={STEPS[activeIndex].number}
                  className="proc2-visual-tag"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {STEPS[activeIndex].number} — {STEPS[activeIndex].short}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT — vertical progress timeline + floating detail card */}
          <div className="proc2-right">
            <div className="proc2-timeline" role="tablist" aria-label="Partnership process steps">
              <div className="proc2-rail">
                <motion.div className="proc2-rail-fill" style={{ scaleY: scrollYProgress }} />
              </div>
              {STEPS.map((step, i) => (
                <button
                  key={step.number}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  className={`proc2-node${i === activeIndex ? ' is-active' : ''}${
                    i < activeIndex ? ' is-done' : ''
                  }`}
                  onClick={() => scrollToStep(i)}
                >
                  <span className="proc2-node-dot" />
                  <span className="proc2-node-label">
                    <span className="proc2-node-num">{step.number}</span>
                    <span className="proc2-node-title">{step.short}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="proc2-card-area">
              <AnimatePresence mode="wait">
                <motion.div
                  key={STEPS[activeIndex].number}
                  className="proc2-card"
                  initial={{ opacity: 0, y: 26, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -22, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  <span className="proc2-card-eyebrow">
                    <span />
                    {STEPS[activeIndex].number}
                  </span>
                  <h3 className="proc2-card-title">{STEPS[activeIndex].title}</h3>
                  <p className="proc2-card-desc">{STEPS[activeIndex].description}</p>
                  <a className="proc2-card-link" href={STEPS[activeIndex].ctaHref}>
                    Explore the full Agarwood business model →
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

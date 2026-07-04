import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STEPS = [
  {
    number: 'Step 1',
    title: 'Upfront Purchase of a Minimum 20% of Your Mature Agarwood Trees',
    description: "After a site survey, we purchase at least 20% of your eligible mature Agarwood trees at an agreed price and pay you upfront. These trees transfer fully to us. That income is yours immediately - secured and guaranteed, regardless of what follows.",
    image: 'https://images.unsplash.com/photo-1698025594761-39e52299b9a7?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: '/service',
  },
  {
    number: 'Step 2',
    title: 'Your Remaining Trees Grow in Value, Entirely at Our Cost',
    description: "Your other trees stay in your name throughout the partnership. We fund and carry out the full inoculation and monitoring process - every specialist visit, every inspection, every cost. You maintain and protect the trees; we handle everything technical.",
    image: 'https://images.unsplash.com/photo-1681438080729-5c62d90f9416?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: '/service',
  },
  {
    number: 'Step 3',
    title: 'Transparent Profit Sharing After Agarwood Harvest and Sale',
    description: "When the resin matures, we manage harvesting, grading, and sale through our established buyer network. Harvesting expenses are deducted from the proceeds, and the remaining returns are split between you and Mrida at the exact percentage fixed in your signed agreement. Clear, fair, and fully traceable.",
    image: 'https://images.unsplash.com/photo-1550305490-75e5ba3e301c?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: '/service',
  },
];

export default function ProcessSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const active = STEPS[activeIndex];

  const activeIndexRef = useRef(0);
  const isExitingRef = useRef(false);
  const lastTransitionTime = useRef(0);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const stickyEl = stickyRef.current;
    if (!stickyEl) return;

    const handleWheel = (e) => {
      const now = Date.now();
      const COOLDOWN_MS = 650;
      const direction = e.deltaY;

      if (now - lastTransitionTime.current < COOLDOWN_MS) {
        if (activeIndexRef.current > 0 && activeIndexRef.current < STEPS.length - 1) {
          e.preventDefault();
        } else if (activeIndexRef.current === 0 && direction > 0) {
          e.preventDefault();
        } else if (activeIndexRef.current === STEPS.length - 1 && direction < 0) {
          e.preventDefault();
        } else if (isExitingRef.current) {
          e.preventDefault();
        }
        return;
      }

      if (direction > 0) {
        if (activeIndexRef.current < STEPS.length - 1) {
          e.preventDefault();
          setIsExiting(false);
          isExitingRef.current = false;
          setActiveIndex((prev) => {
            const next = prev + 1;
            activeIndexRef.current = next;
            return next;
          });
          lastTransitionTime.current = now;
        } else if (activeIndexRef.current === STEPS.length - 1 && !isExitingRef.current) {
          e.preventDefault();
          setIsExiting(true);
          isExitingRef.current = true;
          lastTransitionTime.current = now;
        }
      } else if (direction < 0) {
        if (isExitingRef.current) {
          e.preventDefault();
          setIsExiting(false);
          isExitingRef.current = false;
          lastTransitionTime.current = now;
        } else if (activeIndexRef.current > 0) {
          e.preventDefault();
          setActiveIndex((prev) => {
            const next = prev - 1;
            activeIndexRef.current = next;
            return next;
          });
          lastTransitionTime.current = now;
        }
      }
    };

    stickyEl.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      stickyEl.removeEventListener('wheel', handleWheel);
    };
  }, [isMobile]);

  return (
    <div ref={containerRef} className="process-outer-wrap" style={!isMobile ? { height: "100vh", position: "relative" } : {}}>
      <section 
        ref={stickyRef}
        className="framer-vwAzn framer-S0UiV framer-6c3n9 framer-2hdijt process-section" 
        style={!isMobile ? { 
          backgroundColor: "var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))", 
          width: "100%",
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "0 30px",
          opacity: isExiting ? 0.75 : 1,
          transform: isExiting ? "translateY(-30px)" : "translateY(0px)",
          transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        } : {
          backgroundColor: "var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))", 
          width: "100%",
          padding: "60px 20px"
        }}
      >
        <div className="process-inner">
          <div className="process-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AnimatePresence>
            <div
              className="process-image-texture"
              style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256)',
                backgroundRepeat: 'repeat', backgroundPosition: 'left top', backgroundSize: '128px auto',
                opacity: 0.5,
              }}
            />
          </div>

          <div className="process-content">
            <div className="process-title-section">
              <div className="process-badge">
                <span className="process-badge-dot" />
                <p className="process-badge-text">Our Model</p>
              </div>
              <h2 className="process-heading" style={{ fontSize: '2rem', lineHeight: '1.3' }}>How Our Agarwood Farming Partnership Model Works: Upfront Payment, Zero Cost, Fair Returns</h2>
              <p className="process-subhead">We call it the <strong>mixed commercial acquisition model</strong> - built so farmers benefit from day one, with a clear and transparent share of the upside when harvest arrives.</p>
            </div>

            <div className="process-body">
              <div className="process-list" role="tablist" aria-label="Mrida partnership process steps">
                {STEPS.map((step, i) => (
                  <button
                    key={step.number}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    className={`process-step${i === activeIndex ? ' process-step-active' : ''}`}
                    onClick={() => {
                      setActiveIndex(i);
                      activeIndexRef.current = i;
                      setIsExiting(false);
                      isExitingRef.current = false;
                    }}
                  >
                    <span className="process-step-number">{step.number}</span>
                    <span className="process-step-title" style={{ fontSize: '0.95rem' }}>{step.title.split(' ')[0] + ' ' + step.title.split(' ')[1]}</span>
                  </button>
                ))}
              </div>

              <div className="process-details">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h6 className="process-details-title" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{active.title}</h6>
                    <p className="process-details-desc" style={{ lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '20px' }}>{active.description}</p>
                    <a className="process-details-link" href={active.ctaHref} style={{ fontWeight: '600', color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))' }}>Explore the full Agarwood business model →</a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

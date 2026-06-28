import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

const CHAPTERS = [
  {
    id: 'sets-us-apart',
    title: 'WHAT SETS US APART',
    startIndex: 0,
    items: [
      {
        title: 'Guaranteed Upfront Payment',
        description: 'On a minimum of 20% of your mature Agarwood trees — paid before harvest, not after.',
        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Zero Inoculation Cost',
        description: 'Your trees, professionally managed — inoculation funded and run entirely at our own expense.',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Land Stays With the Farmer',
        description: "Only the minimum 20% of purchased trees transfer to us — the rest stay in the farmer's name.",
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'End-to-End Management',
        description: 'From survey through harvest, every step is handled and documented by Mrida — at no cost to you.',
        image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Full Traceability',
        description: 'Every tree carries a unique Site Number and Tree Number, tracked from tagging through to final settlement.',
        image: 'https://images.unsplash.com/photo-1519606247872-0440aae9b827?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Signed Agreements',
        description: 'All prices, sharing ratios, and responsibilities are written into agreement before any work begins.',
        image: 'https://images.unsplash.com/photo-1681438080729-5c62d90f9416?w=900&h=1200&fit=crop&q=85&auto=format'
      }
    ]
  },
  {
    id: 'india-advantage',
    title: 'INDIA ADVANTAGE',
    startIndex: 6,
    items: [
      {
        title: 'Prime Production Zones',
        description: 'Cultivated in Assam and Tripura — prime climate and soil conditions for Agarwood.',
        image: 'https://images.unsplash.com/photo-1680614038587-9de698612c78?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Government Momentum',
        description: "India's ₹80 crore Agarwood scheme signals strong institutional commitment to the sector.",
        image: 'https://images.unsplash.com/photo-1631322342429-5897e52b0f64?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Close to the Source',
        description: 'Asia Pacific holds roughly 35% of global market share, placing our farms close to both source and buyers.',
        image: 'https://images.unsplash.com/photo-1730086144061-769be13b08e5?w=900&h=1200&fit=crop&q=85&auto=format'
      }
    ]
  },
  {
    id: 'our-process',
    title: 'OUR PROCESS',
    startIndex: 9,
    items: [
      {
        title: 'Survey & Tag',
        description: 'We visit your site, assess every tree for eligibility, and tag every eligible tree with a unique number.',
        image: 'https://images.unsplash.com/photo-1763229759060-50db1e4bf9ad?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Split & Agree',
        description: 'We confirm the 20% upfront vs. shared-arrangement terms for every tree, and we both sign before any work begins.',
        image: 'https://images.unsplash.com/photo-1517200578024-62d131797ec8?w=900&h=1200&fit=crop&q=85&auto=format'
      },
      {
        title: 'Harvest & Settle',
        description: 'We manage harvesting, grading, sale, and full coordination with buyers, then share returns per your agreement.',
        image: 'https://images.unsplash.com/photo-1782192496614-d2e98e5f96e0?w=900&h=1200&fit=crop&q=85&auto=format'
      }
    ]
  }
];

const APART_ITEMS = CHAPTERS.flatMap(ch => ch.items.map(item => ({ ...item, chapterId: ch.id })));
const TOTAL_ITEMS = APART_ITEMS.length;

// Scroll distance budgeted per item transition. Kept modest (per the brief's
// "reduce perceived scrolling effort") — total container height is computed
// exactly from this, so there's no leftover/dead scroll space after the
// last item: the sticky section releases the instant progress hits 1.
const VH_PER_ITEM = 26;
const STICKY_VH = 100;
const STORY_CONTAINER_VH = STICKY_VH + (TOTAL_ITEMS - 1) * VH_PER_ITEM;

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const containerRef = useRef(null);

  // CSS `position: sticky` doesn't work here — the shared SubPage wrapper
  // (.framer-PyWJj.framer-1iaudjf) sets `overflow: clip`, which breaks
  // sticky for any descendant (the nearest scrolling ancestor must be the
  // viewport). So the pin is computed manually from raw scroll position
  // instead, switching between absolute (before/after the range) and fixed
  // (while pinned) — fixed positioning isn't affected by an ancestor's
  // overflow, only by transform/will-change, which this ancestor doesn't set.
  const [pinStyle, setPinStyle] = useState({ position: 'absolute', top: 0 });

  const activeItem = APART_ITEMS[activeIndex];
  const activeChapterIndex = CHAPTERS.findIndex(
    ch => activeIndex >= ch.startIndex && activeIndex < ch.startIndex + ch.items.length
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handlePin = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      if (containerTop > 0) {
        setPinStyle({ position: 'absolute', top: 0, left: 0, width: '100%' });
      } else if (containerTop > -(containerHeight - viewportHeight)) {
        setPinStyle({ position: 'fixed', top: 0, left: 0, width: '100%' });
      } else {
        setPinStyle({ position: 'absolute', top: containerHeight - viewportHeight, left: 0, width: '100%' });
      }
    };
    handlePin();
    window.addEventListener('scroll', handlePin, { passive: true });
    window.addEventListener('resize', handlePin);
    return () => {
      window.removeEventListener('scroll', handlePin);
      window.removeEventListener('resize', handlePin);
    };
  }, [isMobile]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (isMobile) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(Math.floor(latest * TOTAL_ITEMS), TOTAL_ITEMS - 1);
      if (index !== activeIndexRef.current) {
        activeIndexRef.current = index;
        setActiveIndex(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, isMobile]);

  // Used by both chapter-header clicks and item clicks to jump scroll
  // position to the exact spot that activates a given flat item index.
  const scrollToItemIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerStart = rect.top + scrollTop;
    const containerScrollableHeight = rect.height - window.innerHeight;
    const targetProgress = index / TOTAL_ITEMS;
    const targetScrollY = containerStart + targetProgress * containerScrollableHeight + 2;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
  };

  const handleChapterClick = (chapIdx) => scrollToItemIndex(CHAPTERS[chapIdx].startIndex);

  return (
    <>
      {/* Hero section */}
      <section className="ab-hero-section">
        <div className="ab-hero-inner">
          <div className="ab-hero-title">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Mrida.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              (A Fair, Transparent Partnership)
            </motion.p>
          </div>
          <div className="ab-hero-details">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              For years, landowners and farmers have grown mature Agarwood trees without ever realizing their true value. Mrida changes that — every survey we run, every tree we tag, and every payment we make is designed to keep that trust real.
            </motion.p>
            <motion.div
              className="ab-hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a href="/contact" className="ab-btn ab-btn-primary">
                Partner With Us
              </a>
              <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-secondary">
                Talk to Our Team
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Banner image */}
      <section className="ab-main-banner">
        <div className="ab-banner-wrap">
          <img
            src="https://framerusercontent.com/images/YNUrI3EakUUXrOgSzVcjyA3caZI.jpg?width=2048"
            alt="Agarwood plantation growth banner"
          />
          <div className="ab-banner-overlay" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="ab-mission-section">
        <div className="ab-mission-inner">
          <div className="ab-mission-text">
            <p>
              <strong>To unlock the true value of India’s mature Agarwood trees through a farmer-first, transparent, and sustainable partnership model.</strong> We measure our success by the value we deliver to farmers, every survey we run, every tag we lay, and every payment we make on time, every time.
            </p>
            <p>
              We see an India where cultivating Agarwood is a respected, professionally managed path to long-term income for farmers and investors alike. As global demand for Agarwood grows, our cultivation-to-market pipeline gives both sides a fair way to win — without farmers needing to take on the cost or risk of getting there alone.
            </p>
          </div>
          <div className="ab-stats-grid">
            <div className="ab-stat-card">
              <div className="ab-stat-num">20<span>+</span></div>
              <p className="ab-stat-label">Upfront Tree Payment (%)</p>
            </div>
            <div className="ab-stat-card">
              <div className="ab-stat-num">100<span>%</span></div>
              <p className="ab-stat-label">Tree Traceability</p>
            </div>
            <div className="ab-stat-card">
              <div className="ab-stat-num">5<span>+</span></div>
              <p className="ab-stat-label">Year Partnership Horizon</p>
            </div>
            <div className="ab-stat-card">
              <div className="ab-stat-num">0<span></span></div>
              <p className="ab-stat-label">Inoculation Cost to Farmers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="ab-quote-banner">
        <div
          className="ab-quote-wrap"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1365&fit=crop&q=80&auto=format')` }}
        >
          <div className="ab-quote-darken" />
          <div className="ab-quote-inner">
            <p className="ab-quote-text">
              “We don’t see farmers as suppliers or investors as outsiders. We see both as partners.”
            </p>
            <div className="ab-quote-author">
              <img
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?w=200&h=200&fit=crop&q=80&auto=format"
                alt="Our Founding Principle"
                className="ab-quote-author-img"
              />
              <div>
                <p className="ab-quote-author-name">Mrida Infra & Plantations</p>
                <p className="ab-quote-author-role">Our Founding Principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Mrida Apart — sticky scroll-driven storytelling (desktop) */}
      {!isMobile ? (
        <div ref={containerRef} className="ab-apart-story-container" style={{ height: `${STORY_CONTAINER_VH}vh` }}>
          <section className="ab-apart-story-sticky" style={pinStyle}>
            <div className="ab-apart-story-bg">
              <motion.div
                className="ab-apart-story-glow-1"
                animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="ab-apart-story-glow-2"
                animate={{ x: [0, -30, 40, 0], y: [0, 20, -30, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <div className="ab-apart-story-texture" />
            </div>

            <div className="ab-apart-story-inner">
              <div className="ab-apart-story-header">
                <div className="ab-apart-badge">
                  <span className="ab-apart-badge-dot" />
                  <p className="ab-apart-badge-text">What Sets Mrida Apart</p>
                </div>
                <h2 className="ab-apart-heading">What makes our partnership genuinely different</h2>
              </div>

              <div className="ab-apart-story-grid">
                {/* Left: chapter-aware accordion + progress timeline */}
                <div className="ab-story-timeline-layout">
                  <div className="ab-story-chapters-list">
                    {CHAPTERS.map((chapter, chapIdx) => {
                      const isActiveChapter = activeChapterIndex === chapIdx;
                      const isPastChapter = activeChapterIndex > chapIdx;

                      let lineFill = 0;
                      if (isPastChapter) {
                        lineFill = 100;
                      } else if (isActiveChapter) {
                        const total = chapter.items.length;
                        const currentInChap = activeIndex - chapter.startIndex;
                        lineFill = total > 1 ? (currentInChap / (total - 1)) * 100 : 100;
                      }

                      return (
                        <div key={chapter.id} className="ab-story-chapter-group">
                          <button
                            className={`ab-story-chapter-header ${isActiveChapter ? 'active' : ''}`}
                            onClick={() => handleChapterClick(chapIdx)}
                          >
                            <div className="ab-story-chapter-header-left">
                              <div className={`ab-story-chapter-node ${isActiveChapter || isPastChapter ? 'active' : ''}`}>
                                <span className="node-dot" />
                                {chapIdx < CHAPTERS.length - 1 && (
                                  <div className="node-line-container">
                                    <div className="node-line-bg" />
                                    <motion.div
                                      className="node-line-fill"
                                      animate={{ height: `${lineFill}%` }}
                                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="ab-story-chapter-header-right">
                              <span className="chapter-toggle-icon">{isActiveChapter ? '▼' : '▶'}</span>
                              <h3 className="chapter-title">{chapter.title}</h3>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isActiveChapter && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                style={{ overflow: 'hidden' }}
                              >
                                <div className="ab-story-chapter-items">
                                  {chapter.items.map((item, itemIdx) => {
                                    const globalIdx = chapter.startIndex + itemIdx;
                                    const isActiveItem = activeIndex === globalIdx;
                                    return (
                                      <button
                                        key={itemIdx}
                                        className={`ab-story-item-btn ${isActiveItem ? 'active' : ''}`}
                                        onClick={() => scrollToItemIndex(globalIdx)}
                                      >
                                        <div className="ab-story-item-content">
                                          {isActiveItem && (
                                            <motion.div
                                              layoutId="activeIndicator"
                                              className="ab-story-active-indicator"
                                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                          )}
                                          <span className="ab-story-item-title">{item.title}</span>
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right: crossfading content card */}
                <div className="ab-story-card-wrap">
                  <div className="ab-story-card">
                    <div className="ab-story-card-img">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeItem.image}
                          src={activeItem.image}
                          alt={activeItem.title}
                          initial={{ opacity: 0, scale: 1.06 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.04 }}
                          transition={{ duration: 0.45, ease: "easeInOut" }}
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </AnimatePresence>
                    </div>
                    <div className="ab-story-card-body">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeIndex}
                          style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <motion.h3
                            className="ab-story-card-title"
                            variants={{
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -10 },
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {activeItem.title}
                          </motion.h3>
                          <motion.p
                            className="ab-story-card-desc"
                            variants={{
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                            }}
                            transition={{ duration: 0.4, delay: 0.12 }}
                          >
                            {activeItem.description}
                          </motion.p>
                          <motion.a
                            href="/contact"
                            className="ab-story-card-cta"
                            variants={{
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                            }}
                            transition={{ duration: 0.4, delay: 0.22 }}
                          >
                            Partner With Us →
                          </motion.a>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* Mobile fallback: simple grouped static cards, no scroll-jacking */
        <div className="ab-story-mobile-wrap">
          <div className="ab-apart-badge">
            <span className="ab-apart-badge-dot" />
            <p className="ab-apart-badge-text">What Sets Mrida Apart</p>
          </div>
          <h2 className="ab-story-mobile-title">What makes our partnership genuinely different</h2>
          <div className="ab-story-mobile-list">
            {CHAPTERS.map((chapter) => (
              <div key={chapter.id} className="ab-story-mobile-chapter">
                <h3 className="ab-story-mobile-chapter-title">{chapter.title}</h3>
                <div className="ab-story-mobile-chapter-cards">
                  {chapter.items.map((item, i) => (
                    <div key={i} className="ab-story-mobile-card">
                      <div className="ab-story-mobile-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="ab-story-mobile-body">
                        <h4 className="ab-story-mobile-card-title">{item.title}</h4>
                        <p className="ab-story-mobile-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <section className="ab-cta-section">
        <div
          className="ab-cta-card"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1536&fit=crop&q=80&auto=format')` }}
        >
          <div className="ab-cta-darken" />
          <div className="ab-cta-inner">
            <h2>Ready when you are</h2>
            <p>
              One message starts everything. Tell us about your mature Agarwood trees or your investment goals, and let's build a partnership worth growing.
            </p>
            <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="ab-btn ab-btn-secondary">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

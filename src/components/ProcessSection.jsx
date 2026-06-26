import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Survey',
    description: "Mrida visits your site, assesses your mature Agarwood trees, and tags every eligible tree for the record — at no cost to you.",
    image: 'https://images.unsplash.com/photo-1698025594761-39e52299b9a7?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: './service/survey',
  },
  {
    number: '02',
    title: 'Split & Agree',
    description: 'We confirm the 20% upfront / 80% shared-return terms — all agreed and signed before any work begins.',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: './service/split-and-agree',
  },
  {
    number: '03',
    title: 'Inoculate',
    description: 'We fund and manage professional inoculation entirely at our own expense, using proven techniques to support healthy resin development.',
    image: 'https://images.unsplash.com/photo-1681438080729-5c62d90f9416?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: './service/inoculate',
  },
  {
    number: '04',
    title: 'Monitor',
    description: "Ongoing health and resin-development monitoring through to harvest, with regular updates on your trees' progress.",
    image: 'https://images.unsplash.com/photo-1761839257870-06874bda71b5?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: './service/monitor',
  },
  {
    number: '05',
    title: 'Harvest & Settle',
    description: 'Harvest is coordinated and managed end-to-end; proceeds are shared exactly per your signed agreement.',
    image: 'https://images.unsplash.com/photo-1550305490-75e5ba3e301c?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: './service/harvest-and-settle',
  },
  {
    number: '06',
    title: 'Full Traceability',
    description: 'Every tree is tracked by its unique Site and Tree Number — from tagging through inoculation, harvest, and final sale.',
    image: 'https://images.unsplash.com/photo-1768846316948-ae43fd739208?w=1400&h=1000&fit=crop&q=80&auto=format',
    ctaHref: './service/traceability',
  },
];

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = STEPS[activeIndex];

  return (
    <section className="framer-vwAzn framer-S0UiV framer-6c3n9 framer-2hdijt process-section" style={{ backgroundColor: "var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))", width: "100%" }}>
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
              <p className="process-badge-text">Our Process</p>
            </div>
            <h2 className="process-heading">Five steps from survey to settlement</h2>
            <p className="process-subhead">Every Mrida partnership runs through the same clear, fair workflow — from your first site survey to the moment harvest proceeds are settled.</p>
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
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="process-step-number">{step.number}</span>
                  <span className="process-step-title">{step.title}</span>
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
                  <h6 className="process-details-title">{active.title}</h6>
                  <p className="process-details-desc">{active.description}</p>
                  <a className="process-details-link" href={active.ctaHref}>More details</a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

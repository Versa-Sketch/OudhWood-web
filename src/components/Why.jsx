import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Inline icons ───────────────────────────────────────────── */
const IconPayment = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c3-3 5-8 5-13 0 0 4 0 7 3s3 7 3 7-5 0-8-3"/><line x1="7" y1="22" x2="12" y2="17"/>
  </svg>
);
const IconTraceability = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);
const IconAgreement = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

/* ── Card data ──────────────────────────────────────────────── */
const cards = [
  {
    id: 1,
    title: 'Upfront Payment on Mature Agarwood Trees',
    description: 'We buy a minimum of 20% of your eligible mature Agarwood trees and pay you immediately at an agreed price. Real income, before inoculation even begins.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=900&h=560&fit=crop&q=85&auto=format',
    icon: <IconPayment />,
  },
  {
    id: 2,
    title: 'Zero Inoculation Cost on Your Remaining Trees',
    description: 'We fund and manage the full inoculation and monitoring process on your remaining trees, entirely at our own expense. You pay nothing - not a single rupee.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconLeaf />,
  },
  {
    id: 3,
    title: 'Full Tree-Level Traceability',
    description: 'Every eligible tree receives a unique Tree Number, tracked through inoculation, inspection, harvest, and final sale. Every figure traces back to your trees. Always.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconTraceability />,
  },
  {
    id: 4,
    title: 'Signed Agreements Before Any Work Begins',
    description: 'All prices, sharing ratios, and responsibilities are confirmed in writing. No moving terms. No surprises. No exceptions.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconAgreement />,
  },
];

const ease = [0.22, 1, 0.36, 1];

/* ── Animated card wrapper ──────────────────────────────────── */
function CardWrap({ delay, className, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ── Standard card ─────────────────────────────────────────── */
function StandardCard({ card, delay }) {
  return (
    <CardWrap delay={delay} className="wyc wyc-standard" style={{ height: '100%', margin: 0 }}>
      <div className="wyc-img-wrap wyc-img-portrait" style={{ height: '180px' }}>
        <img src={card.image} alt={card.title} className="wyc-img" />
      </div>
      <div className="wyc-body" style={{ padding: '24px' }}>
        <span className="wyc-icon">{card.icon}</span>
        <h3 className="wyc-title" style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{card.title}</h3>
        <p className="wyc-desc" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{card.description}</p>
      </div>
    </CardWrap>
  );
}

/* ── Trust stats overlay on the sticky left image ───────────── */
const trustItems = [
  '20% Guaranteed Upfront Purchase',
  '100% Traceable Partnership',
  'Zero Inoculation Cost',
  'Farmer-First Model',
];

/* ── Main component ─────────────────────────────────────────── */
export default function Why() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* ── Why section ────────────────────────────────────────── */}
      <section className="framer-14zwjep" data-framer-name="Why" id="how-it-works">
        <div className="framer-1x9il50" data-framer-name="Inner">

          {/* Existing Framer header — untouched layout, updated texts */}
          <div className="framer-1202p8z" data-framer-name="Title Section">
            <div className="framer-odak6a" data-framer-name="Title">
              <div className="ssr-variant">
                <div className="framer-syn98g-container">
                  <div className="framer-t7M5S framer-riLfm framer-pqt00z framer-v-lg75cy" data-framer-name="Grey" style={{ "--1ejae7j": "flex-start", width: "100%" }}>
                    <div className="framer-12zpxkc" data-border="true" data-framer-name="Icon" style={{ "--border-bottom-width": "0.5px", "--border-color": "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", "--border-left-width": "0.5px", "--border-right-width": "0.5px", "--border-style": "solid", "--border-top-width": "0.5px", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                      <div className="framer-1mlw5gd" data-framer-name="Dot" style={{ backgroundColor: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }} />
                    </div>
                    <div className="framer-2pahix" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112)))" }}>{`Our Commitments`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-wctq0p" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <h2 className="framer-text framer-styles-preset-1vb0x0m" data-styles-preset="emYHIiQDN" dir="auto" style={{ "--framer-text-color": "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))" }}>{`Four Commitments Every Agarwood Farmer Partnership Must Have - Confirmed in Writing Before We Begin`}</h2>
              </div>
            </div>
            <div className="framer-1ro95wx" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p className="framer-text framer-styles-preset-12akawa" data-styles-preset="gJAO4fAFX" dir="auto" style={{ "--framer-text-color": "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))" }}>{`Every Mrida partnership starts with four non-negotiable promises. They don't change at harvest. They don't shift with the market. They're locked into your signed agreement from day one.`}</p>
            </div>
          </div>

          {/* ── Premium editorial layout ──────────────────────── */}
          <div className="why-split">

            {/* Left: sticky image panel */}
            <motion.div
              ref={leftRef}
              className="why-left"
              initial={{ opacity: 0, x: -20 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease }}
            >
              <div className="why-sticky">
                <div className="why-anchor-img-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&h=1200&fit=crop&q=85&auto=format"
                    alt="Agarwood plantation"
                    className="why-anchor-img"
                  />
                  <div className="why-anchor-gradient" />
                  <div className="why-trust-box">
                    <p className="why-trust-heading">Built on Trust</p>
                    <ul className="why-trust-list">
                      {trustItems.map((item) => (
                        <li key={item} className="why-trust-item">
                          <span className="why-trust-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: 2x2 grid for 4 commitments */}
            <div className="why-right">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <StandardCard card={cards[0]} delay={0.05} />
                <StandardCard card={cards[1]} delay={0.1} />
                <StandardCard card={cards[2]} delay={0.15} />
                <StandardCard card={cards[3]} delay={0.2} />
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
}

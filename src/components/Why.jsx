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
const IconLand = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

/* ── Card data ──────────────────────────────────────────────── */
const cards = [
  {
    id: 1, size: 'featured',
    title: 'Guaranteed Upfront Payment',
    description: 'On a minimum of 20% of your mature Agarwood trees — paid before harvest, not after.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=900&h=560&fit=crop&q=85&auto=format',
    icon: <IconPayment />,
  },
  {
    id: 2, size: 'standard',
    title: 'Zero Inoculation Cost',
    description: 'Your trees, professionally managed — we fund and run inoculation entirely at our own expense.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconLeaf />,
  },
  {
    id: 3, size: 'standard',
    title: 'Land Stays With the Farmer',
    description: 'Only the minimum 20% of purchased trees transfer to us — the rest stay in the farmer\'s name.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=420&fit=crop&q=80&auto=format',
    icon: <IconLand />,
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

/* ── Featured card (horizontal, full-width row) ─────────────── */
function FeaturedCard({ card, delay }) {
  return (
    <CardWrap delay={delay} className="wyc wyc-featured">
      <div className="wyc-img-wrap">
        <img src={card.image} alt={card.title} className="wyc-img" />
      </div>
      <div className="wyc-body wyc-body-side">
        <span className="wyc-icon">{card.icon}</span>
        <h3 className="wyc-title">{card.title}</h3>
        <p className="wyc-desc">{card.description}</p>
        <span className="wyc-learn">Learn more <span className="wyc-arrow">→</span></span>
      </div>
    </CardWrap>
  );
}

/* ── Standard portrait card ─────────────────────────────────── */
function StandardCard({ card, delay }) {
  return (
    <CardWrap delay={delay} className="wyc wyc-standard">
      <div className="wyc-img-wrap wyc-img-portrait">
        <img src={card.image} alt={card.title} className="wyc-img" />
      </div>
      <div className="wyc-body">
        <span className="wyc-icon">{card.icon}</span>
        <h3 className="wyc-title">{card.title}</h3>
        <p className="wyc-desc">{card.description}</p>
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

          {/* Existing Framer header — untouched */}
          <div className="framer-1202p8z" data-framer-name="Title Section">
            <div className="framer-odak6a" data-framer-name="Title">
              <div className="ssr-variant">
                <div className="framer-syn98g-container">
                  <div className="framer-t7M5S framer-riLfm framer-pqt00z framer-v-lg75cy" data-framer-name="Grey" style={{ "--1ejae7j": "flex-start", width: "100%" }}>
                    <div className="framer-12zpxkc" data-border="true" data-framer-name="Icon" style={{ "--border-bottom-width": "0.5px", "--border-color": "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", "--border-left-width": "0.5px", "--border-right-width": "0.5px", "--border-style": "solid", "--border-top-width": "0.5px", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                      <div className="framer-1mlw5gd" data-framer-name="Dot" style={{ backgroundColor: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }} />
                    </div>
                    <div className="framer-2pahix" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112)))" }}>{`Why Mrida`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="framer-wctq0p" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <h2 className="framer-text framer-styles-preset-1vb0x0m" data-styles-preset="emYHIiQDN" dir="auto" style={{ "--framer-text-color": "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))" }}>{`What sets Mrida apart`}</h2>
              </div>
            </div>
            <div className="framer-1ro95wx" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
              <p className="framer-text framer-styles-preset-12akawa" data-styles-preset="gJAO4fAFX" dir="auto" style={{ "--framer-text-color": "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))" }}>{`Plenty of operations talk about Agarwood. Here's what makes our approach genuinely different.`}</p>
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

            {/* Right: editorial card grid */}
            <div className="why-right">
              <div className="why-cards">

                {/* Row 1 — Featured horizontal card */}
                <FeaturedCard card={cards[0]} delay={0.05} />

                {/* Row 2 — Two portrait cards */}
                <StandardCard card={cards[1]} delay={0.1} />
                <StandardCard card={cards[2]} delay={0.17} />


              </div>
            </div>
          </div>
          {/* ── End premium layout ─────────────────────────────── */}

        </div>
      </section>

      {/* ── "Ready when you are" CTA — desktop ──────────────── */}
      <div className="ssr-variant hidden-ojchan hidden-1h6ujoa">
        <div className="framer-uo82x8-container">
          <section as="section" className="framer-fyz6s framer-S0UiV framer-6c3n9 framer-4cr4yc framer-v-4cr4yc" data-framer-name="Desktop/Fill" style={{ height: "100%", width: "100%" }}>
            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="4096" height="3072" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" srcset="https://images.unsplash.com/photo-1781622196320-24a458a02660?w=512&h=384&fit=crop&q=80&auto=format 512w,https://images.unsplash.com/photo-1781622196320-24a458a02660?w=1024&h=768&fit=crop&q=80&auto=format 1024w,https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1536&fit=crop&q=80&auto=format 2048w,https://images.unsplash.com/photo-1781622196320-24a458a02660?w=4096&h=3072&fit=crop&q=80&auto=format 4096w" src="https://images.unsplash.com/photo-1781622196320-24a458a02660?w=4096&h=3072&fit=crop&q=80&auto=format" alt style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} /></div>
            <div className="framer-o90ltw" data-framer-name="Bending" style={{ opacity: "0.5" }}><div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0", backgroundImage: "url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256)", backgroundRepeat: "repeat", backgroundPosition: "left top", border: "0", backgroundSize: "128px auto" }} /></div>
            <div className="framer-1oumzdz" data-framer-name="Cover" style={{ backgroundColor: "var(--token-88b7370d-da66-4dea-9b25-a75d885e172f, rgba(0, 0, 0, 0.5))" }}>
              <div className="framer-11tafe0" data-framer-name="Inner">
                <div className="framer-3vlij8" data-framer-name="Title">
                  <div className="framer-1pe02a7" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}><h2 className="framer-text framer-styles-preset-1vb0x0m" data-styles-preset="emYHIiQDN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Ready when you are`}</h2></div>
                  <div className="framer-1vv0uzm" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}><p className="framer-text framer-styles-preset-12akawa" data-styles-preset="gJAO4fAFX" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`One message starts everything. Tell us about your mature Agarwood trees or your investment goals, and let's build a partnership worth growing.`}</p></div>
                </div>
                <div className="framer-nrlz57-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" data-framer-name="Primary" data-highlight="true" href="https://cal.com/" target="_blank" rel="noopener" tabIndex="0" style={{ backgroundColor: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>
                  <div className="framer-k6u0up" data-framer-name="Text"><div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: "1", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p></div><div className="framer-lypvvb" data-framer-name="Flip"><div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p></div><div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p></div></div></div>
                  <div className="framer-c5clwi" data-framer-name="Icon"><div className="framer-19pck3z" data-border="true" data-framer-name="Dot" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }} /></div>
                </a>{/*/$*/}</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── "Ready when you are" CTA — tablet ───────────────── */}
      <div className="ssr-variant hidden-1h6ujoa hidden-72rtr7">
        <div className="framer-uo82x8-container">
          <section as="section" className="framer-fyz6s framer-S0UiV framer-6c3n9 framer-4cr4yc framer-v-p20cdd" data-framer-name="Tablet/Fill" style={{ height: "100%", width: "100%" }}>
            <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="4096" height="3072" src="https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1536&fit=crop&q=80&auto=format" alt style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectFit: "cover" }} /></div>
            <div className="framer-o90ltw" style={{ opacity: "0.5" }}><div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", top: "0", right: "0", bottom: "0", left: "0", backgroundImage: "url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256)", backgroundRepeat: "repeat", backgroundPosition: "left top", border: "0", backgroundSize: "128px auto" }} /></div>
            <div className="framer-1oumzdz" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <div className="framer-11tafe0">
                <div className="framer-3vlij8">
                  <div className="framer-1pe02a7" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "rgb(255,255,255)", "--framer-link-text-color": "rgb(0,153,255)", "--framer-link-text-decoration": "underline", transform: "none" }}><h2 className="framer-text framer-styles-preset-1vb0x0m" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Ready when you are`}</h2></div>
                  <div className="framer-1vv0uzm" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", "--framer-link-text-color": "rgb(0,153,255)", "--framer-link-text-decoration": "underline", transform: "none" }}><p className="framer-text framer-styles-preset-12akawa" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`One message starts everything. Tell us about your mature Agarwood trees or your investment goals, and let's build a partnership worth growing.`}</p></div>
                </div>
                <div className="framer-nrlz57-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" data-framer-name="Primary" data-highlight="true" href="https://cal.com/" target="_blank" rel="noopener" tabIndex="0" style={{ backgroundColor: "rgb(195,96,54)" }}>
                  <div className="framer-k6u0up"><div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", opacity: "1", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Partner With Us`}</p></div><div className="framer-lypvvb"><div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Partner With Us`}</p></div><div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Partner With Us`}</p></div></div></div>
                  <div className="framer-c5clwi"><div className="framer-19pck3z" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255,255,255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(255,255,255,0)", borderRadius: "50px" }} /></div>
                </a>{/*/$*/}</div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── "Ready when you are" CTA — mobile ───────────────── */}
      <div className="ssr-variant hidden-ojchan hidden-72rtr7">
        <div className="framer-uo82x8-container">
          <section as="section" className="framer-fyz6s framer-S0UiV framer-6c3n9 framer-4cr4yc framer-v-s2mlrn" data-framer-name="Phone/Fill" style={{ height: "100%", width: "100%" }}>
            <div style={{ position: "absolute", borderRadius: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="2048" height="1536" src="https://images.unsplash.com/photo-1781622196320-24a458a02660?w=1024&h=768&fit=crop&q=80&auto=format" alt style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} /></div>
            <div className="framer-o90ltw" style={{ opacity: "0.5" }}><div style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", backgroundImage: "url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256)", backgroundRepeat: "repeat", backgroundSize: "128px auto" }} /></div>
            <div className="framer-1oumzdz" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
              <div className="framer-11tafe0">
                <div className="framer-3vlij8">
                  <div className="framer-1pe02a7" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "rgb(255,255,255)", transform: "none" }}><h2 className="framer-text framer-styles-preset-1vb0x0m" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Ready when you are`}</h2></div>
                  <div className="framer-1vv0uzm" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", transform: "none" }}><p className="framer-text framer-styles-preset-12akawa" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`One message starts everything. Tell us about your mature Agarwood trees or your investment goals, and let's build a partnership worth growing.`}</p></div>
                </div>
                <div className="framer-nrlz57-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" data-framer-name="Primary" data-highlight="true" href="https://cal.com/" target="_blank" rel="noopener" tabIndex="0" style={{ backgroundColor: "rgb(195,96,54)" }}>
                  <div className="framer-k6u0up"><div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", opacity: "1", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Partner With Us`}</p></div><div className="framer-lypvvb"><div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Partner With Us`}</p></div><div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "rgb(255,255,255)", transform: "none" }}><p className="framer-text framer-styles-preset-1c0cf2x" dir="auto" style={{ "--framer-text-color": "rgb(255,255,255)" }}>{`Partner With Us`}</p></div></div></div>
                  <div className="framer-c5clwi"><div className="framer-19pck3z" data-border="true" style={{ "--border-bottom-width": "1px", "--border-color": "rgb(255,255,255)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "rgba(255,255,255,0)", borderRadius: "50px" }} /></div>
                </a>{/*/$*/}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Icons ──────────────────────────────────────────────────────── */
const IconFairness = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconTraceability = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const IconPartnership = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ── Data ───────────────────────────────────────────────────────── */
const WHO_WE_ARE = [
  {
    no: '01',
    title: 'Our Belief',
    text: "Mrida is an Agarwood cultivation and acquisition company built around a simple belief: the people who own the trees deserve a fair, honest share of the value those trees create.",
  },
  {
    no: '02',
    title: 'The Gap We Closed',
    text: "For years, farmers and landowners across India have held mature Agarwood trees with enormous potential — yet most never saw that value. They lacked the expertise, the inoculation materials, and the market access needed to turn standing trees into resin-bearing assets. We were founded to close that gap.",
  },
  {
    no: '03',
    title: 'How We Work',
    text: "We bring the method, the management, and the buyers. Farmers bring their land and their mature Agarwood trees. Together, we create a partnership that pays from day one and shares returns transparently at harvest.",
  },
];

const MISSION_BULLETS = [
  {
    label: 'Farmer-first',
    text: "we lead with the farmer’s benefit: upfront income, zero inoculation cost on shared trees, and a clear share of returns.",
  },
  {
    label: 'Transparent',
    text: 'every figure traces back to a tagged tree and a signed agreement. No hidden deductions, no moving terms.',
  },
  {
    label: 'Sustainable',
    text: 'we build long-term partnerships that strengthen rural livelihoods and create reliable, traceable supply.',
  },
];

const CORE_VALUES = [
  {
    icon: <IconFairness />,
    title: 'Fairness',
    text: "We lead with the farmer's benefit, always. Prices, sharing ratios, and responsibilities are agreed in writing before any work begins — so what's promised is exactly what's delivered.",
  },
  {
    icon: <IconTraceability />,
    title: 'Traceability',
    text: "Every plantation site carries a unique Site Number, and every eligible tree a unique Tree Number, logged through inoculation, inspection, harvest, and sale. Sold trees and shared trees are flagged separately, so accounting stays clear from tagging to settlement.",
  },
  {
    icon: <IconPartnership />,
    title: 'Partnership',
    text: "We don't see farmers as suppliers or investors as outsiders. We see partners. A fair farmer partnership secures reliable supply and strengthens the long-term sustainability of everything we build.",
  },
];

const APART_BULLETS = [
  { label: 'Upfront payment, real income', text: 'farmers earn from day one, not just at a distant harvest.' },
  { label: 'Zero inoculation cost for farmers', text: 'we fund and manage inoculation and monitoring on shared trees entirely at our own expense.' },
  { label: 'Land stays with the farmer', text: "only the minimum 20% of purchased trees transfer to us; the rest stay in the farmer's name." },
  { label: 'End-to-end management', text: 'we handle survey, tagging, inoculation, monitoring, harvesting, grading, and sale through our buyer network.' },
  { label: 'Full traceability', text: 'unique Site and Tree Numbers mean every figure is accountable and every tree is trackable.' },
  { label: 'Signed agreements, no surprises', text: 'all terms are confirmed in writing before any work begins.' },
];

/* ── Tokens ─────────────────────────────────────────────────────── */
const TERRACOTTA = 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))';
const INK        = 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))';
const MUTED      = 'var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))';
const CREAM      = 'var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const EASE = [0.16, 1, 0.3, 1];

export default function About() {
  return (
    <>
      <style>{`
        .about2 { --tc: rgb(195, 96, 54); }
        .about2-inner { max-width: 1180px; margin: 0 auto; }

        /* ── Header ── */
        .about2-head { max-width: 760px; margin: 0 0 48px 0; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 22px; }
        .about2-cta-row { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }

        /* ── Story (Who We Are) ── */
        .about2-story { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 72px; align-items: start; margin-top: 24px; }
        .about2-sticky { position: sticky; top: 96px; }
        .about2-figure { position: relative; border-radius: 28px; overflow: hidden; box-shadow: 0 30px 70px -30px rgba(60,30,15,0.45); aspect-ratio: 4/5; }
        .about2-figure img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 1.2s cubic-bezier(0.16,1,0.3,1); }
        .about2-figure:hover img { transform: scale(1.05); }
        .about2-figcap { position: absolute; left: 20px; bottom: 20px; right: 20px; padding: 14px 18px; border-radius: 16px; background: rgba(255,255,255,0.72); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.6); box-shadow: 0 8px 30px rgba(0,0,0,0.12); }
        .about2-float { position: absolute; top: 22px; left: 22px; padding: 16px 20px; border-radius: 18px; background: rgba(195,96,54,0.92); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); color: #fff; box-shadow: 0 20px 45px -18px rgba(195,96,54,0.9); }
        .about2-cards { display: flex; flex-direction: column; gap: 20px; }
        .about2-card { position: relative; padding: 30px 32px; border-radius: 22px; background: #fff; border: 1px solid rgba(26,21,18,0.08); box-shadow: 0 1px 0 rgba(26,21,18,0.02); transition: transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s ease, border-color .4s ease; overflow: hidden; }
        .about2-card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: var(--tc); transform: scaleY(0); transform-origin: top; transition: transform .45s cubic-bezier(0.16,1,0.3,1); }
        .about2-card:hover { transform: translateY(-4px); box-shadow: 0 24px 50px -28px rgba(60,30,15,0.4); border-color: rgba(195,96,54,0.28); }
        .about2-card:hover::before { transform: scaleY(1); }
        .about2-card-no { font-size: 0.82rem; font-weight: 700; letter-spacing: 0.14em; color: var(--tc); }

        /* ── Shared section spacing ── */
        .about2-section { margin-top: 110px; }
        .about2-section-sm { margin-top: 72px; }
        .about2-section-head { max-width: 760px; margin-bottom: 44px; display: flex; flex-direction: column; gap: 18px; }
        .about2-section-head-center { text-align: center; margin-left: auto; margin-right: auto; align-items: center; }

        /* ── Mission bullets ── */
        .about2-bullet-list { display: flex; flex-direction: column; gap: 20px; margin-top: 28px; }
        .about2-bullet { display: flex; gap: 14px; align-items: flex-start; padding: 22px 26px; border-radius: 16px; background: #fff; border: 1px solid rgba(26,21,18,0.07); }
        .about2-bullet-icon { color: var(--tc); margin-top: 1px; }
        .about2-bullet-label { font-weight: 700; color: ${INK}; }

        /* ── Model split cards (20/80) ── */
        .about2-model-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0; }
        .about2-model-card { position: relative; padding: 36px 32px; border-radius: 24px; background: #fff; border: 1px solid rgba(26,21,18,0.08); overflow: hidden; transition: transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s ease; }
        .about2-model-card:hover { transform: translateY(-4px); box-shadow: 0 24px 50px -28px rgba(60,30,15,0.35); }
        .about2-model-pct { font-size: clamp(2.8rem, 5vw, 4rem); font-weight: 800; letter-spacing: -0.04em; line-height: 1; color: ${INK}; margin-bottom: 4px; }
        .about2-model-pct-unit { color: var(--tc); }
        .about2-model-title { font-size: 1.1rem; font-weight: 700; color: ${INK}; margin: 0 0 12px; }
        .about2-model-card-primary::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--tc); border-radius: 24px 24px 0 0; }

        /* ── Core Values / Benefits cards (3-col) ── */
        .about2-bgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 44px; }
        .about2-bcard { display: flex; flex-direction: column; gap: 18px; padding: 34px; border-radius: 24px; background: #fff; border: 1px solid rgba(26,21,18,0.08); transition: transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s ease, border-color .4s ease; height: 100%; }
        .about2-bcard:hover { transform: translateY(-6px); box-shadow: 0 28px 55px -30px rgba(60,30,15,0.45); border-color: rgba(195,96,54,0.28); }
        .about2-bicon { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 15px; color: var(--tc); background: rgba(195,96,54,0.1); transition: background .4s ease, color .4s ease, transform .4s ease; }
        .about2-bcard:hover .about2-bicon { background: var(--tc); color: #fff; transform: scale(1.06); }

        /* ── What Sets Mrida Apart bullets ── */
        .about2-apart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 32px; }
        .about2-apart-item { display: flex; gap: 12px; align-items: flex-start; padding: 20px 22px; border-radius: 16px; background: #fff; border: 1px solid rgba(26,21,18,0.07); }
        .about2-apart-icon { color: var(--tc); flex-shrink: 0; margin-top: 1px; }
        .about2-apart-closing { margin-top: 36px; padding: 28px 32px; border-radius: 20px; background: rgba(195,96,54,0.06); border: 1px solid rgba(195,96,54,0.14); font-size: 1.05rem; font-weight: 600; color: ${INK}; letter-spacing: -0.01em; text-align: center; }

        /* ── Investors / Heartland (side-by-side text blocks) ── */
        .about2-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }

        /* ── Note callout ── */
        .about2-note { margin-top: 28px; padding: 18px 22px; border-radius: 14px; border-left: 3px solid rgba(26,21,18,0.18); background: rgba(26,21,18,0.03); font-size: 0.88rem; color: ${MUTED}; font-style: italic; line-height: 1.6; }

        /* ── Closing CTA banner ── */
        .about2-cta-banner { margin-top: 110px; padding: 72px 56px; border-radius: 32px; background: ${INK}; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 28px; }
        .about2-cta-banner-ctas { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }

        /* ── CTA buttons ── */
        .about2-btn-primary { display: inline-flex; align-items: center; padding: 14px 30px; border-radius: 8px; font-weight: 700; font-size: 0.97rem; text-decoration: none; transition: background-color .25s ease, box-shadow .25s ease, transform .25s cubic-bezier(0.16,1,0.3,1); }
        .about2-btn-dark { background: ${INK}; color: #fff; }
        .about2-btn-dark:hover { background: rgb(30,25,22); box-shadow: 0 8px 24px -4px rgba(26,21,18,0.35); transform: translateY(-1px); }
        .about2-btn-outline { background: transparent; color: ${INK}; border: 1.5px solid rgba(26,21,18,0.3); }
        .about2-btn-outline:hover { border-color: ${INK}; transform: translateY(-1px); }
        .about2-btn-outline-light { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.4); }
        .about2-btn-outline-light:hover { border-color: #fff; transform: translateY(-1px); }
        .about2-btn-white { background: #fff; color: ${INK}; }
        .about2-btn-white:hover { box-shadow: 0 8px 24px -4px rgba(0,0,0,0.2); transform: translateY(-1px); }

        /* ── Quote block ── */
        .about2-quote { position: relative; margin: 110px auto 0; max-width: 980px; text-align: center; padding: 72px 56px; border-radius: 32px; background: linear-gradient(160deg, rgba(195,96,54,0.09), rgba(195,96,54,0.03)); border: 1px solid rgba(195,96,54,0.14); overflow: hidden; }
        .about2-quote-mark { font-family: Georgia, 'Times New Roman', serif; position: absolute; top: -18px; left: 40px; font-size: 180px; line-height: 1; color: rgba(195,96,54,0.16); pointer-events: none; }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          .about2-story { grid-template-columns: 1fr; gap: 40px; margin-top: 64px; }
          .about2-sticky { position: static; }
          .about2-figure { aspect-ratio: 4/3; }
          .about2-float { top: 16px; left: 16px; padding: 10px 14px; border-radius: 12px; }
          .about2-float div { font-size: 1.2rem !important; }
          .about2-float div + div { font-size: 0.62rem !important; letter-spacing: 0.04em !important; }
          .about2-figcap { padding: 10px 14px; border-radius: 12px; bottom: 16px; left: 16px; right: 16px; }
          .about2-figcap p { font-size: 0.82rem !important; }
          .about2-figcap p + p { font-size: 0.72rem !important; }
          .about2-section { margin-top: 72px; }
          .about2-section-sm { margin-top: 56px; }
          .about2-bgrid { grid-template-columns: 1fr; }
          .about2-model-grid { grid-template-columns: 1fr; }
          .about2-apart-grid { grid-template-columns: 1fr; }
          .about2-two-col { grid-template-columns: 1fr; gap: 32px; }
          .about2-cta-banner { padding: 56px 28px; margin-top: 72px; }
          .about2-quote { margin-top: 72px; padding: 56px 26px; }
          .about2-quote-mark { left: 20px; font-size: 130px; }
        }
        @media (max-width: 640px) {
          .about2-cta-banner { border-radius: 24px; }
          .about2-cta-banner-ctas { flex-direction: column; width: 100%; }
          .about2-btn-primary { justify-content: center; width: 100%; }
          .about2-cta-row { flex-direction: column; width: 100%; }
          .about2-cta-row .about2-btn-primary { width: 100%; justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about2-figure img, .about2-card, .about2-bcard, .about2-bicon,
          .about2-model-card, .about2-apart-item { transition: none !important; }
        }
      `}</style>

      <section className="framer-1utys7j about2" id="about" style={{ padding: '80px 20px' }}>
        <div className="about2-inner">

          {/* ── 1. HERO HEADER ──────────────────────────────────── */}
          <motion.div
            className="about2-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content' }}>
              <span className="process-badge-dot" />
              <p className="process-badge-text">ABOUT MRIDA INFRA</p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="framer-text framer-styles-preset-1vb0x0m"
              style={{ color: INK, fontSize: 'clamp(2.1rem, 4vw, 3.1rem)', lineHeight: 1.12, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, textWrap: 'balance' }}
            >
              Building a Fairer Future for Agarwood Farmers in India
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="framer-text framer-styles-preset-12akawa"
              style={{ color: MUTED, fontSize: '1.1rem', lineHeight: 1.75, margin: 0, textWrap: 'pretty' }}
            >
              Mrida Infra and Plantations LLP exists for one reason: to help farmers earn real value from their mature Agarwood trees, while building a transparent, traceable supply for one of the world's most valuable commodities. We put farmers first, share returns fairly, and back every promise with a signed agreement.
            </motion.p>

            <motion.div variants={fadeUp} className="about2-cta-row">
              <Link to="/contact" className="about2-btn-primary about2-btn-dark framer-npbIQ framer-riLfm">
                Talk to Our Team
              </Link>
              <Link to="/service" className="about2-btn-primary about2-btn-outline">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>

          {/* ── 2. WHO WE ARE ────────────────────────────────────── */}
          <div className="about2-section">
            <motion.div
              className="about2-section-head"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">Who We Are</p>
              </motion.div>
            </motion.div>

            <div className="about2-story">
              {/* Sticky image */}
              <div className="about2-sticky">
                <motion.div
                  className="about2-figure"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, ease: EASE }}
                >
                  <img
                    decoding="async"
                    src="https://images.unsplash.com/photo-1680614038587-9de698612c78?w=900&fit=crop&q=80&auto=format"
                    alt="Agarwood plantation cultivated by Mrida Infra"
                  />
                  <div className="about2-float">
                    <div style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1 }}>20%</div>
                    <div style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.9, marginTop: '4px' }}>Bought Upfront</div>
                  </div>
                  <div className="about2-figcap">
                    <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: INK }}>Mrida Infra &amp; Plantations LLP</p>
                    <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: MUTED }}>Cultivation · Inoculation · Harvest</p>
                  </div>
                </motion.div>
              </div>

              {/* Story cards */}
              <div className="about2-cards">
                {WHO_WE_ARE.map((s, i) => (
                  <motion.article
                    key={s.no}
                    className="about2-card"
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                      <span className="about2-card-no">{s.no}</span>
                      <span style={{ height: '1px', flex: 1, background: 'rgba(26,21,18,0.1)' }} />
                      <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: INK, letterSpacing: '-0.01em' }}>{s.title}</h3>
                    </div>
                    <p className="framer-text" style={{ margin: 0, color: MUTED, fontSize: '1.02rem', lineHeight: 1.72 }}>{s.text}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>

          {/* ── 3. OUR MISSION ───────────────────────────────────── */}
          <div className="about2-section">
            <motion.div
              className="about2-section-head"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">Our Mission</p>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="framer-text framer-styles-preset-1vb0x0m"
                style={{ color: INK, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, textWrap: 'balance' }}
              >
                To unlock the true value of India's mature Agarwood trees through a farmer-first, transparent, and sustainable partnership model.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="framer-text framer-styles-preset-12akawa"
                style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.72, margin: 0 }}
              >
                We measure our success by the trust our partners place in us and the income they earn. Every survey we run, every tree we tag, and every payment we make is designed to keep that trust intact.
              </motion.p>
            </motion.div>

            <div className="about2-bullet-list">
              {MISSION_BULLETS.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="about2-bullet"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <span className="about2-bullet-icon"><IconCheck /></span>
                  <p className="framer-text" style={{ margin: 0, color: MUTED, fontSize: '1rem', lineHeight: 1.7 }}>
                    <span className="about2-bullet-label">{b.label}</span> — {b.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── 4. OUR VISION ────────────────────────────────────── */}
          <div className="about2-section">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content', marginBottom: '24px' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">Our Vision</p>
              </motion.div>

              <div className="about2-two-col">
                <motion.p
                  variants={fadeUp}
                  className="framer-text framer-styles-preset-12akawa"
                  style={{ color: INK, fontSize: 'clamp(1.25rem, 2vw, 1.55rem)', lineHeight: 1.5, fontWeight: 600, letterSpacing: '-0.02em', margin: 0, textWrap: 'balance' }}
                >
                  We see an India where cultivating Agarwood is a respected, professionally managed path to long-term prosperity — for farmers who own the trees and investors who back the harvest alike.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="framer-text framer-styles-preset-12akawa"
                  style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}
                >
                  As global demand for Agarwood climbs and supply stays scarce, we want managed cultivation to become the credible answer to that gap. Our goal is a scalable model that grows across India's prime production belts without ever losing the fairness it was built on.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* ── 5. THE STORY BEHIND OUR MODEL ────────────────────── */}
          <div className="about2-section">
            <motion.div
              className="about2-section-head"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">The Story Behind Our Model</p>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="framer-text framer-styles-preset-12akawa"
                style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}
              >
                Most Agarwood arrangements force a hard choice on farmers: sell your land and trees outright for a one-time sum, or take on heavy inoculation costs and years of risk with no guarantee of return. Neither felt fair. So we designed a third way.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="framer-text framer-styles-preset-12akawa"
                style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}
              >
                We call it our <strong>mixed commercial acquisition model</strong>. It splits a farmer's eligible mature Agarwood trees into two parts, balancing immediate income with long-term upside.
              </motion.p>
            </motion.div>

            {/* 20/80 split cards */}
            <div className="about2-model-grid">
              <motion.div
                className="about2-model-card about2-model-card-primary"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="about2-model-pct">20<span className="about2-model-pct-unit">%</span></div>
                <h3 className="about2-model-title">The 20% upfront purchase</h3>
                <p className="framer-text" style={{ margin: 0, color: MUTED, fontSize: '1rem', lineHeight: 1.7 }}>
                  We buy a minimum of 20% of your eligible mature Agarwood trees at an agreed price, paid upfront. That gives farmers guaranteed income from day one, with zero risk on the trees we purchase.
                </p>
              </motion.div>

              <motion.div
                className="about2-model-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              >
                <div className="about2-model-pct">80<span className="about2-model-pct-unit">%</span></div>
                <h3 className="about2-model-title">The 80% shared arrangement</h3>
                <p className="framer-text" style={{ margin: 0, color: MUTED, fontSize: '1rem', lineHeight: 1.7 }}>
                  The remaining trees stay in the farmer's name. We fund and manage the entire inoculation and monitoring process at our own cost. After harvest and sale, harvesting expenses are deducted, and the remaining returns are shared transparently.
                </p>
              </motion.div>
            </div>

            <motion.p
              className="framer-text framer-styles-preset-12akawa"
              style={{ color: MUTED, fontSize: '1.02rem', lineHeight: 1.75, margin: '24px 0 0' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              This structure removes the two biggest barriers farmers face — upfront cost and uncertainty — while keeping land ownership firmly with the farmer. It's the foundation of our Agarwood farmer partnership in India.
            </motion.p>
          </div>

          {/* ── 6. OUR CORE VALUES ───────────────────────────────── */}
          <div className="about2-section">
            <motion.div
              className="about2-section-head"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">Our Core Values</p>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="framer-text framer-styles-preset-12akawa"
                style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.72, margin: 0 }}
              >
                Three values guide every decision we make, every site we survey, and every partnership we sign.
              </motion.p>
            </motion.div>

            <div className="about2-bgrid">
              {CORE_VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="about2-bcard"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <div className="about2-bicon">{v.icon}</div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: INK, letterSpacing: '-0.01em' }}>{v.title}</h3>
                  <p className="framer-text" style={{ margin: 0, color: MUTED, fontSize: '0.97rem', lineHeight: 1.7 }}>{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── 7. WHAT SETS MRIDA APART ─────────────────────────── */}
          <div className="about2-section">
            <motion.div
              className="about2-section-head"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">What Sets Mrida Apart</p>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="framer-text framer-styles-preset-12akawa"
                style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.72, margin: 0 }}
              >
                Plenty of operations talk about Agarwood. Here's what makes our approach genuinely different.
              </motion.p>
            </motion.div>

            <div className="about2-apart-grid">
              {APART_BULLETS.map((b, i) => (
                <motion.div
                  key={b.label}
                  className="about2-apart-item"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                >
                  <span className="about2-apart-icon"><IconCheck /></span>
                  <p className="framer-text" style={{ margin: 0, color: MUTED, fontSize: '0.97rem', lineHeight: 1.68 }}>
                    <strong style={{ color: INK }}>{b.label}</strong> — {b.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about2-apart-closing"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            >
              One proven model. Fair to farmers. Credible for investors. Built to scale across India.
            </motion.div>
          </div>

          {/* ── 8. WHY IT WORKS FOR INVESTORS TOO ───────────────── */}
          <div className="about2-section">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content', marginBottom: '24px' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">Why It Works for Investors Too</p>
              </motion.div>

              <div className="about2-two-col">
                <motion.p
                  variants={fadeUp}
                  className="framer-text framer-styles-preset-12akawa"
                  style={{ color: INK, fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', lineHeight: 1.55, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}
                >
                  A fair farmer partnership isn't only the right thing to do — it's smart business. Because farmers earn upfront and again at harvest, partnerships stay stable and supply stays dependable over the long term.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="framer-text framer-styles-preset-12akawa"
                  style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}
                >
                  That gives investors a scalable, managed, and traceable Agarwood cultivation model rather than a patchwork of moving parts. Fairness at the source is what makes the whole operation reliable.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* ── 9. ROOTED IN INDIA'S AGARWOOD HEARTLAND ─────────── */}
          <div className="about2-section">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="process-badge" style={{ width: 'fit-content', marginBottom: '24px' }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">Rooted in India's Agarwood Heartland</p>
              </motion.div>

              <div className="about2-two-col">
                <motion.p
                  variants={fadeUp}
                  className="framer-text framer-styles-preset-12akawa"
                  style={{ color: INK, fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', lineHeight: 1.55, fontWeight: 600, letterSpacing: '-0.02em', margin: 0 }}
                >
                  India offers some of the best conditions in the world for cultivating mature Agarwood trees — ideal soil, climate, and a long tradition of high-quality resin, especially across prime belts like Assam and Tripura.
                </motion.p>
                <div>
                  <motion.p
                    variants={fadeUp}
                    className="framer-text framer-styles-preset-12akawa"
                    style={{ color: MUTED, fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}
                  >
                    The sector is gaining momentum too, with growing institutional support for the Agarwood value chain. That combination of ideal geography and rising backing makes our farmer-first model both timely and credible.
                  </motion.p>
                  <motion.div className="about2-note" variants={fadeUp}>
                    Note: Regional and sector details should be verified before relying on them for decisions.
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── 10. CLOSING CTA BANNER ───────────────────────────── */}
          <motion.div
            className="about2-cta-banner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: EASE }}
          >
            <h2
              className="framer-text framer-styles-preset-1vb0x0m"
              style={{ color: '#fff', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, textWrap: 'balance', maxWidth: '680px' }}
            >
              Let's Build Something Valuable Together
            </h2>
            <p
              className="framer-text framer-styles-preset-12akawa"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.08rem', lineHeight: 1.72, margin: 0, maxWidth: '600px' }}
            >
              Whether you own mature Agarwood trees or you're exploring a serious Agarwood cultivation investment, we'd love to tell you more about who we are and how our partnership works. The first step is simply a conversation — clear, honest, and with no pressure.
            </p>
            <div className="about2-cta-banner-ctas">
              <Link to="/contact" className="about2-btn-primary about2-btn-white framer-npbIQ framer-riLfm">
                Talk to Our Team
              </Link>
              <Link to="/service" className="about2-btn-primary about2-btn-outline-light">
                Partner With Us
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

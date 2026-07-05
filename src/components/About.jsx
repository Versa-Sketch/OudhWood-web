import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Inline icons for features ──────────────────────────────── */
const IconPayment = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);

const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c3-3 5-8 5-13 0 0 4 0 7 3s3 7 3 7-5 0-8-3"/><line x1="7" y1="22" x2="12" y2="17"/>
  </svg>
);

const IconTraceability = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const IconAgreement = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

/* ── Story chapters (existing paragraphs, redistributed) ─────── */
const STORY = [
  {
    no: '01',
    title: 'Our Belief',
    text: "Mrida Infra and Plantations LLP cultivates, inoculates, and harvests Agarwood — one of the world's most valuable natural commodities. We bring the method, materials, and market access. You bring the trees and the land. Together, we produce premium resin through a partnership designed to reward both sides.",
  },
  {
    no: '02',
    title: 'Why We Started',
    text: "Mrida was founded on a single conviction — farmers who own mature Agarwood trees shouldn't have to carry the cost, the complexity, or the risk of unlocking their value alone.",
  },
  {
    no: '03',
    title: 'Our Partnership Model',
    text: "We partner with landowners across India's prime Agarwood-producing regions, bringing professional inoculation, end-to-end monitoring, and access to global buyers",
  },
  {
    no: '04',
    title: 'Why It Matters',
    text: 'so farmers earn what their trees are truly worth, and investors gain a traceable, professionally managed, high-value agricultural opportunity.',
  },
];

const BENEFITS = [
  {
    icon: <IconPayment />,
    title: 'Upfront Payment',
    text: 'We buy a minimum of 20% of your eligible mature Agarwood trees and pay you immediately.',
    
  },
  {
    icon: <IconLeaf />,
    title: 'Zero Inoculation Cost',
    text: 'We fund and manage the entire inoculation and monitoring process on your remaining trees at our cost.',
  },
  {
    icon: <IconTraceability />,
    title: 'Full Traceability',
    text: 'Every eligible tree receives a unique Tree Number, tracked securely through harvest and final sale.',
  },
  {
    icon: <IconAgreement />,
    title: 'Signed Agreements Before Any Work Begins',
    text: 'All prices, sharing ratios, and responsibilities are confirmed in writing. No moving terms. No surprises. No exceptions.',
  },
];

const TERRACOTTA = 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))';
const INK = 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))';
const MUTED = 'var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <>
      <style>{`
        .about2 { --tc: rgb(195, 96, 54); }
        .about2-inner { max-width: 1180px; margin: 0 auto; }

        /* Header */
        .about2-head { max-width: 760px; margin: 0 0 48px 0; text-align: left; display: flex; flex-direction: column; align-items: flex-start; gap: 22px; }

        /* Story */
        .about2-story { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 72px; align-items: start; margin-top: 24px; }
        .about2-sticky { position: sticky; top: 96px; }
        .about2-figure { position: relative; border-radius: 28px; overflow: hidden; box-shadow: 0 30px 70px -30px rgba(60, 30, 15, 0.45); aspect-ratio: 4/5; }
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

        /* Quote */
        .about2-quote { position: relative; margin: 110px auto 0; max-width: 980px; text-align: center; padding: 72px 56px; border-radius: 32px; background: linear-gradient(160deg, rgba(195,96,54,0.09), rgba(195,96,54,0.03)); border: 1px solid rgba(195,96,54,0.14); overflow: hidden; }
        .about2-quote-mark { font-family: Georgia, 'Times New Roman', serif; position: absolute; top: -18px; left: 40px; font-size: 180px; line-height: 1; color: rgba(195,96,54,0.16); pointer-events: none; }

        /* Benefits */
        .about2-benefits { margin-top: 110px; }
        .about2-bgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 44px; }
        .about2-bcard { display: flex; flex-direction: column; gap: 18px; padding: 34px; border-radius: 24px; background: #fff; border: 1px solid rgba(26,21,18,0.08); transition: transform .4s cubic-bezier(0.16,1,0.3,1), box-shadow .4s ease, border-color .4s ease; height: 100%; }
        .about2-bcard:hover { transform: translateY(-6px); box-shadow: 0 28px 55px -30px rgba(60,30,15,0.45); border-color: rgba(195,96,54,0.28); }
        .about2-bicon { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 15px; color: var(--tc); background: rgba(195,96,54,0.1); transition: background .4s ease, color .4s ease, transform .4s ease; }
        .about2-bcard:hover .about2-bicon { background: var(--tc); color: #fff; transform: scale(1.06); }

        .about2-ctas { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; margin-top: 56px; }

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
          .about2-quote { margin-top: 72px; padding: 56px 26px; }
          .about2-quote-mark { left: 20px; font-size: 130px; }
          .about2-bgrid { grid-template-columns: 1fr; }
          .about2-benefits { margin-top: 72px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .about2-figure img, .about2-card, .about2-bcard, .about2-bicon { transition: none !important; }
        }
      `}</style>

      <section className="framer-1utys7j about2" id="about" style={{ padding: '50px 20px' }}>
        <div className="about2-inner">

          {/* 1 ── Premium Header ─────────────────────────────── */}
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
              An Agarwood Farmer Partnership Built on One Belief
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="framer-text framer-styles-preset-12akawa"
              style={{ color: MUTED, fontSize: '1.1rem', lineHeight: 1.75, margin: 0, textWrap: 'pretty' }}
            >
              Mrida Infra and Plantations LLP cultivates, inoculates, and harvests Agarwood — one of the world's most valuable natural commodities. We bring the method, materials, and market access. You bring the trees and the land. Together, we produce premium resin through a partnership designed to reward both sides.
            </motion.p>
          </motion.div>

          {/* 2 ── Sticky Visual Story ────────────────────────── */}
          <div className="about2-story">
            {/* Sticky image */}
            <div className="about2-sticky">
              <motion.div
                className="about2-figure"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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

            {/* Scrollable story cards */}
            <div className="about2-cards">
              {STORY.map((s, i) => (
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

          {/* 3 ── Quote Spotlight ────────────────────────────── */}
          <motion.div
            className="about2-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="about2-quote-mark" aria-hidden="true">{'\u201C'}</span>
            <p style={{ position: 'relative', margin: 0, color: INK, fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)', fontWeight: 600, lineHeight: 1.35, letterSpacing: '-0.02em', textWrap: 'balance' }}>
              Farmer-first. In every partnership. In every agreement. At every stage.
            </p>
          </motion.div>

          {/* 4 ── Partnership Benefits ───────────────────────── */}
          <div className="about2-benefits">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}
            >
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.16em', color: TERRACOTTA, fontWeight: 700, margin: '0 0 14px 0' }}>Key Partnership Benefits</h4>
              <p style={{ margin: 0, color: INK, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>What every farmer partnership includes</p>
            </motion.div>

            <div className="about2-bgrid">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  className="about2-bcard"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                >
                  <span className="about2-bicon">{b.icon}</span>
                  <div>
                    <h5 style={{ fontSize: '1.12rem', fontWeight: 700, color: INK, margin: '0 0 8px 0', letterSpacing: '-0.01em' }}>{b.title}</h5>
                    <p style={{ fontSize: '0.95rem', color: MUTED, margin: 0, lineHeight: 1.68 }}>{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="about2-ctas"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="framer-17zhks-container" style={{ width: 'auto' }}>
                <Link
                  className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9"
                  to="/about"
                  tabIndex="0"
                  style={{ backgroundColor: TERRACOTTA, whiteSpace: 'nowrap' }}
                >
                  <div className="framer-k6u0up" data-framer-name="Text">
                    <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': 'var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))', opacity: '1', transform: 'none' }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ '--framer-text-color': 'white' }}>{`Learn more about who we are →`}</p>
                    </div>
                    <div className="framer-lypvvb" data-framer-name="Flip">
                      <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': 'white', transform: 'none' }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ '--framer-text-color': 'white' }}>{`Learn more about who we are →`}</p>
                      </div>
                      <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': 'white', transform: 'none' }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ '--framer-text-color': 'white' }}>{`Learn more about who we are →`}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="framer-17zhks-container" style={{ width: 'auto' }}>
                <a
                  className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9"
                  href="https://cal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex="0"
                  style={{ border: `1.5px solid ${TERRACOTTA}`, backgroundColor: 'transparent', whiteSpace: 'nowrap' }}
                >
                  <div className="framer-k6u0up" data-framer-name="Text">
                    <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': TERRACOTTA, opacity: '1', transform: 'none' }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ '--framer-text-color': TERRACOTTA }}>{`Talk to Our Team`}</p>
                    </div>
                    <div className="framer-lypvvb" data-framer-name="Flip">
                      <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': TERRACOTTA, transform: 'none' }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ '--framer-text-color': TERRACOTTA }}>{`Talk to Our Team`}</p>
                      </div>
                      <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ '--extracted-r6o4lv': TERRACOTTA, transform: 'none' }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ '--framer-text-color': TERRACOTTA }}>{`Talk to Our Team`}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}

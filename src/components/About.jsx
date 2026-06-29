import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/* ── Inline icons for features ──────────────────────────────── */
const IconPayment = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))' }}>
    <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);

const IconLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))' }}>
    <path d="M2 22c3-3 5-8 5-13 0 0 4 0 7 3s3 7 3 7-5 0-8-3"/><line x1="7" y1="22" x2="12" y2="17"/>
  </svg>
);

const IconTraceability = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))' }}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

export default function About() {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-img-col {
            order: -1;
          }
        }
      `}</style>

      <section className="framer-1utys7j" id="about" style={{ padding: "100px 20px" }}>
        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "grid", 
            gridTemplateColumns: "1.1fr 0.9fr", 
            gap: "80px", 
            alignItems: "start" 
          }}
        >
          {/* Left Column: Premium Storytelling */}
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            
            {/* Badge & Header */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div className="process-badge" style={{ width: "fit-content" }}>
                <span className="process-badge-dot" />
                <p className="process-badge-text">ABOUT MRIDA INFRA</p>
              </div>
              <h2 className="framer-text framer-styles-preset-1vb0x0m" style={{ color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", fontSize: "2.5rem", lineHeight: "1.2", fontWeight: "700" }}>
                An Agarwood Farmer Partnership Built on One Belief
              </h2>
            </motion.div>

            {/* Introductory Paragraph */}
            <motion.div variants={itemVariants}>
              <p className="framer-text framer-styles-preset-12akawa" style={{ color: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", fontSize: "1.05rem", lineHeight: "1.75", maxWidth: "600px", margin: 0 }}>
                Mrida Infra and Plantations LLP cultivates, inoculates, and harvests Agarwood — one of the world's most valuable natural commodities. We bring the method, materials, and market access. You bring the trees and the land. Together, we produce premium resin through a partnership designed to reward both sides.
              </p>
            </motion.div>

            {/* Mission / Philosophy Quote Highlight */}
            <motion.div 
              variants={itemVariants}
              style={{
                background: "rgba(195, 96, 54, 0.05)",
                borderLeft: "4px solid var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))",
                padding: "24px 32px",
                borderRadius: "0 16px 16px 0",
                maxWidth: "600px"
              }}
            >
              <p className="framer-text framer-styles-preset-12akawa" style={{ color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", fontSize: "1.2rem", fontWeight: "600", fontStyle: "italic", margin: 0, lineHeight: "1.6" }}>
                "Farmer-first. In every partnership. In every agreement. At every stage."
              </p>
            </motion.div>

            {/* Key Partnership Benefits */}
            <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "600px" }}>
              <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", fontWeight: "600", margin: "0 0 4px 0" }}>Key Partnership Benefits</h4>
              
              {/* Feature Card 1 */}
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "border-color 0.3s ease",
                  backgroundColor: "#FFFFFF"
                }}
              >
                <div style={{ marginTop: "4px" }}><IconPayment /></div>
                <div>
                  <h5 style={{ fontSize: "1rem", fontWeight: "600", color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", margin: "0 0 6px 0" }}>Upfront Payment</h5>
                  <p style={{ fontSize: "0.88rem", color: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", margin: 0, lineHeight: "1.6" }}>
                    We buy a minimum of 20% of your eligible mature Agarwood trees and pay you immediately.
                  </p>
                </div>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "border-color 0.3s ease",
                  backgroundColor: "#FFFFFF"
                }}
              >
                <div style={{ marginTop: "4px" }}><IconLeaf /></div>
                <div>
                  <h5 style={{ fontSize: "1rem", fontWeight: "600", color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", margin: "0 0 6px 0" }}>Zero Inoculation Cost</h5>
                  <p style={{ fontSize: "0.88rem", color: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", margin: 0, lineHeight: "1.6" }}>
                    We fund and manage the entire inoculation and monitoring process on your remaining trees at our cost.
                  </p>
                </div>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div 
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.04)" }}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  transition: "border-color 0.3s ease",
                  backgroundColor: "#FFFFFF"
                }}
              >
                <div style={{ marginTop: "4px" }}><IconTraceability /></div>
                <div>
                  <h5 style={{ fontSize: "1rem", fontWeight: "600", color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", margin: "0 0 6px 0" }}>Full Traceability</h5>
                  <p style={{ fontSize: "0.88rem", color: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))", margin: 0, lineHeight: "1.6" }}>
                    Every eligible tree receives a unique Tree Number, tracked securely through harvest and final sale.
                  </p>
                </div>
              </motion.div>

            </motion.div>

            {/* Dedicated CTA Section */}
            <motion.div variants={itemVariants} style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "16px" }}>
              <div className="framer-17zhks-container" style={{ width: "auto" }}>
                <Link 
                  className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" 
                  to="/about" 
                  tabIndex="0" 
                  style={{ 
                    backgroundColor: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))",
                    whiteSpace: "nowrap"
                  }}
                >
                  <div className="framer-k6u0up" data-framer-name="Text">
                    <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "white" }}>{`Learn more about who we are →`}</p>
                    </div>
                    <div className="framer-lypvvb" data-framer-name="Flip">
                      <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "white", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "white" }}>{`Learn more about who we are →`}</p>
                      </div>
                      <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "white", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "white" }}>{`Learn more about who we are →`}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="framer-17zhks-container" style={{ width: "auto" }}>
                <a 
                  className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" 
                  href="https://cal.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  tabIndex="0" 
                  style={{ 
                    border: "1.5px solid var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))",
                    backgroundColor: "transparent",
                    whiteSpace: "nowrap"
                  }}
                >
                  <div className="framer-k6u0up" data-framer-name="Text">
                    <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`Talk to Our Team`}</p>
                    </div>
                    <div className="framer-lypvvb" data-framer-name="Flip">
                      <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`Talk to Our Team`}</p>
                      </div>
                      <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>{`Talk to Our Team`}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Image with Floating Badge */}
          <div className="about-img-col" style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center" }}>
            <motion.div 
              variants={itemVariants}
              style={{ position: "relative", width: "100%" }}
            >
              {/* Outer Image Wrap with Hover Effect */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                  aspectRatio: "3/4",
                  maxHeight: "580px"
                }}
              >
                <img 
                  decoding="async" 
                  src="https://images.unsplash.com/photo-1680614038587-9de698612c78?w=800&fit=crop&q=80&auto=format" 
                  alt="Agarwood Plantation" 
                  style={{ 
                    display: "block", 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover"
                  }} 
                />
              </motion.div>



            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

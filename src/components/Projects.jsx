import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TC = 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))';
const TK = 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))';
const TG = 'var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))';
const BG = 'var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, rgb(245, 241, 229))';
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:      { opacity: 0, y: 24 },
  whileInView:  { opacity: 1, y: 0  },
  viewport:     { once: true, margin: '-60px' },
  transition:   { duration: 0.6, ease: EASE, delay },
});

const PROJECTS = [
  {
    id: 'Site MR-AS-001',
    location: 'Assam',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1600&fit=crop&q=80&auto=format',
  },
  {
    id: 'Site MR-TR-002',
    location: 'Tripura',
    status: 'In Harvest',
    image: 'https://images.unsplash.com/photo-1758390286386-87c9d78cf9be?w=1600&fit=crop&q=80&auto=format',
  },
  {
    id: 'Site MR-AS-003',
    location: 'Assam',
    status: 'Planned',
    image: 'https://images.unsplash.com/photo-1763229759060-50db1e4bf9ad?w=1600&fit=crop&q=80&auto=format',
  },
  {
    id: 'Site MR-TR-004',
    location: 'Tripura',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1730086144061-769be13b08e5?w=1600&fit=crop&q=80&auto=format',
  },
  {
    id: 'Site MR-AS-005',
    location: 'Assam',
    status: 'In Harvest',
    image: 'https://images.unsplash.com/photo-1765053257298-a56a929afeec?w=1600&fit=crop&q=80&auto=format',
  },
  {
    id: 'Site MR-TR-006',
    location: 'Tripura',
    status: 'Planned',
    image: 'https://images.unsplash.com/photo-1730086144061-769be13b08e5?w=1600&fit=crop&q=80&auto=format',
  },
];

const STYLES = `
  .proj-section {
    padding: 50px 24px;
    background-color: ${BG};
    width: 100%;
  }
  .proj-inner {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
  }

  /* ─── Two-Column Header ──────────────────────────────────────────────── */
  .proj-header {
    display: grid;
    grid-template-columns: 55fr 45fr;
    gap: 48px;
    align-items: center;
    margin-bottom: 64px;
    width: 100%;
  }
  .proj-header-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .proj-badge-row {
    margin-bottom: 24px;
  }
  .proj-heading {
    font-size: clamp(2rem, 3.2vw, 2.6rem);
    font-weight: 750;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: ${TK};
    margin: 0;
    max-width: 620px;
    text-wrap: balance;
  }
  .proj-header-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .proj-desc {
    font-size: 1.05rem;
    line-height: 1.68;
    color: ${TG};
    margin: 0;
  }
  .proj-header-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: ${TK};
    color: #ffffff;
    text-decoration: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: -0.01em;
    width: fit-content;
    transition:
      background-color 0.25s ease,
      box-shadow       0.25s ease,
      transform        0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .proj-header-btn:hover {
    background-color: rgb(30, 25, 22);
    box-shadow: 0 8px 24px -4px rgba(26,21,18,0.25);
    transform: translateY(-2px);
  }

  /* ─── Featured Grid Showcase ────────────────────────────────────────── */
  .proj-showcase-row {
    display: grid;
    grid-template-columns: 65fr 35fr;
    gap: 32px;
    width: 100%;
    margin-bottom: 32px;
  }
  .proj-showcase-row:last-of-type {
    margin-bottom: 0;
  }
  
  .proj-secondary-column {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 32px;
  }

  /* ─── Plantation Cards Common Styling ───────────────────────────────── */
  .proj-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: var(--pw-shadow-md);
    cursor: pointer;
    box-sizing: border-box;
    display: block;
    text-decoration: none;
  }
  .proj-card-img-wrapper {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(200, 196, 188);
  }
  .proj-card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .proj-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(16, 12, 10, 0.85) 0%, rgba(16, 12, 10, 0.4) 50%, rgba(16, 12, 10, 0.15) 100%);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    box-sizing: border-box;
    z-index: 2;
  }

  .proj-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--pw-shadow-lg);
  }
  .proj-card:hover .proj-card-img {
    transform: scale(1.05);
  }

  .proj-card-project-id {
    font-size: clamp(1.5rem, 2.2vw, 2rem);
    font-weight: 800;
    color: #ffffff;
    margin: 12px 0 6px;
    letter-spacing: -0.02em;
    line-height: 1.2;
  }
  .proj-card-secondary-id {
    font-size: clamp(1.25rem, 1.8vw, 1.45rem);
    font-weight: 800;
    color: #ffffff;
    margin: 8px 0 4px;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }
  
  .proj-card-detail {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0 0 24px;
    line-height: 1.4;
  }
  
  .proj-card-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
    font-weight: 750;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: auto;
  }
  .proj-card-cta span {
    transition: transform 0.25s ease;
  }
  .proj-card:hover .proj-card-cta span {
    transform: translateX(4px);
  }

  /* ─── Premium Editorial Quote Section (Full Width, No Radius, No Padding) ─ */
  .proj-quote-section {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${BG};
  }
  .proj-quote-card {
    position: relative;
    width: 100%;
    min-height: 440px;
    border-radius: 0; /* No border radius */
    overflow: hidden;
    box-sizing: border-box;
  }
  .proj-quote-bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.95;
  }
  .proj-quote-texture {
    position: absolute;
    inset: 0;
    background-image: url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256);
    background-repeat: repeat;
    background-size: 128px auto;
    opacity: 0.35;
    z-index: 1;
    pointer-events: none;
  }
  .proj-quote-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(26,21,18,0.75) 0%, rgba(26,21,18,0.55) 100%);
    padding: 64px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 2;
  }
  .proj-quote-content-wrapper {
    max-width: 1280px;
    width: 100%;
    box-sizing: border-box;
  }
  .proj-quote-border-left {
    border-left: 3px solid rgba(255, 255, 255, 0.3);
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
  .proj-quote-text {
    font-size: clamp(1.2rem, 2.2vw, 1.6rem);
    font-weight: 500;
    line-height: 1.6;
    color: #ffffff;
    margin: 0;
    text-wrap: balance;
    font-style: italic;
  }
  .proj-quote-author-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .proj-quote-author-img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
  .proj-quote-author-info {
    display: flex;
    flex-direction: column;
  }
  .proj-quote-author-name {
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
  }
  .proj-quote-author-title {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.65);
    margin: 0;
  }

  /* ─── Responsive ─────────────────────────────────────────────────────── */
  @media (max-width: 990px) {
    .proj-header {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .proj-showcase-row {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .proj-secondary-column {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 32px;
    }
    .proj-card.featured {
      height: 480px;
    }
    .proj-card.secondary {
      height: 280px;
    }
    .proj-quote-overlay {
      padding: 48px 24px;
    }
  }

  @media (max-width: 640px) {
    .proj-section {
      padding: 56px 16px 64px;
    }
    .proj-header {
      margin-bottom: 40px;
    }
    .proj-secondary-column {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .proj-card.featured {
      height: 400px;
    }
    .proj-card.secondary {
      height: 250px;
    }
    .proj-quote-border-left {
      padding-left: 20px;
    }
    .proj-quote-overlay {
      padding: 40px 16px;
    }
  }
`;

export default function Projects() {
  const row1Featured = PROJECTS[0];
  const row1Secondary = [PROJECTS[1], PROJECTS[2]];

  const row2Featured = PROJECTS[3];
  const row2Secondary = [PROJECTS[4], PROJECTS[5]];

  return (
    <>
      <style>{STYLES}</style>
      
      {/* ── Our Projects Section ───────────────────────────────────────── */}
      <section className="proj-section" id="projects">
        <div className="proj-inner">
          
          {/* Two-Column Header */}
          <div className="proj-header">
            <div className="proj-header-left">
              <motion.div className="proj-badge-row" {...fadeUp(0)}>
                <div className="process-badge">
                  <span className="process-badge-dot" />
                  <p className="process-badge-text">Our Projects</p>
                </div>
              </motion.div>
              <motion.h2 className="proj-heading" {...fadeUp(0.05)}>
                Our Agarwood Plantation Projects: One Proven Workflow Across Every Site in India
              </motion.h2>
            </div>
            
            <motion.div className="proj-header-right" {...fadeUp(0.1)}>
              <p className="proj-desc">
                Across every active and planned plantation site in India's prime Agarwood-producing belts — including <strong>Karnataka, Kerala, Assam</strong> and <strong>Tripura</strong> — every Mrida project follows the same rigorous, five-stage operational workflow: <strong>Survey &amp; Assess → Split &amp; Agree → Inoculate → Monitor → Harvest &amp; Settle</strong>. Each stage is managed by our professional team, documented tree by tree, and fully accountable at every step. No shortcuts. No ambiguity. A clean, traceable Agarwood farming operation built on long-term, fair-term partnerships.
              </p>
              <Link to="/project" className="proj-header-btn">
                See our active Agarwood plantation projects →
              </Link>
            </motion.div>
          </div>

          {/* ROW 1 Grid */}
          <div className="proj-showcase-row">
            {/* Featured Project */}
            <motion.div className="proj-card-wrapper" {...fadeUp(0.15)}>
              <Link to="/project" className="proj-card featured" style={{ height: '540px' }}>
                <div className="proj-card-img-wrapper">
                  <img src={row1Featured.image} alt={row1Featured.id} className="proj-card-img" />
                </div>
                <div className="proj-card-overlay">
                  <h3 className="proj-card-project-id">{row1Featured.id}</h3>
                  <p className="proj-card-detail">{row1Featured.location}</p>
                  <div className="proj-card-cta">
                    Explore Project <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Secondary Column */}
            <div className="proj-secondary-column">
              {row1Secondary.map((proj, idx) => (
                <motion.div key={proj.id} {...fadeUp(0.2 + idx * 0.05)}>
                  <Link to="/project" className="proj-card secondary" style={{ height: '254px' }}>
                    <div className="proj-card-img-wrapper">
                      <img src={proj.image} alt={proj.id} className="proj-card-img" />
                    </div>
                    <div className="proj-card-overlay">
                      <h4 className="proj-card-secondary-id">{proj.id}</h4>
                      <p className="proj-card-detail">{proj.location}</p>
                      <div className="proj-card-cta">
                        Explore <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ROW 2 Grid */}
          <div className="proj-showcase-row">
            {/* Featured Project */}
            <motion.div className="proj-card-wrapper" {...fadeUp(0.25)}>
              <Link to="/project" className="proj-card featured" style={{ height: '540px' }}>
                <div className="proj-card-img-wrapper">
                  <img src={row2Featured.image} alt={row2Featured.id} className="proj-card-img" />
                </div>
                <div className="proj-card-overlay">
                  <h3 className="proj-card-project-id">{row2Featured.id}</h3>
                  <p className="proj-card-detail">{row2Featured.location}</p>
                  <div className="proj-card-cta">
                    Explore Project <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Secondary Column */}
            <div className="proj-secondary-column">
              {row2Secondary.map((proj, idx) => (
                <motion.div key={proj.id} {...fadeUp(0.3 + idx * 0.05)}>
                  <Link to="/project" className="proj-card secondary" style={{ height: '254px' }}>
                    <div className="proj-card-img-wrapper">
                      <img src={proj.image} alt={proj.id} className="proj-card-img" />
                    </div>
                    <div className="proj-card-overlay">
                      <h4 className="proj-card-secondary-id">{proj.id}</h4>
                      <p className="proj-card-detail">{proj.location}</p>
                      <div className="proj-card-cta">
                        Explore <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Premium Editorial Quote Section (Separate, Full Width, No Radius, No Padding) ── */}
      <section className="proj-quote-section">
        <div className="proj-quote-card">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&fit=crop&q=80&auto=format"
            alt="Quotes Background"
            className="proj-quote-bg-img"
          />
          <div className="proj-quote-texture" />
          <div className="proj-quote-overlay">
            <div className="proj-quote-content-wrapper">
              <div className="proj-quote-border-left">
                <p className="proj-quote-text">
                  “We don't see farmers as suppliers or investors as outsiders. We see partners. One proven model. Fair to farmers. Credible for investors. Built to scale across India.”
                </p>
                <div className="proj-quote-author-row">
                  <img
                    src="https://images.unsplash.com/photo-1700592478407-3981353caecb?w=100&h=100&fit=crop&q=80&auto=format"
                    alt="The Mrida Team"
                    className="proj-quote-author-img"
                  />
                  <div className="proj-quote-author-info">
                    <p className="proj-quote-author-name">Mrida Infra LLP</p>
                    <p className="proj-quote-author-title">The Mrida Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

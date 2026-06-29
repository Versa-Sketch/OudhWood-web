import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Page anatomy matches AboutPage.jsx exactly: Hero + 4-stat strip ("Page Title" /
// "Fact Number") → full-bleed image quote banner ("Award"-banner pattern) →
// interactive name/role accordion list ("Team" section) → sticky-image numbered
// list ("Award" / Achievements section). Content is the Projects PDF throughout.

const METRICS = [
  { value: '3', label: 'Sample Sites Shown' },
  { value: '100%', label: 'Tree Traceability' },
  { value: '5-Step', label: 'Repeatable Workflow' },
  { value: '2', label: 'States Represented' },
];

// Sample/illustrative plantation sites — the PDF gives these fields as
// bracketed placeholders (e.g. "[Site Number: e.g., MR-AS-001]"), so the
// site names/figures here are representative sample data, not real sites.
const PROJECT_SITES = [
  {
    site: 'MR-AS-001', location: 'Jorhat District, Assam', trees: '420 mature trees',
    stage: 'Monitor', status: 'Active',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&h=1100&fit=crop&q=85&auto=format',
  },
  {
    site: 'MR-TR-002', location: 'West Tripura District, Tripura', trees: '260 mature trees',
    stage: 'Inoculate', status: 'Active',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&h=1100&fit=crop&q=85&auto=format',
  },
  {
    site: 'MR-AS-003', location: 'Sivasagar District, Assam', trees: '180 mature trees',
    stage: 'Survey', status: 'Planned',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&h=1100&fit=crop&q=85&auto=format',
  },
];

// Same 5-step process + traceability already established on the Business
// Model page — reused verbatim, not re-authored.
const PROCESS_STEPS = [
  { name: 'Survey', desc: 'We visit your site, assess every tree for eligibility, and tag every eligible tree with a unique, traceable number.' },
  { name: 'Split & Agree', desc: 'We confirm the 20% upfront vs. shared-arrangement terms for every tree on your land, and we both sign before any work begins.' },
  { name: 'Inoculate', desc: 'Professional inoculation transforms a mature tree into a resin-bearing, high-value commodity — entirely at our expense.' },
  { name: 'Monitor', desc: 'We monitor tree health and resin development throughout, covering all inoculation and monitoring costs on shared trees.' },
  { name: 'Harvest & Settle', desc: 'Mrida manages harvesting, grading, sale, and full coordination with buyers, then shares returns per your signed agreement.' },
  { name: 'Full Traceability', desc: 'Every eligible tree is individually tracked — a unique Site Number per plantation, a unique Tree Number per tree.' },
];

export default function ProjectPage() {
  const [activeSite, setActiveSite] = useState(0);

  useEffect(() => {
    document.title = 'Agarwood Plantation Projects in India | Mrida Infra & Plantations';
  }, []);

  return (
    <div className="contact-page">
      {/* Hero — same hero/CTA pattern used across every page */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Projects</p>
        <h1>Agarwood Plantation Projects in India</h1>
        <p className="contact-hero-sub">
          Explore Mrida's growing portfolio of managed Agarwood plantation partnerships across
          India — Assam, Tripura, and other partner districts. Every site is fully traceable,
          fairly structured, and built to grow on the land it's planted.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="featured-projects-section" style={{ padding: "80px 20px", backgroundColor: "#FAF9F6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <p className="contact-eyebrow">Our Active Sites</p>
            <h2 style={{ fontSize: "2.25rem", color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", fontWeight: "700", marginTop: "8px" }}>Featured Plantation Partnerships</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {PROJECT_SITES.map((site) => (
              <div 
                key={site.site}
                onClick={() => window.open('/', '_blank')}
                style={{ 
                  backgroundColor: "white", 
                  borderRadius: "20px", 
                  overflow: "hidden", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.03)", 
                  border: "1px solid rgba(0,0,0,0.05)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
                }}
              >
                <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                  <img src={site.image} alt={site.location} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "16px", right: "16px", backgroundColor: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", color: "white", padding: "6px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600" }}>
                    {site.status}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.5px", color: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", fontWeight: "600", marginBottom: "8px" }}>
                    Site {site.site}
                  </p>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", marginBottom: "12px" }}>
                    {site.location}
                  </h3>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))" }}>
                    <span>{site.trees}</span>
                    <span>Stage: <strong>{site.stage}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 4-stat strip, matching About's "Fact Number" row beneath the hero */}
      <div className="proj-stats-strip">
        {METRICS.map((m) => (
          <div className="proj-stat" key={m.label}>
            <p className="proj-stat-val">{m.value}</p>
            <p className="proj-stat-label">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Full-bleed image quote banner, matching About's full-bleed quote section */}
      <div className="proj-quote-banner">
        <img src="https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1200&fit=crop&q=80&auto=format" alt="" />
        <div className="proj-quote-banner-content">
          <p>"One consistent model. A growing portfolio. Partnerships built to deliver — transparently, at every stage."</p>
        </div>
      </div>

      {/* Interactive site list, matching About's Team accordion-list section */}
      <section className="proj-sites-section">
        <p className="contact-eyebrow">Where Partnerships Take Root</p>
        <h2>Active and Planned Project Sites</h2>
        <p className="contact-section-intro" style={{ marginBottom: '32px' }}>
          A few representative sites from our growing partnership portfolio — illustrative samples,
          not an exhaustive list of every site we manage.
        </p>
        <div className="proj-sites-layout">
          <div className="proj-sites-image-wrap">
            <img src={PROJECT_SITES[activeSite].image} alt={PROJECT_SITES[activeSite].location} />
          </div>
          <div>
            {PROJECT_SITES.map((site, i) => (
              <div
                key={site.site}
                className={`proj-site-row ${i === activeSite ? 'active' : ''}`}
                onMouseEnter={() => setActiveSite(i)}
                onClick={() => setActiveSite(i)}
              >
                <h3>Site {site.site}</h3>
                <p>{site.location} · {site.trees} · {site.stage} · {site.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky-image numbered list, matching About's "Award" / Achievements section */}
      <section className="proj-process-section">
        <p className="contact-eyebrow">Operational Framework</p>
        <h2>How Every Project Runs</h2>
        <p className="contact-section-intro" style={{ marginBottom: '32px' }}>
          From the first site visit to final settlement, every Mrida project moves through the same
          five clear, consistent, accountable, and traceable stages.
        </p>
        <div className="proj-process-layout">
          <div className="proj-process-image">
            <img src="https://images.unsplash.com/photo-1730086144061-769be13b08e5?w=900&h=1200&fit=crop&q=85&auto=format" alt="Agarwood plantation process" />
          </div>
          <div>
            {PROCESS_STEPS.map((step, i) => (
              <div className="proj-process-row" key={step.name}>
                <span className="proj-process-row-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{step.name}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Farmers / For Investors */}
      <section className="contact-two-paths">
        <h2>Why Our Projects Work — For Farmers and Investors Alike</h2>
        <div className="contact-paths-grid">
          <div className="contact-path-card">
            <h3>For Farmers</h3>
            <p>Real income from day one — get paid upfront for a minimum of 20% of your eligible mature Agarwood trees. Zero inoculation cost on your shared trees. Your land stays yours throughout. Transparent returns, fixed in writing.</p>
          </div>
          <div className="contact-path-card">
            <h3>For Investors</h3>
            <p>Managed end to end, from survey through final settlement. Fully traceable supply, logged by Site Number and Tree Number. Scalable across India's prime Agarwood-producing belts, through a sustainable farmer partnership.</p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="contact-closing-cta">
        <h2>Want to See What Your Land — or Your Investment — Could Become?</h2>
        <p>
          Whether you're a farmer looking for income from your existing trees, or an investor
          interested in a managed Agarwood market, our project model offers a clear and fair path
          forward. The first step is a simple conversation.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>
    </div>
  );
}

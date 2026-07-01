import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const METRICS = [
  { value: '4', label: 'Active & Planned Sites' },
  { value: '100%', label: 'Tree-Level Traceability' },
  { value: '5-Step', label: 'Consistent Workflow' },
  { value: '2', label: 'Prime Growing States' },
];

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
  {
    site: 'MR-TR-004', location: 'South Tripura District, Tripura', trees: '310 mature trees',
    stage: 'Split & Agree', status: 'Planned',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1100&fit=crop&q=85&auto=format',
  },
];

const PROCESS_STEPS = [
  { name: 'Survey', desc: 'We visit the site, assess each mature Agarwood tree for eligibility, and tag every one with a unique, traceable number.' },
  { name: 'Split & Agree', desc: 'We confirm the minimum 20% upfront purchase and shared arrangement — all terms are set in a signed agreement before any work begins.' },
  { name: 'Inoculate', desc: 'Professional inoculation transforms a mature tree into a resin-bearing, high-value commodity — funded and managed entirely at our expense.' },
  { name: 'Monitor', desc: 'We monitor tree health and resin development throughout the full cycle, covering all inoculation and monitoring costs on shared trees.' },
  { name: 'Harvest & Settle', desc: 'Mrida manages harvesting, grading, sale, and full coordination with buyers, then shares returns transparently per the signed agreement.' },
];

export default function ProjectPage() {
  const [activeSite, setActiveSite] = useState(0);

  useEffect(() => {
    document.title = 'Agarwood Plantation Projects in India | Mrida Infra & Plantations';
  }, []);

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <p className="contact-eyebrow">Projects</p>
        <h1>Where Partnerships Take Root</h1>
        <p className="contact-hero-sub">
          Across India's most productive Agarwood-growing regions, we partner with farmers and
          landowners to turn mature Agarwood trees into a managed, traceable, high-value harvest.
          Every project runs on the same fair model — upfront payment, zero inoculation cost, and
          transparent shared returns — consistently applied at every site, every time.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      {/* Portfolio intro + project cards grid */}
      <section className="featured-projects-section" style={{ padding: '80px 20px', backgroundColor: 'var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, #f5f1e5)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '20px' }}>
            <p className="contact-eyebrow">A Growing Portfolio</p>
            <h2 style={{ fontSize: '2.25rem', color: 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))', fontWeight: '700', marginTop: '8px', marginBottom: '20px' }}>
              Active and Planned Partnership Sites
            </h2>
            <p style={{ fontSize: '16px', color: 'rgb(112,112,112)', lineHeight: '1.7', maxWidth: '780px', marginBottom: '12px' }}>
              Our projects span farmer-owned land across rural and semi-urban India, with a strong
              focus on the country's prime Agarwood-producing belts — particularly Assam and Tripura,
              where the right soil, the right climate, and a deep tradition of cultivation come together
              to support some of the highest-quality resin in the world.
            </p>
            <p style={{ fontSize: '16px', color: 'rgb(112,112,112)', lineHeight: '1.7', maxWidth: '780px', marginBottom: '40px' }}>
              Each site in our portfolio is more than a plantation. It's a structured, long-term
              partnership anchored by a signed agreement, governed by clear documentation, and supported
              by individually tagged and tracked trees at every stage — from survey to final settlement.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {PROJECT_SITES.map((site) => {
              const statusColor = site.status === 'Active'
                ? 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))'
                : site.status === 'In Harvest'
                ? 'rgb(180, 140, 30)'
                : 'rgb(100, 140, 80)';
              return (
                <div
                  key={site.site}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.03)';
                  }}
                >
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <img src={site.image} alt={site.location} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: statusColor, color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.04em' }}>
                      {site.status}
                    </div>
                  </div>
                  <div style={{ padding: '22px 24px' }}>
                    <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))', fontWeight: '700', marginBottom: '6px' }}>
                      Site {site.site}
                    </p>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))', marginBottom: '14px' }}>
                      {site.location}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--token-5dfb00e3-da06-4acf-a66b-903c726763b9, rgb(112, 112, 112))', marginBottom: '18px' }}>
                      <span>Mature Agarwood Trees: <strong style={{ color: 'rgb(0,0,0)' }}>{site.trees}</strong></span>
                      <span>Current Stage: <strong style={{ color: 'rgb(0,0,0)' }}>{site.stage}</strong></span>
                    </div>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.82rem',
                        fontWeight: '700',
                        color: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))',
                        textDecoration: 'none',
                        letterSpacing: '0.03em',
                        borderTop: '1px solid rgba(0,0,0,0.06)',
                        paddingTop: '14px',
                        width: '100%',
                      }}
                    >
                      View Site
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-stat strip */}
      <div className="proj-stats-strip">
        {METRICS.map((m) => (
          <div className="proj-stat" key={m.label}>
            <p className="proj-stat-val">{m.value}</p>
            <p className="proj-stat-label">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Full-bleed quote banner */}
      <div className="proj-quote-banner">
        <img src="https://images.unsplash.com/photo-1781622196320-24a458a02660?w=2048&h=1200&fit=crop&q=80&auto=format" alt="" />
        <div className="proj-quote-banner-content">
          <p>"One consistent model. A growing portfolio. Partnerships built to deliver — transparently, at every stage."</p>
        </div>
      </div>

      {/* Interactive site accordion */}
      <section className="proj-sites-section">
        <p className="contact-eyebrow">Full Traceability</p>
        <h2>From Tagging to Settlement</h2>
        <p className="contact-section-intro" style={{ marginBottom: '32px' }}>
          Every project we run is tracked at two levels, so farmers, investors, and our operations
          team always know exactly where things stand. Unique Site Numbers identify each plantation.
          Unique Tree Numbers tag every eligible mature tree — logged continuously through inoculation,
          monitoring, harvest, and final settlement. Purchased trees and shared trees are flagged
          separately from the start, so the accounting is always clean.
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
                <p>{site.location} &middot; {site.trees} &middot; {site.stage} &middot; {site.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky-image process steps */}
      <section className="proj-process-section">
        <p className="contact-eyebrow">Operational Framework</p>
        <h2>How Every Project Runs</h2>
        <p className="contact-section-intro" style={{ marginBottom: '32px' }}>
          From the first site visit to final settlement, every Mrida project moves through the same
          five clear, consistent stages. This shared workflow is what keeps our operations fair,
          accountable, and traceable — regardless of the size or location of the site.
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
            <h3>For Farmers and Landowners</h3>
            <ul style={{ paddingLeft: '18px', margin: 0, lineHeight: '1.9', color: 'rgb(80,80,80)', fontSize: '15px' }}>
              <li><strong>Real income from day one</strong> — get paid upfront for a minimum of 20% of your eligible mature Agarwood trees.</li>
              <li><strong>Zero inoculation cost</strong> — we fund and manage inoculation and monitoring on your shared trees at our expense.</li>
              <li><strong>Your land stays yours</strong> — full ownership, always. Only the trees we purchase transfer to us.</li>
              <li><strong>Transparent shared returns</strong> — your share is fixed in writing and paid after harvest with full traceability behind every figure.</li>
            </ul>
          </div>
          <div className="contact-path-card">
            <h3>For Investors</h3>
            <ul style={{ paddingLeft: '18px', margin: 0, lineHeight: '1.9', color: 'rgb(80,80,80)', fontSize: '15px' }}>
              <li><strong>Managed end to end</strong> — from the first survey through to final settlement, every stage is handled by our team.</li>
              <li><strong>Fully traceable supply</strong> — every site and tree is documented and tracked, giving investors the transparency they need.</li>
              <li><strong>Scalable across regions</strong> — one proven workflow, applied consistently across India's prime Agarwood-producing belts.</li>
              <li><strong>A sustainable farmer partnership</strong> — fair terms and upfront farmer payments keep supply reliable and partnerships stable over the long term.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="contact-closing-cta">
        <h2>Want to See What Your Land — or Your Investment — Could Become?</h2>
        <p>
          Whether you're a farmer with mature Agarwood trees or an investor looking for a credible,
          managed entry into the Agarwood market, our project model offers a clear and fair path
          forward. The first step is a straightforward conversation.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>
    </div>
  );
}

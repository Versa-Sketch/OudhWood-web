import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Farmer path fields are fully specified in the source PDF (Contact Page,
// "For Farmers and Landowners"). The Investor path's fields are NOT specified
// in the source — it only says "[Form fields — Investor path]" with no list.
// These four fields are an assumption, mirroring the Farmer form's shape
// (Name/Email/Phone/[domain field]/Message) for structural consistency.
const FARMER_FIELDS = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'location', label: 'Location (village / district / state)', type: 'text', required: true },
  { name: 'treeCount', label: 'Number of Mature Agarwood Trees (approximate is fine)', type: 'text', required: false },
  { name: 'message', label: 'Your Message (optional)', type: 'textarea', required: false },
];

const INVESTOR_FIELDS = [
  { name: 'fullName', label: 'Full Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  {
    name: 'investmentInterest',
    label: 'Investment Interest',
    type: 'select',
    required: true,
    options: ['Exploring options', 'Ready to invest', 'Request investor deck', 'Other'],
  },
  { name: 'message', label: 'Your Message (optional)', type: 'textarea', required: false },
];

function ContactForm({ audience }) {
  const fields = audience === 'farmer' ? FARMER_FIELDS : INVESTOR_FIELDS;
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setValues({});
    setSubmitted(false);
  }, [audience]);

  function handleChange(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend/email service is wired up yet — this only confirms receipt
    // client-side. Hook this up to a real endpoint before launch.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-form-success">
        <h3>Thank you — we've got it.</h3>
        <p>
          {audience === 'farmer'
            ? "No cost to ask. We'll follow up with clear, practical information — no pressure, no obligations."
            : "We'll follow up with what an Agarwood cultivation investment with Mrida could look like for you."}
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div className="contact-field" key={field.name}>
          <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className="contact-required"> *</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              required={field.required}
              value={values[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              rows={4}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.name}
              required={field.required}
              value={values[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              <option value="" disabled>Select one</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn-primary contact-submit-btn">Partner With Us</button>
      {audience === 'farmer' && (
        <p className="contact-form-note">No cost to ask. We'll follow up with clear, practical information — no pressure, no obligations.</p>
      )}
    </form>
  );
}

export default function ContactPage() {
  const [audience, setAudience] = useState('farmer');

  useEffect(() => {
    document.title = 'Contact Mrida Infra & Plantations | Begin Your Agarwood Partnership';
  }, []);

  return (
    <div className="contact-page">
      {/* LocalBusiness schema per the PDF's explicit SEO note. Placeholder
          values mirror the bracketed placeholders in the source PDF. */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Mrida Infra LLP',
          telephone: '+91 XXXXX XXXXX',
          email: 'hello@mridaplantations.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Office name, street, area',
            addressLocality: 'City',
            addressRegion: 'State',
            postalCode: 'PIN code',
            addressCountry: 'IN',
          },
          openingHours: 'Mo-Sa 09:30-18:30',
        })}
      </script>

      <section className="contact-hero">
        <p className="contact-eyebrow">Contact</p>
        <h1>Let's Build Something Valuable Together</h1>
        <p className="contact-hero-sub">
          You've found the right place — whether you own mature Agarwood trees or you're exploring an
          investment, we'll walk you through every step and practical next steps. No pressure. Just an
          honest conversation.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      <section className="contact-two-paths">
        <h2>Two paths. One fair model.</h2>
        <p className="contact-section-intro">
          Mrida works with two kinds of partners, and we want to make the process simple for both.
        </p>
        <div className="contact-paths-grid">
          <div className="contact-path-card">
            <h3>Farmers and landowners</h3>
            <p>
              Receive an upfront payment for a minimum of 20% of your mature Agarwood trees, pay zero
              inoculation cost on the rest, and a transparent share of returns after harvest.
            </p>
          </div>
          <div className="contact-path-card">
            <h3>Investors</h3>
            <p>
              Back a credible, professionally managed, fully traceable Agarwood cultivation model across
              India's prime Agarwood belts, with end-to-end operations handled by us.
            </p>
          </div>
        </div>
        <p className="contact-section-intro">Choose the path that fits you below, and we'll take it from there.</p>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-col">
          <h2>Tell us who you are</h2>
          <div className="contact-toggle" role="tablist" aria-label="I am a:">
            <button
              type="button"
              role="tab"
              aria-selected={audience === 'farmer'}
              className={`contact-toggle-btn${audience === 'farmer' ? ' contact-toggle-active' : ''}`}
              onClick={() => setAudience('farmer')}
            >
              Farmer / Landowner
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={audience === 'investor'}
              className={`contact-toggle-btn${audience === 'investor' ? ' contact-toggle-active' : ''}`}
              onClick={() => setAudience('investor')}
            >
              Investor
            </button>
          </div>

          <p className="contact-form-intro">
            {audience === 'farmer'
              ? "Own mature Agarwood trees and want to know exactly what you can earn? Share a few details below and we'll respond with clear, honest, and practical next steps."
              : "Exploring an Agarwood cultivation investment? Tell us what you'd like to know, and we'll follow up with what a partnership in India's prime Agarwood belts could look like for you."}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactForm audience={audience} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="contact-info-col">
          <h2>Prefer to reach us directly?</h2>
          <p className="contact-section-intro">
            You don't need to fill out a form to start a conversation. Call, email, or visit — whatever works best for you.
          </p>
          <dl className="contact-info-list">
            <div><dt>Phone</dt><dd>+91 XXXXX XXXXX</dd></div>
            <div><dt>Email</dt><dd>hello@mridaplantations.com</dd></div>
            <div><dt>Address</dt><dd>Office name, street, area, city, state, PIN code</dd></div>
            <div><dt>Working Hours</dt><dd>Monday–Saturday, 9:30 AM – 6:30 PM IST</dd></div>
          </dl>
          <div className="contact-map-placeholder" aria-label="Office location map">
            Map embed pending a confirmed office address.
          </div>

          <div className="contact-sla">
            <h3>When you'll hear back</h3>
            <ul>
              <li><strong>Within 1 business day</strong> — we'll acknowledge your inquiry and confirm it's been received.</li>
              <li><strong>Within 2–3 business days</strong> — a team member will follow up with next steps tailored to your situation.</li>
            </ul>
            <p>If your matter is urgent, call us directly during working hours and we'll do our best to help right away.</p>
          </div>
        </div>
      </section>

      <section className="contact-trust">
        <h2>Why partners choose Mrida</h2>
        <p className="contact-section-intro">
          Every partnership we build is grounded in the same principles — before the first tree is
          surveyed and long after the final returns are settled.
        </p>
        <div className="contact-trust-grid">
          <div className="contact-trust-card">
            <h3>Signed agreements</h3>
            <p>All prices, sharing ratios, and responsibilities are confirmed in writing before any work begins. What's agreed is what happens.</p>
          </div>
          <div className="contact-trust-card">
            <h3>Full traceability</h3>
            <p>Every eligible mature Agarwood tree is assigned a unique Tree Number and tracked through inoculation, inspection, harvest, and settlement. Accounting is always clear.</p>
          </div>
          <div className="contact-trust-card">
            <h3>No hidden terms</h3>
            <p>No surprise deductions, no shifting goalposts. The model is transparent by design.</p>
          </div>
        </div>
        <p className="contact-trust-quote">"Clear terms. Fair partnerships. Real income — from day one and after harvest."</p>
      </section>

      <section className="contact-closing-cta">
        <h2>Ready When You Are</h2>
        <p>
          One message starts everything. Tell us about your mature Agarwood trees or your investment
          goals, and let's build a partnership worth growing.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>
    </div>
  );
}

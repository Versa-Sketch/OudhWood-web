import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mrida-footer">
      <div className="footer-inner">
        <div className="footer-main">
          {/* Logo & Description */}
          <div className="footer-widget brand-info">
            <Link to="/" className="footer-logo">
              <img src="/mrida-logo.svg" alt="Mrida Logo" />
            </Link>
            <p className="footer-desc">
              Building India's most transparent Agarwood farming partnership — one tree at a time.
            </p>
            <Link to="/contact" className="footer-btn-contact" style={{borderRadius:0}}>
              Partner With Us<span style={{paddingLeft:"10px"}}>→</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-widget">
            <h4 className="footer-title">Navigate</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/service">Business Model</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/investors">Investors</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-widget">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="/#blog">Blog</a></li>
              <li><a href="/#faq">FAQs</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-widget contact-details">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Phone</span>
                <a href="tel:+919876543210">+91 9XXXX XXXXX</a>
              </li>
              <li>
                <span className="contact-label">Email</span>
                <a href="mailto:hello@mridaplantations.com">hello@mridaplantations.com</a>
              </li>
              <li>
                <span className="contact-label">Address</span>
                <p>Office name, street, area, city, state, PIN code</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & Socials */}
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-bottom-content">
            <p className="copyright">© {new Date().getFullYear()} Mrida Infra and Plantations LLP. All rights reserved.</p>
            <div className="footer-legal-links">
              <span>Privacy Policy</span>
              <span>Terms &amp; Conditions</span>
              <span>Disclaimer</span>
            </div>
            <div className="footer-socials">
              <span>Follow us:</span>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
          <p className="footer-disclaimer">
            Market figures referenced on this page are third-party projections provided for informational purposes only. They do not constitute guarantees of future performance or investment returns.
          </p>
        </div>
      </div>
    </footer>
  );
}

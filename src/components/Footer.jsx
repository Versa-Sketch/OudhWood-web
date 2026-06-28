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
              We unlock the value of India's most extraordinary tree by partnering with farmers and landowners through a fair, transparent, and structured Agarwood farming partnership.
            </p>
            <Link to="/contact" className="footer-btn-contact">
              Partner With Us →
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-widget">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/service">How It Works</Link></li>
              <li><Link to="/project">Projects</Link></li>
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Partnership / Resources */}
          <div className="footer-widget">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><Link to="/service">For Farmers</Link></li>
              <li><Link to="/investors">For Investors</Link></li>
              <li><a href="/#blog">Blog</a></li>
              <li><a href="/#faq">FAQs</a></li>
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
            <p className="copyright">© {new Date().getFullYear()} Mrida. All rights reserved.</p>
            <div className="footer-socials">
              <span>Follow us:</span>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

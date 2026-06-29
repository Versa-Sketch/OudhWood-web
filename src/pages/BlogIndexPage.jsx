import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BLOG_POSTS } from '../data/blogPosts.js';

const CATEGORIES = ['All', 'For Farmers', 'For Investors', 'Industry & Market'];

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Agarwood Insights for Farmers & Investors | Mrida Infra Blog';
  }, []);

  const visiblePosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="contact-page blog-index-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">Blog</p>
        <h1>The Mrida Agarwood Journal</h1>
        <p className="contact-hero-sub">
          Honest, practical insights — for farmers who want to understand what their trees are worth, and
          investors who want to understand where the opportunity lies. We break down the world of Agarwood
          clearly, so you can make informed decisions about your land, your trees, or your investment.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>

      <section className="contact-two-paths">
        <h2>What you'll find here</h2>
        <p className="contact-section-intro">
          Every article we publish serves one of two readers — and we keep it genuinely useful for both.
        </p>
        <div className="contact-paths-grid">
          <div className="contact-path-card">
            <h3>Farmers and Landowners</h3>
            <p>Straightforward guides on Agarwood inoculation, upfront income, your role in a partnership, and what fair, transparent shared returns look like in practice.</p>
          </div>
          <div className="contact-path-card">
            <h3>Investors</h3>
            <p>Clear analysis of market trends, demand drivers, ROI logic, and what sets a managed Agarwood cultivation investment apart from conventional agri-assets.</p>
          </div>
        </div>
      </section>

      <section className="blog-index-section">
        <h2 className="blog-index-heading">Browse the blog</h2>
        <div className="faq-filter-bar" style={{ justifyContent: 'flex-start', marginBottom: '32px' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`faq-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-index-grid">
          {visiblePosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-index-card">
              <div className="blog-index-card-img">
                <img src={post.image} alt={post.title} />
                <span className={`blog-index-card-tag tag-${post.category.replace(/[^a-z]/gi, '').toLowerCase()}`}>
                  {post.category}
                </span>
              </div>
              <div className="blog-index-card-body">
                <p className="blog-index-card-meta">{post.date}</p>
                <h3>{post.title}</h3>
                <p className="blog-index-card-summary">{post.metaDescription}</p>
                <span className="blog-index-card-readmore">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-closing-cta">
        <h2>Ready to move from reading to doing?</h2>
        <p>
          Whether you own mature Agarwood trees or you're exploring a serious cultivation investment, the
          next step is a single, straightforward conversation. Let's build something genuinely valuable
          together.
        </p>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>
    </div>
  );
}

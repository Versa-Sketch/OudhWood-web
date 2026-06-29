import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { BLOG_POSTS_BY_SLUG } from '../data/blogPosts.js';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS_BY_SLUG[slug];

  useEffect(() => {
    if (post) document.title = `${post.title} | Mrida Infra & Plantations`;
  }, [post]);

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="contact-page blog-post-page">
      <section className="contact-hero">
        <p className="contact-eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="contact-hero-sub">{post.metaDescription}</p>
      </section>

      <div className="blog-post-image-wrap">
        <img src={post.image} alt={post.title} />
      </div>

      <section className="contact-two-paths">
        <p className="contact-section-intro" style={{ maxWidth: '760px' }}>{post.introHook}</p>
      </section>

      <section className="blog-post-sections">
        {post.sections.map((s, i) => (
          <div className="blog-post-section-row" key={s.heading}>
            <span className="blog-post-section-num">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{s.heading}</h3>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      {post.note && (
        <section className="contact-two-paths">
          <p className="inv-disclaimer">{post.note}</p>
        </section>
      )}

      <section className="contact-two-paths blog-post-internal-link">
        <p className="contact-section-intro">
          Continue reading: <Link to={post.internalLink.href}>{post.internalLink.label}</Link> — {post.internalLink.sub}.
        </p>
      </section>

      <section className="contact-closing-cta">
        <h2>{post.closingCta}</h2>
        <div className="contact-cta-pair">
          <Link to="/contact" className="btn-primary">Partner With Us</Link>
          <a href="https://cal.com/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Talk to Our Team</a>
        </div>
      </section>
    </div>
  );
}

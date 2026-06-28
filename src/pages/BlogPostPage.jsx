import { Link, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

// Full content from the Blog PDF outlines (Posts 1–3, the three posts linked
// from the home page). The PDF gives an article *outline* — meta info, intro
// hook, numbered section headings with their one-line briefs, closing CTA,
// and an internal link — not full prose paragraphs per section, so this page
// renders that outline faithfully rather than inventing expanded copy that
// isn't in the source.
const POSTS = {
  'what-is-agarwood-inoculation': {
    title: 'What Is Agarwood Inoculation — And Why Does It Matter for Your Trees?',
    category: 'For Farmers',
    seoKeyword: 'Agarwood inoculation',
    metaDescription: 'Agarwood inoculation is what turns a mature tree into a high-value, resin-bearing asset. Learn how it works, why it matters, and how Mrida covers every cost for you.',
    introHook: 'Your mature Agarwood trees may already hold real value — but most of it stays locked inside until one thing happens: inoculation. This managed process triggers the prized resin that buyers pay significantly for. In this guide, we explain what inoculation is, why it matters for your income, and how a Mrida partnership handles the full process at zero cost to you.',
    sections: [
      { heading: 'What is Agarwood inoculation?', body: 'A plain-language explanation of how controlled treatment prompts an Aquilaria tree to produce protective resin, and why that resin is the part buyers value most.' },
      { heading: "Why resin doesn't form reliably on its own", body: 'How wild resin formation is rare, slow, and unpredictable — and why that leaves so many trees well short of their potential.' },
      { heading: 'How professional inoculation changes the outcome', body: 'Covers proven methods, consistent monitoring, and the tree-by-tree tracking that turn an uncertain natural event into a planned, managed harvest.' },
      { heading: 'What inoculation means for your income', body: 'Connects the process to real money: a professionally inoculated, resin-bearing tree is worth significantly more than an untreated one.' },
      { heading: 'Who pays for inoculation in a Mrida partnership', body: 'Explains clearly that Mrida funds and manages inoculation and monitoring in full on shared trees — at zero cost to the farmer.' },
      { heading: 'What you need to do as a tree owner', body: 'A brief, practical summary: provide eligible mature Agarwood trees, maintain and protect them through the partnership period, and secure the necessary permissions.' },
    ],
    closingCta: 'Wondering whether your trees are ready for inoculation? It costs nothing to ask.',
    internalLink: { label: 'Business Model page', sub: 'the zero-cost inoculation arrangement on the 80% shared trees', href: '/service' },
    image: 'https://images.unsplash.com/photo-1681438080729-5c62d90f9416?w=1400&h=900&fit=crop&q=85&auto=format',
  },
  'why-the-global-agarwood-market-is-growing': {
    title: 'Why the Global Agarwood Market Is Growing — And What It Means for Investors in India',
    category: 'For Investors',
    seoKeyword: 'Agarwood cultivation investment',
    metaDescription: 'The global Agarwood market is expanding fast. Explore the demand drivers, the growing supply gap, and why India is strongly positioned for a serious Agarwood cultivation investment.',
    introHook: 'Few commodities combine genuine scarcity with rising, diversified demand — but Agarwood does both. As luxury fragrance, wellness, and incense markets keep expanding, the resin known as "liquid gold" is becoming harder to source and more valuable to hold. For investors, the question isn’t whether demand is real. It’s how to access it through a credible, managed, and traceable operation. This article breaks down the market, the supply gap, and India’s strategic position.',
    sections: [
      { heading: 'The size and growth trajectory of the market', body: 'Presents headline market figures as third-party projections, and what the sustained upward trend signals for long-term commodity value.' },
      { heading: "What's driving demand", body: 'Covers the main pillars: fragrance and perfumery (the largest share by far), wellness, incense, and traditional medicine.' },
      { heading: 'The supply-demand gap', body: "Explains why natural supply is scarce, slow to form, and increasingly unable to meet growing demand — and why that gap is the heart of the investment thesis." },
      { heading: 'Why India is strategically well positioned', body: 'Highlights prime production belts in Assam and Tripura, proximity to Asia Pacific demand, favorable growing conditions, and government support.' },
      { heading: 'How managed cultivation captures the opportunity', body: 'Shows why a scalable, traceable, farmer-partnership-backed model is one of the few credible ways to invest in this gap professionally.' },
      { heading: 'What to look for in an Agarwood investment', body: 'A practical checklist: full traceability, signed agreements, managed end-to-end operations, and a stable, farmer-first supply partnership.' },
    ],
    note: 'All market figures must be labeled as third-party projections and verified before publishing.',
    closingCta: 'Want to see how a managed, traceable Agarwood cultivation investment could work for you?',
    internalLink: { label: 'Investors page', sub: 'market data, ROI logic, and the full risk-and-mitigation breakdown', href: '/investors' },
    image: 'https://images.unsplash.com/photo-1763229759060-50db1e4bf9ad?w=1400&h=900&fit=crop&q=85&auto=format',
  },
  'how-to-earn-upfront-income-from-your-mature-agarwood-trees': {
    title: 'How to Earn Upfront Income from Your Mature Agarwood Trees — Without Selling Your Land',
    category: 'For Farmers',
    seoKeyword: 'Agarwood farmer partnership',
    metaDescription: 'Get paid for your mature Agarwood trees while keeping your land fully yours. Learn how the Mrida Agarwood farmer partnership pays you upfront — with zero inoculation cost on the rest.',
    introHook: "Many farmers assume that unlocking the value of their mature Agarwood trees means selling their land or taking on heavy costs. It doesn't. There's a way to earn real income now — and a transparent share of returns later — while your land stays entirely yours. Here's exactly how it works, step by step.",
    sections: [
      { heading: 'The common assumption: you have to sell land to earn from your trees', body: 'Addresses this concern directly and explains why ownership of land and income from trees are not a trade-off.' },
      { heading: 'How the Mrida partnership model works', body: 'A plain-language overview: we buy a minimum of 20% of your mature Agarwood trees upfront, and the rest stay fully in your name.' },
      { heading: 'Where the upfront money comes from', body: 'The 20% upfront purchase, paid at an agreed price, puts guaranteed income in your hands long before any harvest.' },
      { heading: 'Why your remaining trees cost you nothing to develop', body: 'Zero inoculation cost on shared trees, fully funded and managed by Mrida from start to finish.' },
      { heading: 'How shared returns are settled after harvest', body: 'Walks through the clear sequence: trees are harvested and sold, harvesting expenses are deducted, and your share of the remaining returns is paid transparently.' },
      { heading: 'What stays in your control', body: 'Full land ownership, signed terms before any work begins, and complete tree-by-tree traceability from tagging to settlement.' },
    ],
    closingCta: "Curious what your mature Agarwood trees could earn upfront? Let's find out together.",
    internalLink: { label: 'Business Model page', sub: 'the complete breakdown of the 20% upfront purchase and 80% shared-return arrangement', href: '/service' },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&h=900&fit=crop&q=85&auto=format',
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = POSTS[slug];

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

import { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import './styles/global.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Why from './components/Why.jsx'
import Achievement from './components/Achievement.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import FramerChrome from './components/FramerChrome.jsx'
import Reveal from './components/Reveal.jsx'
import ProcessSection from './components/ProcessSection.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import InvestorsPage from './pages/InvestorsPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import BlogIndexPage from './pages/BlogIndexPage.jsx'
import FAQPage from './pages/FAQPage.jsx'
import WhoWeWorkWith from './components/WhoWeWorkWith.jsx'

function HomePage() {
  useEffect(() => {
    document.title = "Agarwood Farming Partnership India | Earn Upfront from Mature Agarwood Trees Mrida Infra";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Partner with Mrida Infra for a transparent Agarwood farming partnership in India. Get paid upfront for mature Agarwood trees, pay zero inoculation cost, and share returns fairly. Farmers and investors - start here.");
    }
    const wrapper = document.querySelector('.framer-1rjwmcz');
    if (wrapper) {
      wrapper.style.overflow = 'visible';
    }
  }, []);

  return (
    <div id="main" data-framer-generated-page="">
      <div className="framer-6es6o framer-1rjwmcz" data-layout-template="true" style={{ minHeight: '100vh', width: 'auto' }}>
        <Header activePage="home" />
        <div data-framer-root="" className="framer-2mr35 framer-4gyze framer-eHfZ5 framer-JHdCe framer-IhwIG framer-Ui72Q framer-S0UiV framer-6c3n9 framer-ojchan framer-72rtr7" style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Hero />
          <Reveal><About /></Reveal>
          <Reveal><Projects /></Reveal>
          <ProcessSection />
          <Reveal><Why /></Reveal>
          <Reveal><Achievement /></Reveal>
          <Reveal><WhoWeWorkWith /></Reveal>
          <Reveal><Testimonials /></Reveal>
          <Reveal><Blog /></Reveal>
          <Reveal><FAQ /></Reveal>
        </div>
        <Reveal><Footer /></Reveal>
      </div>
      <FramerChrome />
    </div>
  );
}

// About/Service/Project share this page-shell root class in the original
// Framer export (distinct from the home page's "framer-6es6o framer-1rjwmcz").
// The actual content wrap div — with each page's own unique root classes its
// CSS is scoped under — is supplied by the page component itself (children),
// not hardcoded here, since that class differs per page.
function SubPage({ activePage, children }) {
  useEffect(() => {
    const wrapper = document.querySelector('.framer-1iaudjf');
    if (wrapper) {
      wrapper.style.overflow = 'visible';
    }
  }, [activePage]);

  return (
    <div id="main" data-framer-generated-page="">

      <div className="framer-PyWJj framer-1iaudjf framer-6es6o" data-layout-template="true" style={{ minHeight: '100vh', width: 'auto' }}>
        <Header activePage={activePage} />
        <Reveal>{children}</Reveal>
        <Reveal><Footer /></Reveal>
      </div>
      <FramerChrome />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let in-page anchor scrolling (e.g. Blog) handle itself
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SubPage activePage="about"><AboutPage /></SubPage>} />
        <Route path="/service" element={<SubPage activePage="service"><ServicePage /></SubPage>} />
        <Route path="/project" element={<SubPage activePage="project"><ProjectPage /></SubPage>} />
        <Route path="/contact" element={<SubPage activePage="contact"><ContactPage /></SubPage>} />
        <Route path="/investors" element={<SubPage activePage="investors"><InvestorsPage /></SubPage>} />
        <Route path="/blog" element={<SubPage activePage="blog"><BlogIndexPage /></SubPage>} />
        <Route path="/blog/:slug" element={<SubPage activePage="blog"><BlogPostPage /></SubPage>} />
        <Route path="/faqs" element={<SubPage activePage="faq"><FAQPage /></SubPage>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

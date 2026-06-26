import './styles/global.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Why from './components/Why.jsx'
import Achievement from './components/Achievement.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import Footer from './components/Footer.jsx'
import FramerChrome from './components/FramerChrome.jsx'
import Reveal from './components/Reveal.jsx'

function App() {
  return (
    <div id="main" data-framer-generated-page="">
      <div className="framer-6es6o framer-1rjwmcz" data-layout-template="true" style={{ minHeight: '100vh', width: 'auto' }}>
        <Header />
        <div data-framer-root="" className="framer-2mr35 framer-4gyze framer-eHfZ5 framer-JHdCe framer-IhwIG framer-Ui72Q framer-S0UiV framer-6c3n9 framer-72rtr7" style={{ minHeight: '100vh', width: 'auto', display: 'contents' }}>
          <Hero />
          <Reveal><About /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><Why /></Reveal>
          <Reveal><Achievement /></Reveal>
          <Reveal><Testimonials /></Reveal>
          <Reveal><Blog /></Reveal>
        </div>
        <Reveal><Footer /></Reveal>
      </div>
      <FramerChrome />
    </div>
  )
}

export default App

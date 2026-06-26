import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function handleHashClick(e) {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      e.preventDefault();
      const id = href.slice(1);
      if (!id) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  const mobileLinks = [
    { label: 'Home', href: '#', sectionId: '' },
    { label: 'About Us', href: '#about', sectionId: 'about' },
    { label: 'How It Works', href: '#how-it-works', sectionId: 'how-it-works' },
    { label: 'Projects', href: '#projects', sectionId: 'projects' },
    { label: 'Blog', href: '#blog', sectionId: 'blog' },
  ];

  return (
    <>
      <div className="framer-2ahsdz-container">
        <div className="ssr-variant hidden-kde4wg hidden-prcei2">
          <nav className={`framer-7EmCy framer-1jaxqze framer-v-1jaxqze${scrolled ? ' is-scrolled' : ''}`} data-framer-name="Desktop" style={{ backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", width: "100%" }}>
            <div className="framer-1c5gqa0" data-framer-name="Inner">
              <div className="framer-98nr7" data-framer-name="Logo + Hamburger">
                <div className="framer-90wi9e-container">{/*$*/}<a as="a" className="framer-A06nM framer-vbre68 framer-v-lrmw9y framer-amvpbf" data-framer-name="White" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
                      <img src="/mrida-logo.svg" alt="Mrida" style={{ height: '36px', width: 'auto', display: 'block' }} />
                    </div>
                  </a>{/*/$*/}</div>
              </div>
              <div className="framer-vhz274" data-framer-name="Navigation">{/*$*/}
                <div className="framer-1bs1jil-container" data-framer-name="Home" name="Home">{/*$*/}<a name="Home" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-1p7lubi framer-1nj5pal" data-framer-name="Active" data-highlight="true" href="#" data-framer-page-link-current="true" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))" }}>{`Home`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))" }}>{`Home`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))" }}>{`Home`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-1t0rcvv-container" data-framer-name="About" name="About">{/*$*/}<a name="About" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#about" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`About Us`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`About Us`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`About Us`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-sh0tz5-container" data-framer-name="Services" name="Services">{/*$*/}<a name="Services" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#how-it-works" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`How It Works`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`How It Works`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`How It Works`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-bo5c5i-container" data-framer-name="Projects" name="Projects">{/*$*/}<a name="Projects" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#projects" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Projects`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Projects`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Projects`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-1es4i5f-container" data-framer-name="Blog" name="Blog">{/*$*/}<a name="Blog" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#blog" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Blog`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Blog`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Blog`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}
              </div>
              <div className="framer-1qjdvxl" data-framer-name="Action">{/*$*/}
                <div className="framer-rln1lf-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" data-framer-name="Primary" data-highlight="true" href="./contact" tabIndex="0" style={{ backgroundColor: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>
                    <div className="framer-k6u0up" data-framer-name="Text">
                      <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: "1", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p>
                      </div>
                      <div className="framer-lypvvb" data-framer-name="Flip">
                        <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p>
                        </div>
                        <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-c5clwi" data-framer-name="Icon">
                      <div className="framer-19pck3z" data-border="true" data-framer-name="Dot" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}
              </div>
            </div>
          </nav>
        </div>
        <div className="ssr-variant hidden-1rjwmcz hidden-prcei2">
          <nav className={`framer-7EmCy framer-1jaxqze framer-v-ctad5o${(scrolled || menuOpen) ? ' is-scrolled' : ''}`} data-framer-name="Phone" style={{ backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", width: "100%", position: 'relative', overflow: 'visible' }}>
            <div className="framer-1c5gqa0" data-framer-name="Inner" style={{ overflow: 'visible' }}>
              <div className="framer-98nr7" data-framer-name="Logo + Hamburger">
                <div className="framer-90wi9e-container">{/*$*/}<a as="a" className="framer-A06nM framer-vbre68 framer-v-lrmw9y framer-amvpbf" data-framer-name="White" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
                      <img src="/mrida-logo.svg" alt="Mrida" style={{ height: '36px', width: 'auto', display: 'block' }} />
                    </div>
                  </a>{/*/$*/}</div>
                <div className="framer-151h0jq-container">
                  <div
                    className="framer-9T0z6 framer-p0f8fb framer-v-p0f8fb"
                    data-framer-name="Default"
                    data-highlight="true"
                    tabIndex="0"
                    role="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setMenuOpen((open) => !open); } }}
                    style={{ height: "100%", width: "100%", cursor: 'pointer' }}
                  >
                    <div className="framer-16sdbrd" data-framer-name="Line" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: menuOpen ? 'translateY(8.5px) rotate(45deg)' : 'none', transition: 'transform 0.3s ease, background-color 0.3s ease' }}>
                    </div>
                    <div className="framer-1pc127o" data-framer-name="Line" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s ease, background-color 0.3s ease' }}>
                    </div>
                    <div className="framer-1r40d4y" data-framer-name="Line" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: menuOpen ? 'translateY(-8.5px) rotate(-45deg)' : 'none', transition: 'transform 0.3s ease, background-color 0.3s ease' }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'var(--token-174a5685-4c1c-494c-9f1c-dc1cd85c9607, #f5f1e5)',
                boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                maxHeight: menuOpen ? '420px' : '0px',
                opacity: menuOpen ? 1 : 0,
                transition: 'max-height 0.35s ease, opacity 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 20px 24px' }}>
                {mobileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => {
                        if (link.sectionId) {
                          const el = document.getElementById(link.sectionId);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }, 300);
                    }}
                    style={{
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(0,0,0,0.08)',
                      color: 'rgb(0,0,0)',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="./contact"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    marginTop: '16px',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    backgroundColor: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))',
                    color: 'rgb(255,255,255)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                >
                  Partner With Us
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="ssr-variant hidden-1rjwmcz hidden-kde4wg">
          <nav className={`framer-7EmCy framer-1jaxqze framer-v-19cdaoj${scrolled ? ' is-scrolled' : ''}`} data-framer-name="Tablet" style={{ backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", width: "100%" }}>
            <div className="framer-1c5gqa0" data-framer-name="Inner">
              <div className="framer-98nr7" data-framer-name="Logo + Hamburger">
                <div className="framer-90wi9e-container">{/*$*/}<a as="a" className="framer-A06nM framer-vbre68 framer-v-lrmw9y framer-amvpbf" data-framer-name="White" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%' }}>
                      <img src="/mrida-logo.svg" alt="Mrida" style={{ height: '36px', width: 'auto', display: 'block' }} />
                    </div>
                  </a>{/*/$*/}</div>
              </div>
              <div className="framer-vhz274" data-framer-name="Navigation">{/*$*/}
                <div className="framer-1bs1jil-container" data-framer-name="Home" name="Home">{/*$*/}<a name="Home" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-1p7lubi framer-1nj5pal" data-framer-name="Active" data-highlight="true" href="#" data-framer-page-link-current="true" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))" }}>{`Home`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))" }}>{`Home`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54)))" }}>{`Home`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-1t0rcvv-container" data-framer-name="About" name="About">{/*$*/}<a name="About" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#about" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`About Us`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`About Us`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`About Us`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-sh0tz5-container" data-framer-name="Services" name="Services">{/*$*/}<a name="Services" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#how-it-works" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`How It Works`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`How It Works`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`How It Works`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-bo5c5i-container" data-framer-name="Projects" name="Projects">{/*$*/}<a name="Projects" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#projects" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Projects`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Projects`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Projects`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}{/*$*/}
                <div className="framer-1es4i5f-container" data-framer-name="Blog" name="Blog">{/*$*/}<a name="Blog" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="#blog" tabIndex="0">
                    <div className="framer-66yo8u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", opacity: "1", transform: "none" }}>
                      <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Blog`}</p>
                    </div>
                    <div className="framer-4yr702" data-framer-name="Flip">
                      <div className="framer-1rmdmrb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Blog`}</p>
                      </div>
                      <div className="framer-1p8nbfs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgn0epMCb-c0gKo6pCr)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgn0epMCb-c0gKo6pCr": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgn0epMCb-c0gKo6pCr))" }}>{`Blog`}</p>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}
              </div>
              <div className="framer-1qjdvxl" data-framer-name="Action">{/*$*/}
                <div className="framer-rln1lf-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" data-framer-name="Primary" data-highlight="true" href="./contact" tabIndex="0" style={{ backgroundColor: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>
                    <div className="framer-k6u0up" data-framer-name="Text">
                      <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: "1", transform: "none" }}>
                        <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p>
                      </div>
                      <div className="framer-lypvvb" data-framer-name="Flip">
                        <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p>
                        </div>
                        <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                          <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Partner With Us`}</p>
                        </div>
                      </div>
                    </div>
                    <div className="framer-c5clwi" data-framer-name="Icon">
                      <div className="framer-19pck3z" data-border="true" data-framer-name="Dot" style={{ "--border-bottom-width": "1px", "--border-color": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", borderBottomLeftRadius: "50px", borderBottomRightRadius: "50px", borderTopLeftRadius: "50px", borderTopRightRadius: "50px" }}>
                      </div>
                    </div>
                  </a>{/*/$*/}</div>{/*/$*/}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <style data-framer-html-style>{`
        html body {
          background: var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255));
        }
      `}</style>
    </>
  );
}

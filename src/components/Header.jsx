import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="framer-2ahsdz-container">
        <div className="ssr-variant hidden-kde4wg hidden-prcei2">
          <nav className={`framer-7EmCy framer-1jaxqze framer-v-1jaxqze${scrolled ? ' is-scrolled' : ''}`} data-framer-name="Desktop" style={{ backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", width: "100%" }}>
            <div className="framer-1c5gqa0" data-framer-name="Inner">
              <div className="framer-98nr7" data-framer-name="Logo + Hamburger">
                <div className="framer-90wi9e-container">{/*$*/}<a as="a" className="framer-A06nM framer-vbre68 framer-v-lrmw9y framer-amvpbf" data-framer-name="White" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="110" height="25" src="https://framerusercontent.com/images/Eqnfhqs2fX7jnfW6JEKYSqdcGQ.svg?width=110&height=25" alt style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                    </div>
                  </a>{/*/$*/}</div>
              </div>
              <div className="framer-vhz274" data-framer-name="Navigation">{/*$*/}
                <div className="framer-1bs1jil-container" data-framer-name="Home" name="Home">{/*$*/}<a name="Home" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-1p7lubi framer-1nj5pal" data-framer-name="Active" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0">
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
                <div className="framer-1t0rcvv-container" data-framer-name="About" name="About">{/*$*/}<a name="About" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./about" tabIndex="0">
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
                <div className="framer-sh0tz5-container" data-framer-name="Services" name="Services">{/*$*/}<a name="Services" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./service" tabIndex="0">
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
                <div className="framer-bo5c5i-container" data-framer-name="Projects" name="Projects">{/*$*/}<a name="Projects" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./project" tabIndex="0">
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
                <div className="framer-1es4i5f-container" data-framer-name="Blog" name="Blog">{/*$*/}<a name="Blog" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./blog" tabIndex="0">
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
          <nav className={`framer-7EmCy framer-1jaxqze framer-v-ctad5o${scrolled ? ' is-scrolled' : ''}`} data-framer-name="Phone" style={{ backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", width: "100%" }}>
            <div className="framer-1c5gqa0" data-framer-name="Inner">
              <div className="framer-98nr7" data-framer-name="Logo + Hamburger">
                <div className="framer-90wi9e-container">{/*$*/}<a as="a" className="framer-A06nM framer-vbre68 framer-v-lrmw9y framer-amvpbf" data-framer-name="White" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="110" height="25" src="https://framerusercontent.com/images/Eqnfhqs2fX7jnfW6JEKYSqdcGQ.svg?width=110&height=25" alt style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                    </div>
                  </a>{/*/$*/}</div>
                <div className="framer-151h0jq-container">
                  <div className="framer-9T0z6 framer-p0f8fb framer-v-p0f8fb" data-framer-name="Default" data-highlight="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div className="framer-16sdbrd" data-framer-name="Line" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                    </div>
                    <div className="framer-1pc127o" data-framer-name="Line" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))" }}>
                    </div>
                    <div className="framer-1r40d4y" data-framer-name="Line" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", transform: "none" }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="ssr-variant hidden-1rjwmcz hidden-kde4wg">
          <nav className={`framer-7EmCy framer-1jaxqze framer-v-19cdaoj${scrolled ? ' is-scrolled' : ''}`} data-framer-name="Tablet" style={{ backgroundColor: "var(--token-0f3396d4-4e3f-4d82-8363-11033d788736, rgba(255, 255, 255, 0))", width: "100%" }}>
            <div className="framer-1c5gqa0" data-framer-name="Inner">
              <div className="framer-98nr7" data-framer-name="Logo + Hamburger">
                <div className="framer-90wi9e-container">{/*$*/}<a as="a" className="framer-A06nM framer-vbre68 framer-v-lrmw9y framer-amvpbf" data-framer-name="White" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0" style={{ height: "100%", width: "100%" }}>
                    <div style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }} data-framer-background-image-wrapper="true"><img decoding="async" width="110" height="25" src="https://framerusercontent.com/images/Eqnfhqs2fX7jnfW6JEKYSqdcGQ.svg?width=110&height=25" alt style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", cornerShape: "inherit", objectPosition: "center", objectFit: "cover" }} />
                    </div>
                  </a>{/*/$*/}</div>
              </div>
              <div className="framer-vhz274" data-framer-name="Navigation">{/*$*/}
                <div className="framer-1bs1jil-container" data-framer-name="Home" name="Home">{/*$*/}<a name="Home" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-1p7lubi framer-1nj5pal" data-framer-name="Active" data-highlight="true" href="./" data-framer-page-link-current="true" tabIndex="0">
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
                <div className="framer-1t0rcvv-container" data-framer-name="About" name="About">{/*$*/}<a name="About" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./about" tabIndex="0">
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
                <div className="framer-sh0tz5-container" data-framer-name="Services" name="Services">{/*$*/}<a name="Services" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./service" tabIndex="0">
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
                <div className="framer-bo5c5i-container" data-framer-name="Projects" name="Projects">{/*$*/}<a name="Projects" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./project" tabIndex="0">
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
                <div className="framer-1es4i5f-container" data-framer-name="Blog" name="Blog">{/*$*/}<a name="Blog" className="framer-wpOMa framer-riLfm framer-19q58t framer-v-19q58t framer-1nj5pal" data-framer-name="Default" data-highlight="true" href="./blog" tabIndex="0">
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

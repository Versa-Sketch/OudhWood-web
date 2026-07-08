export default function Hero() {
  return (
    <>
      <style>{`
        /* ─── Desktop Hero Center Alignment & Premium Spacing ────────────────── */
        @media (min-width: 1025px) {
          #hero.framer-a6uc3n {
            height: 100vh !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            position: relative !important;
            padding: 0 !important;
            overflow: hidden !important;
          }
          
          /* Full Screen Dark Overlay */
          #hero.framer-a6uc3n::after {
            content: '' !important;
            position: absolute !important;
            inset: 0 !important;
            background: rgba(16, 12, 10, 0.55) !important;
            z-index: 1 !important;
            pointer-events: none !important;
          }

          /* Video container underneath overlay */
          .framer-a6uc3n .framer-td16qa-container {
            z-index: 0 !important;
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }

          /* Center aligned cover */
          .framer-a6uc3n .framer-1kzlz1n {
            position: relative !important;
            z-index: 2 !important;
            padding: 0 40px !important;
            height: auto !important;
            width: 100% !important;
            background: transparent !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            box-sizing: border-box !important;
          }

          /* Constrain content width and center text */
          .framer-a6uc3n .framer-16ruhe7 {
            max-width: 760px !important;
            width: 100% !important;
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            margin: 0 auto !important;
          }

          .framer-a6uc3n .framer-258q3o {
            width: 100% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          /* Spacing: Badge -> Heading = 24px */
          .framer-a6uc3n .hero-badge-row {
            margin-bottom: 24px !important;
            display: flex;
            justify-content: center;
          }

          .framer-a6uc3n .framer-1lfadrn h1 {
            font-size: clamp(2.2rem, 3.6vw, 3rem) !important;
            line-height: 1.15 !important;
            font-weight: 800;
            letter-spacing: -0.03em;
            color: #ffffff !important;
            margin: 0 !important;
            text-align: center !important;
          }

          /* Spacing: Heading -> Description = 28px */
          .framer-a6uc3n .hero-desc {
            font-size: 1.1rem !important;
            line-height: 1.65 !important;
            color: rgba(255, 255, 255, 0.85) !important;
            margin: 28px auto 0 auto !important;
            max-width: 620px !important;
            text-align: center !important;
          }

          /* Spacing: Description -> Buttons = 40px */
          .framer-a6uc3n .framer-1oq58c4 {
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 20px !important;
            margin-top: 40px !important;
            width: auto !important;
          }

          .framer-a6uc3n .framer-jbjoxa-container,
          .framer-a6uc3n .framer-17zhks-container {
            width: auto !important;
          }

          /* Equal height buttons */
          .framer-a6uc3n .framer-npbIQ {
            height: 52px !important;
            padding: 0 32px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 12px !important;
            box-sizing: border-box !important;
            white-space: nowrap !important;
          }
        }

        /* ─── Mobile/Tablet Responsive Adaptations ────────────────────────── */
        @media (max-width: 1024px) {
          #hero.framer-a6uc3n {
            height: auto !important;
            min-height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            padding: 120px 24px 80px !important;
            box-sizing: border-box !important;
            position: relative !important;
            background: transparent !important;
          }
          
          #hero.framer-a6uc3n::after {
            content: '' !important;
            position: absolute !important;
            inset: 0 !important;
            background: rgba(16, 12, 10, 0.6) !important;
            z-index: 1 !important;
            pointer-events: none !important;
          }

          .framer-a6uc3n .framer-td16qa-container {
            z-index: 0 !important;
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }

          .framer-a6uc3n .framer-1kzlz1n {
            position: relative !important;
            z-index: 2 !important;
            padding: 0 !important;
            height: auto !important;
            width: 100% !important;
            background-color: transparent !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center;
          }
          
          .framer-a6uc3n .framer-16ruhe7 {
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
          }
          
          .framer-a6uc3n .framer-258q3o {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
            height: auto !important;
          }

          .framer-a6uc3n .hero-badge-row {
            margin-bottom: 20px !important;
            display: flex;
            justify-content: center;
          }
          
          .framer-a6uc3n .framer-1lfadrn h1 {
            font-size: clamp(1.8rem, 6.8vw, 2.3rem) !important;
            line-height: 1.25 !important;
            text-align: center !important;
            color: #ffffff !important;
          }

          .framer-a6uc3n .hero-desc {
            font-size: 0.98rem !important;
            line-height: 1.58 !important;
            color: rgba(255, 255, 255, 0.85) !important;
            margin: 20px auto 0 auto !important;
            text-align: center !important;
          }
          
          .framer-a6uc3n .framer-1oq58c4 {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
            width: 100% !important;
            height: auto !important;
            margin-top: 32px !important;
          }
          
          .framer-a6uc3n .framer-jbjoxa-container,
          .framer-a6uc3n .framer-17zhks-container {
            width: 100% !important;
            height: auto !important;
          }
          
          .framer-a6uc3n .framer-npbIQ {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 16px 24px !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
      
      <section className="framer-a6uc3n" data-framer-name="Hero" id="hero">
          <div className="framer-td16qa-container">{/*$*/}<video className="hero-zoom-bg" src="https://framerusercontent.com/assets/6ajeFdRxSwDqS6CW5SSbVh5jhP8.mp4" loop preload="none" poster="https://images.unsplash.com/photo-1683858222142-e5596d680fe3?w=2400&h=1350&fit=crop&q=90&auto=format" muted playsInline style={{ cursor: "auto", width: "100%", height: "100%", borderRadius: "0px", display: "block", objectFit: "cover", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" }}></video>{/*/$*/}
          </div>
          <div className="framer-1kzlz1n" data-framer-name="Cover">
            <div className="framer-16ruhe7" data-framer-name="Inner">
             
              <div className="framer-258q3o" data-framer-name="Title">
                
                {/* Premium Brand Badge */}
                {/* <div className="hero-badge-row">
                  <div className="process-badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                    <span className="process-badge-dot" style={{ backgroundColor: 'var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))' }} />
                    <p className="process-badge-text" style={{ color: '#ffffff' }}>Agarwood Forestry</p>
                  </div>
                </div> */}

                <div className="framer-1lfadrn" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <h1 className="framer-text framer-styles-preset-vcftlz" data-styles-preset="OXdSaWGJm" dir="auto" style={{ "--framer-text-color": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))" }}>{`India's Most Transparent Agarwood Farming Partnership — Built to Pay You First`}</h1>
                </div>

                {/* Supporting Description */}
                {/* <p className="hero-desc">
                  We partner with landowners across India to manage, inoculate, and harvest high-value Agarwood trees. Earn immediate upfront payouts and secure a fair, signed share of returns at harvest.
                </p> */}

                <div className="framer-1oq58c4" data-framer-name="Action">
                  <div className="framer-jbjoxa-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1k2u1hf framer-lhbnc9" data-framer-name="White" data-highlight="true" href="https://cal.com/" target="_blank" rel="noopener" tabIndex="0" style={{ backgroundColor: "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))" }}>
                       <div className="framer-k6u0up" data-framer-name="Text">
                         <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: "1", transform: "none" }}>
                           <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0)))" }}>{`Partner With Us`}</p>
                         </div>
                         <div className="framer-lypvvb" data-framer-name="Flip">
                           <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                             <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0)))" }}>{`Partner With Us`}</p>
                           </div>
                           <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                             <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-85d98d03-893a-4262-a7bf-f1c29a1e4abe, rgb(0, 0, 0)))" }}>{`Partner With Us`}</p>
                           </div>
                         </div>
                       </div>
                     </a>{/*/$*/}</div>{/*$*/}
                   <div className="framer-17zhks-container">{/*$*/}<a className="framer-npbIQ framer-riLfm framer-Ui72Q framer-1h9x6p framer-v-1h9x6p framer-lhbnc9" data-framer-name="Primary" data-highlight="true" href="./service" tabIndex="0" style={{ backgroundColor: "var(--token-97443185-d1fc-462c-b307-21c354347358, rgb(195, 96, 54))" }}>
                       <div className="framer-k6u0up" data-framer-name="Text">
                         <div className="framer-1faiyqn" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: "1", transform: "none" }}>
                           <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Talk to Our Team`}</p>
                         </div>
                         <div className="framer-lypvvb" data-framer-name="Flip">
                           <div className="framer-1yk2hn7" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                             <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Talk to Our Team`}</p>
                           </div>
                           <div className="framer-ee6oh2" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}>
                             <p className="framer-text framer-styles-preset-1c0cf2x" data-styles-preset="qEbsElzxw" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-7b96a2a6-c774-41aa-9a64-c9f85c5960c2, rgb(255, 255, 255)))" }}>{`Talk to Our Team`}</p>
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
            </div>
          </div>
        </section>
    </>
  );
}

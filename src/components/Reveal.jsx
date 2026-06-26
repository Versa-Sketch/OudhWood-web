import { useEffect, useRef } from 'react';

// Shared across every Reveal instance on the page (module-level state) so that
// no two sections ever begin their entrance animation at the same instant —
// each new trigger is pushed back until at least MIN_GAP_MS after the
// previous one started, giving each section its own moment.
let nextAvailableStart = 0;
const MIN_GAP_MS = 450;
const DURATION_MS = 1000;
const STAGGER_MS = 110;
const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'; // easeOutExpo-style curve

export default function Reveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children);
    if (items.length === 0) return;

    items.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(32px) scale(0.97)';
      item.style.willChange = 'opacity, transform';
    });

    // Note: threshold is a ratio of the OBSERVED ELEMENT'S OWN total area, not
    // the viewport. For sections taller than ~4x the viewport (common on
    // mobile, where viewport height is small), a 25%-of-area threshold can
    // mathematically never be reached, so the section would stay invisible
    // forever. Using a small threshold plus a bottom rootMargin instead
    // triggers reliably as soon as the section's top has scrolled to roughly
    // the 20-30%-from-bottom mark of the viewport, regardless of how tall the
    // section itself is.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const now = performance.now();
        const start = Math.max(now, nextAvailableStart);
        const delay = start - now;
        nextAvailableStart = start + MIN_GAP_MS;

        setTimeout(() => {
          items.forEach((item, i) => {
            const itemDelay = i * STAGGER_MS;
            item.style.transition = `opacity ${DURATION_MS}ms ${EASING} ${itemDelay}ms, transform ${DURATION_MS}ms ${EASING} ${itemDelay}ms`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
          });
        }, delay);

        clearTimeout(fallback);
        observer.unobserve(el);
      },
      { threshold: 0, rootMargin: '0px 0px -22% 0px' }
    );
    observer.observe(el);

    // Safety net: whatever the viewport/element geometry, never let content
    // stay permanently invisible. If the observer hasn't fired within a few
    // seconds (e.g. an unusual layout edge case), force the reveal anyway.
    const fallback = setTimeout(() => {
      items.forEach((item) => {
        item.style.transition = `opacity ${DURATION_MS}ms ${EASING}, transform ${DURATION_MS}ms ${EASING}`;
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      });
      observer.unobserve(el);
    }, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} style={{ width: '100%' }}>
      {children}
    </div>
  );
}

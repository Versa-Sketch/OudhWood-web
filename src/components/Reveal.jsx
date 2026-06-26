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

        observer.unobserve(el);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width: '100%' }}>
      {children}
    </div>
  );
}

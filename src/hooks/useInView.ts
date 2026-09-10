import { useEffect, useRef, useState } from 'react';

// Native IntersectionObserver instead of GSAP ScrollTrigger: it recomputes
// against real current layout on every check, so it can't go stale the way
// ScrollTrigger's cached pixel start/end did (see git history for the
// "cards stuck invisible" bug this replaced).
export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

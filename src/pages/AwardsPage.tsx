import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { asset } from '../lib/asset';

const AWARD_PHOTOS = Array.from(
  { length: 21 },
  (_, i) => asset(`/images/leemamartin/awards/awards${String(i + 1).padStart(3, '0')}.jpg`)
);

interface AwardsPageProps {
  onNavigate: (route: any) => void;
}

export const AwardsPage: React.FC<AwardsPageProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Reveal each photo as it scrolls into view — native IntersectionObserver
  // driving the same .scroll-reveal CSS transition used across the site,
  // instead of a JS-timed mount animation that can get stuck invisible.
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.award-photo-item');
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % AWARD_PHOTOS.length));
  const prevImage = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + AWARD_PHOTOS.length) % AWARD_PHOTOS.length));

  // Keyboard support: Escape closes, arrows navigate.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <div ref={containerRef} className="pt-28 sm:pt-36 pb-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>ACCREDITATION & ACCOLADES &bull; LEEMAMARTIN.COM/AWARDS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            Awards & Distinctions
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            A comprehensive record of national honors, global humanitarian memberships, and honorary doctorates conferred upon Dr. Leema Rose Martin.
          </p>
        </div>

        {/* Award Ceremony Photos — masonry layout, click to open lightbox */}
        <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 [column-fill:balance]">
          {AWARD_PHOTOS.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIndex(i)}
              style={{ transitionDelay: `${(i % 8) * 0.05}s` }}
              className="award-photo-item scroll-reveal group relative block w-full mb-3 sm:mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={src}
                alt={`Award ceremony photo ${i + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md text-slate-900 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-end text-white mb-3 px-1">
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative w-full bg-black rounded-2xl overflow-hidden flex items-center justify-center min-h-[300px]">
              <img
                src={AWARD_PHOTOS[lightboxIndex]}
                alt={`Award ceremony photo ${lightboxIndex + 1}`}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

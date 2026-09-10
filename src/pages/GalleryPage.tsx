import React, { useState, useEffect, useRef } from 'react';
import { GALLERY_ITEMS } from '../data/leemaData';
import {
  Camera,
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Albums' },
    { id: 'rotary', label: 'Rotary & AKS' },
    { id: 'trust', label: 'Trust Field Work' },
    { id: 'medical', label: 'Healthcare & Relief' },
    { id: 'environment', label: 'Ecology & Greening' },
    { id: 'women', label: 'Women Empowerment' },
    { id: 'awards', label: 'Award Ceremonies' },
    { id: 'sports', label: 'Sports & Accessibility' },
    { id: 'pooja', label: 'Community & Culture' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Reveal each photo as it scrolls into view (native IntersectionObserver,
  // not GSAP — see Leadership/Initiatives/TimelineAwards for why: a JS-timed
  // mount animation here got stuck invisible under React dev double-effects).
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.gallery-card-item');
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
  }, [selectedCategory]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filteredItems.length));
  };

  const prevImage = () => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filteredItems.length) % filteredItems.length));
  };

  // Keyboard support for the lightbox: Escape closes, arrows navigate.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div ref={containerRef} className="pt-28 sm:pt-36 pb-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>PHOTOGRAPHIC ARCHIVES &bull; LEEMAMARTIN.COM/GALLERY.PHP</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            Thematic Photographic Gallery
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Visual chronicle of grassroots philanthropic missions, school inaugurations, medical outreach, and international convocations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery — natural image aspect ratios via CSS columns,
            caption revealed on hover over the photo instead of a fixed
            text block, closer to a modern photo-wall feel. */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6 [column-fill:balance]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              style={{ transitionDelay: `${(idx % 6) * 0.06}s` }}
              className="gallery-card-item scroll-reveal group relative mb-5 sm:mb-6 break-inside-avoid rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-xs hover:shadow-xl cursor-pointer"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Category badge */}
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold">
                {item.categoryLabel}
              </div>

              {/* Expand cue */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md text-slate-900 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Hover caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4 sm:p-5 pt-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-base leading-snug mb-1.5 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-slate-200 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {item.location}
                  </span>
                  {item.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-300" />
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
          >

            {/* Top Bar */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-slate-800 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <span>{filteredItems[lightboxIndex].categoryLabel}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-slate-400">{filteredItems[lightboxIndex].date}</span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Container with Nav Arrows */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
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

            {/* Bottom Caption */}
            <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 text-white">
              <h3 className="text-xl font-bold mb-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {filteredItems[lightboxIndex].location}
                </span>
                <span>
                  Photo {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

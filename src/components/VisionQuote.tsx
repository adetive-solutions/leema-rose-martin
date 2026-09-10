import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Sparkles, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const VisionQuote: React.FC = () => {
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(quoteRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          fastScrollEnd: true,
        },
      });
    }, quoteRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div
          ref={quoteRef}
          id="vision-quote-card"
          className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center"
        >
          {/* Ambient decorative glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-6">
            <Quote className="w-6 h-6 text-amber-400" />
          </div>

          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-relaxed text-slate-100 mb-8 max-w-3xl mx-auto">
            &ldquo;True leadership is measured not by personal accumulation, but by how many vulnerable families we lift into dignity, self-sufficiency, and enduring hope.&rdquo;
          </blockquote>

          <div className="flex flex-col items-center justify-center">
            <div className="text-lg font-bold text-white tracking-tight">
              Dr. Leema Rose Martin
            </div>
            <div className="text-sm text-amber-400 font-medium mt-0.5">
              Managing Trustee, Martin Foundation &bull; Arch Klumph Society (AKS)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

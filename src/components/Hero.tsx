import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, Award, Leaf } from 'lucide-react';
import { asset } from '../lib/asset';

const portraitImg = asset('/images/leemamartin/home/leemarosemartin.jpg');

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const formalNameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const trustGroupRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const floatingBadge1Ref = useRef<HTMLDivElement>(null);
  const floatingBadge2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline: background image loads first, then the text content
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(imageContainerRef.current, {
        opacity: 0,
        scale: 1.15,
        duration: 1.1,
        ease: 'power2.out',
      })
      .from(eyebrowRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.7,
      }, '-=0.35')
      .from(formalNameRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.6,
      }, '-=0.4')
      .from(headlineRef.current, {
        opacity: 0,
        y: 25,
        duration: 0.85,
      }, '-=0.35')
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      }, '-=0.5')
      .from(ctaGroupRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
      }, '-=0.4')
      .from(trustGroupRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.6,
      }, '-=0.3')
      .from([floatingBadge1Ref.current, floatingBadge2Ref.current], {
        opacity: 0,
        y: 15,
        stagger: 0.2,
        duration: 0.6,
      }, '-=0.4');

      // Continuous subtle floating animation for badges
      gsap.to(floatingBadge1Ref.current, {
        y: '-=8',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(floatingBadge2Ref.current, {
        y: '+=8',
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center"
    >
      {/* Full-width Background Portrait */}
      <div ref={imageContainerRef} id="hero-portrait-container" className="absolute inset-0 z-0 bg-slate-950">
        <img
          src={portraitImg}
          alt="Dr. Leema Rose Martin - Philanthropist and Managing Trustee"
          className="w-full h-full object-cover object-[75%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_72%_45%,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.55)_50%,rgba(2,6,23,0.05)_80%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
      </div>

      <div className="w-full relative z-10">
        <div className="max-w-2xl ml-auto flex flex-col items-end text-right">
          {/* Eyebrow badge */}
          <div
            ref={eyebrowRef}
            id="hero-eyebrow-badge"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-xs font-bold tracking-wider uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>VISIONARY PHILANTHROPY & SOCIAL REFORM</span>
          </div>

          {/* Formal Name */}
          <div
            ref={formalNameRef}
            id="hero-formal-name"
            className="text-amber-400 text-sm sm:text-base font-bold tracking-wide uppercase mb-2"
          >
            Rtn.AKS Dr.LEEMA ROSE MARTIN
          </div>

          {/* Display Headline */}
          <h1
            ref={headlineRef}
            id="hero-main-heading"
            className="w-full text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-white tracking-tight leading-[1.08] mb-6 text-right"
          >
            Get the impact done with <span className="text-white underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">Leema!</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            id="hero-subtext"
            className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl mb-8 text-right"
          >
            Spearheading transformative programs in model education, life-saving critical healthcare, and massive ecological restoration while creating sustainable livelihoods for thousands across India.
          </p>

          {/* CTA Group with Hand-drawn whimsical annotation */}
          <div ref={ctaGroupRef} className="relative flex flex-wrap items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
            <button
              onClick={onExploreClick}
              id="hero-primary-cta-btn"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md shadow-amber-500/30 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/35 active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Initiatives</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              id="hero-secondary-cta-btn"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-base px-6 py-3.5 rounded-full border border-white/30 shadow-sm transition-all duration-200 hover:border-white/50 active:scale-[0.98] cursor-pointer"
            >
              <span>Trust Offices</span>
            </button>

            {/* Hand-drawn whimsical arrow and annotation note */}
            <div className="absolute -bottom-10 left-32 sm:left-44 hidden xs:flex items-center gap-1.5 pointer-events-none select-none">
              <svg
                className="w-12 h-6 text-slate-300 -rotate-12"
                viewBox="0 0 50 25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 5 20 Q 25 24 42 7" />
                <path d="M 35 6 L 44 6 L 43 15" />
              </svg>
              <span className="font-['Caveat',cursive] text-slate-200 text-lg sm:text-xl font-bold tracking-wide -mt-2">
                to know her journey!
              </span>
            </div>
          </div>

          {/* "TRUSTED BY" Section */}
          <div ref={trustGroupRef} className="w-full pt-4 border-t border-white/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-3">
              TRUSTED, RECOGNIZED & AFFILIATED WITH
            </span>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8">

              {/* Martin Homoeopathy Medical College & Hospital */}
              <div className="flex flex-col items-center gap-1.5 hover:opacity-80 transition-opacity" title="Secretary & Correspondent, Martin Homoeopathy Medical College & Hospital">
                <img
                  src={asset('/images/leemamartin/home/martincollege_logo_transparent.png')}
                  alt="Martin Homoeopathy Medical College & Hospital"
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                />
                <span className="text-sm font-bold tracking-tight text-white text-center">Secretary & Correspondent</span>
                <span className="text-xs font-medium tracking-tight text-slate-300 text-center">Martin Homoeopathy College</span>
              </div>

              {/* Martin Group of Companies */}
              <div className="flex flex-col items-center gap-1.5 hover:opacity-80 transition-opacity" title="Director, Martin Group of Companies">
                <img
                  src={asset('/images/leemamartin/home/martingroup_logo_transparent.png')}
                  alt="Martin Group of Companies"
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                />
                <span className="text-sm font-bold tracking-tight text-white text-center">Director</span>
                <span className="text-xs font-medium tracking-tight text-slate-300 text-center">Martin Group of Companies</span>
              </div>

              {/* Martin Charitable Trust */}
              <div className="flex flex-col items-center gap-1.5 hover:opacity-80 transition-opacity" title="Managing Trustee, Martin Charitable Trust">
                <img
                  src={asset('/images/leemamartin/home/martintrust_logo_transparent.png')}
                  alt="Martin Charitable Trust"
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                />
                <span className="text-sm font-bold tracking-tight text-white text-center">Managing Trustee</span>
                <span className="text-xs font-medium tracking-tight text-slate-300 text-center">Martin Charitable Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Relief Mobilization */}
      <div
        ref={floatingBadge1Ref}
        id="floating-badge-relief"
        className="hidden lg:flex absolute top-32 left-8 xl:left-16 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-lg shadow-slate-900/20 items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
        </div>
        <div>
          <div className="text-xs font-extrabold text-slate-900">₹11+ Crore</div>
          <div className="text-[11px] text-slate-500 font-medium">Pandemic & Relief Funds</div>
        </div>
      </div>

      {/* Floating Badge 2: Seed Balls Dispersed */}
      <div
        ref={floatingBadge2Ref}
        id="floating-badge-seeds"
        className="hidden lg:flex absolute bottom-24 left-8 xl:left-16 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-2.5 shadow-lg shadow-slate-900/20 items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
          <Leaf className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-extrabold text-slate-900">34 Lakh+ Seeds</div>
          <div className="text-[11px] text-slate-500 font-medium">Ramanathapuram Greening</div>
        </div>
      </div>

      {/* Verified Ribbon Bottom Left */}
      <div className="absolute bottom-8 left-8 xl:left-16 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium hidden lg:flex items-center gap-1.5 shadow-md z-20">
        <Award className="w-3.5 h-3.5 text-amber-400" />
        <span>AKS Arch Klumph Society</span>
      </div>
    </section>
  );
};

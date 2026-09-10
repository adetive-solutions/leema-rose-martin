import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AWARDS } from '../data/leemaData';
import { Award, Globe, Medal, GraduationCap, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineAwardsProps {
  onExploreAllAwards?: () => void;
}

export const TimelineAwards: React.FC<TimelineAwardsProps> = ({ onExploreAllAwards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline progress line: fill height tracks how much of the timeline
      // has scrolled past the vertical center of the screen, so the line's
      // tip stays locked to the screen's center as you scroll (start/end
      // pinned to "center" rather than fixed percentages), with scrub:true
      // for 1:1 tracking instead of a lagged catch-up.
      if (timelineLineRef.current) {
        gsap.fromTo(
          timelineLineRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top center',
              end: 'bottom center',
              scrub: true,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Reveal each award row individually as it scrolls into view, rather than
  // all at once off a single trigger on the container — a native
  // IntersectionObserver per row instead of GSAP ScrollTrigger, so this
  // can't suffer the "stale cached trigger position -> stuck invisible"
  // failure mode that hit the Leadership/Initiatives sections.
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.award-item-row');
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
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'international':
        return <Globe className="w-4 h-4 text-blue-600" />;
      case 'academic':
        return <GraduationCap className="w-4 h-4 text-purple-600" />;
      case 'humanitarian':
        return <Award className="w-4 h-4 text-amber-600" />;
      case 'civic':
        return <Medal className="w-4 h-4 text-emerald-600" />;
      default:
        return <Award className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section
      ref={containerRef}
      id="honors"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            GLOBAL ACCREDITATION & AWARDS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Distinguished Honors & Doctorates
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Acknowledged internationally by Rotary International, global academic institutions, and human rights bodies for lifetime philanthropic service.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 md:pl-0">
          {/* Vertical scrub line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2">
            <div
              ref={timelineLineRef}
              className="w-full bg-gradient-to-b from-amber-500 to-amber-600"
            />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {AWARDS.map((award, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  id={`award-item-${index}`}
                  style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
                  className={`award-item-row scroll-reveal relative md:grid md:grid-cols-2 md:gap-12 items-center`}
                >
                  {/* Timeline node icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-amber-500 items-center justify-center shadow-md z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  </div>

                  {/* Left Column (or Right on alternating) */}
                  <div className={`${isEven ? 'md:text-right' : 'md:order-2 md:text-left'}`}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
                      <span>{award.year}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="capitalize">{award.location}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                      {award.title}
                    </h3>
                    <div className="text-sm font-semibold text-amber-600 mb-2">
                      {award.organization}
                    </div>
                  </div>

                  {/* Right Column (Card with Description) */}
                  <div className={`${isEven ? 'md:order-2' : 'md:text-right'}`}>
                    <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                          {getBadgeIcon(award.badgeType)}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          {award.badgeType} recognition
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed text-left">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View Full Awards Archive Button */}
          {onExploreAllAwards && (
            <div className="relative z-20 mt-16 text-center">
              <button
                onClick={onExploreAllAwards}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <span>View Full Awards Archive</span>
                <Award className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


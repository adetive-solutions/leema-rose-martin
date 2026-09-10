import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { METRICS } from '../data/leemaData';
import { HeartHandshake, Sprout, Users, Activity, GraduationCap, ShieldAlert, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const ImpactMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation using GSAP ScrollTrigger
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const countElement = card.querySelector('.metric-number');
        const metricData = METRICS[index];
        if (!countElement || !metricData) return;

        const targetValue = metricData.targetNumber;

        ScrollTrigger.create({
          trigger: card,
          start: 'top 85%',
          once: true,
          fastScrollEnd: true,
          onEnter: (self) => {
            // A fast flick shouldn't leave the counter still crawling upward
            // long after the card has scrolled past — scale the animation
            // duration down as scroll velocity (px/s) goes up.
            const velocity = Math.abs(self.getVelocity());
            const duration = gsap.utils.clamp(0.4, 1.6, 1.6 - velocity / 2500);

            gsap.fromTo(
              card,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: Math.min(duration, 0.7), delay: index * 0.06, ease: 'power2.out' }
            );

            const counterObj = { val: 0 };
            gsap.to(counterObj, {
              val: targetValue,
              duration,
              ease: 'power1.out',
              onUpdate: () => {
                const currentNum = Math.floor(counterObj.val);
                countElement.textContent = `${metricData.prefix || ''}${currentNum.toLocaleString()}${metricData.suffix}`;
              },
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-600" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-rose-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200/80 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              MEASURABLE HUMANITARIAN OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Two Decades of Dedicated Impact
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base leading-relaxed">
            Every figure represents families sheltered, students educated, and fragile regional ecosystems rejuvenated through the Martin Charitable Trust.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              ref={(el) => { cardsRef.current[idx] = el; }}
              id={`metric-card-${metric.id}`}
              className="group bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(metric.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Verified Record
                  </span>
                </div>

                {/* Counter */}
                <div className="metric-number text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                  {metric.prefix}{metric.targetNumber}{metric.suffix}
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-1">
                  {metric.label}
                </h3>
              </div>

              <p className="text-sm text-slate-500 font-normal leading-relaxed mt-4 pt-4 border-t border-slate-200/60">
                {metric.sublabel}
              </p>
            </div>
          ))}

          {/* Interactive Callout Card */}
          <div
            id="metric-callout-card"
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wide mb-4">
                TRANSPARENCY & AUDITING
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">
                100% Grassroots Direct Execution
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Programs are implemented with zero intermediary friction directly through verified institutional trust trustees and community councils.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Coimbatore &bull; Sivagangai &bull; Ramanathapuram</span>
              <span className="text-amber-400 font-semibold">Verified CSR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

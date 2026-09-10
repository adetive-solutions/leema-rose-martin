import React, { useEffect, useRef } from 'react';
import {
  HeartPulse,
  Accessibility,
  Utensils,
  GraduationCap,
  ShieldAlert,
  Trophy,
  Sparkles,
  CheckCircle2,
  HandHeart,
  Users,
  Wallet,
  ArrowRight,
  Newspaper
} from 'lucide-react';
import { PageRoute } from '../types';
import { NEWS_HIGHLIGHTS } from '../data/leemaData';

const STATS = [
  { value: '25+', label: 'Initiatives Undertaken' },
  { value: '₹60M+', label: 'Emergency Funding Deployed' },
  { value: '5,000+', label: 'Healthier Lives Supported' },
];

const CORE_INITIATIVES = [
  {
    number: '01',
    title: 'Medical Assistance',
    desc: 'Provides direct financial support for hospital bills, procedures, and long-term treatment for families unable to afford care.',
    icon: HeartPulse,
  },
  {
    number: '02',
    title: 'Social Support',
    desc: 'Distributes tricycles and mobility aids to physically challenged persons, enabling dignity and participation in daily activities.',
    icon: Accessibility,
  },
  {
    number: '03',
    title: 'Food Relief',
    desc: 'Regular outreach programs addressing hunger during ordinary times and emergencies.',
    icon: Utensils,
  },
  {
    number: '04',
    title: 'Educational Help',
    desc: 'Provides school materials and institutional donations to ensure access to education does not depend on a family’s income.',
    icon: GraduationCap,
  },
  {
    number: '05',
    title: 'Emergency Fund',
    desc: 'Responds to crises with rapid financial and supply assistance at local and regional levels.',
    icon: ShieldAlert,
  },
  {
    number: '06',
    title: 'Sports Sponsorship',
    desc: 'Funds athletes and programs that lack resources.',
    icon: Trophy,
  },
];

const SELECTED_WORK = [
  'School adoption program for government institutions',
  'COVID-19 relief: 3,500 medical kits distributed',
  'Oxygen concentrators supplied to hospitals',
  '₹1 crore contributed to Assam flood relief',
];

const CTA_OPTIONS = [
  { title: 'Volunteer', desc: 'Join field teams for medical camps, relief drives, and school renovation days.', icon: Users },
  { title: 'Partner an Initiative', desc: 'Co-sponsor a specific program alongside the Martin Charitable Trust.', icon: HandHeart },
  { title: 'Contribute', desc: 'Direct your donation toward a program area that matters most to you.', icon: Wallet },
];

interface CharityPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const CharityPage: React.FC<CharityPageProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Reveal each element as it scrolls into view — native IntersectionObserver
  // driving a CSS transition, not a JS-timed mount animation. The previous
  // gsap.from('.charity-fade-in', ...) animated everything on mount with a
  // single long stagger sequence; if that tween got interrupted partway
  // (React dev double-effects / HMR), elements later in the stagger order
  // that hadn't started yet stayed stuck at opacity:0 — exactly the "Six
  // Core Initiatives" and "Latest News" sections showing empty, since they
  // sit later in the DOM than the hero/stats elements that had already
  // animated in before the interruption.
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.charity-fade-in');
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

  return (
    <div ref={containerRef} className="pt-28 sm:pt-36 pb-24 bg-[#F8FAFC]">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="charity-fade-in scroll-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>MARTIN CHARITABLE TRUST &bull; CHARITY</span>
          </div>

          <h1 className="charity-fade-in scroll-reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            The Trust works to reduce poverty, injustice & ill health
          </h1>

          <p className="charity-fade-in scroll-reveal text-lg sm:text-xl text-slate-600 leading-relaxed">
            Helping people break the cycle of hardship and build a footing they can stand on.
          </p>
        </div>

        {/* Stats */}
        <div className="charity-fade-in scroll-reveal grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1.5">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Six Core Initiatives */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
            HOW THE TRUST WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Six Core Initiatives
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_INITIATIVES.map((item, idx) => (
            <div
              key={item.number}
              style={{ transitionDelay: `${idx * 0.06}s` }}
              className="charity-fade-in scroll-reveal bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-300">{item.number}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
            RECENT PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
            Selected Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SELECTED_WORK.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="mb-10 text-left flex items-center gap-2">
          <Newspaper className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            MARTINFOUNDATION.COM/NEWS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Latest News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {NEWS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={item.title}
              style={{ transitionDelay: `${(idx % 6) * 0.06}s` }}
              className="charity-fade-in scroll-reveal bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                {item.date}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-3 mb-1.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Get Involved
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Three ways to support the Trust's ongoing work across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CTA_OPTIONS.map((option, idx) => (
            <button
              key={option.title}
              onClick={() => onNavigate('contact')}
              style={{ transitionDelay: `${idx * 0.06}s` }}
              className="charity-fade-in scroll-reveal group text-left bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-4">
                <option.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                {option.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{option.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600">
                <span>Reach out</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Tagline */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-xl sm:text-2xl font-bold text-slate-900 italic">
          "Humanitarian by birth. Philanthropist by heart. Administrator by practice."
        </p>
      </section>
    </div>
  );
};

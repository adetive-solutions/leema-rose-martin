import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BIOGRAPHY_DETAILS, LEADERSHIP_ROLES, FOUNDATION_OVERVIEW } from '../data/leemaData';
import { TimelineAwards } from '../components/TimelineAwards';
import { asset } from '../lib/asset';
import {
  GraduationCap,
  Heart,
  Award,
  BookOpen,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const portraitImg = asset('/images/leemamartin/about/leemarose_profile2.jpg');
const PROFILE_GALLERY = [
  asset('/images/leemamartin/about/leemamartin_profile1.jpg'),
  asset('/images/leemamartin/about/leemarose_profile2.jpg'),
  asset('/images/leemamartin/about/leemarosemartin_profile3.jpg'),
  asset('/images/leemamartin/about/leemarosemartin_profile4.jpg'),
];

interface AboutPageProps {
  onNavigate: (route: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-fade-in', {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.about-scroll-item', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-scroll-trigger',
          start: 'top 80%',
          toggleActions: 'play none none none',
          fastScrollEnd: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-28 sm:pt-36 pb-24 bg-[#F8FAFC]">
      {/* Top Banner / Hero */}
      <section ref={heroRef} className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="about-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>BIOGRAPHY & ROOTS &bull; LEEMAMARTIN.COM/ABOUT</span>
          </div>

          <h1 className="about-fade-in text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            About Dr. Leema Rose Martin
          </h1>

          <p className="about-fade-in text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
            Business leader, Managing Trustee of the Martin Charitable Trust, and champion of grassroots education, health equity, and women's empowerment.
          </p>
        </div>

        {/* Hero Bio Card */}
        <div className="about-fade-in bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src={portraitImg}
                alt="Dr. Leema Rose Martin"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md rounded-2xl p-3 text-white text-xs">
                <div className="font-bold text-amber-400">Dr. Leema Rose Martin</div>
                <div className="text-slate-300">Managing Trustee, Martin Foundation</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Born in <strong>1967</strong> in the historic town of <strong>Devakottai</strong>, Ramanathapuram District, Tamil Nadu, to <strong>Mr. S. Philip</strong> and <strong>Mrs. P. Arulmary</strong>, Dr. Leema Rose Martin was instilled from childhood with values of compassion, community solidarity, and tireless discipline.
              </p>
              <p>
                Married to <strong>Mr. Santiago Martin</strong>, prominent entrepreneur and Chairman of the Martin Group of Companies, she has spent over two decades directing one of India’s most proactive private charitable trusts, channeling enterprise success directly into public good.
              </p>
              <p>
                Her leadership spans multiple domains: from administering modern healthcare and medical degree education at <strong>Martin Homoeopathy Medical College & Hospital</strong>, to leading <strong>AYUSH</strong> private medical institutions, and serving as the <strong>First Women AKS (Arch Klumph Society) Member</strong> of Rotary District 3201.
              </p>
            </div>

            {/* Quick Fact Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="text-xs text-slate-400 font-medium">Birthplace</div>
                <div className="text-sm font-bold text-slate-800">Devakottai, TN</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div className="text-xs text-slate-400 font-medium">Role</div>
                <div className="text-sm font-bold text-slate-800">Managing Trustee</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-400 font-medium">Rotary Honor</div>
                <div className="text-sm font-bold text-amber-600">AKS Member</div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Profile Photo Strip (leemamartin.com) */}
        <div className="about-fade-in grid grid-cols-4 gap-3 sm:gap-4 mt-6">
          {PROFILE_GALLERY.map((src, i) => (
            <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src={src}
                alt={`Dr. Leema Rose Martin - portrait ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Martin Foundation at a Glance */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
            MARTINFOUNDATION.COM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Martin Foundation at a Glance
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mt-3 max-w-3xl">
            "{FOUNDATION_OVERVIEW.missionQuote}" Dr. Leema Rose Martin serves as joint Managing Trustee alongside her husband and the foundation's founder.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              {FOUNDATION_OVERVIEW.founder.title}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2.5">
              {FOUNDATION_OVERVIEW.founder.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {FOUNDATION_OVERVIEW.founder.bio}
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              {FOUNDATION_OVERVIEW.coDirector.title}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2.5">
              {FOUNDATION_OVERVIEW.coDirector.name}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {FOUNDATION_OVERVIEW.coDirector.note}
            </p>
            <p className="text-sm text-slate-500 italic leading-relaxed mt-4 pt-4 border-t border-slate-100">
              "{FOUNDATION_OVERVIEW.philosophyQuote}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {FOUNDATION_OVERVIEW.programs.map((program, i) => (
            <div
              key={i}
              className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80"
            >
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                {program.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Qualifications & Doctorates */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
            ACADEMIC FOUNDATION & HONORIS CAUSA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic Degrees & Honorary Doctorates
          </h2>
        </div>

        <div className="about-scroll-trigger grid grid-cols-1 md:grid-cols-2 gap-6">
          {BIOGRAPHY_DETAILS.education.map((edu, idx) => (
            <div
              key={idx}
              className="about-scroll-item bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                  {edu.degree}
                </h3>

                <div className="text-sm font-semibold text-amber-700 mb-3">
                  {edu.institution}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {edu.note}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified Academic Accreditation</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Humanitarian Pillars */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-24">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              PHILOSOPHICAL ANCHORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Four Pillars of Social Transformation
            </h2>
            <p className="text-slate-300 text-base mt-2">
              The foundational principles guiding every trust grant, school modernizing initiative, and healthcare campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BIOGRAPHY_DETAILS.pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 backdrop-blur-xs hover:bg-white/10 transition-colors"
              >
                <div className="text-amber-400 text-xs font-mono font-bold mb-2">
                  PILLAR 0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Accreditation & Awards */}
      <TimelineAwards onExploreAllAwards={() => onNavigate('awards')} />

      {/* Call to Action Row */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-900">
              Explore Honors, Recognitions & Photo Gallery
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Browse the official awards archive and thematic field photo albums.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('awards')}
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-5 py-3 rounded-full transition-colors cursor-pointer"
            >
              <span>View Awards</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white font-medium text-sm px-5 py-3 rounded-full shadow-xs transition-colors cursor-pointer"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

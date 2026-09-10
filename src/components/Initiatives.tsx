import React, { useState, useRef } from 'react';
import { INITIATIVES } from '../data/leemaData';
import { Initiative } from '../types';
import { useInView } from '../hooks/useInView';
import {
  School,
  GraduationCap,
  BookOpen,
  HeartPulse,
  ShieldAlert,
  Trees,
  Sparkles,
  Network,
  MapPin,
  ArrowRight,
  CheckCircle2,
  X
} from 'lucide-react';

export const Initiatives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalInitiative, setActiveModalInitiative] = useState<Initiative | null>(null);
  const { ref: sectionRef, inView } = useInView<HTMLDivElement>();
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Initiatives' },
    { id: 'education', label: 'Education' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'environment', label: 'Environment' },
    { id: 'empowerment', label: 'Women Empowerment' },
    { id: 'infrastructure', label: 'Civic Infrastructure' },
  ];

  const filteredInitiatives = selectedCategory === 'all'
    ? INITIATIVES
    : INITIATIVES.filter((item) => item.category === selectedCategory);

  const getInitiativeIcon = (name: string) => {
    switch (name) {
      case 'School':
        return <School className="w-5 h-5 text-amber-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Network':
        return <Network className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="initiatives"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            STRATEGIC HUMANITARIAN PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Key Initiatives & Groundwork
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From modernizing municipal school campuses to deploying 30 lakh seed balls, explore the flagship programs managed under Leema Martin’s stewardship.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              id={`filter-btn-${cat.id}`}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredInitiatives.map((item, idx) => (
            <div
              key={item.id}
              id={`initiative-${item.id}`}
              style={{ transitionDelay: `${Math.min(idx, 8) * 0.07}s` }}
              className={`initiative-card scroll-reveal ${inView ? 'in-view' : ''} bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getInitiativeIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.categoryLabel}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Metric Strip */}
                <div className="bg-slate-50 rounded-2xl p-3.5 mb-5 flex items-center justify-between border border-slate-100">
                  <div>
                    <span className="text-xs text-slate-600 font-medium block">
                      {item.metricLabel}
                    </span>
                    <span className="text-base font-extrabold text-slate-900">
                      {item.metric}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-600 font-medium block">
                      Location
                    </span>
                    <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-500 inline" />
                      {item.location.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* View Details Action */}
                <button
                  onClick={() => setActiveModalInitiative(item)}
                  id={`btn-view-${item.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950 py-2.5 rounded-xl hover:bg-slate-100/70 border border-slate-200/70 transition-colors cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Full Initiative Details */}
      {activeModalInitiative && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            id="initiative-detail-modal"
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setActiveModalInitiative(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                {activeModalInitiative.categoryLabel}
              </span>
              <span className="text-xs text-slate-600 flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-slate-600" />
                {activeModalInitiative.location}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {activeModalInitiative.title}
            </h3>

            <div className="bg-amber-50/70 border border-amber-200/60 rounded-2xl p-4 mb-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-800 font-semibold uppercase tracking-wider block">
                  {activeModalInitiative.metricLabel}
                </span>
                <span className="text-xl font-extrabold text-amber-950">
                  {activeModalInitiative.metric}
                </span>
              </div>
              <span className="text-xs font-semibold text-amber-800 bg-white px-3 py-1 rounded-full shadow-xs">
                Direct Grant
              </span>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
              {activeModalInitiative.detailedContent}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
              Key Program Milestones & Features
            </h4>
            <div className="space-y-2.5 mb-6">
              {activeModalInitiative.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveModalInitiative(null)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-2xl transition-colors cursor-pointer text-sm"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

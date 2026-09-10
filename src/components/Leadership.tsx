import React, { useState } from 'react';
import { LEADERSHIP_ROLES } from '../data/leemaData';
import { Building2, Stethoscope, Award, Users, Shield, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Leadership: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'trust' | 'healthcare' | 'rotary' | 'advocacy'>('all');
  const { ref: containerRef, inView } = useInView<HTMLDivElement>();

  const filteredRoles = activeTab === 'all'
    ? LEADERSHIP_ROLES
    : LEADERSHIP_ROLES.filter((role) => role.category === activeTab);

  const getRoleIcon = (cat: string) => {
    switch (cat) {
      case 'trust':
        return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'healthcare':
        return <Stethoscope className="w-5 h-5 text-rose-600" />;
      case 'rotary':
        return <Award className="w-5 h-5 text-blue-600" />;
      case 'advocacy':
        return <Users className="w-5 h-5 text-emerald-600" />;
      default:
        return <Shield className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section
      ref={containerRef}
      id="leadership"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              GOVERNANCE & STEWARDSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Leadership & Institutional Roles
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-base leading-relaxed">
            Directing major business enterprises, premier medical academic institutions, and international humanitarian foundations.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Positions' },
            { id: 'trust', label: 'Enterprises & Trusts' },
            { id: 'healthcare', label: 'Medical Colleges & AYUSH' },
            { id: 'rotary', label: 'Rotary Leadership' },
            { id: 'advocacy', label: 'Civic & Women Rights' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              id={`tab-lead-${tab.id}`}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/20'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRoles.map((item, index) => (
            <div
              key={index}
              id={`leadership-card-${index}`}
              style={{ transitionDelay: `${Math.min(index, 8) * 0.07}s` }}
              className={`leadership-card scroll-reveal ${inView ? 'in-view' : ''} bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/5 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {getRoleIcon(item.category)}
                  </div>
                  {item.tenure && (
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
                      {item.tenure}
                    </span>
                  )}
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    {item.role}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {item.organization}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  {item.focus}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>Active Executive Governance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/leemaData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'scholarship',
    district: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    const tracking = `LM-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(tracking);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      email: '',
      phone: '',
      category: 'scholarship',
      district: '',
      message: '',
    });
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>DIRECT SECRETARIAT &bull; LEEMAMARTIN.COM/CONTACT.HTML</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            Contact & Trust Offices
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Direct communication channels for educational grants, healthcare assistance, environmental programs, and institutional correspondence.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {OFFICE_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full">
                    {loc.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {loc.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {loc.city}
                </h3>

                <div className="space-y-3.5 text-sm text-slate-600 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                    <span className="font-semibold text-slate-800">{loc.phones.join(' / ')}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="text-amber-600 hover:underline font-medium">
                      {loc.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                  Monday – Saturday: 9:30 AM – 6:00 PM IST
                </span>
                <span className="font-semibold text-slate-600">Walk-ins by Prior Appt</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Interactive Form Card */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200 shadow-xl shadow-slate-900/5 mb-16">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Official Communication Dispatched
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formState.name}</strong>. Your inquiry has been formally logged with the Martin Foundation Secretariat under reference ID:
                </p>
                <div className="inline-block bg-slate-100 border border-slate-200 text-slate-900 font-mono font-bold px-6 py-3 rounded-2xl text-xl tracking-wider">
                  {refId}
                </div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  A verification email has been sent to {formState.email}. Our review committee will contact you within 2-3 business days.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    APPLICATION & CORRESPONDENCE DESK
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Send Direct Message or Proposal
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Fill out the fields below for priority review by the Martin Charitable Trust board.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-form-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="contact-form-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Ramesh Philip"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-form-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-form-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-form-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Contact Phone Number
                    </label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 94432 10987"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-form-district" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      District / City
                    </label>
                    <input
                      id="contact-form-district"
                      type="text"
                      value={formState.district}
                      onChange={(e) => setFormState({ ...formState, district: e.target.value })}
                      placeholder="e.g. Coimbatore, Madurai, Chennai"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-form-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Inquiry / Grant Category *
                  </label>
                  <select
                    id="contact-form-category"
                    value={formState.category}
                    onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                  >
                    <option value="scholarship">Higher Education & College Scholarships</option>
                    <option value="dialysis">Dharma Free Dialysis & Critical Surgeries</option>
                    <option value="school">School Infrastructure & Smart Classrooms</option>
                    <option value="seedballs">Reforestation & Seed Ball Volunteering</option>
                    <option value="women">Project Threlaksha Women Self-Help Groups</option>
                    <option value="general">Institutional Correspondence / General</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-form-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Detailed Proposal or Circumstance *
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details of your institution, medical case, student credentials, or partnership proposal..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-start gap-3 text-xs text-slate-500">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    The Martin Charitable Trust does not charge any application or processing fees. All grants and healthcare sponsorships are provided purely on merit and humanitarian need.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 rounded-2xl shadow-md shadow-amber-500/25 transition-all cursor-pointer text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official Correspondence</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

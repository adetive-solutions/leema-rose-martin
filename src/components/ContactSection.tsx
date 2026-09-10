import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/leemaData';
import { MapPin, Phone, Mail, Send, CheckCircle, Clock, Building } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'scholarship',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    // Generate pseudo reference tracking ID
    const trackingCode = `LM-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(trackingCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      email: '',
      phone: '',
      category: 'scholarship',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            OFFICIAL LIAISON & INQUIRIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Connect with Dr. Leema Martin
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Direct communication channels for trust grants, civic initiatives, and institutional collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Office Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Official Headquarters & Centers
            </h3>

            {OFFICE_LOCATIONS.map((loc, idx) => (
              <div
                key={idx}
                id={`office-loc-${idx}`}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    {loc.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {loc.type}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {loc.city}
                </h4>

                <div className="space-y-2.5 text-sm text-slate-600 mb-4">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                    <span>{loc.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{loc.phones.join(' / ')}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="text-amber-600 hover:underline">
                      {loc.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mon – Sat: 9:30 AM – 6:00 PM IST</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Inquiry Dispatched to Trust Office
                </h4>
                <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-slate-900">{formState.name}</span>. Your correspondence has been logged under reference code:
                </p>
                <div className="inline-block bg-slate-100 border border-slate-200 text-slate-800 font-mono font-bold px-4 py-2 rounded-xl text-lg tracking-wider">
                  {refId}
                </div>
                <p className="text-xs text-slate-400">
                  Our liaison desk will review your details and reach out via {formState.email}.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  Official Inquiry & Grant Application
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  Please specify your requirement clearly to direct it to the appropriate foundation committee.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="input-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Senthil Kumar"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="input-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="input-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="input-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      id="input-category"
                      value={formState.category}
                      onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all"
                    >
                      <option value="scholarship">Education & Scholarship Grants</option>
                      <option value="healthcare">Healthcare & Dialysis Assistance</option>
                      <option value="environment">Environmental / Seed Ball Greening</option>
                      <option value="women">Women Empowerment / Self-Help</option>
                      <option value="civic">Civic Partnership & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="input-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Proposal or Message *
                  </label>
                  <textarea
                    id="input-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide detailed background, institutional affiliation, or urgent assistance needs..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-btn"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 rounded-2xl shadow-md shadow-amber-500/25 transition-all hover:shadow-lg hover:shadow-amber-500/35 cursor-pointer text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Official Correspondence</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

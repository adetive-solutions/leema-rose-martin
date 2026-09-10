import React from 'react';
import { ArrowUp, Heart, Shield, Globe, Award, ExternalLink } from 'lucide-react';
import { PageRoute } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; route: PageRoute; sub: string }[] = [
    { label: 'Home', route: 'home', sub: 'Overview & Vision' },
    { label: 'About Dr. Leema', route: 'about', sub: 'about.html' },
    { label: 'Charity', route: 'charity', sub: 'charity' },
    { label: 'Awards & Distinctions', route: 'awards', sub: 'awards.html' },
    { label: 'Photographic Gallery', route: 'gallery', sub: 'gallery.php' },
    { label: 'Contact Secretariat', route: 'contact', sub: 'contact.html' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-1.5 text-white font-extrabold text-2xl tracking-tighter cursor-pointer text-left"
            >
              <span>leema</span>
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mb-1"></span>
            </button>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Official portal highlighting the humanitarian stewardship, healthcare initiatives, educational endowments, and ecological conservation projects of Dr. Leema Rose Martin.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-amber-500" />
                Martin Charitable Trust
              </span>
              <span>&bull;</span>
              <span className="inline-flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Rotary AKS Society
              </span>
            </div>
          </div>

          {/* Site Pages */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Website Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => onNavigate(item.route)}
                    className="group text-left text-slate-400 hover:text-white transition-colors cursor-pointer flex items-baseline gap-2"
                  >
                    <span className="group-hover:text-amber-400 transition-colors font-medium">{item.label}</span>
                    <span className="text-[11px] text-slate-500 font-mono">({item.sub})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Trust Secretariat
            </h4>
            <p className="text-sm text-slate-400">
              54, Mettupalayam Road, G.N. Mill Post,<br />
              Coimbatore - 641029, Tamil Nadu, INDIA
            </p>
            <p className="text-sm text-slate-400">
              Phone: 0422 2647657 &bull; 0422 2645262<br />
              Email: leemamartin2000@gmail.com
            </p>
            <div className="pt-2">
              <a
                href="https://leemamartin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
              >
                <span>Original Domain: leemamartin.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Dr. Leema Rose Martin. All rights reserved. Martin Charitable Trust.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact Desk
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Biography
            </button>
            <span>&bull;</span>
            <button
              onClick={scrollToTop}
              id="scroll-to-top-btn"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

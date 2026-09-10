import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: PageRoute; hrefOriginal: string }[] = [
    { label: 'Home', route: 'home', hrefOriginal: 'https://leemamartin.com/' },
    { label: 'About', route: 'about', hrefOriginal: 'https://leemamartin.com/about.html' },
    { label: 'Charity', route: 'charity', hrefOriginal: 'https://adetivedesk.github.io/leema-rose-martin/charity/' },
    { label: 'Awards', route: 'awards', hrefOriginal: 'https://leemamartin.com/awards.html' },
    { label: 'Gallery', route: 'gallery', hrefOriginal: 'https://leemamartin.com/gallery.php' },
  ];

  const handleNavClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div
        id="main-floating-navbar"
        className={`pointer-events-auto max-w-5xl mx-auto rounded-full transition-all duration-300 relative ${
          scrolled
            ? 'bg-gradient-to-b from-white/75 via-white/60 to-white/50 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.9),0_10px_30px_-5px_rgba(15,23,42,0.08)] py-2.5 px-4 sm:px-6'
            : 'bg-gradient-to-b from-white/65 via-white/50 to-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/60 shadow-[inset_0_1.5px_1.5px_0_rgba(255,255,255,0.85),0_8px_25px_-5px_rgba(15,23,42,0.06)] py-3 px-5 sm:px-7'
        } flex items-center justify-between gap-4`}
      >
        {/* Subtle glossy top light reflection rim */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none rounded-full" />

        {/* Brand Logo - clean lowercase style like "ulla" in the design */}
        <button
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-1 text-slate-900 font-extrabold text-xl tracking-tight transition-transform hover:scale-[1.02] cursor-pointer relative z-10"
          id="navbar-brand-logo"
        >
          <span className="inline-block whitespace-nowrap text-slate-900 drop-shadow-xs text-[10px] sm:text-xs font-bold tracking-wide uppercase">
            Rtn.AKS Dr.LEEMA ROSE MARTIN
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-500 inline-block mb-1 animate-pulse shadow-xs shadow-amber-500/50"></span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 relative z-10">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={(e) => handleNavClick(e, item.route)}
              id={`nav-link-${item.route}`}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                currentPage === item.route
                  ? 'text-slate-950 bg-white/80 backdrop-blur-md font-bold shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.04)] border border-white/80'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40 hover:backdrop-blur-sm'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Button - Matching the amber pill with glossy sheen */}
        <div className="flex items-center gap-2.5 relative z-10">
          <button
            onClick={(e) => handleNavClick(e, 'contact')}
            id="nav-cta-contact-btn"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-600 text-white font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full border border-amber-300/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_14px_rgba(245,158,11,0.28)] transition-all duration-200 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_6px_18px_rgba(245,158,11,0.36)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="md:hidden p-2 rounded-full text-slate-700 bg-white/40 hover:bg-white/70 backdrop-blur-md border border-white/50 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - matching transparent glossy glass effect */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="pointer-events-auto md:hidden max-w-sm mx-auto mt-2 bg-gradient-to-b from-white/80 via-white/70 to-white/60 backdrop-blur-2xl backdrop-saturate-150 border border-white/70 rounded-3xl p-5 shadow-[inset_0_1.5px_1.5px_rgba(255,255,255,0.9),0_20px_40px_rgba(15,23,42,0.12)] space-y-3 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={(e) => handleNavClick(e, item.route)}
                className={`w-full text-left px-4 py-2.5 rounded-2xl text-base font-medium transition-all cursor-pointer ${
                  currentPage === item.route
                    ? 'bg-white/80 text-amber-950 font-bold border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.03)]'
                    : 'text-slate-700 hover:bg-white/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/40 flex flex-col gap-2">
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              id="mobile-drawer-contact-btn"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-white font-medium py-3 rounded-2xl border border-amber-300/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_14px_rgba(245,158,11,0.25)] text-sm cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


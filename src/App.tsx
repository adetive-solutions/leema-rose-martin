import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CharityPage } from './pages/CharityPage';
import { AwardsPage } from './pages/AwardsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PageRoute } from './types';

export default function App() {
  // Parse initial route from the URL path (clean URLs via the History API,
  // e.g. /about, rather than a #/about hash).
  const getInitialRoute = (): PageRoute => {
    const pathname = window.location.pathname.toLowerCase();

    if (pathname.includes('about')) return 'about';
    if (pathname.includes('charity')) return 'charity';
    if (pathname.includes('awards')) return 'awards';
    if (pathname.includes('gallery')) return 'gallery';
    if (pathname.includes('contact')) return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialRoute());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Recalculate GSAP ScrollTrigger positions once fonts and layout have
  // settled on first load, so scroll-triggered fade-ins don't lock onto a
  // stale trigger position from before web fonts swapped in. Mount-only:
  // document.fonts.ready resolves once and stays resolved, so re-running
  // this per navigation would attach a new .then(refresh) to that same
  // settled promise on every route change — each of those extra handlers
  // still fires (promises can't be unsubscribed), and ScrollTrigger.refresh()
  // scrolls to 0 to measure then restores whatever scrollY it saw when IT
  // ran, which fought with and undid the scroll-to-top reset below.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready?.then(refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  // Per-page: recalculate trigger positions shortly after the new page's
  // own layout has settled (its cleanup cancels this before the next
  // navigation's effect runs, so at most one of these is ever pending).
  useEffect(() => {
    const timeout = setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => clearTimeout(timeout);
  }, [currentPage]);

  // Reset scroll to top on every route change. This runs synchronously after
  // the new page has committed to the DOM but before the browser paints, so
  // there's no window where the old (scrolled) page and new page's content
  // can race — the previous approach called window.scrollTo() from the click
  // handler itself, before React had even swapped the page content, which on
  // slower devices could finish scrolling against the wrong (old, taller)
  // page and leave the new page not fully at the top.
  useLayoutEffect(() => {
    // <html> has Tailwind's scroll-smooth class (used for the in-page
    // "Explore Initiatives" / "Back to top" anchor scrolls), which makes
    // scroll-behavior:smooth apply to *every* scrollTo call site-wide unless
    // explicitly overridden — including this one, which was animating the
    // reset instead of snapping it, so the new page visibly slid up from
    // underneath the fixed header for a moment on every navigation.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);

  const navigateTo = (route: PageRoute) => {
    setCurrentPage(route);
    // BASE_URL is '/leema-rose-martin/' in production (GitHub Pages project
    // site) and '/' in dev, so this stays correct in both without hardcoding.
    const path = route === 'home' ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}${route}`;
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-amber-100 selection:text-amber-900">
      {/* Floating Pill Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'charity' && <CharityPage onNavigate={navigateTo} />}
        {currentPage === 'awards' && <AwardsPage onNavigate={navigateTo} />}
        {currentPage === 'gallery' && <GalleryPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Persistent Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

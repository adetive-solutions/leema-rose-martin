import React from 'react';
import { Hero } from '../components/Hero';
import { ImpactMetrics } from '../components/ImpactMetrics';
import { Initiatives } from '../components/Initiatives';
import { Leadership } from '../components/Leadership';
import { VisionQuote } from '../components/VisionQuote';
import { PageRoute } from '../types';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollToContact = () => {
    onNavigate('contact');
  };

  const scrollToInitiatives = () => {
    const el = document.getElementById('initiatives');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero
        onExploreClick={scrollToInitiatives}
        onContactClick={scrollToContact}
      />

      <ImpactMetrics />

      <Initiatives />

      <VisionQuote />

      <Leadership />
    </div>
  );
};

export interface Initiative {
  id: string;
  title: string;
  category: 'education' | 'healthcare' | 'environment' | 'empowerment' | 'infrastructure';
  categoryLabel: string;
  description: string;
  detailedContent: string;
  metric: string;
  metricLabel: string;
  location: string;
  iconName: string;
  highlights: string[];
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  badgeType: 'international' | 'humanitarian' | 'academic' | 'civic' | 'rotary';
}

export interface LeadershipRole {
  role: string;
  organization: string;
  tenure?: string;
  focus: string;
  category: 'trust' | 'rotary' | 'healthcare' | 'advocacy';
}

export interface MetricItem {
  id: string;
  targetNumber: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rotary' | 'awards' | 'trust' | 'medical' | 'environment' | 'women' | 'sports' | 'pooja';
  categoryLabel: string;
  location: string;
  date: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export type PageRoute = 'home' | 'about' | 'charity' | 'awards' | 'gallery' | 'contact';


export interface Feature {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LandingConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry: string;
  theme: string;
  path: string;
  image: string;
}

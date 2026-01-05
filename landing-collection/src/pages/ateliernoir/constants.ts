import type { NavLink } from "@/shared/types";

export const COMPANY = {
  name: "Atelier Noir",
  tagline: "Curated luxury. Conscious craft.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "The Edit", href: "#edit" },
  { label: "Artisans", href: "#artisans" },
  { label: "Values", href: "#values" },
];

export const COLLECTIONS = [
  {
    id: "home",
    title: "Home",
    subtitle: "Living spaces reimagined",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: "wardrobe",
    title: "Wardrobe",
    subtitle: "Timeless essentials",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Refined details",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
  },
  {
    id: "gifts",
    title: "Gifts",
    subtitle: "Thoughtful gestures",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
  },
];

export const ARTISAN_STORIES = [
  {
    id: "ceramics",
    title: "The Art of Patience",
    subtitle: "Ceramics crafted over weeks, not hours",
    description:
      "In a quiet studio in Kyoto, master ceramicist Yuki Tanaka shapes each piece by hand, honoring traditions passed down through five generations. Every imperfection tells a story.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  },
  {
    id: "textiles",
    title: "Threads of Heritage",
    subtitle: "Hand-woven textiles from ancient looms",
    description:
      "Our linens come from a family workshop in Portugal, where the rhythm of wooden looms has remained unchanged for over a century. Each thread carries the weight of time.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export const VALUES = [
  {
    title: "Materials",
    description:
      "Every material is traced to its origin. We partner only with suppliers who share our commitment to quality and environmental responsibility.",
    icon: "leaf",
  },
  {
    title: "Sourcing",
    description:
      "Direct relationships with artisans ensure fair compensation and preserve traditional craftsmanship for future generations.",
    icon: "globe",
  },
  {
    title: "Lifetime Repair",
    description:
      "We stand behind every piece. Our lifetime repair program means your purchase is designed to last, not to be replaced.",
    icon: "refresh",
  },
  {
    title: "Packaging",
    description:
      "Plastic-free, compostable packaging that protects your purchase while respecting our planet. Every unboxing is an experience.",
    icon: "package",
  },
];

export const PRESS_LOGOS = [
  { name: "Vogue", logo: "VOGUE" },
  { name: "Architectural Digest", logo: "AD" },
  { name: "Monocle", logo: "MONOCLE" },
  { name: "Wallpaper", logo: "WALLPAPER*" },
];

export const REVIEWS = [
  {
    quote:
      "The attention to detail is extraordinary. Each piece feels like it was made just for me.",
    author: "Sophie M.",
    location: "Paris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    quote:
      "Finally, a brand that understands the difference between luxury and excess.",
    author: "James K.",
    location: "London",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    quote:
      "The craftsmanship speaks for itself. These are pieces I will pass down to my children.",
    author: "Elena R.",
    location: "Milan",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

export const CERTIFICATIONS = [
  "B Corp Certified",
  "Carbon Neutral",
  "Fair Trade",
];

export const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
];

export const FOOTER_LINKS = {
  shop: [
    { label: "Home", href: "#" },
    { label: "Wardrobe", href: "#" },
    { label: "Accessories", href: "#" },
    { label: "Gifts", href: "#" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Artisans", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Contact", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Care Guide", href: "#" },
  ],
};

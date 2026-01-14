import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Search,
  FileText,
  CheckSquare,
  TrendingUp,
  Code,
  Globe,
} from "lucide-react";

export const COMPANY = {
  name: "SEOStack",
  tagline: "SEO para desarrolladores.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: CheckSquare,
    title: "Checklist SEO",
    description:
      "Checklist completo de issues técnicos. Meta tags, estructura, canonical, sitemap.",
  },
  {
    icon: FileText,
    title: "SEO Next.js",
    description:
      "Plugin para Next.js. Genera automáticamente meta tags, JSON-LD y sitemap.",
  },
  {
    icon: Search,
    title: "API Search Console",
    description:
      "Conecta Google Search Console. Ve keywords, CTR y posiciones en tu dashboard.",
  },
  {
    icon: Code,
    title: "SEO en el Edge",
    description:
      "Modifica HTML en el edge. Pruebas A/B de títulos sin cambiar código.",
  },
  {
    icon: TrendingUp,
    title: "Seguimiento de Rankings",
    description:
      "Rastrea posiciones diariamente. Alertas cuando cambien rankings importantes.",
  },
  {
    icon: Globe,
    title: "SEO Internacional",
    description:
      "Generador hreflang, configuración multi-región. SEO internacional sin dolor.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "El plugin de Next.js nos ahorró semanas de trabajo manual en SEO técnico. Simplemente funciona.",
    author: "Alex Rivera",
    role: "Fullstack Dev @ Vercel",
    rating: 5,
  },
  {
    quote:
      "Por fin una herramienta de SEO que habla el lenguaje de desarrolladores. No más GUIs complicadas.",
    author: "Sarah Kim",
    role: "Tech Lead @ Netlify",
    rating: 5,
  },
  {
    quote:
      "SEO en el Edge nos permitió pruebas A/B de títulos sin mergear PRs. Iteramos 10x más rápido.",
    author: "James Chen",
    role: "Growth Eng @ Linear",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    period: "/siempre",
    description: "Para proyectos personales.",
    features: [
      "1 proyecto",
      "Checklist SEO",
      "Plugin Next.js",
      "Reportes básicos",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$39",
    period: "/mes",
    description: "Para equipos serios.",
    features: [
      "10 proyectos",
      "Integración Search Console",
      "Seguimiento de rankings",
      "SEO en el Edge",
      "Alertas Slack",
      "Soporte prioritario",
    ],
    cta: "Comenzar Pro",
    popular: true,
  },
  {
    name: "Agencia",
    price: "$149",
    period: "/mes",
    description: "Para agencias.",
    features: [
      "Proyectos ilimitados",
      "Reportes marca blanca",
      "Gestión de clientes",
      "Acceso API",
      "Integraciones personalizadas",
      "Soporte dedicado",
    ],
    cta: "Comenzar Agencia",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
];

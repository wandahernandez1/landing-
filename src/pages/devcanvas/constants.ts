import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Code, Layout, Palette, Zap, Globe, Terminal } from "lucide-react";

export const COMPANY = {
  name: "DevCanvas",
  tagline: "Tu portafolio profesional",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Desarrolladores", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Code,
    title: "Integración GitHub",
    description:
      "Conecta tu GitHub y muestra tus mejores repos automáticamente.",
  },
  {
    icon: Layout,
    title: "Templates Pro",
    description:
      "20+ templates diseñados por desarrolladores para desarrolladores.",
  },
  {
    icon: Palette,
    title: "Personalización Total",
    description: "CSS custom, themes, y componentes drag & drop.",
  },
  {
    icon: Zap,
    title: "Deploy Instantáneo",
    description: "Un click para publicar. SSL incluido. CDN global.",
  },
  {
    icon: Globe,
    title: "Dominio Custom",
    description: "Usa tu propio dominio o nuestro subdominio .dev gratuito.",
  },
  {
    icon: Terminal,
    title: "Analytics Dev",
    description: "Métricas de visitas, clics y engagement en tu portfolio.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Conseguí mi trabajo en Stripe gracias a mi portfolio en DevCanvas. Los reclutadores lo amaron.",
    author: "Alex Chen",
    role: "Software Engineer @ Stripe",
    rating: 5,
  },
  {
    quote:
      "Migré de WordPress en 10 minutos. El mejor portfolio platform para devs.",
    author: "Sarah Johnson",
    role: "Full Stack Dev @ Vercel",
    rating: 5,
  },
  {
    quote:
      "La integración con GitHub es perfecta. Mi portfolio siempre está actualizado.",
    author: "Marcus Rodriguez",
    role: "Senior Dev @ Netflix",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    period: "/siempre",
    description: "Para empezar a mostrar tu trabajo.",
    features: [
      "Template básico",
      "Subdominio .devcanvas.dev",
      "Integración GitHub",
      "Analytics básico",
      "SSL incluido",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$8",
    period: "/mes",
    description: "Para desarrolladores serios.",
    features: [
      "Todos los templates",
      "Dominio custom",
      "Sin marca DevCanvas",
      "Analytics avanzado",
      "Componentes premium",
      "Prioridad en soporte",
    ],
    cta: "Ir a Pro",
    popular: true,
  },
  {
    name: "Equipo",
    price: "$29",
    period: "/mes",
    description: "Para equipos y agencias.",
    features: [
      "Todo de Pro",
      "Hasta 10 portfolios",
      "Marca blanca",
      "Acceso API",
      "Dashboard de equipo",
      "Soporte dedicado",
    ],
    cta: "Contactar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Docs", href: "/docs" },
  { label: "Templates", href: "/templates" },
  { label: "Discord", href: "/discord" },
];

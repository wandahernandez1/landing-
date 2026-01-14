import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Rocket, GitBranch, Eye, RotateCcw, Gauge, Layers } from "lucide-react";

export const COMPANY = {
  name: "DeployZero",
  tagline: "Despliega tu frontend en segundos",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Desarrolladores", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: GitBranch,
    title: "PR Previews",
    description:
      "Cada pull request genera un ambiente de preview automático. Comparte URLs únicos con tu equipo.",
  },
  {
    icon: RotateCcw,
    title: "Rollbacks Visuales",
    description:
      "¿Algo salió mal? Un click para volver a cualquier versión anterior. Sin downtime.",
  },
  {
    icon: Gauge,
    title: "Performance Score",
    description:
      "Lighthouse integrado en cada deploy. Detecta regresiones antes de llegar a producción.",
  },
  {
    icon: Layers,
    title: "Multi-Framework",
    description:
      "Next.js, Nuxt, Astro, Vite, Remix. Detectamos tu framework automáticamente.",
  },
  {
    icon: Eye,
    title: "Live Collaboration",
    description:
      "Deja comentarios directamente en los previews. Feedback visual para tu equipo.",
  },
  {
    icon: Rocket,
    title: "Edge Network",
    description:
      "Deploy global en 50+ regiones. Tu app cerca de tus usuarios, siempre.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Migramos de Vercel y reducimos nuestro build time en un 60%. DeployZero entiende a los developers.",
    author: "Sarah Kim",
    role: "Lead Engineer @ Linear",
    rating: 5,
  },
  {
    quote:
      "Los PR previews cambiaron cómo hacemos code review. Ya no esperamos al QA para ver cambios.",
    author: "Marcus Chen",
    role: "Frontend Architect @ Stripe",
    rating: 5,
  },
  {
    quote:
      "El rollback con un click nos salvó en producción más de una vez. No puedo volver atrás.",
    author: "Elena Rodriguez",
    role: "CTO @ Resend",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Hobby",
    price: "$0",
    period: "/para siempre",
    description: "Para proyectos personales y experimentos.",
    features: [
      "3 proyectos",
      "100 GB bandwidth",
      "PR previews ilimitados",
      "Deploy desde GitHub",
      "SSL automático",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$20",
    period: "/mes",
    description: "Para equipos serios en producción.",
    features: [
      "Proyectos ilimitados",
      "1 TB bandwidth",
      "Colaboración en equipo",
      "Analytics avanzados",
      "Dominios personalizados",
      "Soporte prioritario",
    ],
    cta: "Obtener Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizaciones con necesidades específicas.",
    features: [
      "Todo de Pro",
      "SSO / SAML",
      "SLA 99.99%",
      "Soporte dedicado",
      "Integraciones personalizadas",
      "Opción on-premise",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Estado", href: "/status" },
];

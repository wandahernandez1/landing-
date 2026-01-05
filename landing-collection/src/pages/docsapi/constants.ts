import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { FileText, Play, Code2, GitBranch, Search, Zap } from "lucide-react";

export const COMPANY = {
  name: "DocsAPI",
  tagline: "Documentación de API hermosa.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Desarrolladores", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Play,
    title: "Playground de API",
    description:
      "Prueba endpoints en vivo. Constructor de requests con headers de auth. Visor de respuestas.",
  },
  {
    icon: Code2,
    title: "Importar OpenAPI",
    description:
      "Importa tu spec OpenAPI 3.x. Auto-genera docs, ejemplos y tipos.",
  },
  {
    icon: GitBranch,
    title: "Soporte Multi-Versión",
    description:
      "Versiona tus docs de API. v1, v2, beta. Cambio fácil para devs.",
  },
  {
    icon: Search,
    title: "Búsqueda Instantánea",
    description:
      "Búsqueda potenciada por Algolia. Encuentra endpoints, parámetros, schemas.",
  },
  {
    icon: FileText,
    title: "Contenido MDX",
    description: "Mezcla docs con código. Componentes React en tus guías.",
  },
  {
    icon: Zap,
    title: "Generación de SDK",
    description: "Genera SDKs en TypeScript, Python, Go. Types incluidos.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Migramos de Readme.io y nuestros developers finalmente aman nuestros docs.",
    author: "Kate Chen",
    role: "DevRel @ Stripe Clone",
    rating: 5,
  },
  {
    quote:
      "El playground redujo nuestros tickets de soporte 60%. Los devs prueban antes de preguntar.",
    author: "Sam Lee",
    role: "API Lead @ DataPlatform",
    rating: 5,
  },
  {
    quote: "La auto-generación desde OpenAPI nos ahorra 10+ horas por release.",
    author: "Jordan Smith",
    role: "Tech Writer @ FinAPI",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Open Source",
    price: "$0",
    description: "Self-hosted, licencia MIT.",
    features: [
      "Páginas ilimitadas",
      "Importar OpenAPI",
      "Playground de API",
      "Modo oscuro",
      "Soporte comunidad",
    ],
    cta: "Comenzar",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mes",
    description: "Para equipos serios.",
    features: [
      "Solución alojada",
      "Dominio personalizado",
      "Dashboard de analytics",
      "Repos privados",
      "Búsqueda Algolia",
      "Soporte prioritario",
    ],
    cta: "Comenzar Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para APIs a escala.",
    features: [
      "SSO / SAML",
      "Múltiples proyectos",
      "Marca blanca",
      "SLA 99.99%",
      "Integraciones personalizadas",
      "Éxito dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Showcase", href: "/showcase" },
  { label: "GitHub", href: "/github" },
];

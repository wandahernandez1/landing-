import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  ToggleRight,
  Zap,
  BarChart2,
  Users,
  Shield,
  GitBranch,
} from "lucide-react";

export const COMPANY = {
  name: "FeatureFlag Studio",
  tagline: "Despliega sin miedo.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: ToggleRight,
    title: "Lanzamientos Instantáneos",
    description:
      "Activa features para usuarios específicos al instante. Sin deploys, sin esperas.",
  },
  {
    icon: BarChart2,
    title: "Pruebas A/B",
    description:
      "Experimenta con variantes. Mide impacto real con estadísticas integradas.",
  },
  {
    icon: Zap,
    title: "Interruptor de Emergencia",
    description:
      "Desactiva features problemáticos en segundos. Rollback instantáneo.",
  },
  {
    icon: Users,
    title: "Segmentos Específicos",
    description: "Libera por país, plan, porcentaje. Control granular total.",
  },
  {
    icon: Shield,
    title: "SDKs Type-Safe",
    description:
      "TypeScript, React, Node, Python, Go. Autocompletado para tus flags.",
  },
  {
    icon: GitBranch,
    title: "Hooks CI/CD",
    description:
      "Integra con GitHub Actions, CircleCI, Jenkins. Flags como código.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Antes cada release era un evento de estrés. Ahora liberamos features diariamente con total confianza.",
    author: "Mike Chen",
    role: "Engineering Lead @ LaunchDarkly",
    rating: 5,
  },
  {
    quote:
      "El interruptor de emergencia nos salvó de un outage masivo. Desactivamos el feature en 3 segundos.",
    author: "Sarah Kim",
    role: "SRE @ Stripe",
    rating: 5,
  },
  {
    quote:
      "Las pruebas A/B integradas cambiaron nuestra cultura de producto. Decisiones basadas en datos.",
    author: "James Wilson",
    role: "Product Lead @ Notion",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    period: "/siempre",
    description: "Para equipos pequeños.",
    features: [
      "3 flags",
      "1K evaluaciones/mes",
      "1 ambiente",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mes",
    description: "Para equipos en crecimiento.",
    features: [
      "Flags ilimitados",
      "100K evaluaciones/mes",
      "Multi-ambiente",
      "Pruebas A/B",
      "Soporte prioritario",
    ],
    cta: "Comenzar Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizaciones.",
    features: [
      "Todo de Pro",
      "Evaluaciones ilimitadas",
      "SSO / SAML",
      "Logs de auditoría",
      "SLA 99.99%",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "API", href: "/api" },
  { label: "Estado", href: "/status" },
];

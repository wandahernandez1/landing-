import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Eye,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  Code,
  Shield,
} from "lucide-react";

export const COMPANY = {
  name: "A11yScan",
  tagline: "Accesibilidad para todos.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Eye,
    title: "Escáner WCAG 2.1",
    description:
      "Detecta automáticamente violaciones de accesibilidad. Level A, AA y AAA.",
  },
  {
    icon: AlertTriangle,
    title: "Issues Priorizados",
    description:
      "Clasifica problemas por impacto. Resuelve primero lo que más afecta usuarios.",
  },
  {
    icon: FileCheck,
    title: "Integración CI",
    description:
      "Bloquea PRs con issues críticos. Integra con GitHub Actions, GitLab, CircleCI.",
  },
  {
    icon: Code,
    title: "Fragmentos de Código",
    description:
      "Cada issue incluye fix sugerido. Copia y pega la solución exacta.",
  },
  {
    icon: Shield,
    title: "Cumplimiento Legal",
    description:
      "Genera reportes para auditorías. ADA, Section 508, EN 301 549.",
  },
  {
    icon: CheckCircle,
    title: "Seguimiento de Correcciones",
    description:
      "Rastrea progreso de fixes. Dashboard de compliance con histórico.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "A11yScan nos ayudó a pasar de 45 issues críticos a 0 en 3 sprints. Los fixes sugeridos fueron precisos.",
    author: "Maria Santos",
    role: "Engineering Lead @ Microsoft",
    rating: 5,
  },
  {
    quote:
      "La integración con CI evitó que mergeáramos 12 PRs con problemas de accesibilidad el primer mes.",
    author: "David Kim",
    role: "DevOps @ Shopify",
    rating: 5,
  },
  {
    quote:
      "Por fin un scanner de a11y que no da falsos positivos. Accionable desde día uno.",
    author: "Lisa Chen",
    role: "A11y Champion @ Airbnb",
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
      "100 páginas/mes",
      "WCAG 2.1 A/AA",
      "Reportes por email",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mes",
    description: "Para equipos de producto.",
    features: [
      "10 proyectos",
      "10K páginas/mes",
      "WCAG 2.1 AAA",
      "Integración CI",
      "Alertas Slack",
      "Sugerencias de fix",
    ],
    cta: "Comenzar Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizaciones.",
    features: [
      "Proyectos ilimitados",
      "Páginas ilimitadas",
      "Reportes de cumplimiento legal",
      "SSO / SAML",
      "SLA 99.99%",
      "Soporte dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Guía WCAG", href: "/wcag" },
  { label: "Estado", href: "/status" },
];

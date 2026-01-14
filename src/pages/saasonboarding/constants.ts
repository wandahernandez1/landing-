import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Users,
  Target,
  BarChart3,
  Layers,
  Zap,
  CheckCircle,
} from "lucide-react";

export const COMPANY = {
  name: "SaaSOnboarding",
  tagline: "Activa más usuarios.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Target,
    title: "Constructor de Journeys",
    description: "Crea flujos de onboarding visuales. Drag & drop, sin código.",
  },
  {
    icon: BarChart3,
    title: "Métricas de Activación",
    description:
      "Mide time-to-value, tasa de activación y tasa de completado. Datos que importan.",
  },
  {
    icon: Layers,
    title: "Componentes de Checklist",
    description:
      "Checklists embebibles. Guía usuarios paso a paso a su momento 'aha'.",
  },
  {
    icon: Users,
    title: "Segmentación de Usuarios",
    description:
      "Onboarding diferente para cada persona. Developers vs Managers vs Admins.",
  },
  {
    icon: Zap,
    title: "Tooltips In-App",
    description:
      "Tooltips contextuales sin código. Apunta a elementos específicos.",
  },
  {
    icon: CheckCircle,
    title: "Predicción de Churn",
    description:
      "Detecta usuarios en riesgo. Activa campañas de retención automáticas.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "La tasa de activación subió de 23% a 67% en 6 semanas. El ROI es increíble.",
    author: "Sarah Chen",
    role: "Growth Lead @ Notion",
    rating: 5,
  },
  {
    quote:
      "El constructor de journeys nos permitió iterar 5x más rápido que desarrollar internamente.",
    author: "Mike Park",
    role: "Product @ Linear",
    rating: 5,
  },
  {
    quote:
      "La predicción de churn nos salvó cientos de cuentas enterprise el primer trimestre.",
    author: "Emma Rodriguez",
    role: "CS Lead @ Figma",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    period: "/mes",
    description: "Para startups en etapa inicial.",
    features: [
      "5K MAU",
      "Journeys de usuario",
      "Analytics básicos",
      "Componentes checklist",
      "Soporte por email",
    ],
    cta: "Comenzar Prueba",
  },
  {
    name: "Growth",
    price: "$299",
    period: "/mes",
    description: "Para equipos de producto.",
    features: [
      "25K MAU",
      "Segmentación avanzada",
      "Tooltips in-app",
      "Pruebas A/B",
      "Integración Slack",
      "Soporte prioritario",
    ],
    cta: "Comenzar Growth",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para scale-ups.",
    features: [
      "MAU ilimitados",
      "Predicción de churn",
      "Integraciones personalizadas",
      "SSO / SAML",
      "SLA 99.99%",
      "CSM dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
];

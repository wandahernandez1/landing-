import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Activity,
  BarChart3,
  Gauge,
  TrendingUp,
  Clock,
  Zap,
} from "lucide-react";

export const COMPANY = {
  name: "PerformanceLab",
  tagline: "Mide lo que importa.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Gauge,
    title: "Web Vitals",
    description:
      "LCP, FID, CLS en tiempo real. Monitorea Core Web Vitals sin configuración.",
  },
  {
    icon: Activity,
    title: "Monitoreo de Usuarios Reales",
    description:
      "RUM con datos de usuarios reales. Métricas por dispositivo, país y conexión.",
  },
  {
    icon: BarChart3,
    title: "Presupuestos de Performance",
    description: "Define límites. Alerta cuando el bundle supera el umbral.",
  },
  {
    icon: TrendingUp,
    title: "Impacto en Conversiones",
    description:
      "Correlaciona performance con conversiones. ROI de cada optimización.",
  },
  {
    icon: Clock,
    title: "Tendencias Históricas",
    description:
      "90 días de historial. Detecta regresiones antes que impacten usuarios.",
  },
  {
    icon: Zap,
    title: "Lighthouse CI",
    description:
      "Integra Lighthouse en tu CI/CD. Bloquea PRs que degraden performance.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Detectamos una regresión de 2s en LCP antes de mergear. Nos salvó millones en conversiones.",
    author: "Alex Rivera",
    role: "Performance Lead @ Shopify",
    rating: 5,
  },
  {
    quote:
      "El dashboard de Web Vitals es el más claro que he usado. Datos accionables, no ruido.",
    author: "Emma Chen",
    role: "Frontend Lead @ Vercel",
    rating: 5,
  },
  {
    quote:
      "La correlación con conversiones convenció al equipo de priorizar performance. Los datos ganan.",
    author: "James Park",
    role: "Product @ Notion",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/siempre",
    description: "Para proyectos pequeños.",
    features: [
      "1 sitio",
      "1K vistas/mes",
      "7 días historial",
      "Core Web Vitals",
      "Alertas por email",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mes",
    description: "Para equipos serios.",
    features: [
      "5 sitios",
      "100K vistas/mes",
      "90 días historial",
      "RUM completo",
      "Lighthouse CI",
      "Integración Slack",
    ],
    cta: "Comenzar Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para grandes organizaciones.",
    features: [
      "Sitios ilimitados",
      "Vistas ilimitadas",
      "1 año historial",
      "Dashboards personalizados",
      "SSO / SAML",
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

import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { AlertCircle, Bug, History, Play, Code, Bell } from "lucide-react";

export const COMPANY = {
  name: "FrontendMonitor",
  tagline: "Detecta errores antes que tus usuarios.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Bug,
    title: "Rastreo de Errores",
    description:
      "Captura errores JavaScript automáticamente. Stack traces, contexto y breadcrumbs.",
  },
  {
    icon: History,
    title: "Línea Temporal de Errores",
    description:
      "Ve cada error en contexto temporal. Reproduce la secuencia de eventos.",
  },
  {
    icon: Play,
    title: "Reproducción de Sesión",
    description:
      "Observa exactamente qué hizo el usuario antes del error. Video HD.",
  },
  {
    icon: Code,
    title: "Source Maps",
    description:
      "Deminifica stack traces automáticamente. Ve la línea exacta de código.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description:
      "Alertas inteligentes. Notifica solo errores nuevos o con pico inusual.",
  },
  {
    icon: AlertCircle,
    title: "Agrupación de Issues",
    description:
      "Agrupa errores similares automáticamente. Reduce ruido, prioriza impacto.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "La reproducción de sesión nos mostró que un caso límite causaba el 60% de nuestros errores. Fix de 5 minutos.",
    author: "Alex Wong",
    role: "Frontend Lead @ Sentry",
    rating: 5,
  },
  {
    quote:
      "Pasamos de enterarnos de errores por usuarios a detectarlos en minutos. Un cambio total.",
    author: "Sarah Miller",
    role: "Engineering @ Stripe",
    rating: 5,
  },
  {
    quote:
      "La agrupación de issues reduce tanto ruido que ahora revisamos errores diariamente en 10 minutos.",
    author: "Mike Chen",
    role: "SRE @ Datadog",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    period: "/siempre",
    description: "Para proyectos pequeños.",
    features: [
      "10K errores/mes",
      "7 días retención",
      "Source maps",
      "Alertas por email",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mes",
    description: "Para equipos de producto.",
    features: [
      "100K errores/mes",
      "30 días retención",
      "Reproducción de sesión",
      "Slack/PagerDuty",
      "Asignación de issues",
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
      "Errores ilimitados",
      "90 días retención",
      "SSO / SAML",
      "Integraciones personalizadas",
      "SLA 99.99%",
      "Soporte dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Estado", href: "/status" },
  { label: "Seguridad", href: "/security" },
];

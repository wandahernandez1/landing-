import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  MousePointer2,
  Move,
  Target,
  AlertTriangle,
  BarChart3,
  Shield,
} from "lucide-react";

export const COMPANY = {
  name: "UXPulse",
  tagline: "Convierte comportamiento en decisiones",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Clientes", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: MousePointer2,
    title: "Click Tracking",
    description:
      "Visualiza exactamente dónde hacen click tus usuarios. Heatmaps en tiempo real.",
  },
  {
    icon: Move,
    title: "Scroll Analytics",
    description:
      "Descubre hasta dónde llegan tus usuarios. Identifica dónde pierdes atención.",
  },
  {
    icon: AlertTriangle,
    title: "Rage Clicks",
    description:
      "Detecta frustración en tiempo real. Alertas automáticas de fricción.",
  },
  {
    icon: Target,
    title: "Session Replay",
    description:
      "Mira exactamente lo que ven tus usuarios. Reproduce sesiones completas.",
  },
  {
    icon: BarChart3,
    title: "UX Score",
    description:
      "Métricas únicas que correlacionan UX con conversión y revenue.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description:
      "Sin cookies, GDPR compliant. Respeta la privacidad de tus usuarios.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Descubrimos que el 70% de usuarios no veía nuestro CTA principal. Un cambio = +40% conversión.",
    author: "Laura Martinez",
    role: "Head of Product @ Notion",
    rating: 5,
  },
  {
    quote:
      "Los rage clicks nos revelaron un bug que nos costaba miles de dólares al mes.",
    author: "David Kim",
    role: "CTO @ Loom",
    rating: 5,
  },
  {
    quote:
      "Por fin puedo mostrar a stakeholders datos visuales de UX, no solo opiniones.",
    author: "Ana Chen",
    role: "UX Lead @ Figma",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/siempre",
    description: "Para proyectos personales.",
    features: [
      "1,000 sesiones/mes",
      "Heatmaps básicos",
      "7 días de retención",
      "1 proyecto",
      "GDPR compatible",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mes",
    description: "Para equipos en crecimiento.",
    features: [
      "50,000 sesiones/mes",
      "Heatmaps + Replays",
      "90 días retención",
      "Proyectos ilimitados",
      "Alertas de rage clicks",
      "Integraciones",
    ],
    cta: "Empezar a Crecer",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para grandes organizaciones.",
    features: [
      "Sesiones ilimitadas",
      "Acceso API",
      "SSO / SAML",
      "Soporte dedicado",
      "Retención personalizada",
      "Opción on-premise",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Privacidad", href: "/privacy" },
  { label: "Estado", href: "/status" },
];

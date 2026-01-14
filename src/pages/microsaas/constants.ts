import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Rocket, CreditCard, Layout, Lock, Zap, Users } from "lucide-react";

export const COMPANY = {
  name: "MicroSaaS Builder",
  tagline: "Lanza más rápido",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Creadores", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Lock,
    title: "Auth Ready",
    description:
      "Autenticación completa incluida. Email, OAuth, magic links. Zero config.",
  },
  {
    icon: CreditCard,
    title: "Billing Integrado",
    description:
      "Stripe, Paddle, LemonSqueezy. Subscriptions, one-time, usage-based.",
  },
  {
    icon: Layout,
    title: "Landing Page",
    description:
      "Templates de landing optimizados para conversión. Listos para usar.",
  },
  {
    icon: Zap,
    title: "App Boilerplate",
    description:
      "Dashboard, settings, onboarding. Todo el código que siempre escribes.",
  },
  {
    icon: Users,
    title: "Team Features",
    description:
      "Invitaciones, roles, permisos. Multi-tenant listo desde el día 1.",
  },
  {
    icon: Rocket,
    title: "Deploy 1-Click",
    description: "Vercel, Railway, Fly.io. Deploy a producción en minutos.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Lancé mi SaaS en 7 días. Sin MicroSaaS Builder hubiera tardado 3 meses mínimo.",
    author: "Marc Andreessen",
    role: "Indie Maker",
    rating: 5,
  },
  {
    quote:
      "El mejor $299 que he gastado. Ya estoy en $2K MRR y solo enfocado en features.",
    author: "Pieter Levels",
    role: "Founder @ NomadList",
    rating: 5,
  },
  {
    quote:
      "Por fin puedo probar ideas rápido sin reescribir auth y billing cada vez.",
    author: "Tony Dinh",
    role: "Solo Founder",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    description: "Para tu primer SaaS.",
    features: [
      "1 proyecto",
      "Auth + Facturación",
      "Plantilla de landing",
      "Soporte por email",
      "Actualizaciones 6 meses",
    ],
    cta: "Empezar a Construir",
  },
  {
    name: "Pro",
    price: "$299",
    description: "Para makers serios.",
    features: [
      "Proyectos ilimitados",
      "Todo de Starter",
      "Funciones de equipo",
      "Panel de analytics",
      "Actualizaciones de por vida",
      "Discord privado",
    ],
    cta: "Obtener Pro",
    popular: true,
  },
  {
    name: "Agencia",
    price: "$999",
    description: "Para agencias y freelancers.",
    features: [
      "Todo de Pro",
      "Licencia para clientes",
      "Marca blanca",
      "Soporte prioritario",
      "Sesión 1-on-1",
      "Funciones personalizadas",
    ],
    cta: "Contactar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Discord", href: "/discord" },
  { label: "Twitter", href: "/twitter" },
];

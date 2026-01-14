import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  FileCheck,
} from "lucide-react";

export const COMPANY = {
  name: "Sentinel Shield",
  tagline: "Protección inteligente",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Soluciones", href: "#features" },
  { label: "Casos", href: "#testimonials" },
  { label: "Planes", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Protección 360°",
    description: "Defensa integral contra amenazas conocidas y zero-day.",
  },
  {
    icon: Eye,
    title: "Detección con IA",
    description: "Machine learning para identificar comportamientos anómalos.",
  },
  {
    icon: Lock,
    title: "Zero Trust",
    description: "Arquitectura de seguridad sin confianza implícita.",
  },
  {
    icon: AlertTriangle,
    title: "Respuesta Automática",
    description: "Contención inmediata de amenazas sin intervención humana.",
  },
  {
    icon: Server,
    title: "Cloud & On-Premise",
    description: "Protege tu infraestructura donde sea que esté.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "Cumple GDPR, SOC2, ISO27001 y más certificaciones.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sentinel detectó y neutralizó un ataque ransomware antes de que causara daño.",
    author: "Thomas Weber",
    role: "CISO",
    company: "TechCorp EU",
    rating: 5,
  },
  {
    quote:
      "Reducimos nuestro tiempo de respuesta a incidentes de horas a segundos.",
    author: "Elena Petrova",
    role: "Security Lead",
    company: "FinanceFlow",
    rating: 5,
  },
  {
    quote: "La mejor inversión en ciberseguridad que hemos hecho.",
    author: "James Mitchell",
    role: "CTO",
    company: "DataScale",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Teams",
    price: "$15",
    period: "/usuario/mes",
    description: "Para equipos pequeños.",
    features: [
      "Hasta 50 usuarios",
      "Protección endpoints",
      "Detección de amenazas",
      "Dashboard básico",
      "Soporte 8x5",
    ],
    cta: "Comenzar",
  },
  {
    name: "Business",
    price: "$35",
    period: "/usuario/mes",
    description: "Para empresas medianas.",
    features: [
      "Usuarios ilimitados",
      "Todo de Teams",
      "IA avanzada",
      "Respuesta automática",
      "SIEM integrado",
      "Soporte 24/7",
      "Compliance reports",
    ],
    cta: "Comenzar",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes organizaciones.",
    features: [
      "Todo de Business",
      "Deploy on-premise",
      "SOC dedicado",
      "Threat hunting",
      "SLA garantizado",
      "Equipo asignado",
    ],
    cta: "Contactar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Seguridad", href: "/security" },
  { label: "Compliance", href: "/compliance" },
  { label: "Soporte", href: "/support" },
];

import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  TrendingUp,
  Target,
  BarChart2,
  Users,
  Rocket,
  LineChart,
} from "lucide-react";

export const COMPANY = {
  name: "Compound Growth",
  tagline: "Escala tu marketing",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Servicios", href: "#features" },
  { label: "Resultados", href: "#testimonials" },
  { label: "Planes", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Target,
    title: "Estrategia de Crecimiento",
    description:
      "Desarrollamos estrategias data-driven para escalar tu negocio B2B.",
  },
  {
    icon: TrendingUp,
    title: "Demand Generation",
    description: "Generamos demanda cualificada con campañas multicanal.",
  },
  {
    icon: BarChart2,
    title: "Analytics Avanzado",
    description: "Dashboards en tiempo real con métricas que importan.",
  },
  {
    icon: Users,
    title: "ABM Campaigns",
    description: "Account-Based Marketing para cerrar cuentas enterprise.",
  },
  {
    icon: Rocket,
    title: "Growth Hacking",
    description: "Experimentación rápida para encontrar canales escalables.",
  },
  {
    icon: LineChart,
    title: "Revenue Operations",
    description: "Alineamos marketing, ventas y customer success.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Compound triplicó nuestro pipeline en 6 meses. Resultados extraordinarios.",
    author: "Michael Ross",
    role: "VP Marketing",
    company: "SaaS Inc",
    rating: 5,
  },
  {
    quote:
      "El mejor equipo de growth que hemos trabajado. ROI de 10x en el primer año.",
    author: "Sarah Chen",
    role: "CMO",
    company: "TechFlow",
    rating: 5,
  },
  {
    quote:
      "Su enfoque data-driven nos ayudó a encontrar product-market fit más rápido.",
    author: "David Park",
    role: "CEO",
    company: "DataStart",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Startup",
    price: "$5k",
    period: "/mes",
    description: "Para startups en early stage.",
    features: [
      "Estrategia de crecimiento",
      "2 canales de adquisición",
      "Reporting mensual",
      "Soporte por email",
    ],
    cta: "Comenzar",
  },
  {
    name: "Scale",
    price: "$15k",
    period: "/mes",
    description: "Para empresas en crecimiento.",
    features: [
      "Todo de Startup",
      "Campañas multicanal",
      "ABM básico",
      "Reporting semanal",
      "Equipo dedicado",
      "RevOps setup",
    ],
    cta: "Comenzar",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes organizaciones.",
    features: [
      "Todo de Scale",
      "ABM enterprise",
      "Equipo full-stack",
      "Reporting diario",
      "Consultoría estratégica",
      "SLA garantizado",
    ],
    cta: "Contactar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Casos", href: "/cases" },
  { label: "Contacto", href: "/contact" },
];

import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Building2,
  Brain,
  TrendingUp,
  MapPin,
  FileSearch,
  BarChart3,
} from "lucide-react";

export const COMPANY = {
  name: "Keystone AI",
  tagline: "Inteligencia Inmobiliaria",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Soluciones", href: "#features" },
  { label: "Casos", href: "#testimonials" },
  { label: "Planes", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "Valuación IA",
    description:
      "Modelos predictivos que analizan +200 variables para valuaciones precisas al 98%.",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description:
      "Tendencias de mercado, pronósticos de precios y análisis de competencia.",
  },
  {
    icon: MapPin,
    title: "Location Score",
    description:
      "Análisis de ubicación con datos de transporte, servicios y desarrollo urbano.",
  },
  {
    icon: FileSearch,
    title: "Due Diligence AI",
    description:
      "Análisis automatizado de documentos legales, permisos y regulaciones.",
  },
  {
    icon: BarChart3,
    title: "ROI Predictor",
    description:
      "Proyecciones de rentabilidad basadas en datos históricos y tendencias.",
  },
  {
    icon: Building2,
    title: "Portfolio Manager",
    description:
      "Gestión integral de portafolios inmobiliarios con alertas inteligentes.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Keystone nos ayudó a identificar oportunidades que hubiéramos perdido. ROI 40% superior.",
    author: "Roberto Mendoza",
    role: "Director de Inversiones • Grupo Inmobiliario MX",
    rating: 5,
  },
  {
    quote:
      "La Due Diligence AI nos ahorró 3 semanas por operación. Game changer para M&A.",
    author: "Patricia Vega",
    role: "VP Real Estate • Fondo de Inversión",
    rating: 5,
  },
  {
    quote:
      "El Location Score predijo con exactitud el crecimiento de 5 zonas que ahora son prime.",
    author: "Carlos Ruiz",
    role: "CEO • Desarrolladora Premium",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Analyst",
    price: "$499",
    period: "/mes",
    description: "Para analistas individuales.",
    features: [
      "Valuación IA (50/mes)",
      "Market Reports básicos",
      "Location Score",
      "Dashboard personal",
      "Soporte email",
    ],
    cta: "Comenzar",
  },
  {
    name: "Enterprise",
    price: "$2,499",
    period: "/mes",
    description: "Para equipos de inversión.",
    features: [
      "Valuaciones ilimitadas",
      "Due Diligence AI",
      "ROI Predictor",
      "Portfolio Manager",
      "API access",
      "Account manager",
    ],
    cta: "Demo Gratis",
    popular: true,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    description: "Para fondos y desarrolladoras.",
    features: [
      "Todo de Enterprise",
      "Modelos personalizados",
      "Data rooms privados",
      "Integración ERP",
      "White label",
      "SLA garantizado",
    ],
    cta: "Contactar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "API Docs", href: "/docs" },
  { label: "Case Studies", href: "/cases" },
  { label: "Contacto", href: "/contact" },
];

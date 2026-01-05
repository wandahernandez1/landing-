import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  TrendingUp,
  DollarSign,
  Users,
  BarChart2,
  RefreshCcw,
  Layers,
} from "lucide-react";

export const COMPANY = {
  name: "IndieMetrics",
  tagline: "Analytics simple para creadores independientes.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Creadores", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: DollarSign,
    title: "Seguimiento de MRR",
    description:
      "Conecta Stripe, Paddle, Gumroad. Ve tu MRR en tiempo real. Sin hojas de cálculo.",
  },
  {
    icon: RefreshCcw,
    title: "Análisis de Churn",
    description:
      "Entiende por qué se van. Segmenta por plan, cohorte, uso de features.",
  },
  {
    icon: Users,
    title: "Visualización de Cohortes",
    description:
      "Retención por cohorte. Ve cómo evoluciona cada grupo de usuarios.",
  },
  {
    icon: BarChart2,
    title: "Predicciones de LTV",
    description:
      "ML predice valor de por vida. Sabe cuánto invertir en adquisición.",
  },
  {
    icon: TrendingUp,
    title: "Métricas de Crecimiento",
    description:
      "Quick ratio, retención de ingresos netos, MRR de expansión. Todo automático.",
  },
  {
    icon: Layers,
    title: "Segmentación",
    description:
      "Filtra por plan, país, canal de adquisición. Insights accionables.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Finalmente puedo ver mi MRR sin abrir 5 pestañas. Un solo dashboard.",
    author: "Marc Johnson",
    role: "Founder @ SideProject.io",
    rating: 5,
  },
  {
    quote:
      "El análisis de cohortes me mostró que el churn estaba en el plan free. Cambié mi funnel.",
    author: "Lisa Park",
    role: "Indie Hacker",
    rating: 5,
  },
  {
    quote:
      "Simple, rápido, barato. Exactamente lo que necesita un creador independiente.",
    author: "Alex Rivera",
    role: "Solopreneur",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Hobby",
    price: "$0",
    description: "Para proyectos personales.",
    features: [
      "$1K seguimiento MRR",
      "1 proveedor de pago",
      "Métricas básicas",
      "7 días retención de datos",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Indie",
    price: "$19",
    period: "/mes",
    description: "Para makers serios.",
    features: [
      "$50K seguimiento MRR",
      "Todos los proveedores de pago",
      "Análisis de cohortes",
      "Predicciones de churn",
      "Historial ilimitado",
      "Soporte por email",
    ],
    cta: "Ser Indie",
    popular: true,
  },
  {
    name: "Studio",
    price: "$49",
    period: "/mes",
    description: "Para micro-estudios.",
    features: [
      "$500K seguimiento MRR",
      "Miembros de equipo",
      "Acceso API",
      "Reportes personalizados",
      "Alertas Slack",
      "Soporte prioritario",
    ],
    cta: "Obtener Studio",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Changelog", href: "/changelog" },
  { label: "Twitter", href: "/twitter" },
  { label: "Documentación", href: "/docs" },
];

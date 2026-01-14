import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  Cloud,
  DollarSign,
  TrendingDown,
  Bell,
  BarChart3,
  Shield,
} from "lucide-react";

export const COMPANY = {
  name: "CloudCost Guard",
  tagline: "Elimina el desperdicio en la nube.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Enterprise", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Cloud,
    title: "Soporte Multi-Nube",
    description:
      "AWS, GCP, Azure en un dashboard. Visibilidad completa de tu gasto.",
  },
  {
    icon: TrendingDown,
    title: "Detección de Anomalías de Costo",
    description:
      "ML detecta picos inusuales. Alertas antes de que explote la factura.",
  },
  {
    icon: BarChart3,
    title: "Optimización de Uso",
    description:
      "Rightsizing automático. Recomendaciones de instancias reservadas. Planes de ahorro.",
  },
  {
    icon: Bell,
    title: "Alertas de Presupuesto",
    description:
      "Alertas por equipo, proyecto o servicio. Slack, Teams, PagerDuty.",
  },
  {
    icon: DollarSign,
    title: "Showback y Chargeback",
    description:
      "Asigna costos por equipo, feature o cliente. Responsabilidad real.",
  },
  {
    icon: Shield,
    title: "Automatización FinOps",
    description:
      "Políticas que auto-apagan instancias dev fuera de horario. Ahorros en piloto automático.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Redujimos $480K anuales en AWS solo con recomendaciones de rightsizing. ROI en 2 semanas.",
    author: "David Chen",
    role: "VP Engineering @ ScaleUp",
    rating: 5,
  },
  {
    quote:
      "Finalmente tenemos visibilidad de quién gasta qué. Los equipos ahora son conscientes de los costos.",
    author: "Maria Santos",
    role: "FinOps Lead @ Unicorn.io",
    rating: 5,
  },
  {
    quote:
      "Las alertas de anomalías nos salvaron $50K cuando un job de Spark se descontroló.",
    author: "James Wilson",
    role: "Platform Lead @ DataCorp",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Startup",
    price: "$499",
    period: "/mes",
    description: "Hasta $100K/mes en cloud.",
    features: [
      "1 proveedor cloud",
      "Dashboard de costos",
      "Alertas de anomalías",
      "5 usuarios",
      "Soporte por email",
    ],
    cta: "Comenzar Prueba",
  },
  {
    name: "Business",
    price: "$1,499",
    period: "/mes",
    description: "Hasta $500K/mes en cloud.",
    features: [
      "Multi-nube",
      "Recomendaciones de rightsizing",
      "Reportes showback",
      "Integración Slack",
      "15 usuarios",
      "Soporte prioritario",
    ],
    cta: "Obtener Business",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Gasto cloud ilimitado.",
    features: [
      "Todas las nubes + Kubernetes",
      "Automatización FinOps",
      "Chargeback personalizado",
      "SSO / SAML",
      "SLA 99.99%",
      "CSM dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Seguridad", href: "/security" },
  { label: "Estado", href: "/status" },
];

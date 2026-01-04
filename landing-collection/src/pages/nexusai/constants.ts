import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Brain, Zap, Shield, BarChart3, Users, Clock } from "lucide-react";

export const COMPANY = {
  name: "NexusAI",
  tagline: "El futuro de la productividad",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "IA Avanzada",
    description:
      "Algoritmos de última generación que aprenden y se adaptan a tu flujo de trabajo único.",
  },
  {
    icon: Zap,
    title: "Automatización Total",
    description:
      "Automatiza tareas repetitivas y libera tiempo para lo que realmente importa.",
  },
  {
    icon: Shield,
    title: "Seguridad Enterprise",
    description:
      "Encriptación de grado militar y cumplimiento SOC 2 Type II certificado.",
  },
  {
    icon: BarChart3,
    title: "Analytics en Tiempo Real",
    description:
      "Dashboards intuitivos con métricas accionables para tomar mejores decisiones.",
  },
  {
    icon: Users,
    title: "Colaboración Sin Límites",
    description:
      "Trabaja en equipo de forma fluida con espacios compartidos e integraciones.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Infraestructura global con 99.99% de uptime garantizado.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "NexusAI transformó completamente nuestra forma de trabajar. La productividad del equipo aumentó un 300% en solo 3 meses.",
    author: "María González",
    role: "CEO",
    company: "TechStart",
    rating: 5,
  },
  {
    quote:
      "La mejor inversión que hemos hecho. El ROI fue visible desde la primera semana de implementación.",
    author: "Carlos Ruiz",
    role: "Director de Operaciones",
    company: "Innovate Corp",
    rating: 5,
  },
  {
    quote:
      "Increíble cómo la IA entiende nuestros procesos y sugiere mejoras constantemente.",
    author: "Ana Martínez",
    role: "Product Manager",
    company: "Digital Solutions",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/mes",
    description: "Perfecto para emprendedores y pequeños equipos.",
    features: [
      "Hasta 5 usuarios",
      "10GB almacenamiento",
      "Automatizaciones básicas",
      "Soporte por email",
      "Integraciones limitadas",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mes",
    description: "Ideal para equipos en crecimiento.",
    features: [
      "Hasta 25 usuarios",
      "100GB almacenamiento",
      "Automatizaciones avanzadas",
      "Soporte prioritario 24/7",
      "Todas las integraciones",
      "Analytics avanzados",
      "API access",
    ],
    cta: "Comenzar Prueba",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes organizaciones.",
    features: [
      "Usuarios ilimitados",
      "Almacenamiento ilimitado",
      "IA personalizada",
      "Gerente de cuenta dedicado",
      "SLA garantizado",
      "Deployment on-premise",
      "Seguridad enterprise",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Términos", href: "/terms" },
  { label: "Privacidad", href: "/privacy" },
  { label: "Soporte", href: "/support" },
];

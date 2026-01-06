import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { MapPin, Wifi, Users, CreditCard, Globe, Calendar } from "lucide-react";

export const COMPANY = {
  name: "Nomad Atlas",
  tagline: "Vive sin fronteras",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Destinos", href: "#features" },
  { label: "Comunidad", href: "#testimonials" },
  { label: "Planes", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: "Destinos Curados",
    description:
      "500+ ciudades con info de visas, costo de vida, coworkings y comunidad.",
  },
  {
    icon: Wifi,
    title: "Internet Score",
    description:
      "Rating de conectividad verificado por la comunidad en cada ubicación.",
  },
  {
    icon: Users,
    title: "Comunidad Global",
    description:
      "Conecta con otros nómadas, meetups locales y grupos por intereses.",
  },
  {
    icon: CreditCard,
    title: "Comparador de Costos",
    description:
      "Calcula tu presupuesto mensual en cualquier ciudad del mundo.",
  },
  {
    icon: Globe,
    title: "Visa Navigator",
    description:
      "Guías actualizadas de visas, nómada digital y permisos de trabajo.",
  },
  {
    icon: Calendar,
    title: "Trip Planner",
    description:
      "Planifica tu ruta con alojamiento, vuelos y espacios de trabajo.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nomad Atlas me ayudó a encontrar mi base perfecta en Lisboa. La comunidad es increíble.",
    author: "María González",
    role: "Diseñadora UX • 3 años nómada",
    rating: 5,
  },
  {
    quote:
      "El Visa Navigator me ahorró semanas de investigación. Ahora vivo legalmente en Tailandia.",
    author: "James Wilson",
    role: "Desarrollador • 5 años nómada",
    rating: 5,
  },
  {
    quote:
      "Los meetups de la app me conectaron con mis mejores amigos y socios de negocio.",
    author: "Sofia Chen",
    role: "Content Creator • 2 años nómada",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Explorer",
    price: "$0",
    period: "/mes",
    description: "Descubre el mundo nómada.",
    features: [
      "Acceso a 100 destinos",
      "Comunidad básica",
      "Comparador de costos",
      "Newsletter semanal",
    ],
    cta: "Empezar Gratis",
  },
  {
    name: "Nomad",
    price: "$12",
    period: "/mes",
    description: "Para nómadas activos.",
    features: [
      "Todos los destinos",
      "Visa Navigator completo",
      "Trip Planner",
      "Comunidad premium",
      "Descuentos partners",
      "Soporte prioritario",
    ],
    cta: "Ser Nómada",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mes",
    description: "Para equipos remotos.",
    features: [
      "Todo de Nomad",
      "Hasta 15 usuarios",
      "Team trips planning",
      "Dashboard de equipo",
      "Retiros corporativos",
      "Account manager",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Destinos", href: "/destinations" },
  { label: "Soporte", href: "/support" },
];

import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Heart, Activity, Apple, Moon, Dumbbell, Trophy } from "lucide-react";

export const COMPANY = {
  name: "Vitality",
  tagline: "Transforma tu bienestar",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Beneficios", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Planes", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Activity,
    title: "Entrenamientos Personalizados",
    description:
      "Rutinas adaptadas a tu nivel, objetivos y tiempo disponible con IA.",
  },
  {
    icon: Apple,
    title: "Nutrición Inteligente",
    description:
      "Planes de alimentación personalizados con recetas fáciles y deliciosas.",
  },
  {
    icon: Moon,
    title: "Sueño y Recuperación",
    description:
      "Monitoreo del sueño y técnicas de recuperación para maximizar resultados.",
  },
  {
    icon: Heart,
    title: "Salud Cardiovascular",
    description:
      "Seguimiento de frecuencia cardíaca y métricas de salud en tiempo real.",
  },
  {
    icon: Dumbbell,
    title: "+500 Ejercicios",
    description: "Biblioteca completa con videos HD y guías de forma correcta.",
  },
  {
    icon: Trophy,
    title: "Desafíos y Comunidad",
    description: "Compite con amigos, gana badges y mantén la motivación.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Perdí 15kg en 4 meses siguiendo los planes de Vitality. ¡La mejor decisión de mi vida!",
    author: "Laura Sánchez",
    role: "Usuaria desde 2023",
    rating: 5,
  },
  {
    quote:
      "Los entrenamientos de 20 minutos son perfectos para mi agenda ocupada.",
    author: "Miguel Torres",
    role: "Empresario",
    rating: 5,
  },
  {
    quote: "El tracking de sueño cambió completamente mi calidad de vida.",
    author: "Carmen López",
    role: "Médica",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/mes",
    description: "Para empezar tu viaje fitness.",
    features: [
      "Entrenamientos básicos",
      "Tracking de actividad",
      "Recetas limitadas",
      "Comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Premium",
    price: "$12",
    period: "/mes",
    description: "Experiencia completa de bienestar.",
    features: [
      "Entrenamientos ilimitados",
      "Planes de nutrición personalizados",
      "Tracking de sueño avanzado",
      "Coach IA 24/7",
      "Sin anuncios",
      "Desafíos exclusivos",
    ],
    cta: "Probar 7 días gratis",
    popular: true,
  },
  {
    name: "Family",
    price: "$24",
    period: "/mes",
    description: "Bienestar para toda la familia.",
    features: [
      "Hasta 6 cuentas",
      "Todo de Premium",
      "Planes familiares",
      "Control parental",
      "Estadísticas grupales",
    ],
    cta: "Comenzar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Términos", href: "/terms" },
  { label: "Privacidad", href: "/privacy" },
  { label: "Contacto", href: "/contact" },
];

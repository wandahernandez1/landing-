import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { BookOpen, Brain, Users, Trophy, Clock, Sparkles } from "lucide-react";

export const COMPANY = {
  name: "Lumina Learn",
  tagline: "Aprende sin límites",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Cursos", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: "Aprendizaje Adaptativo",
    description:
      "La IA ajusta el contenido a tu ritmo y estilo de aprendizaje.",
  },
  {
    icon: BookOpen,
    title: "+10,000 Cursos",
    description:
      "Desde programación hasta diseño, marketing y ciencia de datos.",
  },
  {
    icon: Users,
    title: "Mentores Expertos",
    description: "Aprende de profesionales de Google, Meta, Amazon y más.",
  },
  {
    icon: Trophy,
    title: "Certificaciones",
    description: "Obtén certificados reconocidos por empresas líderes.",
  },
  {
    icon: Clock,
    title: "Aprende a tu Ritmo",
    description: "Acceso 24/7 desde cualquier dispositivo.",
  },
  {
    icon: Sparkles,
    title: "Proyectos Reales",
    description: "Construye tu portafolio con proyectos prácticos.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Conseguí mi trabajo en Google después de completar el bootcamp de Data Science.",
    author: "Andrea Vega",
    role: "Data Scientist @ Google",
    rating: 5,
  },
  {
    quote:
      "Los proyectos prácticos fueron clave para destacar en mis entrevistas.",
    author: "Roberto Kim",
    role: "Frontend Dev @ Meta",
    rating: 5,
  },
  {
    quote:
      "La mejor plataforma de aprendizaje que he usado. La IA realmente funciona.",
    author: "Lucía Fernández",
    role: "Product Manager @ Spotify",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Explorer",
    price: "$0",
    period: "/mes",
    description: "Para explorar la plataforma.",
    features: [
      "Cursos gratuitos",
      "Comunidad básica",
      "Proyectos limitados",
      "App móvil",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mes",
    description: "Para aprendices serios.",
    features: [
      "Todos los cursos",
      "Certificaciones",
      "Proyectos ilimitados",
      "Mentorías grupales",
      "Comunidad Pro",
      "Descarga offline",
    ],
    cta: "Probar 7 días gratis",
    popular: true,
  },
  {
    name: "Teams",
    price: "$49",
    period: "/usuario/mes",
    description: "Para empresas.",
    features: [
      "Todo de Pro",
      "Admin dashboard",
      "Reportes de progreso",
      "Contenido personalizado",
      "Soporte dedicado",
      "SSO/SAML",
    ],
    cta: "Contactar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Carreras", href: "/careers" },
  { label: "Ayuda", href: "/help" },
];

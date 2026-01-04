import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Gem, Shirt, Package, Clock, Shield, Sparkles } from "lucide-react";

export const COMPANY = {
  name: "Atelier Noir",
  tagline: "Luxury Redefined",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Colecciones", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Membresía", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Gem,
    title: "Piezas Únicas",
    description:
      "Cada artículo es seleccionado por expertos. Ediciones limitadas de las mejores maisons.",
  },
  {
    icon: Shirt,
    title: "Curación Experta",
    description:
      "Personal shoppers dedicados que entienden tu estilo y preferencias.",
  },
  {
    icon: Package,
    title: "Entrega White Glove",
    description:
      "Empaque de lujo y entrega personal con guantes blancos en tu domicilio.",
  },
  {
    icon: Clock,
    title: "Acceso Anticipado",
    description:
      "Sé el primero en acceder a colecciones exclusivas antes del público.",
  },
  {
    icon: Shield,
    title: "Autenticidad Garantizada",
    description:
      "Cada pieza verificada por expertos con certificado de autenticidad.",
  },
  {
    icon: Sparkles,
    title: "Eventos Privados",
    description:
      "Invitaciones a showrooms privados y eventos exclusivos de moda.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Atelier Noir transformó mi manera de comprar moda. Cada pieza es una inversión en estilo.",
    author: "Victoria Santander",
    role: "CEO • Grupo Empresarial",
    rating: 5,
  },
  {
    quote:
      "La experiencia de unboxing es tan lujosa como las piezas. Atención al detalle impecable.",
    author: "Alejandro Reyes",
    role: "Director Creativo",
    rating: 5,
  },
  {
    quote:
      "Mi personal shopper entiende exactamente lo que busco. Es como tener un estilista privado.",
    author: "Isabella Montenegro",
    role: "Empresaria",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Curator",
    price: "$299",
    period: "/mes",
    description: "Acceso a la experiencia Atelier.",
    features: [
      "Catálogo curado mensual",
      "Personal shopper digital",
      "Envío priority",
      "Devoluciones gratuitas",
      "Acceso a drops limitados",
    ],
    cta: "Comenzar",
  },
  {
    name: "Connoisseur",
    price: "$899",
    period: "/mes",
    description: "Para el verdadero conocedor.",
    features: [
      "Todo de Curator",
      "Personal shopper dedicado",
      "White glove delivery",
      "Acceso anticipado 48h",
      "Eventos exclusivos",
      "Alteraciones incluidas",
    ],
    cta: "Aplicar",
    popular: true,
  },
  {
    name: "Maison",
    price: "Invitation",
    period: "only",
    description: "La experiencia definitiva.",
    features: [
      "Todo de Connoisseur",
      "Piezas únicas reservadas",
      "Viajes a Fashion Weeks",
      "Acceso a subastas privadas",
      "Servicio de archivo personal",
      "Concierge 24/7",
    ],
    cta: "Solicitar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Maisons", href: "/brands" },
  { label: "Journal", href: "/journal" },
  { label: "Contacto", href: "/contact" },
];

import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import {
  CreditCard,
  Wallet,
  TrendingUp,
  Shield,
  Globe,
  Zap,
} from "lucide-react";

export const COMPANY = {
  name: "Helix Bank",
  tagline: "Banca digital sin límites",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Productos", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Planes", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: CreditCard,
    title: "Tarjetas Sin Comisiones",
    description:
      "Tarjetas virtuales y físicas sin costo de emisión ni mantenimiento.",
  },
  {
    icon: Wallet,
    title: "Multi-divisa",
    description: "Opera en 50+ monedas con tipos de cambio interbancarios.",
  },
  {
    icon: TrendingUp,
    title: "Inversiones Integradas",
    description: "Accede a stocks, ETFs y crypto desde la misma app.",
  },
  {
    icon: Shield,
    title: "Seguridad Bancaria",
    description: "Encriptación end-to-end y autenticación biométrica.",
  },
  {
    icon: Globe,
    title: "Transferencias Globales",
    description: "Envía dinero a cualquier país en minutos, no días.",
  },
  {
    icon: Zap,
    title: "Pagos Instantáneos",
    description: "Paga con QR, NFC o número de teléfono en segundos.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Helix Bank me ahorra €200 al año en comisiones bancarias. La app es increíble.",
    author: "David Chen",
    role: "Freelancer",
    rating: 5,
  },
  {
    quote:
      "Las transferencias internacionales son instantáneas y sin fees ocultos.",
    author: "Sofia Müller",
    role: "Digital Nomad",
    rating: 5,
  },
  {
    quote:
      "La integración de inversiones me permite manejar todo desde un solo lugar.",
    author: "Alex Rivera",
    role: "Inversor",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Standard",
    price: "€0",
    period: "/mes",
    description: "Banca digital esencial.",
    features: [
      "Cuenta en EUR",
      "Tarjeta virtual gratis",
      "5 transferencias/mes gratis",
      "Pagos contactless",
      "App móvil completa",
    ],
    cta: "Abrir Cuenta",
  },
  {
    name: "Premium",
    price: "€9.99",
    period: "/mes",
    description: "Para usuarios exigentes.",
    features: [
      "Cuentas multi-divisa",
      "Tarjeta metal premium",
      "Transferencias ilimitadas",
      "Seguros de viaje incluidos",
      "Cashback 1%",
      "Lounges aeropuerto",
      "Soporte prioritario",
    ],
    cta: "Comenzar",
    popular: true,
  },
  {
    name: "Metal",
    price: "€16.99",
    period: "/mes",
    description: "El máximo nivel.",
    features: [
      "Todo de Premium",
      "Tarjeta exclusiva metal",
      "Cashback 2%",
      "Inversiones sin comisión",
      "Concierge 24/7",
      "Seguros premium",
    ],
    cta: "Comenzar",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Legal", href: "/legal" },
  { label: "Seguridad", href: "/security" },
  { label: "Soporte", href: "/support" },
];

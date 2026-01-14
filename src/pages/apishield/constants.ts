import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Shield, Lock, Eye, AlertTriangle, Activity, Code } from "lucide-react";

export const COMPANY = {
  name: "APIShield",
  tagline: "Protege tu API",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Clientes", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Rate Limiting",
    description:
      "Protege tus endpoints de abusos. Límites configurables por IP, usuario o API key.",
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    description:
      "IA que detecta patrones maliciosos en tiempo real. Bloquea ataques antes de que lleguen.",
  },
  {
    icon: Activity,
    title: "Live Logs",
    description:
      "Monitorea cada request en tiempo real. Filtra, busca y analiza tu tráfico.",
  },
  {
    icon: Lock,
    title: "Authentication",
    description:
      "JWT validation, API keys, OAuth. Todo integrado en un solo lugar.",
  },
  {
    icon: Code,
    title: "SDK Ready",
    description:
      "SDKs para Node, Python, Go, Ruby. Integra en minutos, no en días.",
  },
  {
    icon: Eye,
    title: "Visibility",
    description:
      "Dashboard completo con métricas de seguridad, latencia y uso de tu API.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "APIShield bloqueó un ataque DDoS antes de que siquiera nos diéramos cuenta. Invaluable.",
    author: "Michael Torres",
    role: "CTO @ Plaid",
    rating: 5,
  },
  {
    quote:
      "La visibilidad que tenemos ahora de nuestro tráfico API es increíble. Deberíamos haber migrado antes.",
    author: "Jennifer Wu",
    role: "Security Lead @ Twilio",
    rating: 5,
  },
  {
    quote:
      "Implementación en 30 minutos. Ahora dormimos tranquilos sabiendo que nuestra API está protegida.",
    author: "Robert Chen",
    role: "VP Engineering @ Stripe",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    period: "/siempre",
    description: "Para proyectos en desarrollo.",
    features: [
      "100K peticiones/mes",
      "Rate limiting básico",
      "7 días de logs",
      "1 API",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mes",
    description: "Para APIs en producción.",
    features: [
      "10M peticiones/mes",
      "Detección de amenazas",
      "90 días de logs",
      "APIs ilimitadas",
      "Alertas en Slack",
      "Soporte prioritario",
    ],
    cta: "Proteger Ahora",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizaciones grandes.",
    features: [
      "Peticiones ilimitadas",
      "Reglas personalizadas",
      "Logs ilimitados",
      "SSO / SAML",
      "Soporte dedicado",
      "SLA 99.99%",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Seguridad", href: "/security" },
  { label: "Estado", href: "/status" },
];

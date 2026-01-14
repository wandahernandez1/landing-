import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Key, Mail, Shield, Fingerprint, Zap, Lock } from "lucide-react";

export const COMPANY = {
  name: "Authless",
  tagline: "Sin contraseñas. Solo autenticación.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Desarrolladores", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Mail,
    title: "Enlaces Mágicos",
    description:
      "Login sin contraseña por email. Un click. Sin fricción. Sin gestores de contraseñas.",
  },
  {
    icon: Key,
    title: "Proveedores OAuth",
    description:
      "Google, GitHub, Apple, Microsoft. Configuración en minutos. UI incluida.",
  },
  {
    icon: Fingerprint,
    title: "WebAuthn / Passkeys",
    description:
      "Autenticación biométrica del futuro. Face ID, Touch ID, Windows Hello.",
  },
  {
    icon: Shield,
    title: "SSO Enterprise",
    description:
      "SAML y OIDC para conectar con Okta, Azure AD, OneLogin. Sin complicaciones.",
  },
  {
    icon: Lock,
    title: "Gestión de Sesiones",
    description:
      "Tokens seguros, refresh automático, seguimiento de dispositivos. Seguridad enterprise.",
  },
  {
    icon: Zap,
    title: "Listo para Edge",
    description:
      "Verificación en edge. Latencia < 50ms global. Soporte Workers y Deno.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Integrar auth me tomaba 2 semanas. Con Authless, 20 minutos y los enlaces mágicos funcionando.",
    author: "Alex Rivera",
    role: "Founder @ IndieStartup",
    rating: 5,
  },
  {
    quote:
      "El reset de contraseña era el 40% de tickets de soporte. Ahora es 0. Los enlaces mágicos ganan.",
    author: "Sarah Kim",
    role: "CTO @ DataFlow",
    rating: 5,
  },
  {
    quote:
      "Migramos de Auth0 y ahorramos $4k/mes. La experiencia de desarrollo es 10x mejor.",
    author: "Marcus Johnson",
    role: "Lead Dev @ TechCo",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    description: "Para proyectos pequeños.",
    features: [
      "1K MAU",
      "Enlaces mágicos",
      "2 proveedores OAuth",
      "Gestión de sesiones",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mes",
    description: "Para apps en producción.",
    features: [
      "10K MAU",
      "Todos los proveedores OAuth",
      "WebAuthn / Passkeys",
      "Dominios personalizados",
      "Miembros de equipo",
      "Soporte prioritario",
    ],
    cta: "Obtener Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para empresas.",
    features: [
      "MAU ilimitados",
      "SSO SAML / OIDC",
      "Marca personalizada",
      "Logs de auditoría",
      "SLA 99.99%",
      "Soporte dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Estado", href: "/status" },
  { label: "Seguridad", href: "/security" },
];

import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Palette, Code, RefreshCw, Layers, GitBranch, Zap } from "lucide-react";

export const COMPANY = {
  name: "DesignTokens Pro",
  tagline: "Un sistema. En todas partes.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Equipos", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

export const FEATURES: Feature[] = [
  {
    icon: Palette,
    title: "Sincronización Figma",
    description:
      "Sincroniza tokens desde Figma automáticamente. Variables → código en segundos.",
  },
  {
    icon: Code,
    title: "Exportar a Tailwind",
    description:
      "Genera tu tailwind.config.js automáticamente. CSS variables incluidas.",
  },
  {
    icon: RefreshCw,
    title: "Vista Previa en Vivo",
    description:
      "Ve los cambios en tiempo real. Edita tokens y observa tu app actualizarse.",
  },
  {
    icon: GitBranch,
    title: "Versionado",
    description:
      "Control de versiones para tus tokens. Historial, branches y rollbacks.",
  },
  {
    icon: Layers,
    title: "Multi-Marca",
    description:
      "Un sistema, múltiples marcas. Theming dinámico sin duplicar código.",
  },
  {
    icon: Zap,
    title: "Listo para CI/CD",
    description: "Integra en tu pipeline. Valida tokens antes de mergear PRs.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Por fin diseño y desarrollo hablan el mismo idioma. Cero fricción en handoff.",
    author: "Sarah Chen",
    role: "Design Lead @ Figma",
    rating: 5,
  },
  {
    quote: "Redujimos 80% del tiempo de implementación de cambios de diseño.",
    author: "Alex Kim",
    role: "Frontend Lead @ Airbnb",
    rating: 5,
  },
  {
    quote:
      "Multi-marca era una pesadilla. Ahora es un toggle. Un cambio total.",
    author: "Maria Lopez",
    role: "Design Systems @ Spotify",
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Gratis",
    price: "$0",
    period: "/siempre",
    description: "Para proyectos pequeños.",
    features: [
      "1 proyecto",
      "Figma sync básico",
      "Exportar a Tailwind",
      "Soporte comunidad",
    ],
    cta: "Comenzar Gratis",
  },
  {
    name: "Equipo",
    price: "$49",
    period: "/mes",
    description: "Para equipos de diseño.",
    features: [
      "Proyectos ilimitados",
      "Multi-marca",
      "Versionado",
      "Integración CI/CD",
      "Soporte prioritario",
    ],
    cta: "Comenzar Equipo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Para organizaciones.",
    features: [
      "Todo de Equipo",
      "SSO / SAML",
      "Logs de auditoría",
      "SLA 99.99%",
      "Soporte dedicado",
    ],
    cta: "Contactar Ventas",
  },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Documentación", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Comunidad", href: "/community" },
];

import type { NavLink } from "@/shared/types";

export const COMPANY = {
  name: "Atelier Noir",
  tagline: "Lujo curado. Artesanía consciente.",
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: "Colecciones", href: "#collections" },
  { label: "Selección", href: "#edit" },
  { label: "Artesanos", href: "#artisans" },
  { label: "Valores", href: "#values" },
];

export const COLLECTIONS = [
  {
    id: "home",
    title: "Hogar",
    subtitle: "Espacios reinventados",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: "wardrobe",
    title: "Vestuario",
    subtitle: "Esenciales atemporales",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
  },
  {
    id: "accessories",
    title: "Accesorios",
    subtitle: "Detalles refinados",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
  },
  {
    id: "gifts",
    title: "Regalos",
    subtitle: "Gestos con intención",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
  },
];

export const ARTISAN_STORIES = [
  {
    id: "ceramics",
    title: "El Arte de la Paciencia",
    subtitle: "Cerámicas creadas en semanas, no en horas",
    description:
      "En un tranquilo estudio en Kioto, el maestro ceramista Yuki Tanaka moldea cada pieza a mano, honrando tradiciones transmitidas a través de cinco generaciones. Cada imperfección cuenta una historia.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
  },
  {
    id: "textiles",
    title: "Hilos de Herencia",
    subtitle: "Textiles tejidos a mano en telares ancestrales",
    description:
      "Nuestros linos provienen de un taller familiar en Portugal, donde el ritmo de los telares de madera permanece sin cambios desde hace más de un siglo. Cada hilo lleva el peso del tiempo.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export const VALUES = [
  {
    title: "Materiales",
    description:
      "Cada material es rastreado hasta su origen. Colaboramos solo con proveedores que comparten nuestro compromiso con la calidad y la responsabilidad ambiental.",
    icon: "leaf",
  },
  {
    title: "Abastecimiento",
    description:
      "Las relaciones directas con artesanos aseguran una compensación justa y preservan la artesanía tradicional para las futuras generaciones.",
    icon: "globe",
  },
  {
    title: "Reparación de por Vida",
    description:
      "Respaldamos cada pieza. Nuestro programa de reparación de por vida significa que tu compra está diseñada para durar, no para ser reemplazada.",
    icon: "refresh",
  },
  {
    title: "Empaque",
    description:
      "Empaque libre de plástico y compostable que protege tu compra mientras respeta nuestro planeta. Cada unboxing es una experiencia.",
    icon: "package",
  },
];

export const PRESS_LOGOS = [
  { name: "Vogue", logo: "VOGUE" },
  { name: "Architectural Digest", logo: "AD" },
  { name: "Monocle", logo: "MONOCLE" },
  { name: "Wallpaper", logo: "WALLPAPER*" },
];

export const REVIEWS = [
  {
    quote:
      "La atención al detalle es extraordinaria. Cada pieza se siente como si hubiera sido hecha solo para mí.",
    author: "Sophie M.",
    location: "París",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  },
  {
    quote: "Por fin, una marca que entiende la diferencia entre lujo y exceso.",
    author: "James K.",
    location: "Londres",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  },
  {
    quote:
      "La artesanía habla por sí misma. Estas son piezas que pasaré a mis hijos.",
    author: "Elena R.",
    location: "Milán",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  },
];

export const CERTIFICATIONS = [
  "Certificado B Corp",
  "Carbono Neutral",
  "Comercio Justo",
];

export const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
  "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&q=80",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80",
];

export const FOOTER_LINKS = {
  shop: [
    { label: "Hogar", href: "#" },
    { label: "Vestuario", href: "#" },
    { label: "Accesorios", href: "#" },
    { label: "Regalos", href: "#" },
  ],
  about: [
    { label: "Nuestra Historia", href: "#" },
    { label: "Artesanos", href: "#" },
    { label: "Sostenibilidad", href: "#" },
    { label: "Prensa", href: "#" },
  ],
  support: [
    { label: "Contacto", href: "#" },
    { label: "Envíos", href: "#" },
    { label: "Devoluciones", href: "#" },
    { label: "Guía de Cuidado", href: "#" },
  ],
};

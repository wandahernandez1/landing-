# 📋 GUÍA DE ESTRUCTURA MODULAR - LANDING PAGES

> Esta guía define la estructura estándar para crear nuevas landing pages en el proyecto `landing-collection`. Sigue este patrón para mantener consistencia y facilitar la implementación.

---

## 📁 ESTRUCTURA DE ARCHIVOS

Cada landing page se organiza en una carpeta dentro de `src/pages/`:

```
src/pages/{nombre-landing}/
├── index.tsx              # Componente principal (Page)
├── constants.ts           # Datos, configuración y contenido
├── styles.css             # Design System único de la landing
├── Navbar.tsx             # Navegación específica
├── HeroSection.tsx        # Sección hero/principal
├── FeaturesSection.tsx    # Características/beneficios
├── TestimonialsSection.tsx # Prueba social/reviews
├── PricingSection.tsx     # Planes y precios
├── CtaSection.tsx         # Llamada a la acción final
├── Footer.tsx             # Pie de página
└── [Secciones Extra].tsx  # Secciones personalizadas (opcional)
```

---

## 🧩 COMPONENTES OBLIGATORIOS

### 1️⃣ `index.tsx` - Componente Principal

```tsx
import "./styles.css";
import { useLenis } from "@/shared/hooks/useLenis";
import { BackToHome } from "@/shared/components";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PricingSection } from "./PricingSection";
import { CtaSection } from "./CtaSection";

export function NombreLandingPage() {
  useLenis(); // Smooth scroll

  return (
    <div className="nombre-landing min-h-screen">
      {/* Botón volver al home */}
      <BackToHome accentColor="hover:bg-primary-500/20" />

      {/* Skip Link - Accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-xl focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
```

**Puntos clave:**

- ✅ Importar `styles.css` al inicio
- ✅ Usar `useLenis()` para smooth scroll
- ✅ Incluir `BackToHome` para navegación
- ✅ Skip link para accesibilidad (WCAG 2.1)
- ✅ Wrapper con clase única para scope de estilos

---

### 2️⃣ `constants.ts` - Datos y Configuración

```typescript
import type {
  Feature,
  Testimonial,
  PricingPlan,
  NavLink,
} from "@/shared/types";
import { Icon1, Icon2, Icon3 } from "lucide-react";

// Información de la empresa/producto
export const COMPANY = {
  name: "Nombre Producto",
  tagline: "Tu tagline aquí",
  year: new Date().getFullYear(),
};

// Links de navegación
export const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Precios", href: "#pricing" },
];

// Features/Características
export const FEATURES: Feature[] = [
  {
    icon: Icon1,
    title: "Título Feature 1",
    description: "Descripción breve de la característica.",
  },
  // ... más features
];

// Testimonios
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Texto del testimonio aquí.",
    author: "Nombre Apellido",
    role: "Cargo",
    company: "Empresa",
    rating: 5,
  },
  // ... más testimonios
];

// Planes de precios
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/mes",
    description: "Descripción del plan.",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    cta: "Comenzar Gratis",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mes",
    description: "Para equipos en crecimiento.",
    features: ["Todo de Starter", "Feature 4", "Feature 5"],
    cta: "Comenzar Prueba",
    popular: true, // Marca el plan destacado
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para grandes organizaciones.",
    features: ["Todo de Pro", "Feature 6", "Feature 7"],
    cta: "Contactar Ventas",
  },
];

// Links del footer
export const FOOTER_LINKS: NavLink[] = [
  { label: "Términos", href: "/terms" },
  { label: "Privacidad", href: "/privacy" },
  { label: "Soporte", href: "/support" },
];
```

---

### 3️⃣ `styles.css` - Design System de la Landing

```css
@theme {
  /* Paleta de colores primarios */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-900: #1e3a8a;

  /* Neutrales */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  /* Tipografía */
  --font-sans: "Inter", -apple-system, sans-serif;
  --font-display: "Inter", -apple-system, sans-serif;

  /* Transiciones */
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Wrapper único - SCOPE OBLIGATORIO */
.nombre-landing {
  background-color: var(--color-neutral-950);
  color: var(--color-neutral-50);
  font-family: var(--font-sans);
}

/* Tipografía */
.nombre-landing .display-large {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

/* Glass effect para Navbar */
.nombre-landing .glass {
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
}

/* Botones */
.nombre-landing .btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 0.875rem 1.5rem;
  background: var(--color-primary-600);
  color: white;
  font-weight: 500;
  border-radius: 0.75rem;
  transition: all 0.3s var(--ease-smooth);
}

.nombre-landing .btn-primary:hover {
  background: var(--color-primary-700);
  transform: translateY(-2px);
}

/* Cards */
.nombre-landing .card {
  background: var(--color-neutral-900);
  border: 1px solid var(--color-neutral-800);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s var(--ease-smooth);
}

.nombre-landing .card:hover {
  border-color: var(--color-neutral-700);
  transform: translateY(-4px);
}

/* Container */
.nombre-landing .container-custom {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* Section padding */
.nombre-landing .section-padding {
  padding: 6rem 0;
}

@media (min-width: 768px) {
  .nombre-landing .section-padding {
    padding: 8rem 0;
  }
}
```

---

### 4️⃣ Secciones - Patrón Estándar

#### `HeroSection.tsx`

```tsx
import { useRef } from "react";
import { useHeroAnimation } from "@/shared/hooks";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  useHeroAnimation(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center"
      aria-labelledby="hero-title"
    >
      <div className="container-custom">
        {/* Badge */}
        <span data-hero-badge className="badge">
          🚀 Nuevo
        </span>

        {/* Título */}
        <h1 id="hero-title" data-hero-title className="display-large max-w-4xl">
          Título Principal de la Landing
        </h1>

        {/* Descripción */}
        <p data-hero-description className="body-large max-w-2xl mt-6">
          Descripción breve y convincente del producto o servicio.
        </p>

        {/* CTAs */}
        <div data-hero-cta className="flex gap-4 mt-8">
          <button className="btn-primary">
            Comenzar Gratis
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary">Ver Demo</button>
        </div>
      </div>
    </section>
  );
}
```

#### `FeaturesSection.tsx`

```tsx
import { useRef } from "react";
import { useStaggerReveal } from "@/shared/hooks";
import { FEATURES } from "./constants";

export function FeaturesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef, "article", { stagger: 0.1 });

  return (
    <section
      id="features"
      className="section-padding"
      aria-labelledby="features-title"
    >
      <div className="container-custom">
        {/* Header */}
        <header className="text-center mb-16">
          <span className="label mb-4 block">Características</span>
          <h2 id="features-title" className="display-medium">
            Todo lo que necesitas
          </h2>
        </header>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <article key={idx} className="card">
              <feature.icon className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

#### `TestimonialsSection.tsx`

```tsx
import { useRef } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "./constants";
import { useStaggerReveal } from "@/shared/hooks";

export function TestimonialsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef, "article", { stagger: 0.15 });

  return (
    <section
      id="testimonials"
      className="section-padding surface-elevated"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <header className="text-center mb-16">
          <span className="label mb-4 block">Testimonios</span>
          <h2 id="testimonials-title" className="display-medium">
            Lo que dicen nuestros clientes
          </h2>
        </header>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <article key={idx} className="card">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-neutral-400">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

#### `PricingSection.tsx`

```tsx
import { useRef } from "react";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "./constants";
import { useStaggerReveal } from "@/shared/hooks";

export function PricingSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef, "article", { stagger: 0.1 });

  return (
    <section
      id="pricing"
      className="section-padding"
      aria-labelledby="pricing-title"
    >
      <div className="container-custom">
        <header className="text-center mb-16">
          <span className="label mb-4 block">Precios</span>
          <h2 id="pricing-title" className="display-medium">
            Elige tu plan
          </h2>
        </header>

        <div
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {PRICING_PLANS.map((plan, idx) => (
            <article
              key={idx}
              className={`card ${
                plan.popular ? "ring-2 ring-primary-500" : ""
              }`}
            >
              {plan.popular && (
                <span className="badge badge-primary mb-4">Más Popular</span>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-neutral-400">{plan.period}</span>
                )}
              </div>

              <p className="text-neutral-400 mt-2">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

#### `CtaSection.tsx`

```tsx
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="section-padding" aria-labelledby="cta-title">
      <div className="container-custom text-center">
        <h2 id="cta-title" className="display-medium max-w-3xl mx-auto">
          ¿Listo para comenzar?
        </h2>

        <p className="body-large max-w-xl mx-auto mt-6">
          Únete a miles de usuarios que ya transformaron su forma de trabajar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <button className="btn-primary">
            Comenzar Gratis
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary">Contactar Ventas</button>
        </div>
      </div>
    </section>
  );
}
```

---

## 🎨 TIPOS COMPARTIDOS

Usar los tipos de `@/shared/types`:

```typescript
// Feature
interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

// Testimonial
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number;
}

// PricingPlan
interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

// NavLink
interface NavLink {
  label: string;
  href: string;
}
```

---

## 🪝 HOOKS DISPONIBLES

### `useLenis()`

Smooth scroll para toda la página.

```tsx
import { useLenis } from "@/shared/hooks/useLenis";

function Page() {
  useLenis();
  return <div>...</div>;
}
```

### `useHeroAnimation(containerRef)`

Animación de entrada para hero sections.

```tsx
import { useHeroAnimation } from "@/shared/hooks";

function HeroSection() {
  const ref = useRef(null);
  useHeroAnimation(ref);

  return (
    <section ref={ref}>
      <span data-hero-badge>Badge</span>
      <h1 data-hero-title>Título</h1>
      <p data-hero-description>Descripción</p>
      <div data-hero-cta>CTAs</div>
    </section>
  );
}
```

### `useStaggerReveal(containerRef, selector, options)`

Animación stagger para grids/listas.

```tsx
import { useStaggerReveal } from "@/shared/hooks";

function Section() {
  const gridRef = useRef(null);
  useStaggerReveal(gridRef, "article", { stagger: 0.1 });

  return (
    <div ref={gridRef}>
      <article>Item 1</article>
      <article>Item 2</article>
    </div>
  );
}
```

### `useSectionAnimation(ref)`

Animación fade-in para secciones.

```tsx
import { useSectionAnimation } from "@/shared/hooks";

function Section() {
  const headerRef = useRef(null);
  useSectionAnimation(headerRef);

  return <header ref={headerRef}>...</header>;
}
```

---

## 🔗 REGISTRAR NUEVA LANDING

### 1. Agregar en `App.tsx`

```tsx
import { NombreLandingPage } from "./pages/nombrelanding";

// En las rutas:
<Route path="/nombrelanding" element={<NombreLandingPage />} />;
```

### 2. Agregar imagen en `public/`

```
public/NombreLanding.avif  # Imagen de preview (idealmente 400x300)
```

### 3. Agregar en catálogo (si existe)

```typescript
// src/shared/constants/landings.ts
{
  id: "nombrelanding",
  name: "Nombre Landing",
  tagline: "Tagline corto",
  description: "Descripción más detallada",
  industry: "SaaS / E-commerce / etc",
  theme: "dark / light",
  path: "/nombrelanding",
  image: "/NombreLanding.avif",
}
```

---

## ✅ CHECKLIST NUEVA LANDING

```
□ Crear carpeta src/pages/{nombre}/
□ Crear index.tsx con estructura base
□ Crear constants.ts con todos los datos
□ Crear styles.css con Design System
□ Crear Navbar.tsx
□ Crear HeroSection.tsx
□ Crear FeaturesSection.tsx
□ Crear TestimonialsSection.tsx
□ Crear PricingSection.tsx
□ Crear CtaSection.tsx
□ Crear Footer.tsx
□ Agregar imagen en public/
□ Registrar ruta en App.tsx
□ Verificar accesibilidad (skip link, aria-labels)
□ Ejecutar npm run build ✓
```

---

## 🎯 PRINCIPIOS DE DISEÑO

1. **Mobile-first**: Diseñar primero para móvil
2. **Accesibilidad**: WCAG 2.1 AA mínimo
3. **Performance**: Lazy loading, optimización de imágenes
4. **Conversión**: CTAs claros y jerarquizados
5. **SEO**: Headings semánticos, aria-labels

---

## 🚀 COMANDO RÁPIDO: SCAFFOLD

Para crear una nueva landing rápidamente, copia una existente:

```bash
cp -r src/pages/nexusai src/pages/nuevalanding
```

Luego:

1. Renombrar `NexusAIPage` → `NuevaLandingPage`
2. Cambiar clase `.nexusai` → `.nuevalanding`
3. Actualizar `constants.ts` con nuevos datos
4. Personalizar `styles.css` con nueva paleta
5. Registrar en `App.tsx`

---

## 🎭 ANIMACIONES E INTERACCIONES AVANZADAS

Esta sección documenta todos los hooks de animación disponibles para crear landing pages con movimiento e interactividad profesional.

### 📌 Principios de Animación

1. **Respeta `prefers-reduced-motion`**: Todas las animaciones se deshabilitan automáticamente
2. **Mobile-first Performance**: Los efectos pesados se desactivan en dispositivos de bajo rendimiento
3. **GSAP + ScrollTrigger**: Stack de animación profesional
4. **Data attributes**: Usar `data-*` para marcar elementos animables

---

### 🪝 HOOKS DE ANIMACIÓN DISPONIBLES

#### 1. `useHeroAnimation(containerRef)` - Animación de Hero

Anima la entrada del hero con secuencia profesional.

```tsx
import { useRef } from "react";
import { useHeroAnimation } from "@/shared/hooks";

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroAnimation(sectionRef);

  return (
    <section ref={sectionRef}>
      {/* Elementos con data-attributes */}
      <span data-hero-badge>Badge</span>
      <h1 data-hero-title>Título</h1>
      <p data-hero-description>Descripción</p>
      <div data-hero-cta>
        <button>CTA 1</button>
        <button>CTA 2</button>
      </div>
      <div data-hero-stats>Stats</div>
      <div data-hero-visual>Visual/Imagen</div>
      <div data-hero-trust>Trust badges</div>
    </section>
  );
}
```

**Data attributes disponibles:**
| Attribute | Animación |
|-----------|-----------|
| `data-hero-badge` | Fade + Scale desde arriba |
| `data-hero-title` | Fade + Y staggered |
| `data-hero-description` | Fade + Y suave |
| `data-hero-cta` | Fade + Y staggered (botones) |
| `data-hero-stats` | Fade + Y staggered |
| `data-hero-visual` | Fade + Y + Scale |
| `data-hero-trust` | Fade + Scale staggered |

---

#### 2. `useFloatingAnimation(containerRef, selector, config?)` - Elementos Flotantes

Crea movimiento flotante suave en elementos decorativos.

```tsx
import { useFloatingAnimation } from "@/shared/hooks";

function Section() {
  const sectionRef = useRef<HTMLElement>(null);

  // Selecciona elementos por clase o data-attribute
  useFloatingAnimation(sectionRef, ".floating-icon");
  // O usar data-attributes
  useFloatingAnimation(sectionRef, "[data-float]");

  return (
    <section ref={sectionRef}>
      {/* Iconos decorativos que flotan */}
      <div className="floating-icon absolute top-10 left-10">🚀</div>
      <div className="floating-icon absolute top-20 right-10">⭐</div>

      {/* O con data-attributes */}
      <div data-float className="absolute bottom-10 left-20">
        💡
      </div>
    </section>
  );
}
```

**Configuración:**

```tsx
useFloatingAnimation(ref, selector, {
  amplitude: 10, // Distancia de movimiento vertical (px)
  duration: 4, // Duración del ciclo (segundos)
  distance: 10, // Alias de amplitude
});
```

---

#### 3. `useOrbAnimation(containerRef, selector?, config?)` - Orbes Animados

Crea orbes/círculos de fondo con movimiento orgánico.

```tsx
import { useOrbAnimation } from "@/shared/hooks";

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useOrbAnimation(sectionRef, ".orb", { amplitude: 30, duration: 8 });
  // O múltiples orbes con diferentes velocidades
  useOrbAnimation(sectionRef, "[data-orb-1]", { duration: 8 });
  useOrbAnimation(sectionRef, "[data-orb-2]", { duration: 10 });

  return (
    <section ref={sectionRef}>
      {/* Orbes decorativos de fondo */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      {/* O con data-attributes */}
      <div
        data-orb-1
        className="absolute w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
      />
      <div
        data-orb-2
        className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
      />
    </section>
  );
}
```

**CSS para orbes:**

```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.orb-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
  top: -10%;
  right: -10%;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.25), transparent);
  bottom: 10%;
  left: -5%;
}
```

---

#### 4. `useMagneticButton(containerRef, selector?)` - Botones Magnéticos

Efecto de seguimiento del cursor en botones.

```tsx
import { useMagneticButton } from "@/shared/hooks";

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useMagneticButton(sectionRef); // Default: '[data-magnetic]'

  return (
    <section ref={sectionRef}>
      {/* Botón con efecto magnético */}
      <button data-magnetic className="btn-primary">
        <span className="relative z-10">Comenzar Gratis</span>
      </button>
    </section>
  );
}
```

⚠️ **Nota**: Se desactiva automáticamente en dispositivos táctiles y móviles.

---

#### 5. `useStaggerReveal(containerRef, itemSelector, config?)` - Reveal Escalonado

Revela elementos de una lista/grid con efecto stagger.

```tsx
import { useStaggerReveal } from "@/shared/hooks";

function FeaturesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useStaggerReveal(gridRef, "article", {
    stagger: 0.1, // Delay entre cada elemento
    fromY: 50, // Distancia inicial Y
    fromX: 0, // Distancia inicial X (opcional)
    start: "top 75%", // Cuándo iniciar
    duration: 0.6,
  });

  return (
    <div ref={gridRef} className="grid grid-cols-3 gap-6">
      <article className="card">Feature 1</article>
      <article className="card">Feature 2</article>
      <article className="card">Feature 3</article>
    </div>
  );
}
```

---

#### 6. `useCountUp(containerRef, selector?, config?)` - Contador Animado

Anima números de 0 al valor final.

```tsx
import { useCountUp } from "@/shared/hooks";

function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  useCountUp(statsRef, "[data-count]", { duration: 2 });

  return (
    <div ref={statsRef} className="flex gap-8">
      <div>
        <span data-count data-value="10000" data-suffix="+">
          0
        </span>
        <span>Usuarios</span>
      </div>
      <div>
        <span data-count data-value="99.9" data-suffix="%">
          0
        </span>
        <span>Uptime</span>
      </div>
      <div>
        <span data-count data-prefix="$" data-value="2.5" data-suffix="M">
          0
        </span>
        <span>Ahorrados</span>
      </div>
    </div>
  );
}
```

**Data attributes:**
| Attribute | Descripción |
|-----------|-------------|
| `data-count` | Marca el elemento como contador |
| `data-value` | Valor final (también se puede usar el textContent) |
| `data-prefix` | Prefijo (ej: "$") |
| `data-suffix` | Sufijo (ej: "+", "%", "M") |

---

#### 7. `usePulseAnimation(containerRef, selector?, config?)` - Pulso Repetitivo

Efecto de pulso para elementos de atención.

```tsx
import { usePulseAnimation } from "@/shared/hooks";

function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  usePulseAnimation(sectionRef, ".pulse-element", {
    scale: 1.05,
    duration: 1.5,
    minOpacity: 0.8, // Opcional: también anima opacidad
    maxOpacity: 1,
  });

  return (
    <section ref={sectionRef}>
      <div className="pulse-element">
        <span>🔥 Oferta limitada</span>
      </div>
    </section>
  );
}
```

---

#### 8. `useRotationAnimation(containerRef, selector?, config?)` - Rotación Continua

Rotación infinita para elementos decorativos.

```tsx
import { useRotationAnimation } from "@/shared/hooks";

function Section() {
  const sectionRef = useRef<HTMLElement>(null);

  useRotationAnimation(sectionRef, ".rotating-element", {
    duration: 20, // Segundos para completar rotación
    direction: "cw", // 'cw' (clockwise) o 'ccw' (counter-clockwise)
  });

  return (
    <section ref={sectionRef}>
      <div className="rotating-element">
        <svg>...</svg> {/* Ícono o elemento decorativo */}
      </div>
    </section>
  );
}
```

---

#### 9. `useParallax(containerRef, selector, speed?)` - Efecto Parallax

Movimiento parallax en scroll.

```tsx
import { useParallax } from "@/shared/hooks";

function Section() {
  const sectionRef = useRef<HTMLElement>(null);

  // speed: 0.3 = movimiento sutil, 1 = más pronunciado
  useParallax(sectionRef, ".parallax-element", 0.3);

  return (
    <section ref={sectionRef}>
      <div className="parallax-element">
        <img src="/bg-element.png" alt="" />
      </div>
    </section>
  );
}
```

⚠️ **Nota**: Se desactiva en móviles por rendimiento.

---

#### 10. `useScrollReveal(containerRef, selector?, config?)` - Reveal en Scroll

Revela elementos individuales al hacer scroll.

```tsx
import { useScrollReveal } from "@/shared/hooks";

function Section() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal(sectionRef, "[data-reveal]", {
    start: "top 85%",
    toggleActions: "play none none reverse",
  });

  return (
    <section ref={sectionRef}>
      <div data-reveal>Este contenido aparece al scroll</div>
      <div data-reveal>Este también</div>
    </section>
  );
}
```

---

### 🎨 HOOKS ESPECÍFICOS POR SECCIÓN

#### `useSectionAnimation(sectionRef, config?)`

Animación estándar para cualquier sección con header y grid.

```tsx
useSectionAnimation(sectionRef, {
  headerSelector: ".section-header",
  gridSelector: ".section-grid",
  itemSelector: ".section-card",
});
```

#### `useFeaturesAnimation(sectionRef)`

Animación optimizada para Features sections.

#### `useTestimonialsAnimation(sectionRef)`

Animación optimizada para Testimonials sections.

#### `usePricingAnimation(sectionRef)`

Animación optimizada para Pricing sections.

#### `useCtaAnimation(sectionRef)`

Animación optimizada para CTA sections.

---

### 🎯 PATRONES DE IMPLEMENTACIÓN

#### Patrón 1: Hero con Efectos Completos

```tsx
import { useRef } from "react";
import {
  useHeroAnimation,
  useFloatingAnimation,
  useOrbAnimation,
  useMagneticButton,
} from "@/shared/hooks";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Secuencia de entrada
  useHeroAnimation(sectionRef);

  // Orbes de fondo animados
  useOrbAnimation(sectionRef, ".orb", { amplitude: 30, duration: 8 });

  // Iconos flotantes
  useFloatingAnimation(sectionRef, ".floating-icon");

  // Botones magnéticos
  useMagneticButton(sectionRef);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="floating-icon absolute top-20 left-10">🚀</div>
      <div className="floating-icon absolute top-40 right-20">⭐</div>

      {/* Content */}
      <div className="container-custom">
        <span data-hero-badge>Nuevo</span>
        <h1 data-hero-title>Título Principal</h1>
        <p data-hero-description>Descripción</p>
        <div data-hero-cta>
          <button data-magnetic className="btn-primary">
            CTA
          </button>
        </div>
      </div>
    </section>
  );
}
```

#### Patrón 2: Stats con Contadores

```tsx
import { useRef } from "react";
import { useStaggerReveal, useCountUp } from "@/shared/hooks";

export function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  useStaggerReveal(statsRef, ".stat-item", { stagger: 0.15 });
  useCountUp(statsRef, "[data-count]", { duration: 2.5 });

  return (
    <div ref={statsRef} className="grid grid-cols-4 gap-8">
      <div className="stat-item">
        <span data-count data-value="10000" data-suffix="+">
          0
        </span>
        <span>Usuarios Activos</span>
      </div>
      <div className="stat-item">
        <span data-count data-value="99.9" data-suffix="%">
          0
        </span>
        <span>Uptime</span>
      </div>
      <div className="stat-item">
        <span data-count data-prefix="$" data-value="2.5" data-suffix="M">
          0
        </span>
        <span>Ahorrados</span>
      </div>
      <div className="stat-item">
        <span data-count data-value="50" data-suffix="+">
          0
        </span>
        <span>Integraciones</span>
      </div>
    </div>
  );
}
```

#### Patrón 3: CTA con Elementos Flotantes

```tsx
import { useRef } from "react";
import {
  useCtaAnimation,
  useFloatingAnimation,
  usePulseAnimation,
} from "@/shared/hooks";

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useCtaAnimation(sectionRef);
  useFloatingAnimation(sectionRef, ".floating-icon");
  usePulseAnimation(sectionRef, ".offer-badge");

  return (
    <section ref={sectionRef} className="relative">
      {/* Floating decorations */}
      <div className="floating-icon absolute top-10 left-10">✨</div>
      <div className="floating-icon absolute bottom-10 right-10">🎯</div>

      <div className="text-center">
        <span className="offer-badge" data-cta-icon>
          🔥 Oferta limitada
        </span>

        <div data-cta-content>
          <h2>¿Listo para empezar?</h2>
          <p>Únete a miles de usuarios satisfechos</p>
        </div>

        <div data-cta-buttons>
          <button className="btn-primary">Comenzar Ahora</button>
          <button className="btn-secondary">Hablar con Ventas</button>
        </div>
      </div>
    </section>
  );
}
```

---

### ⚡ OPTIMIZACIÓN Y PERFORMANCE

1. **Reducir en móviles**: Los hooks detectan automáticamente dispositivos de bajo rendimiento
2. **`prefers-reduced-motion`**: Respetado automáticamente por todos los hooks
3. **Cleanup**: Todos los hooks limpian sus animaciones al desmontar
4. **GPU Acceleration**: GSAP usa `transform` y `opacity` para mejor rendimiento

---

### 🎨 CSS PARA EFECTOS VISUALES

#### Gradientes de Background

```css
/* Glow radial desde arriba */
.bg-glow-top {
  background: radial-gradient(
    ellipse 80% 50% at 50% -20%,
    rgba(139, 92, 246, 0.15),
    transparent 70%
  );
}

/* Grid pattern */
.grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

#### Text Gradient

```css
.text-gradient {
  background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

> 📝 **Nota**: Este documento debe mantenerse actualizado con cada nuevo patrón o componente compartido que se agregue al proyecto.

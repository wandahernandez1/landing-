# Landing Collection 🚀

> Colección premium de 25+ landing pages profesionales listas para producción, construidas con React 19, TypeScript y Tailwind CSS 4.

## 📋 Descripción

**Landing Collection** es una biblioteca de landing pages de alta conversión para productos SaaS, herramientas B2B y servicios digitales. Cada landing está diseñada siguiendo principios de diseño premium, con enfoque en performance, accesibilidad y SEO.

## 🛠️ Stack Técnico

- **React 19** + **TypeScript** (strict mode)
- **Vite 7** para builds ultrarrápidos
- **Tailwind CSS 4** con design tokens
- **GSAP** + **Lenis** para animaciones premium
- **React Router** para navegación
- **Lucide Icons** para iconografía

## 📦 Instalación

```bash
npm install
npm run dev
```

## 🎨 Landing Pages Incluidas

### 🛠️ Developer Tools (10)

| Landing                | Solución                                                                 |
| ---------------------- | ------------------------------------------------------------------------ |
| **A11yScan**           | Escáner automático de accesibilidad WCAG con integración CI/CD           |
| **APIShield**          | Protección completa de APIs con rate limiting y detección IA de amenazas |
| **Authless**           | Autenticación moderna sin contraseñas (magic links, OAuth, WebAuthn)     |
| **DeployZero**         | Deploys frontend instantáneos con previews automáticos por PR            |
| **DesignTokens Pro**   | Sincronización automática Figma → código para design systems             |
| **DevCanvas**          | Generador de portfolios profesionales con integración GitHub             |
| **DocsAPI**            | Documentación de APIs hermosa con playground interactivo                 |
| **FeatureFlag Studio** | Sistema de feature flags con rollout gradual y A/B testing               |
| **FrontendMonitor**    | Monitoreo proactivo de errores JS con session replay                     |
| **MicroSaaS Builder**  | Stack completo para lanzar SaaS en 24 horas                              |
| **SEOStack**           | SEO técnico automatizado para desarrolladores (Next.js focus)            |

### 📊 Analytics & Monitoring (4)

| Landing             | Solución                                                  |
| ------------------- | --------------------------------------------------------- |
| **CloudCost Guard** | Optimización automática de costos cloud (AWS, GCP, Azure) |
| **IndieMetrics**    | Analytics simple para indie hackers (MRR, churn, LTV)     |
| **PerformanceLab**  | Web Vitals tracking correlacionado con conversiones       |
| **UXPulse**         | Behavioral analytics con heatmaps y session replay        |

### 🏢 Enterprise & B2B (4)

| Landing             | Solución                                            |
| ------------------- | --------------------------------------------------- |
| **Compound Growth** | Agencia de growth marketing B2B data-driven         |
| **NexusAI**         | Plataforma de automatización empresarial con IA     |
| **SaaSOnboarding**  | Onboarding visual que mejora activación de usuarios |
| **Sentinel Shield** | Ciberseguridad enterprise con IA y Zero Trust       |

### 🔐 Auth & Security (1)

| Landing      | Solución                                        |
| ------------ | ----------------------------------------------- |
| **Authless** | Solución completa de autenticación passwordless |

### 🏦 Fintech (1)

| Landing        | Solución                                       |
| -------------- | ---------------------------------------------- |
| **Helix Bank** | Banca digital global sin límites ni comisiones |

### 🏠 Specialized Services (2)

| Landing         | Solución                                     |
| --------------- | -------------------------------------------- |
| **Keystone AI** | Valuación inmobiliaria con IA (98% accuracy) |
| **Nomad Atlas** | Plataforma completa para nómadas digitales   |

### 🎨 Lifestyle & E-commerce (1)

| Landing          | Solución                                 |
| ---------------- | ---------------------------------------- |
| **Atelier Noir** | Marketplace de lujo artesanal consciente |

### 📚 Education & Wellness (2)

| Landing          | Solución                                              |
| ---------------- | ----------------------------------------------------- |
| **Lumina Learn** | Aprendizaje adaptativo con IA y mentores expertos     |
| **Vitality**     | Bienestar personalizado (fitness + nutrición + sueño) |

## 🎯 Características Premium

- ✅ **Design System completo** con variables CSS y tokens reutilizables
- ✅ **Componentes con variantes** usando class-variance-authority (CVA)
- ✅ **Animaciones fluidas** con GSAP y scroll smoothing (Lenis)
- ✅ **Accesibilidad WCAG 2.1 AA** con focus states y aria labels
- ✅ **SEO optimizado** con meta tags, Open Graph y structured data
- ✅ **Responsive design** mobile-first
- ✅ **TypeScript strict mode** para type safety
- ✅ **Performance optimizada** con lazy loading y code splitting

## 📁 Estructura del Proyecto

```
landing-collection/
├── src/
│   ├── pages/           # 25+ landing pages
│   ├── shared/          # Componentes y utilidades compartidas
│   │   ├── components/  # UI components (Button, Card, Badge)
│   │   ├── hooks/       # Custom hooks (useLenis)
│   │   ├── constants/   # Configuraciones globales
│   │   └── utils/       # Utilities (cn helper)
│   ├── App.tsx          # Root component
│   └── index.css        # Design system completo
├── public/              # Assets estáticos (imágenes AVIF)
└── vite.config.ts       # Configuración de Vite
```

## 🚀 Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Deploy a Vercel

```bash
vercel --prod
```

## 📝 Personalización

Cada landing puede personalizarse editando:

- **Constantes**: `src/pages/[landing]/constants.ts`
- **Estilos**: `src/pages/[landing]/styles.css`
- **Componentes**: `src/pages/[landing]/*.tsx`

## 📄 Licencia

Este proyecto es privado y propietario.

---

**Desarrollado por Wanda Solange Hernandez**

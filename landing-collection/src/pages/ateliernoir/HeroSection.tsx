import { ArrowRight } from 'lucide-react'
import { COMPANY } from './constants'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20">
        <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-400">
          Curated Luxury Experience
        </p>

        <h1 className="max-w-4xl text-center">
          <span className="text-serif block text-5xl tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
            {COMPANY.tagline}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-center text-lg text-ivory-50/60 leading-relaxed">
          Descubre una experiencia de moda sin precedentes. Piezas únicas 
          de las mejores maisons del mundo, curadas exclusivamente para ti.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-3 rounded-none px-10 py-4 text-sm uppercase tracking-widest"
          >
            Explorar
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="btn-secondary rounded-none px-10 py-4 text-sm uppercase tracking-widest"
          >
            La Experiencia
          </a>
        </div>

        <div className="mt-24 luxury-border rounded-none p-8 md:p-12">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {[
              { value: '150+', label: 'Maisons' },
              { value: '12K', label: 'Miembros' },
              { value: '100%', label: 'Autenticidad' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-serif text-3xl text-gold-400 md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-ivory-50/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, MapPin, Plane } from 'lucide-react'
import { COMPANY } from './constants'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 bg-gradient-hero">
      <div className="container-custom flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-700">
          <Plane className="h-4 w-4" />
          +50,000 nómadas activos
        </div>

        <h1 className="max-w-4xl text-center text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Tu guía para{' '}
          <span className="text-gradient">vivir viajando</span>
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-sand-800/70 md:text-xl">
          {COMPANY.name} es la plataforma todo-en-uno para nómadas digitales. 
          Destinos, visas, comunidad y planificación en un solo lugar.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            Explorar Gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            <MapPin className="h-5 w-5" />
            Ver Destinos
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8">
          {[
            { city: 'Lisboa', country: 'Portugal', cost: '$2,100/mes' },
            { city: 'Bali', country: 'Indonesia', cost: '$1,400/mes' },
            { city: 'CDMX', country: 'México', cost: '$1,600/mes' },
            { city: 'Bangkok', country: 'Tailandia', cost: '$1,200/mes' },
          ].map((dest, idx) => (
            <div key={idx} className="card rounded-2xl p-4 text-center">
              <p className="font-semibold text-sand-900">{dest.city}</p>
              <p className="text-sm text-sand-800/60">{dest.country}</p>
              <p className="mt-2 text-sm font-medium text-teal-600">{dest.cost}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-sm text-purple-300">Nuevo: GPT-5 Integration</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            El futuro de la
            <br />
            <span className="text-gradient">productividad</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-neutral-400 md:text-xl mb-10">
            Potencia tu equipo con inteligencia artificial de última generación. 
            Automatiza, analiza y escala como nunca antes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold">
              Comenzar Gratis
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium">
              <Play className="h-5 w-5" />
              Ver Demo
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">10k+</span>
              <span className="text-sm">Empresas</span>
            </div>
            <div className="h-8 w-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">99.9%</span>
              <span className="text-sm">Uptime</span>
            </div>
            <div className="h-8 w-px bg-neutral-800" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">4.9★</span>
              <span className="text-sm">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

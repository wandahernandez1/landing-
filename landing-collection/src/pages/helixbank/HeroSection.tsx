import { ArrowRight, CreditCard } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300">Licencia bancaria EU</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            Banca digital
            <br />
            <span className="text-gradient">sin límites</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-400 md:text-xl mb-10">
            Tu dinero en 50+ monedas. Transferencias globales instantáneas. 
            Inversiones integradas. Todo en una app.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold">
              Abrir Cuenta Gratis
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium">
              <CreditCard className="h-5 w-5" />
              Ver Tarjetas
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">5M+</span>
              <p className="text-sm">Clientes</p>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">€50B+</span>
              <p className="text-sm">Transacciones</p>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">150+</span>
              <p className="text-sm">Países</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

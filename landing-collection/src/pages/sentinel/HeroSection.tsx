import { ArrowRight, Shield } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Certificado SOC 2 Type II</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            Protección
            <br />
            <span className="text-gradient">inteligente</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-navy-300 md:text-xl mb-10">
            Ciberseguridad empresarial con IA predictiva. Detecta, responde y 
            neutraliza amenazas antes de que causen daño.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold">
              Solicitar Demo
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium">
              Ver Casos de Éxito
            </button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-navy-400">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">500+</span>
              <p className="text-sm">Empresas protegidas</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">99.99%</span>
              <p className="text-sm">Detección de amenazas</p>
            </div>
            <div className="h-8 w-px bg-navy-700" />
            <div className="text-center">
              <span className="text-2xl font-bold text-white">&lt;1s</span>
              <p className="text-sm">Tiempo de respuesta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

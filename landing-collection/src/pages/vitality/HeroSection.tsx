import { Apple, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="bg-pattern absolute inset-0 opacity-50" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-emerald-700 font-medium">#1 App de Fitness 2024</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl md:text-7xl mb-6">
              Transforma tu
              <br />
              <span className="text-gradient">bienestar</span>
            </h1>

            <p className="text-lg text-stone-600 mb-8 max-w-lg">
              Entrenamientos personalizados, nutrición inteligente y coaching IA 
              en tu bolsillo. Tu mejor versión te espera.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="btn-primary flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold">
                <Apple className="h-5 w-5" />
                App Store
              </button>
              <button className="btn-secondary flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium">
                <Play className="h-5 w-5" />
                Google Play
              </button>
            </div>

            <div className="flex items-center gap-6 text-stone-600">
              <div>
                <span className="text-3xl font-bold text-stone-900">2M+</span>
                <p className="text-sm">Usuarios activos</p>
              </div>
              <div className="h-10 w-px bg-stone-300" />
              <div>
                <span className="text-3xl font-bold text-stone-900">4.9★</span>
                <p className="text-sm">Rating promedio</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-72 h-[580px] rounded-[3rem] bg-stone-900 p-3 shadow-2xl">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">App Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

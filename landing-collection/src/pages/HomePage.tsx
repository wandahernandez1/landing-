import { Link } from 'react-router-dom'
import { LANDINGS } from '@/shared/constants'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/[0.08]">
        <nav className="container-custom flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold text-white">Landing Collection</span>
          </div>
          <span className="text-sm text-neutral-400">10 Premium Landings</span>
        </nav>
      </header>

      <main className="pt-32 pb-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-purple-400">
              React 19 + TypeScript + Tailwind CSS 4
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-6">
              10 Landing Pages
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Colección de landing pages profesionales con diseño premium, 
              animaciones GSAP, accesibilidad WCAG 2.1 AA y SEO optimizado.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LANDINGS.map((landing, index) => (
              <Link
                key={landing.id}
                to={landing.path}
                className="group relative rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-900/80 hover:-translate-y-1"
              >
                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-sm font-medium text-neutral-400">
                  {index + 1}
                </div>

                <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {landing.name}
                </h2>
                
                <p className="text-sm text-purple-400 mb-3">{landing.tagline}</p>
                
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                  {landing.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-neutral-500">{landing.industry}</span>
                    <span className="text-xs text-neutral-600">{landing.theme}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver landing
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] py-8">
        <div className="container-custom text-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Landing Collection. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

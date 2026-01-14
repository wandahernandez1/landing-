import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from './constants'
import { Sparkles } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-purple-500/10">
        <nav className="container-custom flex h-16 items-center justify-between" aria-label="Navegación principal">
          <Link to="/nexusai" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-700">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">{COMPANY.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="btn-primary rounded-xl px-5 py-2.5 text-sm font-medium">
              Comenzar Gratis
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from './constants'
import { Heart } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-stone-200">
        <nav className="container-custom flex h-16 items-center justify-between" aria-label="Navegación principal">
          <Link to="/vitality" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-stone-900">{COMPANY.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-600 transition-colors hover:text-emerald-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="btn-primary rounded-full px-6 py-2.5 text-sm font-medium">
              Descargar App
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

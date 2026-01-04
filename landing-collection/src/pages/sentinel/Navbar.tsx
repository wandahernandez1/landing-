import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS } from './constants'
import { Shield } from 'lucide-react'

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-cyan-500/10">
        <nav className="container-custom flex h-16 items-center justify-between" aria-label="Navegación principal">
          <Link to="/sentinel" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">{COMPANY.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-navy-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm text-navy-300 hover:text-white transition-colors">
              ← Volver
            </Link>
            <button className="btn-primary rounded-lg px-5 py-2.5 text-sm font-medium">
              Solicitar Demo
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

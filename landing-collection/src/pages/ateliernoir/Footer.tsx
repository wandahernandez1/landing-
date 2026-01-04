import { Link } from 'react-router-dom'
import { Gem, Instagram } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="border-t border-ivory-50/10 bg-charcoal-950">
      <div className="container-custom py-16 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <Link to="/ateliernoir" className="flex items-center gap-3">
            <Gem className="h-5 w-5 text-gold-400" />
            <span className="text-serif text-xl tracking-wider">{COMPANY.name}</span>
          </Link>

          <nav>
            <ul className="flex items-center gap-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-ivory-50/40 transition-colors hover:text-ivory-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="#" className="text-ivory-50/40 hover:text-ivory-50 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
        </div>

        <div className="divider mt-12" />

        <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-xs uppercase tracking-widest text-ivory-50/30">
            {COMPANY.year} {COMPANY.name}. All rights reserved.
          </p>
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors"
          >
            ← Volver
          </Link>
        </div>
      </div>
    </footer>
  )
}

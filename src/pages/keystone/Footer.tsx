import { Link } from 'react-router-dom'
import { Building2, Linkedin, Twitter } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="border-t border-forest-800/30 bg-stone-950">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link to="/keystone" className="flex items-center gap-2 text-xl font-bold">
            <Building2 className="h-6 w-6 text-forest-500" />
            <span className="text-gradient">{COMPANY.name}</span>
          </Link>

          <nav>
            <ul className="flex items-center gap-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-500 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-stone-500 hover:text-gold-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="divider mt-8" />

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <p className="text-sm text-stone-600">
            {COMPANY.year} {COMPANY.name}. Inteligencia para bienes raíces.
          </p>
        </div>
      </div>
    </footer>
  )
}

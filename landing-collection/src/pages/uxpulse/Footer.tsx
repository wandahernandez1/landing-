import { Link } from 'react-router-dom'
import { Eye, Github, Twitter } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="border-t border-rose-500/10 bg-slate-950">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link to="/uxpulse" className="flex items-center gap-2 text-xl font-bold">
            <Eye className="h-6 w-6 text-rose-500" />
            <span className="text-gradient">{COMPANY.name}</span>
          </Link>

          <nav>
            <ul className="flex items-center gap-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-rose-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-rose-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-rose-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="divider mt-8" />

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <p className="text-sm text-slate-600">
            {COMPANY.year} {COMPANY.name}. Privacy-first analytics.
          </p>
        </div>
      </div>
    </footer>
  )
}

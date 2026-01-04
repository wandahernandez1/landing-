import { Link } from 'react-router-dom'
import { Globe, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS, COMPANY } from './constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-sand-200">
        <nav className="container-custom flex h-16 items-center justify-between md:h-20">
          <Link 
            to="/nomadatlas" 
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Globe className="h-7 w-7 text-teal-500" />
            <span className="text-gradient">{COMPANY.name}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-sand-800/70 transition-colors hover:text-teal-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a href="#" className="text-sm text-sand-800/70 hover:text-teal-600 transition-colors">
              Login
            </a>
            <a href="#pricing" className="btn-primary rounded-xl px-5 py-2.5 text-sm font-medium">
              Empezar
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-sand-800 hover:bg-sand-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-sand-200 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sand-800 hover:text-teal-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#pricing" className="btn-primary rounded-xl px-5 py-2.5 text-center text-sm font-medium">
                Empezar
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

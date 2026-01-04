import { Link } from 'react-router-dom'
import { Gem, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS, COMPANY } from './constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass border-b border-ivory-50/10">
        <nav className="container-custom flex h-16 items-center justify-between md:h-20">
          <Link 
            to="/ateliernoir" 
            className="flex items-center gap-3 text-xl"
          >
            <Gem className="h-6 w-6 text-gold-400" />
            <span className="text-serif text-2xl tracking-wider">{COMPANY.name}</span>
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-ivory-50/60 transition-colors hover:text-ivory-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm uppercase tracking-widest text-ivory-50/60 hover:text-ivory-50 transition-colors">
              Account
            </a>
            <a href="#pricing" className="btn-primary rounded-none px-6 py-2.5 text-sm uppercase tracking-widest">
              Membership
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-ivory-50/60 hover:bg-ivory-50/5 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isOpen && (
          <div className="border-t border-ivory-50/10 px-4 py-6 md:hidden">
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-ivory-50/80 hover:text-ivory-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#pricing" className="btn-primary rounded-none px-6 py-3 text-center text-sm uppercase tracking-widest">
                Membership
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

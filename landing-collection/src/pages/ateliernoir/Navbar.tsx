import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, COMPANY } from './constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-500 ${isScrolled ? 'glass border-b border-charcoal-100' : 'bg-transparent'}`}>
        <nav className="container-editorial flex h-20 items-center justify-between md:h-24">
          {/* Logo */}
          <Link 
            to="/ateliernoir" 
            className="logo-text"
            aria-label={COMPANY.name}
          >
            {COMPANY.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label transition-colors duration-300 hover:text-charcoal-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-8 lg:flex">
            <a 
              href="#" 
              className="label transition-colors duration-300 hover:text-charcoal-900"
            >
              Account
            </a>
            <a 
              href="#" 
              className="label transition-colors duration-300 hover:text-charcoal-900"
            >
              Bag (0)
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" strokeWidth={1} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-charcoal-100 bg-ivory-50 px-6 py-8 lg:hidden">
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-serif text-2xl text-charcoal-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="divider my-4" />
              <a href="#" className="label">Account</a>
              <a href="#" className="label">Bag (0)</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

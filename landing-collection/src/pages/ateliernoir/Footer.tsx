import { Link } from 'react-router-dom'
import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="section-dark border-t border-charcoal-700">
      <div className="container-editorial py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/ateliernoir" className="logo-text text-ivory-50">
              {COMPANY.name}
            </Link>
            <p className="body-small text-charcoal-400 mt-4 max-w-xs">
              {COMPANY.tagline}
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="label text-ivory-300 mb-6">Shop</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-charcoal-400 hover:text-ivory-50 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="label text-ivory-300 mb-6">About</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-charcoal-400 hover:text-ivory-50 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="label text-ivory-300 mb-6">Support</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-charcoal-400 hover:text-ivory-50 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-charcoal-500 text-sm">
            © {COMPANY.year} {COMPANY.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-charcoal-500 hover:text-ivory-50 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-charcoal-500 hover:text-ivory-50 transition-colors text-sm">
              Terms
            </a>
            <Link 
              to="/"
              className="text-charcoal-500 hover:text-ivory-50 transition-colors text-sm"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

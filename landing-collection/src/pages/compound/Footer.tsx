import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-navy-950" role="contentinfo">
      <div className="container-custom py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-xl font-bold text-white">{COMPANY.name}</p>

          <nav aria-label="Enlaces del footer">
            <ul className="flex items-center gap-8">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-navy-400 transition-colors hover:text-gold-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="divider mt-8" />

        <p className="mt-6 text-center text-sm text-navy-500">
          © {COMPANY.year} {COMPANY.name}. B2B Growth Agency.
        </p>
      </div>
    </footer>
  )
}

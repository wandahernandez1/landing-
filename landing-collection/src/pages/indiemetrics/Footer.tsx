import { Link } from 'react-router-dom'
import { TrendingUp, Github, Twitter } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="border-t border-emerald-500/10 bg-neutral-950">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link to="/indiemetrics" className="flex items-center gap-2 text-xl font-bold"><TrendingUp className="h-5 w-5 text-emerald-500" /><span className="text-gradient">{COMPANY.name}</span></Link>
          <nav><ul className="flex items-center gap-6">{FOOTER_LINKS.map((link) => <li key={link.href}><a href={link.href} className="text-sm text-neutral-500 hover:text-emerald-400">{link.label}</a></li>)}</ul></nav>
          <div className="flex items-center gap-4"><a href="#" className="text-neutral-500 hover:text-emerald-400"><Github className="h-5 w-5" /></a><a href="#" className="text-neutral-500 hover:text-emerald-400"><Twitter className="h-5 w-5" /></a></div>
        </div>
        <div className="divider mt-8" />
        <div className="mt-8 text-center"><p className="text-sm text-neutral-600">{COMPANY.year} {COMPANY.name}. Simple analytics for indie makers.</p></div>
      </div>
    </footer>
  )
}

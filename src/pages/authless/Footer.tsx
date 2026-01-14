import { Link } from 'react-router-dom'
import { Key, Github, Twitter } from 'lucide-react'
import { COMPANY, FOOTER_LINKS } from './constants'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container-custom py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link to="/authless" className="flex items-center gap-2 text-xl font-bold"><Key className="h-5 w-5 text-zinc-500" /><span className="text-zinc-300">{COMPANY.name}</span></Link>
          <nav><ul className="flex items-center gap-6">{FOOTER_LINKS.map((link) => <li key={link.href}><a href={link.href} className="text-sm text-zinc-600 hover:text-zinc-400">{link.label}</a></li>)}</ul></nav>
          <div className="flex items-center gap-4"><a href="#" className="text-zinc-600 hover:text-zinc-400"><Github className="h-5 w-5" /></a><a href="#" className="text-zinc-600 hover:text-zinc-400"><Twitter className="h-5 w-5" /></a></div>
        </div>
        <div className="divider mt-8" />
        <div className="mt-8 text-center"><p className="text-sm text-zinc-700">{COMPANY.year} {COMPANY.name}. Sin contraseñas. Solo auth.</p></div>
      </div>
    </footer>
  )
}

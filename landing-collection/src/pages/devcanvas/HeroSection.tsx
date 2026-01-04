import { ArrowRight, Github } from 'lucide-react'
import { COMPANY } from './constants'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24">
      <div className="bg-glow absolute inset-0" />
      
      <div className="container-custom relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
          Open Source
        </div>

        <h1 className="max-w-4xl text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Tu portfolio de{' '}
          <span className="text-gradient">developer</span>
          <br />
          en minutos
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-slate-400 md:text-xl">
          {COMPANY.name} te ayuda a crear un portfolio profesional 
          que impresione a reclutadores. GitHub integration. 
          Deploy instantáneo.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="btn-primary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            Empezar Gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-3.5 font-medium"
          >
            <Github className="h-5 w-5" />
            Ver en GitHub
          </a>
        </div>

        <div className="mt-20 w-full max-w-4xl">
          <div className="code-block rounded-2xl p-6 md:p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-slate-500">portfolio.config.ts</span>
            </div>
            <pre className="text-sm text-slate-300 overflow-x-auto">
              <code>{`export const portfolio = {
  name: "Alex Chen",
  title: "Full Stack Developer",
  github: "@alexchen",
  skills: ["TypeScript", "React", "Node.js"],
  projects: autoFetchFromGitHub(),
  theme: "violet-dark",
}`}</code>
            </pre>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
          <span>Usado por devs de:</span>
          <span className="font-semibold text-slate-300">Google</span>
          <span className="font-semibold text-slate-300">Meta</span>
          <span className="font-semibold text-slate-300">Stripe</span>
          <span className="font-semibold text-slate-300">Vercel</span>
        </div>
      </div>
    </section>
  )
}

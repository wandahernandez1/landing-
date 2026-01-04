import { ArrowRight, Github, Terminal, Code2, Braces, FileCode, GitBranch, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { COMPANY } from './constants'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { y: -30, opacity: 0, duration: 0.8 })
        .from('.hero-title-line', { y: 60, opacity: 0, stagger: 0.15, duration: 1 }, '-=0.4')
        .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-cta', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from('.code-block-anim', { y: 40, opacity: 0, scale: 0.95, duration: 1 }, '-=0.3')
        .from('.hero-stat', { y: 40, opacity: 0, stagger: 0.15, duration: 0.8 }, '-=0.5')
        .from('.trust-badge', { scale: 0.8, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')

      // Floating code icons
      gsap.to('.floating-icon', {
        y: -15,
        duration: 3,
        stagger: { each: 0.5, yoyo: true, repeat: -1 },
        ease: 'power1.inOut',
      })

      // Terminal cursor blink
      gsap.to('.terminal-cursor', {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      })

      // Code lines animation
      gsap.from('.code-line-anim', {
        scaleX: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 1.5,
        ease: 'power2.out',
        transformOrigin: 'left',
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="bg-glow absolute inset-0" />
      
      {/* Dev Grid Background */}
      <div className="absolute inset-0 dev-grid opacity-40" />

      {/* Floating Code Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Terminal className="floating-icon absolute top-[20%] left-[10%] w-8 h-8 text-violet-500/20" />
        <Code2 className="floating-icon absolute top-[30%] right-[15%] w-6 h-6 text-violet-500/15" />
        <Braces className="floating-icon absolute bottom-[35%] left-[15%] w-7 h-7 text-violet-500/15" />
        <FileCode className="floating-icon absolute bottom-[25%] right-[10%] w-8 h-8 text-violet-500/20" />
        <GitBranch className="floating-icon absolute top-[45%] left-[5%] w-6 h-6 text-violet-500/10" />
      </div>
      
      <div className="container-custom relative z-10 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-sm">
            <div className="relative">
              <Terminal className="h-4 w-4 text-violet-400" />
              <div className="absolute inset-0 terminal-pulse rounded-full" />
            </div>
            <span className="text-sm text-violet-300">Open Source</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="hero-title-line block">Tu portfolio de</span>
            <span className="hero-title-line block text-gradient">developer</span>
            <span className="hero-title-line block">en minutos</span>
          </h1>

          <p className="hero-subtitle mx-auto max-w-2xl text-lg text-slate-400 md:text-xl mb-10">
            {COMPANY.name} te ayuda a crear un portfolio profesional 
            que impresione a reclutadores. GitHub integration. 
            Deploy instantáneo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="hero-cta btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
            >
              Empezar Gratis
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="hero-cta btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium"
            >
              <Github className="h-5 w-5" />
              Ver en GitHub
            </a>
          </div>

          {/* Code Block */}
          <div className="code-block-anim mt-16 w-full max-w-3xl mx-auto">
            <div className="code-block rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-slate-500">portfolio.config.ts</span>
              </div>
              <pre className="text-sm text-slate-300 overflow-x-auto">
                <code>
                  <span className="code-line-anim block"><span className="text-violet-400">export const</span> portfolio = {'{'}</span>
                  <span className="code-line-anim block">  name: <span className="text-green-400">"Alex Chen"</span>,</span>
                  <span className="code-line-anim block">  title: <span className="text-green-400">"Full Stack Developer"</span>,</span>
                  <span className="code-line-anim block">  github: <span className="text-green-400">"@alexchen"</span>,</span>
                  <span className="code-line-anim block">  skills: [<span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"Node.js"</span>],</span>
                  <span className="code-line-anim block">  projects: <span className="text-yellow-400">autoFetchFromGitHub</span>(),</span>
                  <span className="code-line-anim block">  theme: <span className="text-green-400">"violet-dark"</span>,</span>
                  <span className="code-line-anim block">{'}'}<span className="terminal-cursor text-violet-400">|</span></span>
                </code>
              </pre>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-400">
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-violet-400">10K+</span>
              <p className="text-sm">Developers</p>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-violet-400">50K+</span>
              <p className="text-sm">Portfolios creados</p>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="hero-stat text-center stat-glow cursor-default">
              <span className="text-2xl font-bold text-violet-400">99.9%</span>
              <p className="text-sm">Uptime</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Google', 'Meta', 'Stripe', 'Vercel'].map((company) => (
              <div 
                key={company}
                className="trust-badge flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-violet-500/20"
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-slate-300">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

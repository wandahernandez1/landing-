import { useRef, useEffect, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'

interface ShowcaseLayoutProps {
  children: ReactNode
  className?: string
}

export function ShowcaseLayout({ children, className }: ShowcaseLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Ambient gradient animation - smoother and more cinematic
      const gradients = containerRef.current?.querySelectorAll('[data-gradient]')
      
      gradients?.forEach((gradient, index) => {
        gsap.to(gradient, {
          scale: 1.08 + index * 0.03,
          opacity: 0.55,
          x: index % 2 === 0 ? 20 : -20,
          y: index % 2 === 0 ? -15 : 15,
          duration: 18 + index * 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full min-h-screen min-h-dvh',
        'bg-[#030303]',
        'overflow-x-hidden',
        className
      )}
    >
      {/* Ambient background layers - Fixed to viewport */}
      <div 
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Primary gradient - top left - Smoother rendering */}
        <div
          data-gradient
          className={cn(
            'absolute -top-[35%] -left-[15%]',
            'w-[65%] h-[65%]',
            'rounded-full',
            'bg-gradient-to-br from-violet-950/35 via-purple-900/18 to-transparent',
            'blur-[100px] sm:blur-[120px]',
            'opacity-45',
            'will-change-transform',
          )}
        />

        {/* Secondary gradient - bottom right - Better color depth */}
        <div
          data-gradient
          className={cn(
            'absolute -bottom-[30%] -right-[12%]',
            'w-[55%] h-[55%]',
            'rounded-full',
            'bg-gradient-to-tl from-indigo-950/28 via-blue-900/12 to-transparent',
            'blur-[90px] sm:blur-[100px]',
            'opacity-35',
            'will-change-transform',
          )}
        />

        {/* Center ambient glow - Softer for better contrast */}
        <div
          data-gradient
          className={cn(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'w-[90%] h-[45%]',
            'rounded-full',
            'bg-gradient-radial from-purple-950/12 via-transparent to-transparent',
            'blur-[70px] sm:blur-[80px]',
            'opacity-25',
            'will-change-transform',
          )}
        />

        {/* Accent glow - bottom left - Subtle warmth */}
        <div
          data-gradient
          className={cn(
            'absolute bottom-[8%] left-[8%]',
            'w-[35%] h-[35%]',
            'rounded-full',
            'bg-gradient-to-tr from-fuchsia-950/18 via-transparent to-transparent',
            'blur-[70px] sm:blur-[80px]',
            'opacity-25',
            'will-change-transform',
          )}
        />

        {/* Film grain texture - Optimized for performance */}
        <div className="film-grain" />

        {/* Subtle grid overlay - Better visibility */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Top edge highlight - Refined */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
        
        {/* Bottom vignette for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#030303]/50 via-transparent to-transparent" />
      </div>

      {/* Content - relative to allow scroll */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

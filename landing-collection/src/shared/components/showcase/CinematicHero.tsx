import { useRef, useEffect, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'

interface CinematicHeroProps {
  label?: string
  headline: string
  subheadline: string
  children?: ReactNode
  className?: string
}

export function CinematicHero({
  label = 'Curated Digital Collection',
  headline = 'Design Experiences',
  subheadline = 'Ten cinematic landing experiences crafted with intention and detail.',
  children,
  className,
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgGlowRef = useRef<HTMLDivElement>(null)
  const grainRef = useRef<HTMLDivElement>(null)
  const labelContainerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const headlineGlowRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Set initial states
      const elements = [
        labelContainerRef.current,
        headlineRef.current,
        dividerRef.current,
        subheadlineRef.current,
        childrenRef.current,
      ].filter(Boolean)

      gsap.set(elements, { opacity: 0 })
      gsap.set(bgGlowRef.current, { opacity: 0, scale: 0.8 })
      gsap.set(grainRef.current, { opacity: 0 })
      gsap.set(headlineGlowRef.current, { opacity: 0, scale: 0.9 })

      gsap.set(labelContainerRef.current, { y: 16, filter: 'blur(6px)' })
      gsap.set(headlineRef.current, { y: 50, scale: 0.98, filter: 'blur(10px)' })
      gsap.set(dividerRef.current, { scaleX: 0 })
      gsap.set(subheadlineRef.current, { y: 24, filter: 'blur(6px)' })
      gsap.set(childrenRef.current, { y: 12, filter: 'blur(4px)' })

      // Master timeline - cinematic pacing
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Phase 1: Atmosphere
      tl.to(bgGlowRef.current, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }, 0)
        .to(grainRef.current, { opacity: 1, duration: 1.4, ease: 'power1.out' }, 0.3)
        .to(headlineGlowRef.current, { opacity: 1, scale: 1, duration: 2.2, ease: 'power2.out' }, 0.2)

      // Phase 2: Label
      .to(labelContainerRef.current, {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out'
      }, 0.5)

      // Phase 3: Headline - the hero moment
      .to(headlineRef.current, {
        opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'expo.out'
      }, 0.7)

      // Phase 4: Divider
      .to(dividerRef.current, {
        opacity: 1, scaleX: 1, duration: 1, ease: 'power2.inOut'
      }, 1.2)

      // Phase 5: Subheadline
      .to(subheadlineRef.current, {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power2.out'
      }, 1.4)

      // Phase 6: Children
      .to(childrenRef.current, {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power2.out'
      }, 1.8)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-screen flex items-center justify-center overflow-hidden',
        className
      )}
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#020202]" aria-hidden="true">
        {/* Ambient glow */}
        <div ref={bgGlowRef} className="absolute inset-0 opacity-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-[70%] bg-gradient-radial from-white/[0.02] via-white/[0.008] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent" />
        </div>

        {/* Film grain */}
        <div
          ref={grainRef}
          className="absolute inset-0 opacity-0 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.025,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Headline glow - behind text */}
      <div
        ref={headlineGlowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-radial from-white/[0.03] via-white/[0.01] to-transparent blur-3xl" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center">
          
          {/* Label - Refined */}
          <div
            ref={labelContainerRef}
            className="mb-5 sm:mb-6 md:mb-8 lg:mb-10 opacity-0"
          >
            <div className={cn(
              'inline-flex items-center gap-2.5 sm:gap-3',
              'px-4 sm:px-5 py-2 sm:py-2.5',
              'rounded-full',
              'bg-white/[0.03] backdrop-blur-sm',
              'border border-white/[0.06]',
              'shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]',
            )}>
              {/* Accent dot */}
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" style={{ animationDuration: '2s' }} />
                <span className="relative inline-flex h-full w-full rounded-full bg-white/60" />
              </span>
              
              <span className={cn(
                'text-[10px] sm:text-[11px] md:text-xs',
                'font-medium',
                'uppercase tracking-[0.18em] sm:tracking-[0.22em] md:tracking-[0.25em]',
                'text-white/60',
              )}>
                {label}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className={cn(
              // Size - balanced scale for all screens
              'text-[2.5rem]',
              'xs:text-[2.75rem]',
              'sm:text-[3.25rem]',
              'md:text-[3.75rem]',
              'lg:text-[4.5rem]',
              'xl:text-[5.5rem]',
              '2xl:text-[6.5rem]',
              'min-[1920px]:text-[7.5rem]',
              // Typography - refined
              'font-semibold',
              'bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent',
              'tracking-[-0.03em] sm:tracking-[-0.035em] lg:tracking-[-0.04em]',
              'leading-[0.95] sm:leading-[0.92]',
              'opacity-0',
            )}
          >
            {headline}
          </h1>

          {/* Elegant divider */}
          <div
            ref={dividerRef}
            className={cn(
              'mt-6 sm:mt-8 md:mt-10 lg:mt-12',
              'flex items-center justify-center gap-3 sm:gap-4',
              'origin-center opacity-0',
            )}
            aria-hidden="true"
          >
            <div className="w-6 sm:w-10 md:w-12 h-px bg-gradient-to-r from-transparent to-white/20" />
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <div className="w-6 sm:w-10 md:w-12 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className={cn(
              'mt-5 sm:mt-6 md:mt-8 lg:mt-10',
              'max-w-[280px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl',
              'px-2 sm:px-0',
              // Typography - reduced for medium screens
              'text-sm xs:text-[15px] sm:text-base md:text-lg lg:text-xl',
              'font-light',
              'text-white/50',
              'tracking-[-0.01em]',
              'leading-[1.65] sm:leading-[1.6]',
              'text-balance',
              'opacity-0',
            )}
          >
            {subheadline}
          </p>

          {/* Children slot */}
          {children && (
            <div
              ref={childrenRef}
              className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 opacity-0"
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

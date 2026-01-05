import { useRef, useEffect } from 'react'
import { Layers } from 'lucide-react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'

interface ShowcaseHeaderProps {
  totalCount: number
}

export function ShowcaseHeader({ totalCount }: ShowcaseHeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotionRef = useRef(false)

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!headerRef.current) return

    const ctx = gsap.context(() => {
      // Skip animations if user prefers reduced motion
      if (prefersReducedMotionRef.current) {
        gsap.set([logoRef.current, badgeRef.current], { opacity: 1, y: 0 })
        return
      }

      // Initial state
      gsap.set([logoRef.current, badgeRef.current], {
        opacity: 0,
        y: -10,
      })

      // Animate in
      gsap.to([logoRef.current, badgeRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
        ease: 'expo.out',
      })
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glass navbar - Premium blur effect */}
      <div className={cn(
        'relative',
        'glass-premium',
        'border-b border-white/[0.04]',
      )}>
        <nav
          className={cn(
            'flex items-center justify-between',
            // Responsive height and padding
            'h-14 sm:h-16 md:h-18 lg:h-20',
            'px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16',
          )}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div ref={logoRef} className="flex items-center gap-2.5 sm:gap-3">
            {/* Icon - Responsive sizing */}
            <div className={cn(
              'flex items-center justify-center',
              'w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11',
              'rounded-lg sm:rounded-xl',
              'bg-gradient-to-br from-violet-500/90 via-purple-500/90 to-indigo-600/90',
              'shadow-lg shadow-purple-500/20',
              'will-change-transform',
            )}>
              <Layers className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 text-white" strokeWidth={1.75} />
            </div>

            {/* Text - Hidden on mobile, responsive sizing */}
            <div className="hidden sm:flex flex-col">
              <span className={cn(
                'font-semibold text-white tracking-tight leading-tight',
                'text-sm sm:text-base md:text-lg',
              )}>
                Landing Collection
              </span>
              <span className={cn(
                'text-white/40 tracking-wide uppercase',
                'text-[9px] sm:text-[10px] md:text-xs',
              )}>
                Premium Designs
              </span>
            </div>
          </div>

          {/* Counter badge - Responsive sizing */}
          <div
            ref={badgeRef}
            className={cn(
              'flex items-center gap-1.5 sm:gap-2',
              'px-3 py-1.5 sm:px-4 sm:py-2 rounded-full',
              'bg-white/[0.03]',
              'border border-white/[0.06]',
            )}
          >
            <div className="flex items-center gap-1 sm:gap-1.5">
              <span className={cn(
                'text-white/40 uppercase tracking-wider',
                'text-[9px] sm:text-[10px] md:text-xs',
              )}>
                Experiences
              </span>
              <span className={cn(
                'px-1.5 sm:px-2 py-0.5 rounded-full',
                'bg-white/[0.08]',
                'font-semibold text-white tabular-nums',
                'text-xs sm:text-sm',
              )}>
                {totalCount}
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

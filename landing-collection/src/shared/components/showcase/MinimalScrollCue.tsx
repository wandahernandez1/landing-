import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'

interface MinimalScrollCueProps {
  className?: string
  onClick?: () => void
}

export function MinimalScrollCue({ className, onClick }: MinimalScrollCueProps) {
  const containerRef = useRef<HTMLButtonElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotionRef = useRef(false)

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Skip animations if user prefers reduced motion
      if (prefersReducedMotionRef.current) {
        gsap.set(containerRef.current, { opacity: 0.6 })
        return
      }

      // Entrance - delayed and subtle
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.2,
          delay: 2,
          ease: 'power2.out',
        }
      )

      // Continuous pulse animation for the line - GPU optimized
      gsap.to(lineRef.current, {
        y: 20,
        opacity: 0,
        duration: 2,
        repeat: -1,
        ease: 'power1.inOut',
        repeatDelay: 0.8,
        force3D: true,
      })

      // Subtle glow pulse
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          opacity: 0.4,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      className={cn(
        'group relative flex flex-col items-center',
        // Responsive gap
        'gap-3 sm:gap-4',
        'opacity-0',
        'cursor-pointer',
        'transition-all duration-500 ease-out',
        'hover:translate-y-1',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-8 focus-visible:ring-offset-transparent rounded',
        'will-change-transform',
        className
      )}
      aria-label="Scroll to explore collection"
    >
      {/* Vertical line container - Responsive sizing */}
      <div className="relative w-px h-10 sm:h-12 md:h-14 overflow-hidden">
        {/* Track - barely visible */}
        <div className="absolute inset-0 bg-white/[0.06]" />

        {/* Moving line - elegant with GPU acceleration */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-full h-3 sm:h-4 bg-gradient-to-b from-white/50 via-white/20 to-transparent will-change-transform"
        />

        {/* Micro glow at base */}
        <div
          ref={glowRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/10 rounded-full blur-sm opacity-20"
        />
      </div>
    </button>
  )
}

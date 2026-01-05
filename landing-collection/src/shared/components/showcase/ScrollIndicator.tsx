import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'

interface ScrollIndicatorProps {
  className?: string
  onClick?: () => void
}

export function ScrollIndicator({ className, onClick }: ScrollIndicatorProps) {
  const containerRef = useRef<HTMLButtonElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(containerRef.current, 
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.5,
          ease: 'expo.out',
        }
      )

      // Continuous line animation
      gsap.to(lineRef.current, {
        y: 12,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: 'power2.inOut',
        yoyo: false,
        repeatDelay: 0.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <button
      ref={containerRef}
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-3',
        'opacity-0',
        'cursor-pointer',
        'transition-transform duration-300 hover:scale-110',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-lg',
        className
      )}
      aria-label="Scroll to gallery"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">
        Scroll
      </span>
      
      <div className="relative w-px h-8 overflow-hidden">
        {/* Track */}
        <div className="absolute inset-0 bg-white/10" />
        
        {/* Moving line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-white/60 to-transparent"
        />
      </div>
    </button>
  )
}

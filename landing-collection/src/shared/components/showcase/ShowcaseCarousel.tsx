import { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/shared/utils'
import { ShowcaseCard } from './ShowcaseCard'
import type { LandingConfig } from '@/shared/types'

interface ShowcaseCarouselProps {
  landings: LandingConfig[]
}

/**
 * Responsive gap configuration
 * Matches Tailwind CSS classes: gap-5, gap-6, gap-7, gap-8, gap-10, gap-11, gap-12, gap-14
 * gap-5=20px, gap-6=24px, gap-7=28px, gap-8=32px, gap-10=40px, gap-11=44px, gap-12=48px, gap-14=56px
 */
const getResponsiveGap = (viewportWidth: number): number => {
  if (viewportWidth >= 1920) return 56   // min-[1920px]:gap-14
  if (viewportWidth >= 1600) return 48   // min-[1600px]:gap-12
  if (viewportWidth >= 1440) return 44   // min-[1440px]:gap-11
  if (viewportWidth >= 1536) return 44   // 2xl:gap-11
  if (viewportWidth >= 1280) return 40   // xl:gap-10
  if (viewportWidth >= 1024) return 32   // lg:gap-8
  if (viewportWidth >= 768) return 28    // md:gap-7
  if (viewportWidth >= 640) return 24    // sm:gap-6
  return 20                               // gap-5 (mobile)
}

export function ShowcaseCarousel({ landings }: ShowcaseCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef(0)
  const dragOffsetRef = useRef(0)
  const velocityRef = useRef(0)
  const lastPositionRef = useRef(0)
  const lastTimeRef = useRef(0)
  const wheelTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isAnimatingRef = useRef(false)
  const prefersReducedMotionRef = useRef(false)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  const totalCards = landings.length

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotionRef.current = mediaQuery.matches
    
    const handler = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches
    }
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Navigate to specific card with smooth animation
  const goToCard = useCallback((index: number, immediate = false) => {
    if (isAnimatingRef.current && !immediate) return
    
    const clampedIndex = Math.max(0, Math.min(totalCards - 1, index))
    if (clampedIndex === activeIndex && !immediate) return
    
    isAnimatingRef.current = true
    setActiveIndex(clampedIndex)
    
    // Reset animation lock after animation completes
    const duration = prefersReducedMotionRef.current ? 200 : 800
    setTimeout(() => {
      isAnimatingRef.current = false
    }, duration)
  }, [totalCards, activeIndex])

  // Navigation handlers
  const goToPrev = useCallback(() => {
    goToCard(activeIndex - 1)
  }, [activeIndex, goToCard])

  const goToNext = useCallback(() => {
    goToCard(activeIndex + 1)
  }, [activeIndex, goToCard])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        goToPrev()
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goToCard(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goToCard(totalCards - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrev, goToNext, goToCard, totalCards])

  // Animate track position - Centered in viewport with responsive gaps
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return

    const containerWidth = containerRef.current.offsetWidth
    const cardElement = trackRef.current.children[0] as HTMLElement
    if (!cardElement) return

    const cardWidth = cardElement.offsetWidth
    const viewportWidth = window.innerWidth
    const gap = getResponsiveGap(viewportWidth)

    // Calculate offset to center the active card perfectly
    const totalOffset = activeIndex * (cardWidth + gap)
    const centerOffset = (containerWidth - cardWidth) / 2
    const offset = centerOffset - totalOffset

    // Smooth animation duration based on user preference
    const duration = prefersReducedMotionRef.current ? 0.15 : 0.7

    gsap.to(trackRef.current, {
      x: offset,
      duration,
      ease: 'power3.out',
    })

    // Animate progress bar
    if (progressRef.current) {
      const progress = (activeIndex / (totalCards - 1)) * 100
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: prefersReducedMotionRef.current ? 0.15 : 0.5,
        ease: 'power2.out',
      })
    }
  }, [activeIndex, totalCards])

  // Handle window resize - recalculate positions
  useEffect(() => {
    const handleResize = () => {
      // Recalculate position on resize
      if (trackRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const cardElement = trackRef.current.children[0] as HTMLElement
        if (!cardElement) return

        const cardWidth = cardElement.offsetWidth
        const viewportWidth = window.innerWidth
        const gap = getResponsiveGap(viewportWidth)

        const totalOffset = activeIndex * (cardWidth + gap)
        const centerOffset = (containerWidth - cardWidth) / 2
        const offset = centerOffset - totalOffset

        gsap.set(trackRef.current, { x: offset })
      }
    }

    // Use ResizeObserver for better performance
    resizeObserverRef.current = new ResizeObserver(handleResize)
    if (containerRef.current) {
      resizeObserverRef.current.observe(containerRef.current)
    }

    return () => {
      resizeObserverRef.current?.disconnect()
    }
  }, [activeIndex])

  // Touch/Mouse drag handling with velocity - Throttled for performance
  const handleDragStart = useCallback((clientX: number) => {
    if (isAnimatingRef.current) return
    
    setIsDragging(true)
    dragStartRef.current = clientX
    lastPositionRef.current = clientX
    lastTimeRef.current = performance.now()
    dragOffsetRef.current = 0
    velocityRef.current = 0
  }, [])

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return
    
    const now = performance.now()
    const dt = now - lastTimeRef.current
    
    if (dt > 0) {
      velocityRef.current = (clientX - lastPositionRef.current) / dt
    }
    
    lastPositionRef.current = clientX
    lastTimeRef.current = now
    dragOffsetRef.current = clientX - dragStartRef.current

    // Live drag feedback - GPU optimized
    if (trackRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const cardElement = trackRef.current.children[0] as HTMLElement
      if (!cardElement) return

      const cardWidth = cardElement.offsetWidth
      const viewportWidth = window.innerWidth
      const gap = getResponsiveGap(viewportWidth)

      const totalOffset = activeIndex * (cardWidth + gap)
      const centerOffset = (containerWidth - cardWidth) / 2
      const baseOffset = centerOffset - totalOffset

      gsap.to(trackRef.current, {
        x: baseOffset + dragOffsetRef.current * 0.5,
        duration: 0.1,
        ease: 'power2.out',
      })
    }
  }, [isDragging, activeIndex])

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)

    const dragOffset = dragOffsetRef.current
    const velocity = velocityRef.current

    // Determine direction based on drag + velocity
    const threshold = 50
    const velocityThreshold = 0.25

    if (dragOffset > threshold || velocity > velocityThreshold) {
      goToPrev()
    } else if (dragOffset < -threshold || velocity < -velocityThreshold) {
      goToNext()
    } else {
      // Snap back
      goToCard(activeIndex, true)
    }

    dragOffsetRef.current = 0
    velocityRef.current = 0
  }, [isDragging, goToPrev, goToNext, goToCard, activeIndex])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  // Wheel navigation with proper debounce - Throttled
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isAnimatingRef.current) return

    // Clear previous timeout
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current)
    }

    // Prevent scroll if significant horizontal/vertical delta
    if (Math.abs(e.deltaY) > 15 || Math.abs(e.deltaX) > 15) {
      e.preventDefault()
    }

    // Debounce wheel events
    wheelTimeoutRef.current = setTimeout(() => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX
      
      if (delta > 25) {
        goToNext()
      } else if (delta < -25) {
        goToPrev()
      }
    }, 40)
  }, [goToNext, goToPrev])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }
    }
  }, [handleWheel])

  return (
    <div
      ref={containerRef}
      className="carousel-viewport relative w-full h-full flex items-center justify-center"
      role="region"
      aria-label="Design showcase gallery"
      aria-roledescription="carousel"
    >
      {/* Cards track - Perfectly centered with responsive gaps */}
      <div
        ref={trackRef}
        className={cn(
          'flex items-center justify-center',
          // Z-index above dots but below arrow buttons
          'z-30',
          // Responsive gaps - optimized for each breakpoint
          'gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-11',
          'min-[1440px]:gap-11 min-[1600px]:gap-12 min-[1920px]:gap-14',
          'will-change-transform gpu-accelerated',
          isDragging ? 'cursor-grabbing' : 'cursor-grab',
        )}
        style={{ touchAction: 'pan-y pinch-zoom' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {landings.map((landing, index) => (
          <ShowcaseCard
            key={landing.id}
            landing={landing}
            index={index}
            isActive={index === activeIndex}
            totalCards={totalCards}
          />
        ))}
      </div>

      {/* Navigation arrows - Premium positioning with safe margins */}
      <div className="absolute left-4 right-4 sm:left-6 sm:right-6 md:left-10 md:right-10 lg:left-14 lg:right-14 xl:left-16 xl:right-16 2xl:left-20 2xl:right-20 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-50">
        {/* Previous button */}
        <button
          onClick={goToPrev}
          disabled={activeIndex === 0}
          className={cn(
            'pointer-events-auto',
            'flex items-center justify-center',
            // Responsive sizing with good touch targets
            'w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15',
            'rounded-full',
            'bg-black/50 backdrop-blur-2xl',
            'border border-white/[0.06]',
            'text-white/50',
            'transition-all duration-400 ease-out',
            'hover:bg-black/70 hover:border-white/[0.12] hover:text-white/90',
            'hover:scale-105',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
            'disabled:opacity-0 disabled:pointer-events-none disabled:scale-100',
            'active:scale-95',
            // GPU optimization
            'will-change-transform',
          )}
          aria-label="Previous experience"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={activeIndex === totalCards - 1}
          className={cn(
            'pointer-events-auto',
            'flex items-center justify-center',
            'w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15',
            'rounded-full',
            'bg-black/50 backdrop-blur-2xl',
            'border border-white/[0.06]',
            'text-white/50',
            'transition-all duration-400 ease-out',
            'hover:bg-black/70 hover:border-white/[0.12] hover:text-white/90',
            'hover:scale-105',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-black',
            'disabled:opacity-0 disabled:pointer-events-none disabled:scale-100',
            'active:scale-95',
            'will-change-transform',
          )}
          aria-label="Next experience"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Bottom navigation - Centered dots with proper spacing */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {/* Dots navigation */}
          <nav
            className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 pointer-events-auto"
            aria-label="Gallery navigation"
          >
            {landings.map((landing, index) => (
              <button
                key={landing.id}
                onClick={() => goToCard(index)}
                className={cn(
                  'group relative transition-all duration-500 ease-out rounded-full',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                  'will-change-transform pointer-events-auto',
                  index === activeIndex
                    ? 'w-10 sm:w-12 md:w-14 h-2 sm:h-2.5 bg-white/90'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/20 hover:bg-white/45 hover:scale-125',
                )}
                aria-label={`Go to ${landing.name}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              >
                {/* Tooltip on hover */}
                <span className={cn(
                  'absolute -top-9 sm:-top-10 left-1/2 -translate-x-1/2',
                  'px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg',
                  'bg-black/90 backdrop-blur-sm border border-white/10',
                  'text-[10px] sm:text-xs font-medium text-white whitespace-nowrap',
                  'opacity-0 scale-95 transition-all duration-300',
                  'pointer-events-none',
                  'group-hover:opacity-100 group-hover:scale-100',
                  index === activeIndex && 'hidden',
                )}>
                  {landing.name}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Progress counter - Top right with safe margin */}
      <div className="absolute top-6 sm:top-8 md:top-10 lg:top-12 right-6 sm:right-8 md:right-10 lg:right-14 z-20 pointer-events-none">
        <div className="flex flex-col items-end gap-2 sm:gap-2.5">
          {/* Counter with fluid sizing */}
          <div className="flex items-baseline gap-1.5 sm:gap-2 font-mono">
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 tracking-tight tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-sm sm:text-base text-white/25 font-normal">/</span>
            <span className="text-sm sm:text-base text-white/25 tabular-nums">
              {String(totalCards).padStart(2, '0')}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-16 sm:w-18 md:w-20 h-px bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-white/50 rounded-full will-change-transform"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>

      {/* Current landing name - Bottom left with safe margin */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-6 sm:left-8 md:left-10 lg:left-14 z-20 pointer-events-none">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 sm:w-10 h-px bg-white/15" />
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/35">
            {landings[activeIndex]?.name}
          </span>
        </div>
      </div>
    </div>
  )
}

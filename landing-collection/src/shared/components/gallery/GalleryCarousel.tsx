import { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/shared/utils'
import { GalleryCard } from './GalleryCard'
import type { LandingConfig } from '@/shared/types'

interface GalleryCarouselProps {
  landings: LandingConfig[]
}

export function GalleryCarousel({ landings }: GalleryCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef(0)
  const dragOffsetRef = useRef(0)
  const lastWheelTime = useRef(0)

  const totalCards = landings.length

  // Navigate to specific card
  const goToCard = useCallback((index: number) => {
    const clampedIndex = Math.max(0, Math.min(totalCards - 1, index))
    setActiveIndex(clampedIndex)
  }, [totalCards])

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
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrev, goToNext])

  // Animate track position
  useEffect(() => {
    if (!trackRef.current || !containerRef.current) return

    // Calculate card width based on viewport
    const containerWidth = containerRef.current.offsetWidth
    const cardElement = trackRef.current.children[0] as HTMLElement
    if (!cardElement) return

    const cardWidth = cardElement.offsetWidth
    const gap = 32 // gap-8 = 2rem = 32px

    // Calculate offset to center the active card
    const totalOffset = activeIndex * (cardWidth + gap)
    const centerOffset = (containerWidth - cardWidth) / 2
    const offset = centerOffset - totalOffset

    gsap.to(trackRef.current, {
      x: offset,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [activeIndex])

  // Touch/Mouse drag handling
  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true)
    dragStartRef.current = clientX
    dragOffsetRef.current = 0
  }, [])

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return
    dragOffsetRef.current = clientX - dragStartRef.current
  }, [isDragging])

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 80 // Minimum drag distance to trigger navigation
    const dragOffset = dragOffsetRef.current

    if (dragOffset > threshold) {
      goToPrev()
    } else if (dragOffset < -threshold) {
      goToNext()
    }

    dragOffsetRef.current = 0
  }, [isDragging, goToPrev, goToNext])

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
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

  // Wheel navigation with debounce
  const handleWheel = useCallback((e: WheelEvent) => {
    const now = Date.now()
    const timeSinceLastWheel = now - lastWheelTime.current

    // Debounce wheel events
    if (timeSinceLastWheel < 300) return

    // Handle vertical scroll as navigation
    if (Math.abs(e.deltaY) > 30) {
      e.preventDefault()
      lastWheelTime.current = now

      if (e.deltaY > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
  }, [goToNext, goToPrev])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      role="region"
      aria-label="Galería de landing pages"
      aria-roledescription="carrusel"
    >
      {/* Cards track */}
      <div
        ref={trackRef}
        className={cn(
          'flex items-center gap-8 h-full',
          isDragging ? 'cursor-grabbing' : 'cursor-grab',
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {landings.map((landing, index) => (
          <GalleryCard
            key={landing.id}
            landing={landing}
            index={index}
            isActive={index === activeIndex}
            totalCards={totalCards}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute left-4 right-4 sm:left-8 sm:right-8 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
        {/* Previous button */}
        <button
          onClick={goToPrev}
          disabled={activeIndex === 0}
          className={cn(
            'pointer-events-auto',
            'flex items-center justify-center',
            'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
            'rounded-full',
            'bg-white/5 backdrop-blur-md',
            'border border-white/10',
            'text-white/70',
            'transition-all duration-300',
            'hover:bg-white/10 hover:border-white/20 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
            'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5',
          )}
          aria-label="Landing anterior"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          disabled={activeIndex === totalCards - 1}
          className={cn(
            'pointer-events-auto',
            'flex items-center justify-center',
            'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
            'rounded-full',
            'bg-white/5 backdrop-blur-md',
            'border border-white/10',
            'text-white/70',
            'transition-all duration-300',
            'hover:bg-white/10 hover:border-white/20 hover:text-white',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
            'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/5',
          )}
          aria-label="Landing siguiente"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <nav
          className="flex items-center gap-2 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          aria-label="Navegación de galería"
        >
          {landings.map((landing, index) => (
            <button
              key={landing.id}
              onClick={() => goToCard(index)}
              className={cn(
                'relative transition-all duration-300 rounded-full',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30',
                index === activeIndex
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50',
              )}
              aria-label={`Ir a ${landing.name}`}
              aria-current={index === activeIndex ? 'true' : 'false'}
            />
          ))}
        </nav>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
        <div className="flex items-baseline gap-1 font-mono text-white/50">
          <span className="text-2xl sm:text-3xl font-bold text-white">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-sm">/</span>
          <span className="text-sm">{String(totalCards).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  )
}

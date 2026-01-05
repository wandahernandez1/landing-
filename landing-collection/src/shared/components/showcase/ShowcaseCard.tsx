import { useRef, useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'
import type { LandingConfig } from '@/shared/types'

// High-quality screenshots - Production ready WebP with optimized dimensions
const LANDING_SCREENSHOTS: Record<string, string> = {
  nexusai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=1000&fit=crop&q=85&auto=format',
  vitality: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=1000&fit=crop&q=85&auto=format',
  helixbank: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=1000&fit=crop&q=85&auto=format',
  sentinel: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=1000&fit=crop&q=85&auto=format',
  lumina: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=1000&fit=crop&q=85&auto=format',
  compound: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=1000&fit=crop&q=85&auto=format',
  devcanvas: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=1000&fit=crop&q=85&auto=format',
  nomadatlas: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=1000&fit=crop&q=85&auto=format',
  keystone: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=1000&fit=crop&q=85&auto=format',
  ateliernoir: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=1000&fit=crop&q=85&auto=format',
}

interface ShowcaseCardProps {
  landing: LandingConfig
  index: number
  isActive: boolean
  totalCards: number
}

export function ShowcaseCard({ landing, index, isActive, totalCards }: ShowcaseCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const rafRef = useRef<number | null>(null)
  const prefersReducedMotionRef = useRef(false)

  // Check for reduced motion on mount
  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Preload next image on hover
  useEffect(() => {
    if (isActive && isHovered) {
      const nextIndex = (index + 1) % totalCards
      const prevIndex = (index - 1 + totalCards) % totalCards
      const keys = Object.keys(LANDING_SCREENSHOTS)
      
      ;[nextIndex, prevIndex].forEach(idx => {
        const key = keys[idx]
        if (key && LANDING_SCREENSHOTS[key]) {
          const img = new Image()
          img.src = LANDING_SCREENSHOTS[key]
        }
      })
    }
  }, [isActive, isHovered, index, totalCards])

  // Card state animations - GPU optimized
  useEffect(() => {
    if (!cardRef.current) return
    if (prefersReducedMotionRef.current) {
      // Simple opacity transition for reduced motion
      gsap.to(cardRef.current, {
        opacity: isActive ? 1 : 0.35,
        duration: 0.3,
      })
      return
    }

    const card = cardRef.current
    const tl = gsap.timeline()

    if (isActive) {
      tl.to(card, {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        rotateX: 0,
        z: 0,
        filter: 'blur(0px) brightness(1)',
        duration: 0.9,
        ease: 'expo.out',
      })
    } else {
      const distanceFromActive = Math.abs(index - (totalCards / 2))
      const direction = index < totalCards / 2 ? -1 : 1
      
      tl.to(card, {
        scale: 0.85 - distanceFromActive * 0.015,
        opacity: 0.4,
        rotateY: direction * 6,
        rotateX: 1.5,
        z: -120,
        filter: 'blur(1.5px) brightness(0.75)',
        duration: 0.7,
        ease: 'power3.out',
      })
    }

    return () => {
      tl.kill()
    }
  }, [isActive, index, totalCards])

  // Premium 3D hover effect with light tracking
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!innerRef.current || !isActive || !cardRef.current || prefersReducedMotionRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate rotation with damping - reduced for subtlety
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    // Calculate shine position
    const shineX = (x / rect.width) * 100
    const shineY = (y / rect.height) * 100

    // Cancel previous frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      // 3D rotation
      gsap.to(innerRef.current, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: 'power2.out',
      })

      // Light shine effect
      if (shineRef.current) {
        gsap.to(shineRef.current, {
          background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          opacity: 1,
          duration: 0.3,
        })
      }

      // Glow follows cursor
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          background: `radial-gradient(ellipse at ${shineX}% ${shineY}%, rgba(147,112,219,0.22) 0%, transparent 70%)`,
          opacity: 0.7,
          duration: 0.4,
        })
      }
    })
  }, [isActive])

  const handleMouseEnter = useCallback(() => {
    if (!isActive || prefersReducedMotionRef.current) return
    setIsHovered(true)

    gsap.to(innerRef.current, {
      scale: 1.015,
      duration: 0.5,
      ease: 'expo.out',
    })
  }, [isActive])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    if (prefersReducedMotionRef.current) return

    gsap.to(innerRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
    })

    if (shineRef.current) {
      gsap.to(shineRef.current, {
        opacity: 0,
        duration: 0.4,
      })
    }

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.5,
      })
    }
  }, [])

  // Press effect
  const handleMouseDown = useCallback(() => {
    if (!isActive || prefersReducedMotionRef.current) return
    setIsPressed(true)

    gsap.to(innerRef.current, {
      scale: 0.98,
      duration: 0.15,
      ease: 'power2.out',
    })
  }, [isActive])

  const handleMouseUp = useCallback(() => {
    setIsPressed(false)

    if (prefersReducedMotionRef.current) return

    gsap.to(innerRef.current, {
      scale: isHovered ? 1.015 : 1,
      duration: 0.4,
      ease: 'elastic.out(1, 0.4)',
    })
  }, [isHovered])

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  const screenshot = LANDING_SCREENSHOTS[landing.id] || LANDING_SCREENSHOTS.nexusai

  return (
    <div
      ref={cardRef}
      className={cn(
        'showcase-card showcase-card-responsive relative flex-shrink-0',
      )}
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Inner card with 3D transform */}
      <div
        ref={innerRef}
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <Link
          to={landing.path}
          className={cn(
            'showcase-card-inner group relative block overflow-hidden',
            // Responsive border radius - Large and elegant
            'rounded-2xl sm:rounded-[1.75rem] md:rounded-[2rem] lg:rounded-[2.25rem] xl:rounded-[2.5rem]',
            'transition-shadow duration-700',
            isActive && isHovered && !isPressed && 'shadow-showcase-hover',
            !isActive && 'pointer-events-none',
          )}
          aria-label={`View ${landing.name} experience`}
          tabIndex={isActive ? 0 : -1}
        >
          {/* Card background layers */}
          <div className="absolute inset-0 bg-[#0a0a0c]" />
          
          {/* Subtle border gradient */}
          <div className="absolute inset-0 rounded-[inherit] p-px">
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.1] via-white/[0.03] to-white/[0.02]" />
          </div>

          {/* Glass layer */}
          <div 
            className={cn(
              'absolute inset-px rounded-[inherit]',
              'bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent',
              'backdrop-blur-xl',
            )}
          />

          {/* Dynamic shine effect */}
          <div
            ref={shineRef}
            className="absolute inset-0 rounded-[inherit] opacity-0 pointer-events-none z-10"
            style={{ mixBlendMode: 'overlay' }}
          />

          {/* Screenshot container - Stable aspect ratio for all viewports */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[inherit]">
            {/* Loading skeleton with shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-shimmer bg-[length:200%_100%]" />
            )}

            {/* Hero screenshot - object-cover, no distortion */}
            <img
              src={screenshot}
              alt={`${landing.name} preview`}
              loading={index < 3 ? 'eager' : 'lazy'}
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              className={cn(
                'w-full h-full object-cover object-center',
                'transition-all duration-700 ease-out',
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
                isActive && isHovered && 'scale-[1.02]',
              )}
            />

            {/* Cinematic gradient overlay - Better depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
            
            {/* Top vignette - Softer */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
            
            {/* Side vignettes - Subtle for cleaner look */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.3)_100%)]" />

            {/* Ambient glow on hover */}
            <div
              ref={glowRef}
              className="absolute inset-0 opacity-0 pointer-events-none"
            />
          </div>

          {/* Content overlay - Responsive padding */}
          <div className={cn(
            'absolute bottom-0 left-0 right-0',
            'p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8',
          )}>
            <div className="flex items-end justify-between gap-4 sm:gap-6">
              {/* Text content */}
              <div className="flex-1 min-w-0 space-y-2 sm:space-y-2.5 lg:space-y-3">
                {/* Industry badge */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white/40" />
                  <span className={cn(
                    'text-[10px] sm:text-[11px] lg:text-xs',
                    'font-medium uppercase',
                    'tracking-[0.15em] sm:tracking-[0.2em]',
                    'text-white/50',
                  )}>
                    {landing.industry}
                  </span>
                </div>

                {/* Title - Balanced typography for all screens */}
                <h2 className={cn(
                  // Balanced size - reduced for medium screens
                  'text-xl sm:text-2xl md:text-[1.75rem] lg:text-3xl xl:text-4xl',
                  'font-semibold text-white tracking-tight leading-[1.1]',
                  'transition-transform duration-500',
                  isActive && isHovered && 'translate-x-0.5',
                )}>
                  {landing.name}
                </h2>

                {/* Tagline - Balanced typography */}
                <p className={cn(
                  'text-sm sm:text-[15px] md:text-base lg:text-lg',
                  'text-white/55 font-light tracking-tight',
                  'transition-all duration-500 delay-75',
                  isActive && isHovered && 'text-white/65 translate-x-0.5',
                )}>
                  {landing.tagline}
                </p>

                {/* Description - Desktop only */}
                <p className={cn(
                  'hidden xl:block pt-0.5',
                  'text-xs xl:text-sm',
                  'text-white/40 max-w-md leading-relaxed',
                  'transition-all duration-500 delay-100',
                  'line-clamp-2',
                  isActive && isHovered && 'text-white/50',
                )}>
                  {landing.description}
                </p>
              </div>

              {/* CTA Button - Responsive sizing */}
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    'relative flex items-center justify-center',
                    // Responsive button size - Balanced proportions
                    'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 xl:w-14 xl:h-14',
                    'rounded-full',
                    'bg-white text-black',
                    'transition-all duration-500 ease-out',
                    isActive && isHovered && 'scale-105 shadow-[0_0_40px_rgba(255,255,255,0.25)]',
                    isPressed && 'scale-100',
                  )}
                >
                  {/* Button glow ring */}
                  <div className={cn(
                    'absolute inset-0 rounded-full',
                    'bg-white opacity-0',
                    'blur-xl transition-opacity duration-500',
                    isActive && isHovered && 'opacity-25',
                  )} />
                  
                  <ArrowUpRight
                    className={cn(
                      'relative',
                      'w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7',
                      'transition-transform duration-500',
                      isActive && isHovered && 'translate-x-0.5 -translate-y-0.5',
                    )}
                    strokeWidth={1.75}
                  />
                </div>

                {/* CTA label - appears on hover, hidden on mobile */}
                <div className={cn(
                  'hidden sm:block',
                  'absolute -bottom-7 left-1/2 -translate-x-1/2',
                  'whitespace-nowrap text-xs font-medium text-white/50',
                  'transition-all duration-400',
                  'opacity-0 translate-y-2',
                  isActive && isHovered && 'opacity-100 translate-y-0',
                )}>
                  View Experience
                </div>
              </div>
            </div>
          </div>

          {/* Card number - Responsive positioning */}
          <div className={cn(
            'absolute z-20',
            'top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 lg:top-6 lg:left-6',
          )}>
            <div className={cn(
              'flex items-center justify-center',
              'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10',
              'rounded-full',
              'bg-black/35 backdrop-blur-xl',
              'border border-white/[0.06]',
              'text-white/55 text-[10px] sm:text-xs font-medium',
              'transition-all duration-500',
              isActive && isHovered && 'border-white/[0.12] text-white/75',
            )}>
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Theme indicator - Responsive positioning */}
          <div className={cn(
            'absolute z-20',
            'top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6',
          )}>
            <div className={cn(
              'px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-full',
              'bg-black/35 backdrop-blur-xl',
              'border border-white/[0.06]',
              'text-[9px] sm:text-[10px] font-medium text-white/40',
              'transition-all duration-500',
              isActive && isHovered && 'border-white/[0.1] text-white/55',
            )}>
              {landing.theme}
            </div>
          </div>
        </Link>
      </div>

      {/* External ambient glow - Contained, never clipped */}
      <div
        className={cn(
          'absolute -inset-4 sm:-inset-6 -z-10',
          'rounded-[2rem] sm:rounded-[2.5rem]',
          'bg-gradient-to-br from-purple-600/15 via-transparent to-blue-600/15',
          'blur-2xl opacity-0',
          'transition-opacity duration-1000',
          isActive && isHovered && 'opacity-40',
        )}
      />
    </div>
  )
}

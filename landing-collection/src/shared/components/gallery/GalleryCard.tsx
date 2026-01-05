import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'
import type { LandingConfig } from '@/shared/types'

// Screenshot placeholders - En producción usar imágenes reales WebP optimizadas
const LANDING_SCREENSHOTS: Record<string, string> = {
  nexusai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80',
  vitality: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&q=80',
  helixbank: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
  sentinel: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop&q=80',
  lumina: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop&q=80',
  compound: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80',
  devcanvas: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&q=80',
  nomadatlas: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop&q=80',
  keystone: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&q=80',
  ateliernoir: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&q=80',
}

interface GalleryCardProps {
  landing: LandingConfig
  index: number
  isActive: boolean
  totalCards: number
}

export function GalleryCard({ landing, index, isActive, totalCards }: GalleryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Animate card when it becomes active
  useEffect(() => {
    if (!cardRef.current) return

    const card = cardRef.current

    if (isActive) {
      gsap.to(card, {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        z: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    } else {
      const offset = index < totalCards / 2 ? -1 : 1
      gsap.to(card, {
        scale: 0.85,
        opacity: 0.4,
        rotateY: offset * 5,
        z: -100,
        duration: 0.6,
        ease: 'power2.out',
      })
    }
  }, [isActive, index, totalCards])

  // Hover 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isActive) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 30
    const rotateY = (centerX - x) / 30

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    setIsHovered(false)

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: isActive ? 1 : 0.85,
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  const screenshot = LANDING_SCREENSHOTS[landing.id] || LANDING_SCREENSHOTS.nexusai

  return (
    <div
      ref={cardRef}
      className={cn(
        'gallery-card relative flex-shrink-0',
        'w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[50vw]',
        'max-w-[1000px]',
        'transition-transform-none', // Disable CSS transitions, use GSAP
      )}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={landing.path}
        className={cn(
          'group relative block overflow-hidden',
          'rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem]',
          'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
          'border border-white/[0.08]',
          'backdrop-blur-xl',
          'shadow-2xl shadow-black/50',
          'transition-all duration-500',
          isActive && isHovered && 'border-white/[0.15] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)]',
        )}
        aria-label={`Ver landing page de ${landing.name}`}
      >
        {/* Card number indicator */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
          <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/70 text-sm font-medium">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Screenshot container */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 animate-pulse" />
          )}

          {/* Hero screenshot */}
          <img
            ref={imageRef}
            src={screenshot}
            alt={`Preview de ${landing.name}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={cn(
              'w-full h-full object-cover',
              'transition-all duration-700 ease-out',
              imageLoaded ? 'opacity-100' : 'opacity-0',
              isActive && isHovered && 'scale-105',
            )}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
          <div className="flex items-end justify-between gap-4">
            {/* Text content */}
            <div className="flex-1 min-w-0">
              {/* Industry tag */}
              <span className="inline-block px-3 py-1 mb-3 text-xs sm:text-sm font-medium text-white/60 bg-white/[0.06] rounded-full border border-white/[0.08]">
                {landing.industry}
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 tracking-tight">
                {landing.name}
              </h2>

              {/* Tagline */}
              <p className="text-base sm:text-lg lg:text-xl text-white/70 font-light">
                {landing.tagline}
              </p>

              {/* Description - visible on larger screens */}
              <p className="hidden lg:block mt-3 text-sm text-white/50 max-w-lg line-clamp-2">
                {landing.description}
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={cn(
                'flex-shrink-0 flex items-center justify-center',
                'w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16',
                'rounded-full',
                'bg-white text-black',
                'transition-all duration-300 ease-out',
                'group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]',
              )}
            >
              <ArrowUpRight
                className={cn(
                  'w-5 h-5 sm:w-6 sm:h-6',
                  'transition-transform duration-300',
                  'group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                )}
                strokeWidth={2}
              />
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 pointer-events-none',
            'bg-gradient-to-t from-purple-500/10 via-transparent to-transparent',
            'transition-opacity duration-500',
            isActive && isHovered && 'opacity-100',
          )}
        />
      </Link>

      {/* External glow */}
      <div
        className={cn(
          'absolute -inset-1 -z-10 rounded-[2.5rem] sm:rounded-[3rem]',
          'bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20',
          'blur-2xl opacity-0',
          'transition-opacity duration-700',
          isActive && isHovered && 'opacity-60',
        )}
      />
    </div>
  )
}

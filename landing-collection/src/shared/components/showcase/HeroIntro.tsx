import { useRef, useEffect, forwardRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/shared/utils'

interface HeroIntroProps {
  title: string
  subtitle: string
  badge?: string
  children?: ReactNode
  className?: string
}

export const HeroIntro = forwardRef<HTMLDivElement, HeroIntroProps>(
  function HeroIntro({ title, subtitle, badge, children, className }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLParagraphElement>(null)
    const dividerRef = useRef<HTMLDivElement>(null)
    const childrenRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!containerRef.current) return

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'expo.out',
          }
        })

        // Initial states
        gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, dividerRef.current, childrenRef.current], {
          opacity: 0,
        })

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { y: 20, filter: 'blur(4px)' })
        }
        if (titleRef.current) {
          gsap.set(titleRef.current, { y: 40, filter: 'blur(8px)' })
        }
        if (subtitleRef.current) {
          gsap.set(subtitleRef.current, { y: 30, filter: 'blur(6px)' })
        }
        if (dividerRef.current) {
          gsap.set(dividerRef.current, { scaleX: 0 })
        }
        if (childrenRef.current) {
          gsap.set(childrenRef.current, { y: 20, filter: 'blur(4px)' })
        }

        // Animate in sequence
        tl.to(badgeRef.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
        }, 0.3)
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
        }, 0.5)
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
        }, 0.7)
        .to(dividerRef.current, {
          opacity: 1,
          scaleX: 1,
          duration: 0.8,
        }, 0.9)
        .to(childrenRef.current, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
        }, 1.1)
      }, containerRef)

      return () => ctx.revert()
    }, [])

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn(
          'relative flex flex-col items-center text-center',
          className
        )}
      >
        {/* Badge */}
        {badge && (
          <div ref={badgeRef} className="mb-6">
            <span className={cn(
              'inline-flex items-center gap-2',
              'px-4 py-2 rounded-full',
              'bg-white/[0.04] backdrop-blur-sm',
              'border border-white/[0.06]',
              'text-[11px] font-medium uppercase tracking-[0.25em] text-white/50',
            )}>
              <span className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1
          ref={titleRef}
          className={cn(
            'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl',
            'font-semibold text-white',
            'tracking-tighter leading-[0.9]',
            'text-balance',
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className={cn(
            'mt-5 sm:mt-6 lg:mt-8',
            'text-base sm:text-lg md:text-xl lg:text-2xl',
            'text-white/50 font-light',
            'max-w-xl lg:max-w-2xl',
            'tracking-tight leading-relaxed',
          )}
        >
          {subtitle}
        </p>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="mt-8 sm:mt-10 lg:mt-12 w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-center"
        />

        {/* Children slot */}
        {children && (
          <div ref={childrenRef} className="mt-6 sm:mt-8">
            {children}
          </div>
        )}
      </div>
    )
  }
)

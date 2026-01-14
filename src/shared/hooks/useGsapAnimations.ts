import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Configure GSAP defaults for better performance
  gsap.config({
    autoSleep: 60,
    force3D: true,
    nullTargetWarn: false,
  });

  // Set default ease for all tweens
  gsap.defaults({
    ease: "power3.out",
    duration: 0.5,
  });
}

// ============================================
// GSAP Configuration - Performance Optimized
// ============================================

const GSAP_CONFIG = {
  // Default ease curves (professional, smooth)
  ease: {
    default: "power3.out",
    smooth: "power2.out",
    bounce: "back.out(1.2)", // Reduced bounce intensity
    elastic: "elastic.out(1, 0.5)",
    linear: "none",
  },
  // Optimized durations (faster for better perceived performance)
  duration: {
    fast: 0.25,
    normal: 0.4,
    slow: 0.6,
    slower: 0.8,
  },
  // Stagger configurations
  stagger: {
    fast: 0.06,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

// ============================================
// Utility: Check for reduced motion preference
// ============================================

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ============================================
// Utility: Check if device is mobile/low-end
// ============================================

function isMobileOrLowEnd(): boolean {
  if (typeof window === "undefined") return false;

  const nav = navigator as Navigator & { deviceMemory?: number };

  // Check device memory
  if (nav.deviceMemory && nav.deviceMemory < 4) return true;

  // Check viewport width
  if (window.innerWidth < 768) return true;

  // Check hardware concurrency
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4)
    return true;

  return false;
}

// ============================================
// Utility: Safe ScrollTrigger cleanup
// ============================================

function cleanupScrollTriggers(ctx: gsap.Context | null): void {
  if (ctx) {
    ctx.revert();
  }
}

// ============================================
// Type Definitions
// ============================================

interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
}

interface ScrollTriggerConfig {
  start?: string;
  end?: string;
  toggleActions?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

// ============================================
// Hook: useGsapContext
// Creates a safe GSAP context with automatic cleanup
// ============================================

export function useGsapContext(scope?: React.RefObject<HTMLElement | null>) {
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Skip animations in SSR or if reduced motion is preferred
    if (typeof window === "undefined") return;

    const scopeElement = scope?.current ?? document.body;
    ctxRef.current = gsap.context(() => {}, scopeElement);

    return () => {
      cleanupScrollTriggers(ctxRef.current);
      ctxRef.current = null;
    };
  }, [scope]);

  return ctxRef;
}

// ============================================
// Hook: useHeroAnimation
// Standard hero section entrance animation
// ============================================

export function useHeroAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  config?: AnimationConfig
) {
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const container = containerRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: config?.ease ?? GSAP_CONFIG.ease.default,
          duration: config?.duration ?? GSAP_CONFIG.duration.slow,
        },
      });

      // Badge animation
      const badge = container.querySelector("[data-hero-badge]");
      if (badge) {
        tl.fromTo(
          badge,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: GSAP_CONFIG.duration.normal }
        );
      }

      // Title animation
      const title = container.querySelector("[data-hero-title]");
      if (title) {
        const titleChildren =
          title.children.length > 0 ? title.children : [title];
        tl.fromTo(
          titleChildren,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            stagger: config?.stagger ?? GSAP_CONFIG.stagger.normal,
          },
          "-=0.4"
        );
      }

      // Description animation
      const description = container.querySelector("[data-hero-description]");
      if (description) {
        tl.fromTo(
          description,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: GSAP_CONFIG.duration.normal },
          "-=0.5"
        );
      }

      // CTA buttons animation
      const cta = container.querySelector("[data-hero-cta]");
      if (cta) {
        const ctaChildren = cta.children.length > 0 ? cta.children : [cta];
        tl.fromTo(
          ctaChildren,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.normal,
            stagger: GSAP_CONFIG.stagger.fast,
          },
          "-=0.4"
        );
      }

      // Stats animation
      const stats = container.querySelector("[data-hero-stats]");
      if (stats) {
        const statChildren =
          stats.children.length > 0 ? stats.children : [stats];
        tl.fromTo(
          statChildren,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.normal,
            stagger: GSAP_CONFIG.stagger.fast,
          },
          "-=0.3"
        );
      }

      // Visual element animation
      const visual = container.querySelector("[data-hero-visual]");
      if (visual) {
        tl.fromTo(
          visual,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: GSAP_CONFIG.duration.slow },
          "-=0.5"
        );
      }

      // Trust badges animation
      const trust = container.querySelector("[data-hero-trust]");
      if (trust) {
        const trustChildren =
          trust.children.length > 0 ? trust.children : [trust];
        tl.fromTo(
          trustChildren,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: GSAP_CONFIG.duration.fast,
            stagger: GSAP_CONFIG.stagger.fast,
          },
          "-=0.3"
        );
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef, config]);
}

// ============================================
// Hook: useFloatingAnimation
// Smooth floating animation - disabled on mobile for performance
// ============================================

export function useFloatingAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string = ".floating-icon",
  config?: { amplitude?: number; duration?: number; distance?: number }
) {
  useEffect(() => {
    // Skip on reduced motion OR mobile devices
    if (!containerRef.current || prefersReducedMotion() || isMobileOrLowEnd())
      return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements.length) return;

    const amplitude = config?.amplitude ?? config?.distance ?? 10; // Reduced amplitude
    const baseDuration = config?.duration ?? 4; // Slower, fewer cycles

    const ctx = gsap.context(() => {
      elements.forEach((el, index) => {
        gsap.to(el, {
          y: amplitude,
          duration: baseDuration + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, selector, config]);
}

// ============================================
// Hook: useOrbAnimation
// Floating orb animation - disabled on mobile for performance
// ============================================

export function useOrbAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  selector?: string,
  config?: { amplitude?: number; duration?: number }
) {
  useEffect(() => {
    // Skip on reduced motion OR mobile devices - orbs are performance heavy
    if (!containerRef.current || prefersReducedMotion() || isMobileOrLowEnd())
      return;

    // If selector is provided, find elements by selector
    const elements = selector
      ? containerRef.current.querySelectorAll(selector)
      : [containerRef.current];

    if (!elements.length) return;

    const tweens: gsap.core.Tween[] = [];
    const amplitude = config?.amplitude ?? 20; // Reduced from 30
    const duration = config?.duration ?? 10; // Slower animation

    elements.forEach((el, index) => {
      const direction = index % 2 === 0 ? 1 : -1;

      const tween = gsap.to(el, {
        x: amplitude * direction,
        y: amplitude * direction * -0.5,
        duration: duration + index * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      tweens.push(tween);
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [containerRef, selector, config]);
}

// ============================================
// Hook: useScrollReveal
// Reveal elements on scroll with ScrollTrigger
// ============================================

export function useScrollReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string = "[data-reveal]",
  config?: AnimationConfig & ScrollTriggerConfig
) {
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: config?.duration ?? GSAP_CONFIG.duration.slow,
            ease: config?.ease ?? GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: element,
              start: config?.start ?? "top 85%",
              toggleActions: config?.toggleActions ?? "play none none reverse",
            },
          }
        );
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, selector, config]);
}

// ============================================
// Hook: useSectionAnimation
// Standard section animation with header and grid
// ============================================

export function useSectionAnimation(
  sectionRef: React.RefObject<HTMLElement | null>,
  config?: {
    headerSelector?: string;
    gridSelector?: string;
    itemSelector?: string;
  }
) {
  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const section = sectionRef.current;
    const headerSelector =
      config?.headerSelector ?? ".section-header, [data-section-header]";
    const gridSelector =
      config?.gridSelector ?? ".section-grid, [data-section-grid]";
    const itemSelector =
      config?.itemSelector ?? ".section-card, [data-section-card]";

    const ctx = gsap.context(() => {
      // Header animation
      const header = section.querySelector(headerSelector);
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Grid items animation
      const grid = section.querySelector(gridSelector);
      const items = section.querySelectorAll(itemSelector);

      if (items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            stagger: GSAP_CONFIG.stagger.normal,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: grid ?? items[0],
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [sectionRef, config]);
}

// ============================================
// Hook: usePricingAnimation
// Pricing section specific animation
// ============================================

export function usePricingAnimation(
  sectionRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // Header animation
      const header = section.querySelector(
        ".pricing-header, [data-pricing-header]"
      );
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Cards animation
      const cards = section.querySelectorAll(
        ".pricing-card, [data-pricing-card]"
      );
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            stagger: GSAP_CONFIG.stagger.slow,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Feature items animation
      const features = section.querySelectorAll(
        ".feature-item, [data-feature-item]"
      );
      if (features.length > 0) {
        gsap.fromTo(
          features,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: GSAP_CONFIG.duration.fast,
            stagger: 0.05,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: cards[0] ?? features[0],
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Popular badge pulse
      const popularBadge = section.querySelector(
        ".popular-badge, [data-popular-badge]"
      );
      if (popularBadge) {
        gsap.to(popularBadge, {
          scale: 1.05,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}

// ============================================
// Hook: useTestimonialsAnimation
// Testimonials section specific animation
// ============================================

export function useTestimonialsAnimation(
  sectionRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // Header animation
      const header = section.querySelector(
        ".testimonials-header, [data-testimonials-header]"
      );
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Cards animation
      const cards = section.querySelectorAll(
        ".testimonial-card, [data-testimonial-card]"
      );
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            stagger: GSAP_CONFIG.stagger.normal,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Quote icons floating
      const quoteIcons = section.querySelectorAll(
        ".quote-icon, [data-quote-icon]"
      );
      if (quoteIcons.length > 0) {
        quoteIcons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -8,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2,
          });
        });
      }

      // Social stats animation
      const stats = section.querySelectorAll(
        ".social-stat, [data-social-stat]"
      );
      if (stats.length > 0) {
        gsap.fromTo(
          stats,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.normal,
            stagger: GSAP_CONFIG.stagger.fast,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: stats[0],
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}

// ============================================
// Hook: useFeaturesAnimation
// Features section specific animation
// ============================================

export function useFeaturesAnimation(
  sectionRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // Header animation
      const header = section.querySelector(
        ".features-header, .section-header, [data-features-header]"
      );
      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: header,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Feature cards animation
      const cards = section.querySelectorAll(
        ".feature-card, [data-feature-card]"
      );
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.slow,
            stagger: GSAP_CONFIG.stagger.normal,
            ease: GSAP_CONFIG.ease.default,
            scrollTrigger: {
              trigger: cards[0],
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Icon wrappers hover animation setup
      const iconWrappers = section.querySelectorAll(
        ".icon-wrapper, [data-icon-wrapper]"
      );
      if (iconWrappers.length > 0) {
        iconWrappers.forEach((wrapper) => {
          wrapper.addEventListener("mouseenter", () => {
            gsap.to(wrapper, {
              scale: 1.1,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.bounce,
            });
          });
          wrapper.addEventListener("mouseleave", () => {
            gsap.to(wrapper, {
              scale: 1,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.smooth,
            });
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}

// ============================================
// Hook: useCtaAnimation
// CTA section specific animation
// ============================================

export function useCtaAnimation(
  sectionRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!sectionRef.current || prefersReducedMotion()) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Icon animation
      const icon = section.querySelector(".cta-icon, [data-cta-icon]");
      if (icon) {
        tl.fromTo(
          icon,
          { opacity: 0, scale: 0, rotation: -30 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: GSAP_CONFIG.duration.slow,
            ease: GSAP_CONFIG.ease.bounce,
          }
        );
      }

      // Content animation
      const content = section.querySelector(".cta-content, [data-cta-content]");
      if (content) {
        const contentChildren =
          content.children.length > 0 ? content.children : [content];
        tl.fromTo(
          contentChildren,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.normal,
            stagger: GSAP_CONFIG.stagger.normal,
            ease: GSAP_CONFIG.ease.default,
          },
          "-=0.4"
        );
      }

      // Buttons animation
      const buttons = section.querySelector(".cta-buttons, [data-cta-buttons]");
      if (buttons) {
        const buttonChildren =
          buttons.children.length > 0 ? buttons.children : [buttons];
        tl.fromTo(
          buttonChildren,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.fast,
            stagger: GSAP_CONFIG.stagger.fast,
            ease: GSAP_CONFIG.ease.default,
          },
          "-=0.3"
        );
      }

      // Benefits animation
      const benefits = section.querySelectorAll(
        ".cta-benefit, [data-cta-benefit]"
      );
      if (benefits.length > 0) {
        tl.fromTo(
          benefits,
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: GSAP_CONFIG.duration.fast,
            stagger: GSAP_CONFIG.stagger.fast,
            ease: GSAP_CONFIG.ease.smooth,
          },
          "-=0.2"
        );
      }

      // Floating elements animation
      const floatingElements = section.querySelectorAll(
        ".floating-element, [data-floating]"
      );
      if (floatingElements.length > 0) {
        floatingElements.forEach((el, index) => {
          gsap.to(el, {
            y: -20 + Math.random() * 10,
            x: -10 + Math.random() * 20,
            rotation: -5 + Math.random() * 10,
            duration: 4 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3,
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, [sectionRef]);
}

// ============================================
// Hook: useCountUp
// Animated number counter
// ============================================

export function useCountUp(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string = "[data-count]",
  config?: { duration?: number; delay?: number }
) {
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        const target = parseFloat(
          element.getAttribute("data-count") ||
            element.getAttribute("data-value") ||
            element.textContent ||
            "0"
        );
        const suffix = element.getAttribute("data-suffix") || "";
        const prefix = element.getAttribute("data-prefix") || "";
        const decimals = target % 1 !== 0 ? 1 : 0;

        const obj = { value: 0 };

        gsap.to(obj, {
          value: target,
          duration: config?.duration ?? 2,
          delay: config?.delay ?? 0,
          ease: GSAP_CONFIG.ease.smooth,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            const formatted =
              decimals > 0
                ? obj.value.toFixed(decimals)
                : Math.floor(obj.value).toString();
            element.textContent = `${prefix}${formatted}${suffix}`;
          },
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, selector, config]);
}

// ============================================
// Hook: usePulseAnimation
// Repeating pulse animation for attention elements
// ============================================

export function usePulseAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  selector?: string,
  config?: {
    scale?: number;
    duration?: number;
    minOpacity?: number;
    maxOpacity?: number;
  }
) {
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const elements = selector
      ? containerRef.current.querySelectorAll(selector)
      : [containerRef.current];

    if (!elements.length) return;

    const scale = config?.scale ?? 1.05;
    const duration = config?.duration ?? 1.5;
    const minOpacity = config?.minOpacity;
    const maxOpacity = config?.maxOpacity;

    const tweens: gsap.core.Tween[] = [];

    elements.forEach((el) => {
      const animProps: gsap.TweenVars = {
        scale,
        duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      };

      // Add opacity animation if specified
      if (minOpacity !== undefined && maxOpacity !== undefined) {
        gsap.set(el, { opacity: minOpacity });
        animProps.opacity = maxOpacity;
      }

      tweens.push(gsap.to(el, animProps));
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [containerRef, selector, config]);
}

// ============================================
// Hook: useRotationAnimation
// Continuous rotation animation
// ============================================

export function useRotationAnimation(
  containerRef: React.RefObject<HTMLElement | null>,
  selector?: string,
  config?: { duration?: number; direction?: "cw" | "ccw" }
) {
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const elements = selector
      ? containerRef.current.querySelectorAll(selector)
      : [containerRef.current];

    if (!elements.length) return;

    const duration = config?.duration ?? 20;
    const rotation = config?.direction === "ccw" ? -360 : 360;

    const tweens: gsap.core.Tween[] = [];

    elements.forEach((el) => {
      tweens.push(
        gsap.to(el, {
          rotation,
          duration,
          repeat: -1,
          ease: "none",
        })
      );
    });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  }, [containerRef, selector, config]);
}

// ============================================
// Hook: useParallax
// Parallax scrolling effect - DISABLED on mobile
// ============================================

export function useParallax(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string,
  speed: number = 0.3 // Reduced default speed
) {
  useEffect(() => {
    // Parallax is expensive - disable on mobile and reduced motion
    if (!containerRef.current || prefersReducedMotion() || isMobileOrLowEnd())
      return;

    const elements = containerRef.current.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        gsap.to(element, {
          y: 100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, selector, speed]);
}

// ============================================
// Hook: useMagneticButton
// Magnetic hover effect - DISABLED on mobile/touch for performance
// ============================================

export function useMagneticButton(
  containerRef: React.RefObject<HTMLElement | null>,
  selector: string = "[data-magnetic]"
) {
  useEffect(() => {
    // Skip on touch devices, reduced motion, or mobile
    if (!containerRef.current || prefersReducedMotion() || isMobileOrLowEnd())
      return;

    // Additional check for touch devices
    if ("ontouchstart" in window) return;

    const buttons = containerRef.current.querySelectorAll(selector);
    if (!buttons.length) return;

    const handlers = new Map<
      Element,
      { move: (e: MouseEvent) => void; leave: () => void }
    >();

    buttons.forEach((button) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = (button as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.15, // Reduced intensity
          y: y * 0.15,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      button.addEventListener("mousemove", handleMouseMove as EventListener);
      button.addEventListener("mouseleave", handleMouseLeave);

      handlers.set(button, { move: handleMouseMove, leave: handleMouseLeave });
    });

    return () => {
      handlers.forEach(({ move, leave }, button) => {
        button.removeEventListener("mousemove", move as EventListener);
        button.removeEventListener("mouseleave", leave);
      });
    };
  }, [containerRef, selector]);
}

// ============================================
// Hook: useStaggerReveal
// Staggered reveal for list/grid items
// ============================================

export function useStaggerReveal(
  containerRef: React.RefObject<HTMLElement | null>,
  itemSelector: string,
  config?: AnimationConfig &
    ScrollTriggerConfig & { fromX?: number; fromY?: number }
) {
  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) return;

    const items = containerRef.current.querySelectorAll(itemSelector);
    if (!items.length) return;

    const fromProps: gsap.TweenVars = {
      opacity: 0,
      y: config?.fromY ?? 50,
    };

    // Support horizontal stagger
    if (config?.fromX !== undefined) {
      fromProps.x = config.fromX;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(items, fromProps, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: config?.duration ?? GSAP_CONFIG.duration.slow,
        stagger: config?.stagger ?? GSAP_CONFIG.stagger.normal,
        ease: config?.ease ?? GSAP_CONFIG.ease.default,
        scrollTrigger: {
          trigger: containerRef.current,
          start: config?.start ?? "top 75%",
          toggleActions: config?.toggleActions ?? "play none none reverse",
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [containerRef, itemSelector, config]);
}

// ============================================
// Export utility for refreshing ScrollTrigger
// ============================================

export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// ============================================
// Export GSAP config for external use
// ============================================

export { GSAP_CONFIG };

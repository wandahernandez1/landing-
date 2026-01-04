import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function useHeroAnimation() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-badge]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          "[data-hero-title]",
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          "[data-hero-description]",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          "[data-hero-cta]",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          "[data-hero-visual]",
          {
            y: 80,
            opacity: 0,
            scale: 0.95,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          "[data-hero-stats] > *",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

export function useSplitTextAnimation(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      const split = new SplitType(element as HTMLElement, {
        types: "chars,words",
      });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);
}

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    elements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}

export function useStaggerReveal(
  containerSelector: string,
  itemSelector: string
) {
  useEffect(() => {
    const containers = document.querySelectorAll(containerSelector);

    containers.forEach((container) => {
      const items = container.querySelectorAll(itemSelector);

      gsap.from(items, {
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [containerSelector, itemSelector]);
}

export function useParallax(selector: string, speed: number = 0.5) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 100 * speed,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector, speed]);
}

export function useCountUp(selector: string) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      const target = parseFloat(element.getAttribute("data-count") || "0");
      const suffix = element.getAttribute("data-suffix") || "";
      const prefix = element.getAttribute("data-prefix") || "";

      gsap.from(
        { value: 0 },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function () {
            const current = this.targets()[0].value;
            const formatted =
              target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
            element.textContent = `${prefix}${formatted}${suffix}`;
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [selector]);
}

export function useMagneticButton() {
  useEffect(() => {
    const buttons = document.querySelectorAll("[data-magnetic]");

    buttons.forEach((button) => {
      const handleMouseMove = (e: Event) => {
        const event = e as MouseEvent;
        const rect = (button as HTMLElement).getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);
}

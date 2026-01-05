import { useRef } from 'react'
import { ARTISAN_STORIES } from './constants'
import { useSectionAnimation, useStaggerReveal } from '@/shared/hooks'

export function ArtisanStoriesSection() {
  const headerRef = useRef<HTMLElement>(null)
  const storiesRef = useRef<HTMLDivElement>(null)

  useSectionAnimation(headerRef)
  useStaggerReveal(storiesRef, 'article', { stagger: 0.2 })

  return (
    <section 
      id="artisans"
      className="section-padding"
      aria-labelledby="artisans-title"
    >
      <div className="container-editorial">
        {/* Section Header */}
        <header ref={headerRef} className="text-center mb-20 md:mb-28">
          <span className="label block mb-4">Artisan Stories</span>
          <h2 id="artisans-title" className="display-medium max-w-2xl mx-auto">
            The hands behind the craft
          </h2>
        </header>

        {/* Stories */}
        <div ref={storiesRef} className="space-y-24 md:space-y-32">
          {ARTISAN_STORIES.map((story, idx) => (
            <article 
              key={story.id}
              className="story-block"
              style={{ direction: idx % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              {/* Image */}
              <div 
                className="image-editorial aspect-[4/5] md:aspect-[3/4]"
                style={{ direction: 'ltr' }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center" style={{ direction: 'ltr' }}>
                <span className="label block mb-4">{story.subtitle}</span>
                <h3 className="display-small mb-6">{story.title}</h3>
                <p className="body-large">{story.description}</p>
                <div className="divider-subtle mt-10 mb-6" />
                <a href="#" className="btn-text inline-flex items-center gap-2 self-start group">
                  Read their story
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

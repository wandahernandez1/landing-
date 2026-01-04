import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold-400">
            La Experiencia
          </p>
          <h2 className="text-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">
            Lujo sin compromiso
          </h2>
        </header>

        <div className="grid gap-px bg-ivory-50/10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article key={idx} className="bg-charcoal-950 p-10 md:p-12">
              <feature.icon className="h-8 w-8 text-gold-400 mb-8" strokeWidth={1} />
              <h3 className="text-serif mb-4 text-2xl tracking-wide text-ivory-50">
                {feature.title}
              </h3>
              <p className="text-ivory-50/50 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

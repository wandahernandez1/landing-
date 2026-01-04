import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Soluciones
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Inteligencia{' '}
            <span className="text-gradient">inmobiliaria</span>
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article key={idx} className="card rounded-2xl p-8">
              <div className="icon-box mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                <feature.icon className="h-7 w-7 text-forest-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-stone-400 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 md:py-40 bg-sand-50">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-600">
            Features
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-sand-900 sm:text-5xl md:text-6xl">
            Todo para tu{' '}
            <span className="text-gradient">aventura</span>
          </h2>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, idx) => (
            <article key={idx} className="card rounded-2xl p-8">
              <div className="icon-box mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                <feature.icon className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-sand-900">
                {feature.title}
              </h3>
              <p className="text-sand-800/70 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

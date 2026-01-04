import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-navy-900" aria-labelledby="features-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold-500">
            Servicios
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Growth integral para
            <br />
            <span className="text-gradient">tu empresa B2B</span>
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card rounded-2xl p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-500/20">
                <feature.icon className="h-7 w-7 text-gold-500" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-navy-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

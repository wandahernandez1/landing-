import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-white" aria-labelledby="features-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-600">
            Características
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-indigo-950 sm:text-5xl">
            Aprende de la
            <br />
            <span className="text-gradient">mejor manera</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card rounded-2xl p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100">
                <feature.icon className="h-7 w-7 text-amber-600" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-indigo-950">{feature.title}</h3>
              <p className="text-indigo-900/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

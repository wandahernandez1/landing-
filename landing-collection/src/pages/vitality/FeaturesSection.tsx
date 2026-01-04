import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-white" aria-labelledby="features-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-emerald-600">
            Beneficios
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Todo para tu
            <br />
            <span className="text-gradient">transformación</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card rounded-3xl p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                <feature.icon className="h-7 w-7 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-stone-900">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

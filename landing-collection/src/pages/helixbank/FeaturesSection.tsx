import { FEATURES } from './constants'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 bg-slate-950" aria-labelledby="features-title">
      <div className="container-custom">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-cyan-400">
            Productos
          </p>
          <h2 id="features-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Todo lo que necesitas
            <br />
            <span className="text-gradient">en un solo lugar</span>
          </h2>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="card rounded-2xl p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20">
                <feature.icon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

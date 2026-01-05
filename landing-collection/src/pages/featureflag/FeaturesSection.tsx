import { useRef, useState } from 'react'
import { 
  Flag, Users, Percent, GitBranch, Code2, 
  Check, Copy, ChevronRight, Sparkles, AlertCircle
} from 'lucide-react'

// Release scenarios
const RELEASE_SCENARIOS = [
  {
    id: 'gradual',
    title: 'Gradual Rollout',
    icon: Percent,
    description: 'Release to 1% → 10% → 50% → 100% of users',
    timeline: ['1%', '10%', '50%', '100%'],
  },
  {
    id: 'beta',
    title: 'Beta Program',
    icon: Users,
    description: 'Early access for opted-in beta testers',
    timeline: ['Beta', 'Early Access', 'GA'],
  },
  {
    id: 'canary',
    title: 'Canary Release',
    icon: AlertCircle,
    description: 'Test with internal team before public release',
    timeline: ['Internal', 'Canary', 'Production'],
  },
  {
    id: 'trunk',
    title: 'Trunk-based Dev',
    icon: GitBranch,
    description: 'Ship to main, control exposure with flags',
    timeline: ['Merge', 'Flag Off', 'Flag On'],
  },
]

// Code integration tabs
const SDK_EXAMPLES = {
  react: `import { useFlag } from '@featureflag/react'

function NewFeature() {
  const showFeature = useFlag('new-checkout')
  
  if (!showFeature) return null
  
  return <NewCheckout />
}`,
  node: `import { FeatureFlag } from '@featureflag/node'

const ff = new FeatureFlag('your-api-key')

app.get('/checkout', async (req, res) => {
  const enabled = await ff.isEnabled(
    'new-checkout', 
    { userId: req.user.id }
  )
  
  if (enabled) {
    return newCheckoutHandler(req, res)
  }
  return legacyCheckoutHandler(req, res)
})`,
  python: `from featureflag import FeatureFlag

ff = FeatureFlag('your-api-key')

@app.route('/checkout')
def checkout():
    if ff.is_enabled('new-checkout', user_id=user.id):
        return new_checkout()
    return legacy_checkout()`,
  go: `import "github.com/featureflag/go"

func main() {
    ff := featureflag.New("your-api-key")
    
    if ff.IsEnabled("new-checkout", user.ID) {
        return NewCheckout()
    }
    return LegacyCheckout()
}`,
}

// Dashboard preview elements
const DASHBOARD_FLAGS = [
  { name: 'new-checkout', enabled: true, rollout: 75, environments: ['prod', 'staging'] },
  { name: 'dark-mode', enabled: true, rollout: 100, environments: ['prod'] },
  { name: 'ai-suggestions', enabled: false, rollout: 0, environments: ['staging'] },
  { name: 'beta-features', enabled: true, rollout: 10, environments: ['prod'] },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeScenario, setActiveScenario] = useState(0)
  const [activeSDK, setActiveSDK] = useState<'react' | 'node' | 'python' | 'go'>('react')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(SDK_EXAMPLES[activeSDK])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40" aria-labelledby="features-title">
      <div className="absolute inset-0 flag-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* Release Scenarios */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400">Release Strategies</p>
            <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ship with{' '}<span className="text-gradient">confidence</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Choose the release strategy that fits your team. Rollback instantly if something goes wrong.
            </p>
          </header>

          {/* Scenario cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {RELEASE_SCENARIOS.map((scenario, idx) => (
              <button
                key={scenario.id}
                onClick={() => setActiveScenario(idx)}
                className={`text-left p-6 rounded-2xl border transition-all ${
                  activeScenario === idx
                    ? 'bg-teal-500/10 border-teal-500'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  activeScenario === idx ? 'bg-teal-500/20' : 'bg-slate-800'
                }`}>
                  <scenario.icon className={`w-5 h-5 ${activeScenario === idx ? 'text-teal-400' : 'text-slate-500'}`} />
                </div>
                <h3 className="font-semibold text-white mb-2">{scenario.title}</h3>
                <p className="text-sm text-slate-500">{scenario.description}</p>
              </button>
            ))}
          </div>

          {/* Active scenario timeline */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2" />
              {RELEASE_SCENARIOS[activeScenario].timeline.map((step, idx) => (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 border-2 border-teal-500 flex items-center justify-center text-teal-400 font-bold">
                    {idx + 1}
                  </div>
                  <span className="mt-2 text-sm text-slate-400">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Integration */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            {/* Code block */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
              {/* Language tabs */}
              <div className="flex items-center gap-1 p-2 border-b border-slate-800 bg-slate-900">
                {(['react', 'node', 'python', 'go'] as const).map((sdk) => (
                  <button
                    key={sdk}
                    onClick={() => setActiveSDK(sdk)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSDK === sdk
                        ? 'bg-teal-500/20 text-teal-400'
                        : 'text-slate-500 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {sdk.charAt(0).toUpperCase() + sdk.slice(1)}
                  </button>
                ))}
              </div>

              {/* Code */}
              <div className="relative p-6">
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                  <code>{SDK_EXAMPLES[activeSDK]}</code>
                </pre>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                <Code2 className="inline w-6 h-6 text-teal-400 mr-2" />
                First-class SDKs
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Type-safe SDKs for every major platform. Initialize once, use flags anywhere. 
                Local evaluation for blazing-fast performance.
              </p>

              <div className="space-y-4">
                {[
                  { title: '10+ SDKs', desc: 'React, Node, Python, Go, Ruby, iOS, Android...' },
                  { title: 'Local evaluation', desc: 'Flags checked locally, no network calls' },
                  { title: 'Type safety', desc: 'Full TypeScript/generics support' },
                  { title: 'Edge-ready', desc: 'Works in serverless and edge runtimes' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal-400">Dashboard</p>
            <h3 className="text-3xl font-bold tracking-tight">
              Visual flag management
            </h3>
          </header>

          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Dashboard header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-2">
                <Flag className="w-5 h-5 text-teal-400" />
                <span className="font-semibold text-white">Feature Flags</span>
                <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 text-xs">
                  {DASHBOARD_FLAGS.length} flags
                </span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition-colors">
                <Sparkles className="w-4 h-4" />
                Create Flag
              </button>
            </div>

            {/* Flags list */}
            <div className="divide-y divide-slate-800">
              {DASHBOARD_FLAGS.map((flag) => (
                <div key={flag.name} className="flex items-center justify-between px-6 py-4 hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${flag.enabled ? 'bg-green-400' : 'bg-slate-600'}`} />
                    <div>
                      <p className="font-mono text-white">{flag.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {flag.environments.map((env) => (
                          <span key={env} className="text-xs text-slate-500 px-1.5 py-0.5 rounded bg-slate-800">
                            {env}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-slate-400">Rollout</p>
                      <p className="font-bold text-white">{flag.rollout}%</p>
                    </div>
                    <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${flag.enabled ? 'bg-teal-500' : 'bg-slate-600'}`}
                        style={{ width: `${flag.rollout}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

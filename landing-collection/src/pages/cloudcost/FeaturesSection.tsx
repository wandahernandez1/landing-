import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { Cloud, Server, Database, Network, HardDrive, DollarSign, TrendingDown, AlertTriangle } from 'lucide-react'

// Cloud providers
const CLOUD_PROVIDERS = [
  { id: 'aws', name: 'AWS', color: 'from-orange-500 to-orange-600' },
  { id: 'gcp', name: 'GCP', color: 'from-blue-500 to-blue-600' },
  { id: 'azure', name: 'Azure', color: 'from-cyan-500 to-cyan-600' },
]

// Service costs by provider
const SERVICE_COSTS: Record<string, { name: string; icon: React.ElementType; cost: number; waste: number; savings: number }[]> = {
  aws: [
    { name: 'EC2 Compute', icon: Server, cost: 12450, waste: 34, savings: 4233 },
    { name: 'RDS Database', icon: Database, cost: 8200, waste: 22, savings: 1804 },
    { name: 'S3 Storage', icon: HardDrive, cost: 3150, waste: 15, savings: 472 },
    { name: 'CloudFront CDN', icon: Network, cost: 2100, waste: 8, savings: 168 },
  ],
  gcp: [
    { name: 'Compute Engine', icon: Server, cost: 9800, waste: 28, savings: 2744 },
    { name: 'Cloud SQL', icon: Database, cost: 6500, waste: 18, savings: 1170 },
    { name: 'Cloud Storage', icon: HardDrive, cost: 2800, waste: 12, savings: 336 },
    { name: 'Cloud CDN', icon: Network, cost: 1500, waste: 5, savings: 75 },
  ],
  azure: [
    { name: 'Virtual Machines', icon: Server, cost: 11200, waste: 31, savings: 3472 },
    { name: 'SQL Database', icon: Database, cost: 7400, waste: 25, savings: 1850 },
    { name: 'Blob Storage', icon: HardDrive, cost: 2600, waste: 14, savings: 364 },
    { name: 'CDN', icon: Network, cost: 1800, waste: 6, savings: 108 },
  ],
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProvider, setSelectedProvider] = useState('aws')

  const services = SERVICE_COSTS[selectedProvider] || []
  const totalCost = services.reduce((sum, s) => sum + s.cost, 0)
  const totalSavings = services.reduce((sum, s) => sum + s.savings, 0)
  const avgWaste = Math.round(services.reduce((sum, s) => sum + s.waste, 0) / services.length)

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 cloud-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">Cost Explorer</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Multi-cloud{' '}<span className="text-gradient">visibility</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            See all your cloud costs in one dashboard
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          {/* Provider tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {CLOUD_PROVIDERS.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={cn(
                  'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all',
                  selectedProvider === provider.id
                    ? `bg-gradient-to-r ${provider.color} text-white`
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                )}
              >
                <Cloud className="w-4 h-4" />
                {provider.name}
              </button>
            ))}
          </div>

          {/* Summary cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="card rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm text-slate-500">Monthly Spend</span>
              </div>
              <p className="text-3xl font-bold text-white">${totalCost.toLocaleString()}</p>
            </div>
            <div className="card rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-sm text-slate-500">Avg. Waste</span>
              </div>
              <p className="text-3xl font-bold text-yellow-400">{avgWaste}%</p>
            </div>
            <div className="card rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-sm text-slate-500">Potential Savings</span>
              </div>
              <p className="text-3xl font-bold text-green-400">${totalSavings.toLocaleString()}</p>
            </div>
          </div>

          {/* Services breakdown */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="font-semibold text-white">Service Breakdown</h3>
              <span className="text-sm text-slate-500">Last 30 days</span>
            </div>
            <div className="divide-y divide-slate-800">
              {services.map((service) => (
                <div key={service.name} className="px-6 py-4 hover:bg-slate-800/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{service.name}</p>
                        <p className="text-sm text-slate-500">${service.cost.toLocaleString()}/mo</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-400 font-medium">-${service.savings.toLocaleString()}</p>
                      <p className="text-xs text-slate-500">potential savings</p>
                    </div>
                  </div>
                  
                  {/* Waste indicator */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full flex">
                        <div 
                          className="bg-blue-500"
                          style={{ width: `${100 - service.waste}%` }}
                        />
                        <div 
                          className="bg-yellow-500"
                          style={{ width: `${service.waste}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-yellow-400 w-16 text-right">{service.waste}% waste</span>
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

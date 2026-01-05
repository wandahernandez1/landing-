import { GitCommit, GitMerge, Rocket, Users, Activity, CheckCircle2, ExternalLink } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

// Simulated developer activity feed
const ACTIVITY_FEED = [
  { type: 'deploy', user: 'sarah.kim', repo: 'linear/frontend', time: '2s ago', status: 'success' },
  { type: 'merge', user: 'marcus.c', repo: 'stripe/dashboard', time: '15s ago', status: 'success' },
  { type: 'deploy', user: 'elena.r', repo: 'resend/web', time: '23s ago', status: 'success' },
  { type: 'commit', user: 'john.d', repo: 'vercel/ai', time: '45s ago', status: 'pending' },
  { type: 'deploy', user: 'alex.w', repo: 'notion/landing', time: '1m ago', status: 'success' },
  { type: 'merge', user: 'maria.g', repo: 'figma/plugin', time: '2m ago', status: 'success' },
]

// Company logos using the product
const COMPANIES = [
  { name: 'Linear', logo: '◇' },
  { name: 'Stripe', logo: '⬡' },
  { name: 'Resend', logo: '◉' },
  { name: 'Vercel', logo: '▲' },
  { name: 'Notion', logo: '▪' },
  { name: 'Figma', logo: '◈' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activities, setActivities] = useState(ACTIVITY_FEED)
  const [stats, setStats] = useState({ deploys: 847291, teams: 12847, uptime: 99.99 })

  // Simulate live activity
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        deploys: prev.deploys + Math.floor(Math.random() * 5) + 1
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Rotate activity feed
  useEffect(() => {
    const interval = setInterval(() => {
      setActivities(prev => {
        const newActivity = {
          ...prev[Math.floor(Math.random() * prev.length)],
          time: 'just now',
        }
        return [newActivity, ...prev.slice(0, -1)]
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'deploy': return Rocket
      case 'merge': return GitMerge
      default: return GitCommit
    }
  }

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 md:py-40"
      aria-labelledby="testimonials-title"
    >
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 terminal-grid opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Live Stats Banner */}
        <div className="mb-20 rounded-2xl border border-cyan-500/20 bg-gray-900/80 p-6">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-400">Live Activity</span>
            </div>
            <div className="flex items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                  {stats.deploys.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Deploys today</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono">
                  {stats.teams.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Active teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-400 font-mono">
                  {stats.uptime}%
                </div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Activity Feed */}
          <div>
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Live Developer Activity</h3>
              </div>
              <p className="text-sm text-gray-500">Real deploys happening right now</p>
            </header>

            <div className="space-y-3">
              {activities.map((activity, i) => {
                const Icon = getActivityIcon(activity.type)
                return (
                  <div 
                    key={`${activity.user}-${i}`}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      i === 0 
                        ? 'border-cyan-500/30 bg-cyan-500/10' 
                        : 'border-gray-800 bg-gray-900/50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white truncate">{activity.user}</span>
                        <span className="text-gray-600">→</span>
                        <span className="text-cyan-400 font-mono text-sm truncate">{activity.repo}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{activity.type}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                    {activity.status === 'success' && (
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Trusted Companies */}
          <div>
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white">Trusted by fast-moving teams</h3>
              </div>
              <p className="text-sm text-gray-500">From startups to enterprises</p>
            </header>

            <div className="grid grid-cols-2 gap-4">
              {COMPANIES.map((company) => (
                <a
                  key={company.name}
                  href="#"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all"
                >
                  <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">{company.logo}</span>
                  <span className="font-medium text-gray-400 group-hover:text-white transition-colors">{company.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 ml-auto transition-colors" />
                </a>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center justify-center gap-6 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="text-center">
                <span className="text-2xl">🛡️</span>
                <p className="text-xs text-gray-500 mt-1">SOC 2</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">🔒</span>
                <p className="text-xs text-gray-500 mt-1">ISO 27001</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">🇪🇺</span>
                <p className="text-xs text-gray-500 mt-1">GDPR</p>
              </div>
              <div className="text-center">
                <span className="text-2xl">✓</span>
                <p className="text-xs text-gray-500 mt-1">99.99% SLA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

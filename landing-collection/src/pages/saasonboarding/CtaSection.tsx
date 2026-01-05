import { ArrowRight, Target, MessageSquare, FileText, Video, Lightbulb, Puzzle } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Component library preview
const COMPONENTS = [
  { 
    id: 'modal', 
    name: 'Welcome Modal', 
    icon: MessageSquare,
    preview: 'bg-gradient-to-br from-indigo-600 to-purple-600'
  },
  { 
    id: 'checklist', 
    name: 'Checklist', 
    icon: FileText,
    preview: 'bg-gradient-to-br from-blue-600 to-indigo-600'
  },
  { 
    id: 'tour', 
    name: 'Product Tour', 
    icon: Video,
    preview: 'bg-gradient-to-br from-purple-600 to-pink-600'
  },
  { 
    id: 'tooltip', 
    name: 'Tooltip', 
    icon: Lightbulb,
    preview: 'bg-gradient-to-br from-pink-600 to-red-600'
  },
  { 
    id: 'banner', 
    name: 'Banner', 
    icon: Puzzle,
    preview: 'bg-gradient-to-br from-orange-600 to-yellow-600'
  },
]

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 onboard-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* Component Library Preview */}
        <div className="max-w-5xl mx-auto mb-20">
          <header className="text-center mb-12">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 bg-indigo-400 rounded-full opacity-30 animate-ping" />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl shadow-xl shadow-indigo-500/30">
                <Target className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
              Ready-to-use{' '}<span className="text-gradient">components</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              No code required. Just drag, drop, and launch your onboarding.
            </p>
          </header>

          {/* Component grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {COMPONENTS.map((component) => (
              <div
                key={component.id}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
                className={cn(
                  'relative group cursor-pointer rounded-2xl p-6 transition-all duration-300',
                  'bg-slate-900/50 border border-slate-800',
                  hoveredComponent === component.id && 'border-indigo-500/50 scale-105 shadow-lg shadow-indigo-500/20'
                )}
              >
                <div className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all',
                  hoveredComponent === component.id ? component.preview : 'bg-slate-800'
                )}>
                  <component.icon className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-white text-sm">{component.name}</p>
                
                {/* Hover preview tooltip */}
                {hoveredComponent === component.id && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-400 whitespace-nowrap shadow-xl">
                      Click to preview
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            {[
              { value: '15+', label: 'UI Components' },
              { value: '50+', label: 'Templates' },
              { value: '5min', label: 'Setup Time' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-indigo-400">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-6">
            Ready to improve activation?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-lg font-semibold">
              <Target className="h-5 w-5" />
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#" className="btn-secondary rounded-xl px-8 py-4 text-lg font-medium">
              Book Demo
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            14-day free trial • No credit card • 5-minute setup
          </p>

          {/* Trust badges */}
          <div className="mt-12 flex items-center justify-center gap-8">
            {['SOC 2', 'GDPR', 'CCPA'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-slate-500">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <span className="text-xs font-bold">{badge.charAt(0)}</span>
                </div>
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

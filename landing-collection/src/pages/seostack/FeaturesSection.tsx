import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { AlertCircle, CheckCircle2, AlertTriangle, Search, FileText, Link2, Image, Code, Gauge } from 'lucide-react'

// SEO Issue categories
const SEO_CATEGORIES = [
  { id: 'meta', label: 'Meta Tags', icon: FileText },
  { id: 'content', label: 'Content', icon: Search },
  { id: 'links', label: 'Links', icon: Link2 },
  { id: 'images', label: 'Images', icon: Image },
  { id: 'technical', label: 'Technical', icon: Code },
  { id: 'performance', label: 'Performance', icon: Gauge },
]

// Mock issues by category
const ISSUES_DATA: Record<string, { title: string; severity: 'error' | 'warning' | 'passed'; impact: string }[]> = {
  meta: [
    { title: 'Missing meta description on 12 pages', severity: 'error', impact: 'High' },
    { title: 'Title tags too long (>60 chars)', severity: 'warning', impact: 'Medium' },
    { title: 'Canonical URLs properly set', severity: 'passed', impact: '-' },
    { title: 'Open Graph tags missing', severity: 'warning', impact: 'Low' },
  ],
  content: [
    { title: 'Duplicate content detected on 3 pages', severity: 'error', impact: 'High' },
    { title: 'Thin content (<300 words) on 8 pages', severity: 'warning', impact: 'Medium' },
    { title: 'Heading hierarchy is correct', severity: 'passed', impact: '-' },
  ],
  links: [
    { title: '23 broken internal links found', severity: 'error', impact: 'High' },
    { title: 'Orphan pages detected (5)', severity: 'warning', impact: 'Medium' },
    { title: 'External links use nofollow correctly', severity: 'passed', impact: '-' },
  ],
  images: [
    { title: '45 images missing alt text', severity: 'error', impact: 'High' },
    { title: 'Images not optimized (WebP)', severity: 'warning', impact: 'Medium' },
    { title: 'Lazy loading implemented', severity: 'passed', impact: '-' },
  ],
  technical: [
    { title: 'robots.txt is valid', severity: 'passed', impact: '-' },
    { title: 'XML sitemap missing 15 URLs', severity: 'warning', impact: 'Medium' },
    { title: 'Structured data errors on 2 pages', severity: 'error', impact: 'High' },
  ],
  performance: [
    { title: 'LCP > 2.5s on mobile', severity: 'error', impact: 'High' },
    { title: 'CLS issues on 7 pages', severity: 'warning', impact: 'Medium' },
    { title: 'FID within acceptable range', severity: 'passed', impact: '-' },
  ],
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] = useState('meta')
  
  const issues = ISSUES_DATA[selectedCategory] || []
  const errorCount = issues.filter(i => i.severity === 'error').length
  const warningCount = issues.filter(i => i.severity === 'warning').length
  const passedCount = issues.filter(i => i.severity === 'passed').length

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 seo-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">Site Audit</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find & fix{' '}<span className="text-gradient">SEO issues</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Comprehensive audits that catch every technical SEO problem
          </p>
        </header>

        {/* Interactive Audit Demo */}
        <div className="max-w-5xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {SEO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
                  selectedCategory === cat.id
                    ? 'bg-green-500 text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white'
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Issue counts */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <div>
                <p className="text-2xl font-bold text-red-400">{errorCount}</p>
                <p className="text-xs text-slate-500">Errors</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-yellow-400">{warningCount}</p>
                <p className="text-xs text-slate-500">Warnings</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-green-400">{passedCount}</p>
                <p className="text-xs text-slate-500">Passed</p>
              </div>
            </div>
          </div>

          {/* Issues list */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
            <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {SEO_CATEGORIES.find(c => c.id === selectedCategory)?.label} Issues
              </h3>
              <span className="text-sm text-slate-500">{issues.length} checks</span>
            </div>
            <div className="divide-y divide-slate-800">
              {issues.map((issue, idx) => (
                <div 
                  key={idx} 
                  className="px-6 py-4 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {issue.severity === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
                    {issue.severity === 'warning' && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
                    {issue.severity === 'passed' && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                    <span className="text-slate-300">{issue.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {issue.impact !== '-' && (
                      <span className={cn(
                        'text-xs px-2 py-1 rounded-full',
                        issue.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        issue.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-slate-500/20 text-slate-400'
                      )}>
                        {issue.impact} Impact
                      </span>
                    )}
                    {issue.severity !== 'passed' && (
                      <button className="text-sm text-green-400 hover:text-green-300 font-medium">
                        Fix →
                      </button>
                    )}
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

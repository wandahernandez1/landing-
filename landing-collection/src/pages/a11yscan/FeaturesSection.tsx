import { Eye, Keyboard, Monitor, MousePointer, Check, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// WCAG Categories
const WCAG_CATEGORIES = [
  {
    id: 'perceivable',
    name: 'Perceivable',
    icon: Eye,
    description: 'Information must be presentable to users in ways they can perceive.',
    criteria: [
      { code: '1.1.1', name: 'Non-text Content', level: 'A' },
      { code: '1.4.3', name: 'Contrast (Minimum)', level: 'AA' },
      { code: '1.4.11', name: 'Non-text Contrast', level: 'AA' },
    ],
    color: 'blue',
  },
  {
    id: 'operable',
    name: 'Operable',
    icon: Keyboard,
    description: 'User interface components must be operable by all users.',
    criteria: [
      { code: '2.1.1', name: 'Keyboard', level: 'A' },
      { code: '2.4.4', name: 'Link Purpose', level: 'A' },
      { code: '2.5.3', name: 'Label in Name', level: 'A' },
    ],
    color: 'green',
  },
  {
    id: 'understandable',
    name: 'Understandable',
    icon: Monitor,
    description: 'Information and operation must be understandable.',
    criteria: [
      { code: '3.1.1', name: 'Language of Page', level: 'A' },
      { code: '3.2.2', name: 'On Input', level: 'A' },
      { code: '3.3.2', name: 'Labels or Instructions', level: 'A' },
    ],
    color: 'amber',
  },
  {
    id: 'robust',
    name: 'Robust',
    icon: MousePointer,
    description: 'Content must be robust enough for assistive technologies.',
    criteria: [
      { code: '4.1.1', name: 'Parsing', level: 'A' },
      { code: '4.1.2', name: 'Name, Role, Value', level: 'A' },
      { code: '4.1.3', name: 'Status Messages', level: 'AA' },
    ],
    color: 'purple',
  },
]

// Sample issues
const SAMPLE_ISSUES = [
  { element: '<img>', issue: 'Missing alt attribute', severity: 'critical', wcag: '1.1.1' },
  { element: '<button>', issue: 'Low contrast (2.8:1)', severity: 'serious', wcag: '1.4.3' },
  { element: '<a>', issue: 'Non-descriptive link text', severity: 'moderate', wcag: '2.4.4' },
  { element: '<input>', issue: 'Missing label', severity: 'critical', wcag: '3.3.2' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('perceivable')
  const [showFixes, setShowFixes] = useState(false)

  const activeCategory = WCAG_CATEGORIES.find(c => c.id === selectedCategory)!

  const getColorClass = (color: string, type: 'bg' | 'text' | 'border') => {
    const colors: Record<string, Record<string, string>> = {
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
      amber: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/30' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    }
    return colors[color][type]
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40">
      <div className="absolute inset-0 a11y-grid opacity-20" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-400">WCAG Coverage</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Complete{' '}<span className="text-gradient">WCAG 2.1</span>{' '}scanning
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            We check all 4 principles across Level A, AA, and AAA criteria
          </p>
        </header>

        {/* WCAG Categories Tabs */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {WCAG_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all',
                  selectedCategory === category.id
                    ? `${getColorClass(category.color, 'bg')} ${getColorClass(category.color, 'text')} border ${getColorClass(category.color, 'border')}`
                    : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-900'
                )}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Detail */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className={cn('inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4', getColorClass(activeCategory.color, 'bg'))}>
                  <activeCategory.icon className={cn('w-4 h-4', getColorClass(activeCategory.color, 'text'))} />
                  <span className={cn('text-sm font-medium', getColorClass(activeCategory.color, 'text'))}>
                    {activeCategory.name}
                  </span>
                </div>
                <p className="text-slate-300 mb-6">{activeCategory.description}</p>
                
                <h4 className="text-sm font-medium text-slate-500 mb-3">Sample criteria checked:</h4>
                <ul className="space-y-2">
                  {activeCategory.criteria.map((criterion) => (
                    <li key={criterion.code} className="flex items-center gap-3 text-sm">
                      <span className="font-mono text-slate-500">{criterion.code}</span>
                      <span className="text-slate-300">{criterion.name}</span>
                      <span className={cn(
                        'px-2 py-0.5 rounded text-xs font-medium',
                        criterion.level === 'A' ? 'bg-green-500/20 text-green-400' :
                        criterion.level === 'AA' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      )}>
                        {criterion.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual indicator */}
              <div className="flex items-center justify-center">
                <div className={cn(
                  'relative w-40 h-40 rounded-full flex items-center justify-center',
                  getColorClass(activeCategory.color, 'bg')
                )}>
                  <activeCategory.icon className={cn('w-16 h-16', getColorClass(activeCategory.color, 'text'))} />
                  <div className={cn(
                    'absolute inset-0 rounded-full border-4 animate-pulse',
                    getColorClass(activeCategory.color, 'border')
                  )} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Issues Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Live issue detection</h3>
            <button
              onClick={() => setShowFixes(!showFixes)}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
            >
              {showFixes ? 'Hide fixes' : 'Show fixes'}
              <ChevronRight className={cn('w-4 h-4 transition-transform', showFixes && 'rotate-90')} />
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {SAMPLE_ISSUES.map((issue, idx) => (
              <div 
                key={idx} 
                className={cn(
                  'px-6 py-4 flex items-center gap-4 transition-colors hover:bg-slate-800/50',
                  idx !== SAMPLE_ISSUES.length - 1 && 'border-b border-slate-800'
                )}
              >
                <span className={cn(
                  'w-2 h-2 rounded-full flex-shrink-0',
                  issue.severity === 'critical' ? 'bg-red-400' :
                  issue.severity === 'serious' ? 'bg-amber-400' : 'bg-blue-400'
                )} />
                <code className="font-mono text-sm text-slate-500 w-24">{issue.element}</code>
                <span className="flex-1 text-slate-300">{issue.issue}</span>
                <span className="text-xs font-mono text-slate-500">{issue.wcag}</span>
                {showFixes && (
                  <span className="flex items-center gap-1 text-sm text-green-400">
                    <Check className="w-4 h-4" />
                    Auto-fix available
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            A11yScan detects 100+ issue types with detailed remediation guidance
          </p>
        </div>
      </div>
    </section>
  )
}

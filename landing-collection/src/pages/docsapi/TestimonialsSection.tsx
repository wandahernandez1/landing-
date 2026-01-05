import { Search, FileText, Code2, ArrowRight, Hash, BookOpen } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'

// Search results demo
const SEARCH_RESULTS = [
  { type: 'endpoint', title: 'GET /users', description: 'Fetch all users with pagination', category: 'Users API' },
  { type: 'guide', title: 'Authentication Guide', description: 'How to authenticate API requests', category: 'Guides' },
  { type: 'schema', title: 'User Object', description: 'User resource schema definition', category: 'Schemas' },
  { type: 'endpoint', title: 'POST /users', description: 'Create a new user account', category: 'Users API' },
  { type: 'code', title: 'SDK Installation', description: 'npm install @docsapi/sdk', category: 'Getting Started' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setShowResults(value.length > 0)
  }

  const filteredResults = SEARCH_RESULTS.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 docs-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">Instant Search</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find anything{' '}<span className="text-gradient">instantly</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Algolia-powered search across endpoints, guides, and schemas
          </p>
        </header>

        {/* Search demo */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search docs... (try 'user' or 'auth')"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <kbd className="px-2 py-1 rounded bg-slate-800 text-slate-500 text-xs font-mono">⌘K</kbd>
            </div>
            
            {/* Results dropdown */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl z-20">
                <div className="p-2">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result, idx) => (
                      <button
                        key={idx}
                        className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-left"
                      >
                        <div className={cn(
                          'w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0',
                          result.type === 'endpoint' && 'bg-green-500/20',
                          result.type === 'guide' && 'bg-blue-500/20',
                          result.type === 'schema' && 'bg-yellow-500/20',
                          result.type === 'code' && 'bg-violet-500/20',
                        )}>
                          {result.type === 'endpoint' && <Code2 className="w-4 h-4 text-green-400" />}
                          {result.type === 'guide' && <BookOpen className="w-4 h-4 text-blue-400" />}
                          {result.type === 'schema' && <Hash className="w-4 h-4 text-yellow-400" />}
                          {result.type === 'code' && <FileText className="w-4 h-4 text-violet-400" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white truncate">{result.title}</p>
                          <p className="text-sm text-slate-400 truncate">{result.description}</p>
                        </div>
                        <span className="text-xs text-slate-500 whitespace-nowrap">{result.category}</span>
                      </button>
                    ))
                  ) : (
                    <div className="p-8 text-center text-slate-500">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
                {filteredResults.length > 0 && (
                  <div className="px-4 py-3 border-t border-slate-800 flex items-center justify-between text-sm">
                    <span className="text-slate-500">{filteredResults.length} results</span>
                    <span className="flex items-center gap-2 text-violet-400">
                      View all <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '<50ms', label: 'Avg response time' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'Typo-tolerant', label: 'Search quality' },
            { value: '10+ langs', label: 'Code samples' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-slate-900/50 border border-slate-800">
              <p className="text-2xl font-bold text-violet-400">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

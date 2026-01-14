import { useRef, useState } from 'react'
import { cn } from '@/shared/utils/cn'
import { AlertCircle, CheckCircle2, AlertTriangle, Search, FileText, Link2, Image, Code, Gauge } from 'lucide-react'

// SEO Issue categories
const SEO_CATEGORIES = [
  { id: 'meta', label: 'Meta Tags', icon: FileText },
  { id: 'content', label: 'Contenido', icon: Search },
  { id: 'links', label: 'Enlaces', icon: Link2 },
  { id: 'images', label: 'Imágenes', icon: Image },
  { id: 'technical', label: 'Técnico', icon: Code },
  { id: 'performance', label: 'Rendimiento', icon: Gauge },
]

// Mock issues by category
const ISSUES_DATA: Record<string, { title: string; severity: 'error' | 'warning' | 'passed'; impact: string }[]> = {
  meta: [
    { title: 'Falta meta descripción en 12 páginas', severity: 'error', impact: 'Alto' },
    { title: 'Títulos muy largos (>60 caracteres)', severity: 'warning', impact: 'Medio' },
    { title: 'URLs canónicas configuradas correctamente', severity: 'passed', impact: '-' },
    { title: 'Faltan Open Graph tags', severity: 'warning', impact: 'Bajo' },
  ],
  content: [
    { title: 'Contenido duplicado detectado en 3 páginas', severity: 'error', impact: 'Alto' },
    { title: 'Contenido escaso (<300 palabras) en 8 páginas', severity: 'warning', impact: 'Medio' },
    { title: 'Jerarquía de encabezados correcta', severity: 'passed', impact: '-' },
  ],
  links: [
    { title: '23 enlaces internos rotos encontrados', severity: 'error', impact: 'Alto' },
    { title: 'Páginas huérfanas detectadas (5)', severity: 'warning', impact: 'Medio' },
    { title: 'Enlaces externos usan nofollow correctamente', severity: 'passed', impact: '-' },
  ],
  images: [
    { title: '45 imágenes sin texto alt', severity: 'error', impact: 'Alto' },
    { title: 'Imágenes no optimizadas (WebP)', severity: 'warning', impact: 'Medio' },
    { title: 'Lazy loading implementado', severity: 'passed', impact: '-' },
  ],
  technical: [
    { title: 'robots.txt válido', severity: 'passed', impact: '-' },
    { title: 'Sitemap XML faltan 15 URLs', severity: 'warning', impact: 'Medio' },
    { title: 'Errores de datos estructurados en 2 páginas', severity: 'error', impact: 'Alto' },
  ],
  performance: [
    { title: 'LCP > 2.5s en móvil', severity: 'error', impact: 'Alto' },
    { title: 'Problemas de CLS en 7 páginas', severity: 'warning', impact: 'Medio' },
    { title: 'FID dentro del rango aceptable', severity: 'passed', impact: '-' },
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
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-green-400">Auditoría del Sitio</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Encuentra y corrige{' '}<span className="text-gradient">problemas SEO</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Auditorías completas que detectan cada problema técnico de SEO
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
                <p className="text-xs text-slate-500">Errores</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-yellow-400">{warningCount}</p>
                <p className="text-xs text-slate-500">Advertencias</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-green-400">{passedCount}</p>
                <p className="text-xs text-slate-500">Aprobados</p>
              </div>
            </div>
          </div>

          {/* Issues list */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden">
            <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">
                Problemas de {SEO_CATEGORIES.find(c => c.id === selectedCategory)?.label}
              </h3>
              <span className="text-sm text-slate-500">{issues.length} verificaciones</span>
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
                        issue.impact === 'Alto' ? 'bg-red-500/20 text-red-400' :
                        issue.impact === 'Medio' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-slate-500/20 text-slate-400'
                      )}>
                        Impacto {issue.impact}
                      </span>
                    )}
                    {issue.severity !== 'passed' && (
                      <button className="text-sm text-green-400 hover:text-green-300 font-medium">
                        Corregir →
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

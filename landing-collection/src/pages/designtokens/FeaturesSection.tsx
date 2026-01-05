import { useRef, useState, useEffect } from 'react'
import { 
  Figma, Code2, Palette, RefreshCw,
  Check, Copy, FileCode
} from 'lucide-react'

// Workflow steps animation
const WORKFLOW_STEPS = [
  { icon: Figma, label: 'Define in Figma', color: 'text-purple-400', active: false },
  { icon: RefreshCw, label: 'Sync', color: 'text-pink-400', active: true },
  { icon: Code2, label: 'Generate Code', color: 'text-cyan-400', active: false },
]

// Output format tabs
const OUTPUT_FORMATS = [
  { id: 'css', label: 'CSS', icon: FileCode },
  { id: 'scss', label: 'SCSS', icon: FileCode },
  { id: 'tailwind', label: 'Tailwind', icon: FileCode },
  { id: 'swift', label: 'Swift', icon: FileCode },
]

// Sample token output code
const CODE_SAMPLES: Record<string, string> = {
  css: `/* colors.css */
:root {
  --color-primary-50: #fdf2f8;
  --color-primary-100: #fce7f3;
  --color-primary-500: #ec4899;
  --color-primary-900: #831843;
  
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  --font-sans: "Inter", sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
}`,
  scss: `// _tokens.scss
$color-primary-50: #fdf2f8;
$color-primary-100: #fce7f3;
$color-primary-500: #ec4899;
$color-primary-900: #831843;

$spacing: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem,
);

$font-sans: "Inter", sans-serif;`,
  tailwind: `// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf2f8",
          100: "#fce7f3",
          500: "#ec4899",
          900: "#831843",
        }
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
      }
    }
  }
}`,
  swift: `// Tokens.swift
import SwiftUI

extension Color {
  static let primary50 = Color(hex: "fdf2f8")
  static let primary500 = Color(hex: "ec4899")
  static let primary900 = Color(hex: "831843")
}

struct Spacing {
  static let xs: CGFloat = 4
  static let sm: CGFloat = 8
  static let md: CGFloat = 16
}`,
}

// Brand theming demo
const BRAND_THEMES = [
  { name: 'Default', primary: '#ec4899', secondary: '#8b5cf6' },
  { name: 'Ocean', primary: '#0ea5e9', secondary: '#06b6d4' },
  { name: 'Forest', primary: '#22c55e', secondary: '#84cc16' },
  { name: 'Sunset', primary: '#f97316', secondary: '#ef4444' },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeFormat, setActiveFormat] = useState('css')
  const [activeTheme, setActiveTheme] = useState(0)
  const [workflowStep, setWorkflowStep] = useState(0)
  const [copied, setCopied] = useState(false)

  // Animate workflow
  useEffect(() => {
    const interval = setInterval(() => {
      setWorkflowStep(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLES[activeFormat])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={sectionRef} id="features" className="relative py-32 md:py-40" aria-labelledby="features-title">
      <div className="absolute inset-0 design-grid opacity-20" />
      <div className="container-custom relative z-10">
        
        {/* Workflow Animation */}
        <div className="mb-32">
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-400">How It Works</p>
            <h2 id="features-title" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Design to code in{' '}<span className="text-gradient">seconds</span>
            </h2>
          </header>

          {/* Animated workflow */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500 -translate-y-1/2 transition-all duration-500"
                style={{ width: `${(workflowStep + 1) * 33.33}%` }}
              />

              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={step.label} className="relative z-10 flex flex-col items-center">
                  <div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      idx <= workflowStep 
                        ? 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg shadow-pink-500/30' 
                        : 'bg-slate-800 border border-slate-700'
                    }`}
                  >
                    <step.icon className={`w-7 h-7 ${idx <= workflowStep ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <span className={`mt-3 text-sm font-medium ${idx <= workflowStep ? 'text-white' : 'text-slate-500'}`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Output Formats */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Code preview */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
              {/* Tab bar */}
              <div className="flex items-center gap-1 p-2 border-b border-slate-800 bg-slate-900">
                {OUTPUT_FORMATS.map((format) => (
                  <button
                    key={format.id}
                    onClick={() => setActiveFormat(format.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeFormat === format.id
                        ? 'bg-pink-500/20 text-pink-400'
                        : 'text-slate-500 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <format.icon className="w-4 h-4" />
                    {format.label}
                  </button>
                ))}
              </div>

              {/* Code block */}
              <div className="relative p-6">
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                  <code>{CODE_SAMPLES[activeFormat]}</code>
                </pre>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Export to any platform</h3>
              <p className="text-slate-400 leading-relaxed">
                DesignTokens automatically generates code in your preferred format. Update once in Figma, 
                and your entire codebase stays in sync.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'CSS Variables', desc: 'Native browser support' },
                  { title: 'SCSS/Sass', desc: 'For preprocessor workflows' },
                  { title: 'Tailwind Config', desc: 'Direct theme integration' },
                  { title: 'iOS/Android', desc: 'Native mobile tokens' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-pink-400" />
                    </div>
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

        {/* Brand Theming Demo */}
        <div>
          <header className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-pink-400">Live Preview</p>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              See your tokens in action
            </h3>
          </header>

          <div className="max-w-4xl mx-auto">
            {/* Theme selector */}
            <div className="flex justify-center gap-3 mb-8">
              {BRAND_THEMES.map((theme, idx) => (
                <button
                  key={theme.name}
                  onClick={() => setActiveTheme(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                    activeTheme === idx
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
                  />
                  <span className={activeTheme === idx ? 'text-white' : 'text-slate-400'}>{theme.name}</span>
                </button>
              ))}
            </div>

            {/* Preview card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${BRAND_THEMES[activeTheme].primary}, ${BRAND_THEMES[activeTheme].secondary})` }}
                >
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Design System Preview</h4>
                  <p className="text-slate-500">Using {BRAND_THEMES[activeTheme].name} theme</p>
                </div>
              </div>

              {/* Sample UI */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <button 
                    className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all"
                    style={{ backgroundColor: BRAND_THEMES[activeTheme].primary }}
                  >
                    Primary Button
                  </button>
                  <button 
                    className="w-full py-3 px-6 rounded-xl font-semibold border-2 transition-all"
                    style={{ 
                      borderColor: BRAND_THEMES[activeTheme].primary,
                      color: BRAND_THEMES[activeTheme].primary
                    }}
                  >
                    Secondary Button
                  </button>
                </div>
                <div className="space-y-4">
                  <div 
                    className="p-4 rounded-xl border"
                    style={{ borderColor: `${BRAND_THEMES[activeTheme].primary}30`, backgroundColor: `${BRAND_THEMES[activeTheme].primary}10` }}
                  >
                    <p className="text-sm" style={{ color: BRAND_THEMES[activeTheme].primary }}>
                      ✨ Alert component with brand colors
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {['xs', 'sm', 'md', 'lg'].map((size, idx) => (
                      <div 
                        key={size}
                        className="rounded-lg"
                        style={{ 
                          backgroundColor: BRAND_THEMES[activeTheme].secondary,
                          width: `${(idx + 1) * 16}px`,
                          height: `${(idx + 1) * 16}px`,
                          opacity: 0.3 + idx * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

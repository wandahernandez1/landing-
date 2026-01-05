import { Play, Pause, MousePointer, Clock, ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/shared/utils/cn'

// Session replay events
const SESSION_EVENTS = [
  { time: 0, type: 'pageview', data: '/ (Homepage)' },
  { time: 2.3, type: 'click', data: 'Add to Cart button' },
  { time: 3.1, type: 'navigation', data: '/cart' },
  { time: 5.5, type: 'input', data: 'Promo code field' },
  { time: 7.2, type: 'click', data: 'Checkout button' },
  { time: 8.0, type: 'error', data: 'TypeError: undefined' },
]

// Mock session data
const SESSIONS = [
  { id: 'abc123', duration: '4:32', pages: 5, errors: 1, user: 'user@email.com' },
  { id: 'def456', duration: '2:15', pages: 3, errors: 0, user: 'anon-789' },
  { id: 'ghi789', duration: '8:45', pages: 12, errors: 3, user: 'customer@co.com' },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [selectedSession, setSelectedSession] = useState(SESSIONS[0])

  // Simulate playback
  useEffect(() => {
    if (isPlaying && currentTime < 8) {
      const timer = setTimeout(() => {
        setCurrentTime(prev => Math.min(prev + 0.1, 8))
      }, 100)
      return () => clearTimeout(timer)
    } else if (currentTime >= 8) {
      setIsPlaying(false)
    }
  }, [isPlaying, currentTime])

  const currentEvent = SESSION_EVENTS.filter(e => e.time <= currentTime).pop()

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 md:py-40">
      <div className="bg-glow absolute inset-0 rotate-180" />
      <div className="absolute inset-0 error-grid opacity-10" />
      <div className="container-custom relative z-10">
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-red-400">Session Replay</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Watch users{' '}<span className="text-gradient">experience errors</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Pixel-perfect session replays show you exactly what happened
          </p>
        </header>

        {/* Session Replay Player */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
            {/* Player viewport */}
            <div className="relative aspect-video bg-slate-950">
              {/* Mock webpage */}
              <div className="absolute inset-4 bg-white rounded-lg overflow-hidden">
                <div className="h-8 bg-slate-200 flex items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <div className="flex-1 mx-4 h-4 bg-slate-300 rounded" />
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-8 bg-slate-200 rounded w-1/3" />
                  <div className="h-4 bg-slate-100 rounded w-full" />
                  <div className="h-4 bg-slate-100 rounded w-2/3" />
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="aspect-square bg-slate-200 rounded" />
                        <div className="h-3 bg-slate-200 rounded w-2/3" />
                        <div className="h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center">
                          Add to Cart
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cursor animation */}
              <div 
                className="absolute w-4 h-4 transition-all duration-300"
                style={{
                  left: `${20 + (currentTime * 8)}%`,
                  top: `${30 + Math.sin(currentTime * 2) * 10}%`,
                }}
              >
                <MousePointer className="w-4 h-4 text-red-400 fill-red-400" />
              </div>

              {/* Current event indicator */}
              {currentEvent && (
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={cn(
                    'inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm',
                    currentEvent.type === 'error' ? 'bg-red-500/80 text-white' :
                    currentEvent.type === 'click' ? 'bg-blue-500/80 text-white' :
                    'bg-slate-800/80 text-slate-300'
                  )}>
                    <span className="font-mono text-xs opacity-70">{currentEvent.time.toFixed(1)}s</span>
                    <span>{currentEvent.type}: {currentEvent.data}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setCurrentTime(Math.max(0, currentTime - 1))}
                    className="p-2 text-slate-500 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setCurrentTime(Math.min(8, currentTime + 1))}
                    className="p-2 text-slate-500 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Progress bar */}
                <div className="flex-1 relative h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-red-500 rounded-full"
                    style={{ width: `${(currentTime / 8) * 100}%` }}
                  />
                  {/* Error marker */}
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-red-400"
                    style={{ left: '100%' }}
                  />
                </div>

                <span className="font-mono text-sm text-slate-500 w-16">
                  {currentTime.toFixed(1)}s / 8.0s
                </span>

                <button className="p-2 text-slate-500 hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Event timeline */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {SESSION_EVENTS.map((event, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTime(event.time)}
                    className={cn(
                      'flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                      event.time <= currentTime ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-500',
                      event.type === 'error' && 'bg-red-500/20 text-red-400'
                    )}
                  >
                    {event.type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sessions list */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {SESSIONS.map((session) => (
              <button
                key={session.id}
                onClick={() => {
                  setSelectedSession(session)
                  setCurrentTime(0)
                  setIsPlaying(false)
                }}
                className={cn(
                  'p-4 rounded-xl text-left transition-all',
                  selectedSession.id === session.id
                    ? 'bg-red-500/10 border border-red-500/30'
                    : 'bg-slate-900/50 border border-slate-800 hover:bg-slate-900'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm text-slate-400">{session.id}</span>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="w-3 h-3" />
                    {session.duration}
                  </div>
                </div>
                <p className="text-sm text-white truncate">{session.user}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                  <span>{session.pages} pages</span>
                  {session.errors > 0 && (
                    <span className="text-red-400">{session.errors} errors</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

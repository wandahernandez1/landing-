import { ArrowRight, DollarSign, BarChart2, Trophy, Medal, Crown, Flame, Star, ChevronUp } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import { useHeroAnimation } from '@/shared/hooks'

// Leaderboard data for gamification
const LEADERBOARD_DATA = [
  { rank: 1, name: 'Railsware', avatar: '🚂', mrr: 847200, growth: 12.4, streak: 24, badge: 'crown' },
  { rank: 2, name: 'Transistor.fm', avatar: '🎙️', mrr: 423100, growth: 8.7, streak: 18, badge: 'medal' },
  { rank: 3, name: 'Fathom Analytics', avatar: '📊', mrr: 312800, growth: 15.2, streak: 12, badge: 'medal' },
  { rank: 4, name: 'Plausible', avatar: '🌱', mrr: 287400, growth: 22.1, streak: 9, badge: 'star' },
  { rank: 5, name: 'Your Product', avatar: '✨', mrr: 5420, growth: 12.9, streak: 3, isYou: true },
]

const MILESTONES = [
  { name: 'First $100', threshold: 100, icon: '🌱' },
  { name: 'Ramen Profitable', threshold: 1000, icon: '🍜' },
  { name: 'Default Alive', threshold: 5000, icon: '💪' },
  { name: 'First $10K', threshold: 10000, icon: '🔥' },
  { name: 'Escape Velocity', threshold: 50000, icon: '🚀' },
  { name: '$100K Club', threshold: 100000, icon: '👑' },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [yourMRR, setYourMRR] = useState(5420)
  const [animatedMRR, setAnimatedMRR] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  
  useHeroAnimation(sectionRef)

  // Animate MRR counter
  useEffect(() => {
    const step = Math.ceil(yourMRR / 50)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= yourMRR) {
        setAnimatedMRR(yourMRR)
        clearInterval(timer)
      } else {
        setAnimatedMRR(current)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [yourMRR])

  // Format currency
  const formatMRR = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}K`
    return `$${value.toLocaleString()}`
  }

  // Calculate next milestone
  const nextMilestone = MILESTONES.find(m => m.threshold > yourMRR) || MILESTONES[MILESTONES.length - 1]
  const prevMilestone = [...MILESTONES].reverse().find(m => m.threshold <= yourMRR) || MILESTONES[0]
  const progressToNext = Math.min(100, ((yourMRR - prevMilestone.threshold) / (nextMilestone.threshold - prevMilestone.threshold)) * 100)

  // Simulate MRR increase
  const boostMRR = () => {
    setYourMRR(prev => Math.min(prev + Math.floor(Math.random() * 500) + 100, 1000000))
    setShowCelebration(true)
    setTimeout(() => setShowCelebration(false), 1500)
  }

  // Get badge icon
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'crown': return <Crown className="w-4 h-4 text-yellow-400" />
      case 'medal': return <Medal className="w-4 h-4 text-slate-400" />
      case 'star': return <Star className="w-4 h-4 text-emerald-400" />
      default: return null
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="bg-glow absolute inset-0" />
      <div className="absolute inset-0 indie-grid opacity-30" />
      
      {/* Celebration effect */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🎉</div>
        </div>
      )}
      
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              data-hero-badge
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2"
            >
              <Trophy className="h-4 w-4 text-emerald-400" />
              <span className="text-sm text-emerald-300">Indie Maker Analytics</span>
            </div>

            <h1 
              data-hero-title
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              <span className="block">Track your MRR.</span>
              <span className="block text-gradient">Compete with others.</span>
            </h1>

            <p 
              data-hero-description
              className="mx-auto lg:mx-0 max-w-xl text-lg text-neutral-400 md:text-xl mb-8"
            >
              Simple MRR tracking with gamification. Hit milestones, climb leaderboards, 
              celebrate wins with the indie community.
            </p>

            {/* Your current MRR with milestone progress */}
            <div 
              data-hero-cta
              className="mb-8 p-6 rounded-2xl bg-neutral-900/80 border border-emerald-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-neutral-400">Your MRR</span>
                <button
                  onClick={boostMRR}
                  className="text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full hover:bg-emerald-500/30 transition-colors"
                >
                  Simulate growth ↗
                </button>
              </div>
              
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-bold text-emerald-400">
                  {formatMRR(animatedMRR)}
                </span>
                <span className="text-emerald-500 flex items-center gap-1 mb-2">
                  <ChevronUp className="w-4 h-4" />
                  12.9%
                </span>
              </div>

              {/* Milestone progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-neutral-500">
                    {prevMilestone.icon} {prevMilestone.name}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    {nextMilestone.icon} {nextMilestone.name}
                  </span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressToNext}%` }}
                  />
                </div>
                <p className="text-xs text-neutral-500 text-center">
                  {formatMRR(nextMilestone.threshold - yourMRR)} to go!
                </p>
              </div>
            </div>

            <div 
              data-hero-stats
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#pricing" className="btn-primary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold w-full sm:w-auto justify-center">
                Join the Leaderboard
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#features" className="btn-secondary flex items-center gap-2 rounded-xl px-8 py-4 text-base font-medium w-full sm:w-auto justify-center">
                <BarChart2 className="h-5 w-5" />
                See Features
              </a>
            </div>
          </div>

          {/* Leaderboard */}
          <div 
            data-hero-visual
            className="relative"
          >
            <div className="rounded-2xl border border-emerald-500/20 bg-neutral-900/90 overflow-hidden shadow-2xl shadow-emerald-500/10">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-700/50 bg-neutral-800/80">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-neutral-300">MRR Leaderboard</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400">
                  <Flame className="w-3 h-3" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Leaderboard list */}
              <div className="divide-y divide-neutral-800/50">
                {LEADERBOARD_DATA.map((entry) => (
                  <div 
                    key={entry.rank}
                    className={`flex items-center gap-4 p-4 transition-all ${
                      entry.isYou 
                        ? 'bg-emerald-500/10 border-l-2 border-emerald-500' 
                        : 'hover:bg-neutral-800/30'
                    }`}
                  >
                    {/* Rank */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      entry.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                      entry.rank === 2 ? 'bg-slate-500/20 text-slate-400' :
                      entry.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                      'bg-neutral-800 text-neutral-500'
                    }`}>
                      {entry.rank}
                    </div>

                    {/* Avatar & Name */}
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">{entry.avatar}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-medium ${entry.isYou ? 'text-emerald-400' : 'text-white'}`}>
                            {entry.name}
                          </span>
                          {entry.badge && getBadgeIcon(entry.badge)}
                          {entry.isYou && (
                            <span className="text-xs px-1.5 py-0.5 bg-emerald-500 text-white rounded">YOU</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-400" />
                            {entry.streak} month streak
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* MRR & Growth */}
                    <div className="text-right">
                      <span className="block font-bold text-emerald-400">{formatMRR(entry.mrr)}</span>
                      <span className="text-xs text-green-400">+{entry.growth}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 border-t border-neutral-700/50 bg-neutral-800/30">
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>2,847 indie makers</span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3" />
                    $8.2M total MRR tracked
                  </span>
                </div>
              </div>
            </div>

            {/* Floating milestones */}
            <div className="absolute -bottom-4 -left-4 flex gap-1">
              {MILESTONES.slice(0, 4).map((milestone) => (
                <div 
                  key={milestone.name}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                    milestone.threshold <= yourMRR 
                      ? 'bg-emerald-500/20 border border-emerald-500/50' 
                      : 'bg-neutral-800/50 border border-neutral-700/50 opacity-50'
                  }`}
                  title={milestone.name}
                >
                  {milestone.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

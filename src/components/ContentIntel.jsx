import { useState, useEffect, useCallback } from 'react'

const CACHE_KEY = 'ush_content_intel'
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000

function formatRelativeTime(isoString) {
  if (!isoString) return 'Never'
  const diff = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

function IdeaCard({ idea, index }) {
  return (
    <div className="border border-cream-200 bg-cream-50 p-6 hover:border-crimson-300 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="font-display text-4xl text-crimson-200 leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="tag shrink-0">{idea.format}</span>
      </div>
      <p className="font-semibold text-gray-900 text-base leading-snug mb-3">
        "{idea.hook}"
      </p>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{idea.concept}</p>
      <div className="border-t border-cream-200 pt-3">
        <p className="text-xs text-crimson-400 font-medium leading-relaxed">
          ◆ {idea.why_it_works}
        </p>
      </div>
    </div>
  )
}

function TrendingAngleItem({ item }) {
  return (
    <div className="border-l-2 border-crimson-400 pl-5 py-2">
      <p className="font-semibold text-gray-900 mb-1">{item.angle}</p>
      <p className="text-sm text-gray-600 leading-relaxed">{item.how_to_use}</p>
    </div>
  )
}

function AudioVibeCard({ item }) {
  return (
    <div className="flex-1 border border-cream-200 bg-cream-50 p-5 hover:border-crimson-300 transition-colors">
      <span className="text-2xl mb-3 block">🎵</span>
      <p className="font-semibold text-gray-900 text-sm mb-2">{item.vibe}</p>
      <p className="text-xs text-gray-500 leading-relaxed">{item.why}</p>
    </div>
  )
}

export default function ContentIntel() {
  const [status, setStatus] = useState('idle')
  const [data, setData] = useState(null)
  const [fetchedAt, setFetchedAt] = useState(null)
  const [error, setError] = useState(null)

  const loadFromCache = useCallback(() => {
    try {
      const raw = localStorage.getItem(CACHE_KEY)
      if (!raw) return false
      const cached = JSON.parse(raw)
      if (Date.now() - new Date(cached.fetchedAt).getTime() < CACHE_TTL_MS) {
        setData(cached.data)
        setFetchedAt(cached.fetchedAt)
        return true
      }
    } catch {
      // corrupted cache — ignore
    }
    return false
  }, [])

  const fetchRecommendations = useCallback(async (force = false) => {
    if (!force && loadFromCache()) return
    setStatus('loading')
    setError(null)
    try {
      const res = await fetch('/api/recommendations', { method: 'POST' })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `HTTP ${res.status}`)
      }
      const json = await res.json()
      const now = new Date().toISOString()
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: json, fetchedAt: now }))
      setData(json)
      setFetchedAt(now)
      setStatus('idle')
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }, [loadFromCache])

  useEffect(() => {
    fetchRecommendations(false)
  }, [fetchRecommendations])

  const isLoading = status === 'loading'

  return (
    <section id="content-intel" className="bg-cream-50">
      <div className="section-container">

        {/* Header */}
        <p className="section-label">Content Intelligence</p>
        <h2 className="section-title">
          This week's ideas,<br />
          <span className="font-serif italic text-gray-900 text-4xl md:text-5xl">powered by AI.</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mb-8 text-lg leading-relaxed">
          AI-generated content briefs tailored to{' '}
          <strong className="text-crimson-400">@lifeofush</strong>'s analytics and niche.
          Refreshes weekly, or whenever you want a fresh set.
        </p>

        {/* Status bar */}
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-cream-200 flex-wrap">
          <div className="flex items-center gap-2">
            {isLoading && (
              <>
                <span className="w-2 h-2 bg-yellow-400 animate-pulse" />
                <span className="text-sm text-gray-500">Generating ideas…</span>
              </>
            )}
            {!isLoading && fetchedAt && (
              <>
                <span className="w-2 h-2 bg-green-400" />
                <span className="text-sm text-gray-500">
                  Last refreshed:{' '}
                  <span className="text-gray-700 font-medium">{formatRelativeTime(fetchedAt)}</span>
                </span>
              </>
            )}
            {!isLoading && !fetchedAt && (
              <span className="text-sm text-gray-400">Not yet loaded. Click Refresh to generate ideas.</span>
            )}
          </div>
          <button
            onClick={() => fetchRecommendations(true)}
            disabled={isLoading}
            className="btn-outline text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generating…
              </>
            ) : (
              'Refresh ideas →'
            )}
          </button>
        </div>

        {/* Error state */}
        {status === 'error' && (
          <div className="border border-crimson-300 bg-crimson-100/30 p-6 mb-10 flex items-start gap-4">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-semibold text-crimson-500 mb-1">Couldn't load recommendations</p>
              <p className="text-sm text-gray-600 mb-4">{error}</p>
              <button onClick={() => fetchRecommendations(true)} className="btn-outline text-sm">
                Try again →
              </button>
            </div>
          </div>
        )}

        {/* First-load spinner */}
        {isLoading && !data && (
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-gray-400">
            <svg className="w-8 h-8 animate-spin text-crimson-300" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-sm">Claude is thinking about your content…</p>
          </div>
        )}

        {/* Data */}
        {data && (
          <div className={isLoading ? 'opacity-50 pointer-events-none transition-opacity' : ''}>

            {/* 6 Content Ideas */}
            <div className="mb-14">
              <h3 className="font-semibold text-gray-900 text-xl mb-1">Content Ideas</h3>
              <p className="text-sm text-gray-500 mb-6">6 ready-to-film concepts for this week</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.content_ideas?.map((idea, i) => (
                  <IdeaCard key={i} idea={idea} index={i} />
                ))}
              </div>
            </div>

            {/* Trending angles + Audio + Posting day */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-semibold text-gray-900 text-xl mb-1">Trending Angles</h3>
                <p className="text-sm text-gray-500 mb-6">What's working in your niche right now</p>
                <div className="space-y-5">
                  {data.trending_angles?.map((item, i) => (
                    <TrendingAngleItem key={i} item={item} />
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-gray-900 text-xl mb-1">Audio Vibes</h3>
                  <p className="text-sm text-gray-500 mb-4">Sound energy to aim for this week</p>
                  <div className="flex gap-4">
                    {data.audio_vibes?.map((item, i) => (
                      <AudioVibeCard key={i} item={item} />
                    ))}
                  </div>
                </div>

                {data.best_posting_day && (
                  <div className="border border-crimson-200 bg-crimson-100/20 p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">Best Posting Day</h3>
                    <p className="font-display text-5xl text-crimson-400 my-3">
                      {data.best_posting_day.day}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {data.best_posting_day.reasoning}
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  )
}

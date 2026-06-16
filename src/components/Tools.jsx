const categories = [
  {
    label: 'Content Creation',
    emoji: '🎬',
    tools: [
      { name: 'CapCut',            desc: 'Primary video editing: transitions, captions, speed ramps', size: 'lg' },
      { name: 'TikTok Studio',     desc: 'Native editing & analytics dashboard',                       size: 'lg' },
      { name: 'iPhone Camera',     desc: 'All filming, composition & lighting',                        size: 'lg' },
      { name: 'Canva',             desc: 'Thumbnails, carousels, and brand assets',                    size: 'md' },
      { name: 'Instagram Reels',   desc: 'Cross-posting & Reels-native content',                       size: 'md' },
    ],
  },
  {
    label: 'Analytics & Growth',
    emoji: '📊',
    tools: [
      { name: 'TikTok Analytics', desc: 'Watch time, completion rate, audience demographics',      size: 'lg' },
      { name: 'A/B Testing',      desc: 'Testing hooks, captions & hashtags across TikTok & IG', size: 'md' },
      { name: 'Notion',           desc: 'Editorial calendar, content bank, performance tracker',  size: 'sm' },
      { name: 'Google Sheets',    desc: 'Weekly data pulls, trend analysis, ROI tracking',        size: 'sm' },
    ],
  },
  {
    label: 'Finance & Consulting',
    emoji: '💼',
    tools: [
      { name: 'Workday',    desc: 'Financial Management, HCM, Reporting (implementation & config)', size: 'lg' },
      { name: 'Excel',      desc: 'Advanced modeling, pivot tables, financial analysis',            size: 'lg' },
      { name: 'SQL',        desc: 'Data querying and analysis',                                     size: 'md' },
      { name: 'Jira',       desc: 'Project tracking, sprint planning, stakeholder comms',           size: 'md' },
      { name: 'Confluence', desc: 'Documentation, process mapping, knowledge base',                 size: 'sm' },
    ],
  },
  {
    label: 'Strategy & Communication',
    emoji: '🧠',
    tools: [
      { name: 'Claude Code',       desc: 'Vibe coding. Built this portfolio with it.',           size: 'lg' },
      { name: 'Figma',            desc: 'Wireframes, decks, and visual strategy docs',          size: 'md' },
      { name: 'Notion AI',        desc: 'Brainstorming, drafts, and content repurposing',       size: 'md' },
{ name: 'Google Workspace', desc: 'Docs, Slides, Forms. Daily driver.',                  size: 'sm' },
    ],
  },
]

const sizeStyles = {
  lg: 'text-sm font-semibold px-5 py-2.5 bg-crimson-400 text-white hover:bg-crimson-500',
  md: 'text-sm px-4 py-2 border-2 border-crimson-400 text-crimson-500 hover:bg-crimson-400 hover:text-white',
  sm: 'text-xs px-3.5 py-1.5 bg-cream-200 text-gray-600 border border-cream-200 hover:border-crimson-300 hover:text-crimson-500',
}

export default function Tools() {
  return (
    <section id="tools" className="bg-cream-100">
      <div className="section-container">
        <p className="section-label">Tools Used</p>
        <h2 className="section-title">
          My toolkit,<br />
          <span className="font-serif italic text-gray-900">the full picture.</span>
        </h2>
        <p className="text-gray-600 max-w-xl mb-4 text-lg leading-relaxed">
          What's open on my screen on any given day
        </p>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-14 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-crimson-400" />
            Daily driver
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full border-2 border-crimson-400" />
            Regular use
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-cream-200 border border-gray-300" />
            Occasional
          </span>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{cat.emoji}</span>
                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-crimson-400">
                  {cat.label}
                </span>
                <span className="flex-1 h-px bg-cream-200" />
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.tools.map((tool) => (
                  <span
                    key={tool.name}
                    title={tool.desc}
                    className={`inline-flex items-center rounded-full transition-all duration-200 cursor-default select-none ${sizeStyles[tool.size]}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-16 flex flex-wrap items-center gap-4">
          <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">🌱 Learning</span>
          {['SEO', 'Email Marketing', 'Google Analytics (GA4)'].map((t) => (
            <span key={t} className="inline-flex items-center rounded-full text-xs px-3.5 py-1.5 border-2 border-dashed border-crimson-300 text-crimson-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell,
} from 'recharts'

// ─── Data ───────────────────────────────────────────────────────────────────

const viewsData = [
  { month: "Jul '25", views: 75000  },
  { month: 'Aug',     views: 55000  },
  { month: 'Sep',     views: 70000  },
  { month: 'Oct',     views: 115000 },
  { month: 'Nov',     views: 80000  },
  { month: 'Dec',     views: 90000  },
  { month: "Jan '26", views: 105000 },
  { month: 'Feb',     views: 220000 },
  { month: 'Mar',     views: 290000 },
  { month: 'Apr',     views: 285000 },
]

const engagementData = [
  { type: 'Likes',    count: 157 },
  { type: 'Shares',   count: 17  },
  { type: 'Comments', count: 1.5 },
]

const trafficData = [
  { source: 'For You', pct: 75.0 },
  { source: 'Search',  pct: 22.4 },
  { source: 'Profile', pct: 2.4  },
  { source: 'Sound',   pct: 0.2  },
]

const TRAFFIC_COLORS = ['#C41E30', '#A01828', '#F08090', '#EDD8C4']
const BAR_COLORS     = ['#C41E30', '#A01828', '#F08090']

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-cream-200 px-4 py-2.5 text-sm shadow-sm">
        <p className="font-semibold text-gray-900">{label}</p>
        <p className="text-crimson-400">{payload[0]?.value?.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Chapter({ num, label, children }) {
  return (
    <div className="border-t-2 border-crimson-400 pt-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-display text-crimson-200 text-4xl leading-none">{num}</span>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-400">{label}</span>
      </div>
      {children}
    </div>
  )
}

function MetricCard({ value, label, delta, icon }) {
  return (
    <div className="border border-cream-200 bg-cream-50 p-6 flex flex-col gap-2 hover:border-crimson-300 transition-colors">
      <span className="text-2xl">{icon}</span>
      <p className="font-display text-3xl text-crimson-400">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
      {delta && <span className="tag-blush self-start">{delta}</span>}
    </div>
  )
}

const pillars = [
  { title: 'Audience-First Positioning', desc: 'Define who you\'re talking to before filming anything. For @lifeofush, that\'s anyone who wants an honest NYC rec from someone who actually lives there.' },
  { title: 'Content Flywheel',           desc: 'Every video has a job: discovery, retention, or conversion. Knowing which one you\'re making changes everything about how you make it.' },
  { title: 'Data-Informed Iteration',    desc: 'Weekly check-ins on watch time, completion rate, and share ratio. The numbers tell me what the audience wants more of.' },
  { title: 'Community Over Broadcast',   desc: 'Replying to every comment in the first 30 minutes signals to the algorithm and builds real relationships.' },
  { title: 'Editorial Calendar',         desc: '2-week content sprints with themes, hooks, and formats mapped out. No decision fatigue, just execution.' },
  { title: 'Trend Surfing with Intent',  desc: 'I only join a trend when there\'s a genuine angle for my lifestyle and food content. Forced relevance tanks engagement every time.' },
]

// ─── Main component ───────────────────────────────────────────────────────────

export default function CaseStudy() {
  return (
    <section id="case-study" className="bg-cream-50">
      <div className="section-container">

        {/* Header */}
        <p className="section-label">TikTok Growth Case Study</p>
        <h2 className="section-title">
          Building @lifeofush<br />
          <span className="font-serif italic text-gray-900 text-4xl md:text-5xl">what changes when you stop guessing.</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mb-16 text-lg leading-relaxed">
          Three years of posting without a system got me 462 followers. One year with a real strategy got me 337 more and 1.9M views.
        </p>

        <div className="space-y-16">

          {/* ① The Problem */}
          <Chapter num="01" label="The Problem">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I posted my first TikTok in March 2022. Three years later, I had 462 followers. The content wasn't bad. The problem was I had no system. No framework for what to post, why, or for whom. I was creating content the way most people do: based on whatever felt right that week, hoping something would hit.
                </p>
                <p>
                  The question that changed everything wasn't <em>"how do I go viral?"</em> It was <em>"what would actually change if I treated this like a growth problem?"</em>
                </p>
                <p>
                  So I stopped posting and started researching. Whatever I built next had to feel real. Not a character. Just me, with a phone and a framework.
                </p>
              </div>
              <div className="border border-cream-200 bg-cream-100/50 p-8 space-y-6">
                {[
                  { label: 'Account created', value: 'March 2022' },
                  { label: 'Followers after 3 years', value: '462' },
                  { label: 'Budget', value: '$0' },
                  { label: 'Team size', value: 'Just me' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center border-b border-cream-200 pb-4 last:border-0 last:pb-0">
                    <span className="text-sm text-gray-500">{s.label}</span>
                    <span className="font-semibold text-crimson-400">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Chapter>

          {/* ② The Research */}
          <Chapter num="02" label="The Research">
            <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl mb-8">
              <p>
                Before posting again, I spent time actually studying the space. Three years of casual posting had taught me what wasn't working. Now I wanted to understand what was. I looked at what was already working for NYC lifestyle and food creators: what hooks stopped the scroll, what formats held watch time, and what topics generated shares vs. just views.
              </p>
              <p>
                The pattern I kept seeing: the most-shared content wasn't the most polished. It was the most <em>specific</em>. A video titled "best biryani in NYC" performed worse than "the only biryani worth a 45-minute wait in Jackson Heights." Specificity drove trust. Trust drove shares.
              </p>
              <p>
                I also noticed a gap. Most NYC food creators were either professional reviewers (polished, distant) or general lifestyle accounts (broad, unfocused). As a vegetarian, I was approaching the city's food scene through a specific lens that wasn't being represented. I wanted to cross borough lines, cover every cuisine, and show what eating in New York actually looks like when you're navigating it the way I do.
              </p>
              <p>
                That was the gap worth owning.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { finding: 'Specificity beats polish', insight: 'Hyper-specific hooks outperformed broad ones. "Best X in NYC" lost to exact locations, wait times, and personal context. Vegetarian-specific searches performed especially well since most creators weren\'t targeting that audience at all.' },
                { finding: 'Shares > Likes for reach', insight: 'Content that made people say "this is literally my friend" got shared out of the feed entirely. That\'s the strongest growth signal.' },
                { finding: 'Search is underutilized', insight: 'Most small creators ignored SEO. I used TikTok\'s Creator Search Insights tool to find gaps between what people were searching for and what content actually existed on those topics. Keyword-aware titles and captions built a compounding discovery channel over time.' },
              ].map((r) => (
                <div key={r.finding} className="border-l-4 border-crimson-400 pl-5 py-2">
                  <p className="font-semibold text-gray-900 mb-2">{r.finding}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.insight}</p>
                </div>
              ))}
            </div>
          </Chapter>

          {/* ③ The Strategy */}
          <Chapter num="03" label="The Strategy">
            <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Based on the research, I built a six-pillar strategy before filming anything. These weren't abstract principles. Each one was a direct response to something I observed in the data.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-200">
              {pillars.map((p, i) => (
                <div key={p.title} className="group bg-cream-50 p-6 hover:bg-crimson-400 hover:text-white transition-colors duration-200 cursor-default">
                  <span className="font-display text-3xl text-crimson-200 group-hover:text-white/40 leading-none block mb-3 transition-colors">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-white text-sm mb-2 transition-colors">{p.title}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors">{p.desc}</p>
                </div>
              ))}
            </div>
          </Chapter>

          {/* ④ The Tactics */}
          <Chapter num="04" label="The Tactics">
            <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
              Strategy tells you what to do. Tactics tell you how. Here's what I actually executed week over week.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  tactic: 'Food close-up as the opening frame',
                  detail: 'The first frame is the hook. Close-ups of food (steam rising, sauce dripping, the first cut) consistently outperform talking-head intros. The opening second determines whether someone stays or scrolls.',
                },
                {
                  tactic: 'Keyword-first caption writing',
                  detail: 'Every caption was written with search in mind before personality. Location, dish name, neighborhood, occasion, then the personal take. This drove 22.4% Search discovery, nearly double the average for accounts this size.',
                },
                {
                  tactic: 'Consistent 3× per week cadence',
                  detail: 'I tested multiple posting windows and found consistency mattered more than timing. Three videos a week, every week, built algorithmic trust faster than sporadic viral attempts.',
                },
                {
                  tactic: 'First-30-minute comment reply rule',
                  detail: 'Replying to every comment within the first 30 minutes of posting signals engagement to the algorithm and builds genuine community. The comment section became a recurring audience, not a one-time viewer pool.',
                },
                {
                  tactic: 'A/B testing hooks and captions',
                  detail: 'I ran informal A/B tests across every video: different hook structures, caption styles, hashtag sets. Results were reviewed weekly and fed back into the next sprint\'s content plan.',
                },
                {
                  tactic: 'Cross-posting to Instagram Reels',
                  detail: 'Every TikTok was repurposed for Instagram Reels with platform-native adjustments. This doubled content distribution without doubling production time.',
                },
              ].map((t) => (
                <div key={t.tactic} className="border border-cream-200 p-6 hover:border-crimson-300 transition-colors">
                  <p className="font-semibold text-crimson-500 text-sm mb-2">{t.tactic}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.detail}</p>
                </div>
              ))}
            </div>
          </Chapter>

          {/* ⑤ The Results */}
          <Chapter num="05" label="The Results">
            {/* Before / After comparison */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <div className="border border-cream-200 bg-cream-100/50 p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 mb-4">Before the strategy · Mar 2022 – May 2025</p>
                <div className="space-y-3">
                  {[
                    { label: 'Duration', value: '3 years' },
                    { label: 'Followers gained', value: '462' },
                    { label: 'Approach', value: 'Post and hope' },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between text-sm border-b border-cream-200 pb-2 last:border-0">
                      <span className="text-gray-500">{s.label}</span>
                      <span className="font-semibold text-gray-700">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-2 border-crimson-400 bg-crimson-100/20 p-6">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-crimson-400 mb-4">After the strategy · May 2025 – May 2026</p>
                <div className="space-y-3">
                  {[
                    { label: 'Duration', value: '1 year' },
                    { label: 'Followers gained', value: '337' },
                    { label: 'Views', value: '1.9M' },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between text-sm border-b border-crimson-200 pb-2 last:border-0">
                      <span className="text-gray-500">{s.label}</span>
                      <span className="font-semibold text-crimson-500">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
              All metrics sourced directly from TikTok's native analytics dashboard, tracked weekly and logged manually. Data below covers May 2025 – May 2026.
            </p>

            {/* KPI cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <MetricCard value="1.9M"  label="Views · past 12 months"    delta="75% from FYP"       icon="👁️" />
              <MetricCard value="157K"  label="Total likes"               delta="8.3% like rate"     icon="❤️" />
              <MetricCard value="17K"   label="Total shares"              delta="High shareability"  icon="🔁" />
              <MetricCard value="799"   label="Followers (+337 this year)" delta="9.2% engagement"  icon="👥" />
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="border border-cream-200 p-6 lg:col-span-2">
                <h3 className="font-semibold text-gray-900 mb-1">Views Over Time</h3>
                <p className="text-xs text-gray-400 mb-5">Monthly · Jul 2025 – Apr 2026</p>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={viewsData}>
                    <defs>
                      <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#C41E30" stopOpacity={0.2} />
                        <stop offset="100%" stopColor="#C41E30" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#EDD8C4" />
                    <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#9ca3af' }} axisLine={false} tickLine={false} interval={1} />
                    <YAxis tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="views" stroke="#C41E30" strokeWidth={2} fill="url(#viewsGradient)" dot={{ fill: '#C41E30', r: 3 }} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="border border-cream-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-1">Traffic Sources</h3>
                <p className="text-xs text-gray-400 mb-5">Where views come from</p>
                <div className="space-y-3">
                  {trafficData.map((d, i) => (
                    <div key={d.source}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">{d.source}</span>
                        <span className="font-semibold text-crimson-400">{d.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-cream-200 overflow-hidden">
                        <div className="h-full transition-all duration-700" style={{ width: `${d.pct}%`, backgroundColor: TRAFFIC_COLORS[i] }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4 italic">22.4% Search is 2× typical for a small account</p>
              </div>

              <div className="border border-cream-200 p-6 lg:col-span-3">
                <h3 className="font-semibold text-gray-900 mb-1">Engagement Breakdown</h3>
                <p className="text-xs text-gray-400 mb-5">Total across all videos (thousands) · 365-day period</p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={engagementData} layout="vertical" barSize={14}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#EDD8C4" horizontal={false} />
                    <XAxis type="number" tick={{ fontSize: 12, fill: '#9ca3af' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}K`} />
                    <YAxis type="category" dataKey="type" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} width={75} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" radius={0}>
                      {engagementData.map((_, i) => <Cell key={i} fill={BAR_COLORS[i]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Data sourcing note */}
            <div className="border border-cream-200 bg-cream-100/40 px-5 py-4 flex items-start gap-3">
              <span className="text-lg shrink-0">🔗</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-gray-700">On the data:</span> All metrics were sourced directly from TikTok's native analytics dashboard and cross-referenced manually each week. This portfolio was also built using <span className="text-crimson-400 font-medium">Claude Code</span> with MCP server integrations. The same analytical approach applied to the content is applied to building the tools that track it.
              </p>
            </div>
          </Chapter>

          {/* ⑥ Key Learnings */}
          <Chapter num="06" label="Key Learnings">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Hook in second 1',
                  body: 'The first frame decides everything. Videos where I open with food close-ups or a bold claim consistently outperform talking-head intros. If you haven\'t stopped someone in the first second, you\'ve lost them.',
                },
                {
                  title: 'Perspective is the differentiator',
                  body: '462 followers in 3 years. 337 more in one. The only thing that changed was having a system. A vegetarian covering every borough, every cuisine, giving recs like a friend. That gap was sitting there wide open.',
                },
                {
                  title: 'Shares are the real metric',
                  body: '17K shares on 1.9M views is the number I\'m most proud of. Shares mean people sent your content to someone specific because it made them think of that person. That\'s resonance, not just reach.',
                },
              ].map((item) => (
                <div key={item.title} className="border-t-2 border-crimson-400 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Chapter>

        </div>
      </div>
    </section>
  )
}

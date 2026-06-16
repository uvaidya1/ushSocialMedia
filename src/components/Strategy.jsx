const pillars = [
  {
    num: '01',
    title: 'Audience-First Positioning',
    desc: 'Define who you\'re talking to before you film anything. For @lifeofush, that\'s anyone who wants an honest NYC food rec or a genuine glimpse into city life, not a sponsored post.',
  },
  {
    num: '02',
    title: 'Content Flywheel',
    desc: 'Every video has a job: discovery, retention, or conversion. Knowing which one you\'re making changes everything about how you make it.',
  },
  {
    num: '03',
    title: 'Data-Informed Iteration',
    desc: 'Weekly check-ins on watch time, completion rate, and share ratio. The numbers tell me what the audience wants more of.',
  },
  {
    num: '04',
    title: 'Community Over Broadcast',
    desc: 'Replying to every comment in the first 30 minutes signals to the algorithm and builds real relationships. The comment section is a community, not a billboard.',
  },
  {
    num: '05',
    title: 'Editorial Calendar',
    desc: '2-week content sprints with themes, hooks, and formats mapped out. No decision fatigue, just execution.',
  },
  {
    num: '06',
    title: 'Trend Surfing with Intent',
    desc: 'I only join a trend when there\'s a genuine angle for my lifestyle and food content. Forced relevance tanks engagement every time.',
  },
]

export default function Strategy() {
  return (
    <section id="strategy" className="bg-cream-100">
      <div className="section-container">
        <p className="section-label">Content Strategy</p>
        <h2 className="section-title">
          The playbook behind<br />
          <span className="font-serif italic text-gray-900">the content.</span>
        </h2>
        <p className="text-gray-600 max-w-xl mb-14 text-lg leading-relaxed">
          Six principles I apply to every piece of content and every growth problem.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-200">
          {pillars.map((p) => (
            <div key={p.num} className="group bg-cream-100 p-8 hover:bg-crimson-400 transition-colors duration-200 cursor-default">
              <span className="font-display text-5xl text-crimson-400 group-hover:text-white leading-none block mb-4 transition-colors duration-200">{p.num}</span>
              <h3 className="font-semibold text-gray-900 group-hover:text-white text-base mb-3 transition-colors duration-200">{p.title}</h3>
              <p className="text-sm text-gray-500 group-hover:text-white leading-relaxed transition-colors duration-200">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 bg-crimson-600 p-10 md:p-14 text-white relative overflow-hidden">
          <span className="absolute top-6 right-10 text-crimson-300 text-7xl font-display select-none opacity-40">◆</span>
          <div className="relative z-10 max-w-2xl">
            <p className="font-serif text-2xl md:text-3xl italic leading-snug mb-4">
              "The best content strategy is just really knowing your audience and caring enough
              to give them something they can't get anywhere else."
            </p>
            <p className="text-crimson-200 text-xs tracking-widest uppercase">Ushma's content philosophy</p>
          </div>
        </div>
      </div>
    </section>
  )
}

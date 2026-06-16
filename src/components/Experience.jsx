const jobs = [
  {
    title: 'Freelance Event Creative & Project Coordinator',
    company: 'Independent · Wedding & Event Coordination',
    period: 'June 2025',
    periodEnd: 'April 2026',
    type: 'Freelance',
    bullets: [
      'Led creative direction across 4 events, concepting visual themes, signage, and decor to maintain a cohesive aesthetic throughout each celebration',
      'Built a custom project tracker in Google Sheets, used by the full event team to manage tasks, timelines, and vendor coordination across all events',
      'Used ChatGPT and Canva Pro to develop mood boards, design assets, and written briefs that translated creative vision into actionable deliverables',
      'Collaborated alongside a professional event planner, identifying and filling operational gaps in communications, logistics, and design execution',
    ],
    skills: ['Creative Direction', 'Canva Pro', 'Project Management', 'ChatGPT', 'Google Sheets', 'Vendor Coordination'],
  },
  {
    title: 'Content Creator & Growth Strategist',
    company: '@lifeofush · TikTok & Instagram',
    period: '2024',
    periodEnd: 'Present',
    type: 'Creator',
    bullets: [
      'Grew @lifeofush to 799 followers (337 new in the past year) with 1.9M views, 157K likes, and 17K shares, applying consulting-grade analytical thinking to content strategy',
      'Built and maintain a documented growth playbook covering audience positioning, editorial calendar, and weekly performance reviews',
      '9.2% engagement rate and 22.4% Search discovery rate, both well above average for accounts this size',
      'Continuously A/B tests hooks, captions, and hashtags across TikTok and Instagram Reels to maximize reach and shareability',
    ],
    skills: ['TikTok Strategy', 'Instagram Reels', 'A/B Testing', 'Content Analytics', 'Audience Growth', 'Video Editing'],
  },
  {
    title: 'Business & Integration Architecture Senior Analyst',
    company: 'Accenture · Workday Commercial',
    period: 'Sept 2022',
    periodEnd: 'June 2025',
    type: 'Full-time',
    bullets: [
      'Consolidated 20+ invoice workflows into 6 scalable templates, cutting invoice creation time by 94% across 11 countries',
      'Partnered with 25-30 cross-functional stakeholders at a B2B SaaS company to analyze workflow performance and redesign quote-to-cash processes',
      'Used user journey mapping to surface inefficiencies in financial and operational workflows and implement scalable fixes',
      'Co-developed a monthly internal newsletter for ~1,700 employees, bridging analytics work with content and communications',
    ],
    skills: ['Workday', 'Workflow Design', 'User Journey Mapping', 'Stakeholder Management', 'Process Optimization'],
  },
  {
    title: 'Finance Consulting Analyst',
    company: 'Huron Consulting Group · Workday Higher Education',
    period: 'Oct 2021',
    periodEnd: 'Sept 2022',
    type: 'Full-time',
    bullets: [
      'Defined scope, roadmap, and implementation strategy for a grants management transformation at a large multi-campus university system',
      'Led cross-functional requirements gathering to design compliant, scalable operational workflows',
    ],
    skills: ['Workday', 'Enterprise Implementation', 'Cross-functional Alignment', 'Requirements Gathering'],
  },
  {
    title: 'MIS Graduate Research Fellow',
    company: 'IT Computing Services · East Carolina University',
    period: 'Sept 2020',
    periodEnd: 'June 2021',
    type: 'Fellowship',
    bullets: [
      'Researched cloud transformation and organizational technology strategy in collaboration with senior IT leadership',
    ],
    skills: ['Research & Analysis', 'Cloud Strategy', 'Technology Operations'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-cream-50">
      <div className="section-container">
        <p className="section-label">Work Experience</p>
        <h2 className="section-title">
          Where I've been<br />
          <span className="font-serif italic text-gray-900">& where I'm going.</span>
        </h2>
        <p className="text-gray-600 max-w-xl mb-16 text-lg leading-relaxed">
          Three years building systems that scale at Accenture and Huron, now applying that same
          operational instinct to content, audiences, and growth.
        </p>

        <div className="space-y-0">
          {jobs.map((job, i) => (
            <div key={job.title}
              className={`grid md:grid-cols-[160px_1fr] gap-6 md:gap-12 py-10 ${
                i < jobs.length - 1 ? 'border-b border-cream-200' : ''
              } ${job.highlight ? 'relative' : ''}`}
            >
              {/* Left col — date + type */}
              <div className="flex md:flex-col md:items-start items-center gap-3 md:gap-2 md:pt-1">
                <div className="text-right md:text-left hidden md:block">
                  <p className="font-display text-crimson-400 text-2xl leading-none">{job.period}</p>
                  <p className="text-xs text-gray-400 mt-1">to {job.periodEnd}</p>
                </div>
                <div className="md:hidden flex items-center gap-2 text-xs text-gray-400">
                  <span>{job.period}</span>
                  <span>·</span>
                  <span>{job.periodEnd}</span>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full mt-1 ${
                  job.highlight
                    ? 'bg-crimson-400 text-white'
                    : 'bg-cream-200 text-gray-500'
                }`}>
                  {job.type}
                </span>
              </div>

              {/* Right col — content */}
              <div className="pl-5 border-l-4 border-crimson-400">
                <h3 className="font-semibold text-gray-900 text-xl leading-snug mb-1">{job.title}</h3>
                <p className={`text-sm font-medium mb-5 ${job.highlight ? 'text-crimson-400' : 'text-crimson-400'}`}>
                  {job.company}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                      <span className="text-crimson-300 shrink-0 mt-0.5">›</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-14 pt-10 border-t border-cream-200 grid sm:grid-cols-3 gap-6">
          {[
            { school: 'East Carolina University', degree: 'MBA · Management Information Systems', detail: 'GPA 4.0 / 4.0 · 2021' },
            { school: 'UNC Kenan-Flagler', degree: 'Business Essentials Certificate', detail: '2019' },
            { school: 'UNC Chapel Hill', degree: 'BA Global Studies', detail: 'Minor: Medical Anthropology & Hindi-Urdu · 2018' },
          ].map((e) => (
            <div key={e.school}>
              <p className="font-semibold text-gray-900 text-sm">{e.school}</p>
              <p className="text-crimson-400 text-sm mt-0.5">{e.degree}</p>
              <p className="text-xs text-gray-400 mt-1">{e.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

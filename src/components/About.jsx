const traits = [
  { icon: '📊', label: 'Data-driven' },
  { icon: '🎬', label: 'Content Creator' },
  { icon: '🌆', label: 'NYC-based' },
  { icon: '🇮🇳', label: 'South Asian voice' },
  { icon: '🥗', label: 'Vegetarian foodie' },
  { icon: '📈', label: 'Growth mindset' },
]

export default function About() {
  return (
    <section id="about" className="bg-cream-100">
      <div className="section-container">
        <div className="max-w-2xl">
          {/* Text */}
          <div>
            <p className="section-label">Who I am</p>
            <h2 className="section-title">
              Finance brain,<br />
              <span className="font-serif italic text-gray-900">creator heart.</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I've spent years helping companies implement Workday, tracking budgets,
                building reports, and making sure the numbers tell the right story.
                Turns out, I love making stories out of numbers in a completely different context too.
              </p>
              <p>
                <strong className="text-crimson-400">@lifeofush</strong> is where I share NYC through my lens:
                the food, the lifestyle, and what it's like to be Indian-American in one of the most diverse
                cities in the world. Every cuisine, every neighborhood, no filter. It quickly became a growth
                experiment I couldn't stop analyzing.
              </p>
              <p>
                Now I'm bringing the analytical rigor of enterprise consulting into content strategy,
                audience growth, and brand storytelling.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {traits.map((t) => (
                <span key={t.label} className="tag flex items-center gap-1.5">
                  <span>{t.icon}</span>{t.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

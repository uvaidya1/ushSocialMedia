export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-cream-50">
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, #C41E30 0px, #C41E30 1px, transparent 1px, transparent 60px)' }} />

      {/* Full-height photo column — absolutely positioned on the right */}
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%] animate-fade-up"
        style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>


        <img
          src={`${import.meta.env.BASE_URL}headshot.png`}
          alt="Ushma Vaidya"
          className="relative z-10 w-full h-full object-contain object-bottom animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="section-container relative z-10 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="w-8 h-px bg-crimson-400" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-600 mb-0">NYC <span className="text-crimson-400 normal-case tracking-normal text-base">◆</span> Finance → Growth</span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl text-crimson-400 leading-[1.0] mb-6 animate-fade-up">
              Hi, I'm Ushma!
              <br />
              <span className="font-serif italic font-normal text-4xl md:text-6xl text-gray-900">
                I turn data into stories
                <br />people actually watch
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Think of me as your NYC insider: food, culture, lifestyle.<br />
              1.9M views to back it up.
            </p>

            <div className="flex flex-wrap gap-10 mb-12 animate-fade-up border-t border-b border-cream-200 py-6"
              style={{ animationDelay: '0.2s' }}>
              {[
                { value: '1.9M',       label: 'views · past 12 months' },
                { value: '799',        label: 'followers & growing' },
                { value: '@lifeofush', label: 'on TikTok' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl text-crimson-400">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#case-study" className="btn-filled">
                View Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect →
              </a>
            </div>
          </div>

          {/* Right col spacer */}
          <div className="hidden md:block" />

        </div>
      </div>

    </section>
  )
}

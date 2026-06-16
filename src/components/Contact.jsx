const TIKTOK_PATH = "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z"

function TikTokIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* teal offset — shifted slightly left */}
      <g transform="translate(-0.6, 0)">
        <path fill="#69C9D0" d={TIKTOK_PATH} />
      </g>
      {/* red offset — shifted slightly right */}
      <g transform="translate(0.6, 0)">
        <path fill="#EE1D52" d={TIKTOK_PATH} />
      </g>
      {/* main black logo on top */}
      <path fill="#010101" d={TIKTOK_PATH} />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-grad" cx="25%" cy="110%" r="130%">
          <stop offset="0%"  stopColor="#FFD600"/>
          <stop offset="20%" stopColor="#FF7A00"/>
          <stop offset="45%" stopColor="#FF0069"/>
          <stop offset="70%" stopColor="#D300C5"/>
          <stop offset="100%" stopColor="#7638FA"/>
        </radialGradient>
      </defs>
      <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GmailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/>
      <path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/>
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
      <path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/>
      <path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/>
    </svg>
  )
}

const ICONS = {
  TikTok:    TikTokIcon,
  Instagram: InstagramIcon,
  LinkedIn:  LinkedInIcon,
  Email:     GmailIcon,
}

const links = [
  {
    label: 'TikTok',
    handle: '@lifeofush',
    href: 'https://tiktok.com/@lifeofush',
  },
  {
    label: 'Instagram',
    handle: '@lifeofushh',
    href: 'https://instagram.com/lifeofushh',
  },
  {
    label: 'LinkedIn',
    handle: 'ushma-vaidya',
    href: 'https://www.linkedin.com/in/ushma-vaidya',
  },
  {
    label: 'Email',
    handle: 'Say hello',
    href: 'mailto:lifeofush@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-crimson-400 text-white">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson-200 mb-3">Get in touch</p>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
            Let's build something
            <br />
            <span className="font-serif italic font-normal text-crimson-100">worth watching.</span>
          </h2>
          <p className="text-crimson-100 text-lg leading-relaxed mb-14">
            Open to brand partnerships, growth, content strategy, and strategy & operations.
            Always up for conversations with people doing interesting work at the intersection
            of data and creativity.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {links.map((l) => {
              const Icon = ICONS[l.label]
              return (
                <a key={l.label} href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="relative aspect-square flex flex-col items-center justify-center gap-4 bg-crimson-100 transition-all duration-300 hover:scale-125 hover:z-10 hover:shadow-2xl">
                  <Icon className="w-9 h-9" />
                  <div className="text-center">
                    <p className="font-semibold text-sm text-crimson-700">{l.label}</p>
                    <p className="text-crimson-500 text-xs mt-1">{l.handle}</p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="inline-flex items-center gap-2.5 border border-crimson-300 px-5 py-2.5">
            <span className="w-2 h-2 bg-green-400 animate-pulse" />
            <span className="text-sm text-crimson-100">Currently open to new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}

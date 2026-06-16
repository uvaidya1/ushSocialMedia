import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Experience', href: '#experience' },
  { label: 'Tools',      href: '#tools' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cream-50/95 backdrop-blur-md border-b border-cream-200' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl text-crimson-400 hover:text-crimson-500 transition-colors">
          ush.
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-700 hover:text-crimson-400 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden p-2 text-crimson-400" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-crimson-400"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

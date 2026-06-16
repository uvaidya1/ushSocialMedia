export default function Footer() {
  return (
    <footer className="bg-crimson-600 text-crimson-200/60 py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="font-display text-xl text-crimson-100/80">ush.</p>
        <p>© {new Date().getFullYear()} Ushma. All rights reserved.</p>
        <a href="https://tiktok.com/@lifeofush" target="_blank" rel="noopener noreferrer"
          className="hover:text-white transition-colors">
          @lifeofush
        </a>
      </div>
    </footer>
  )
}

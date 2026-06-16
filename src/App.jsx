import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import CaseStudy from './components/CaseStudy'
import Experience from './components/Experience'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <CaseStudy />
        <Ticker />
        <Experience />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

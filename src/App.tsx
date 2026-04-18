import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Journey } from './components/Journey'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { QuickActions } from './components/QuickActions'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300 pb-28">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />
      <QuickActions />
      <Footer />
    </div>
  )
}

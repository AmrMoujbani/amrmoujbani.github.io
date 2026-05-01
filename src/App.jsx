import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Architectures from './components/Architectures'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [dark, setDark] = useDarkMode()

  return (
    <div className="min-h-screen">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Architectures />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

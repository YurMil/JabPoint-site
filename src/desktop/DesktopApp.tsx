import { useApp } from '../hooks/useApp'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Community } from './components/Community'
import { Platform } from './components/Platform'
import { HowItWorks } from './components/HowItWorks'
import { Partners } from './components/Partners'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './desktop.css'

/** Desktop / tablet layout — full marketing page. */
export default function DesktopApp() {
  const { theme } = useApp()

  return (
    <div className={`jp jp-desktop${theme === 'light' ? ' light' : ''}`}>
      <div className="bg-grid" aria-hidden />
      <Header />
      <main>
        <Hero />
        <Services />
        <Community />
        <Platform />
        <HowItWorks />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

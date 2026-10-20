import { useEffect } from 'react'
import { ScrollTrigger } from './lib/gsap'
import Frame from './components/layout/Frame'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import Marquee from './components/common/Marquee'
import { prefersReducedMotion } from './hooks/usePrefersReducedMotion'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import ExperienceSection from './components/experience/ExperienceSection'
import ProjectsSection from './components/projects/ProjectsSection'
import SkillsSection from './components/skills/SkillsSection'
import EducationSection from './components/education/EducationSection'
import CertificationsSection from './components/certifications/CertificationsSection'
import ContactSection from './components/contact/ContactSection'

export default function App() {
  // Web fonts change text metrics; re-measure scroll triggers once they are in.
  useEffect(() => {
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  // Hairlines draw in from the left as they enter the viewport.
  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    root.classList.add('hl-armed')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { rootMargin: '0px 0px -6% 0px' },
    )
    document.querySelectorAll('.hairline').forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('hl-armed')
    }
  }, [])

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded bg-accent px-4 py-2 text-sm font-medium text-canvas focus:translate-y-0"
      >
        Skip to content
      </a>
      <Frame />
      <ScrollProgress />
      <Navbar />
      <div className="canvas">
        <div className="canvas-inner">
          <main id="main">
            <Hero />
            <Marquee />
            <About />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

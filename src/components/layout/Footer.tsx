import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { navItems, profile } from '../../data/profile'
import VisitCounter from './VisitCounter'

export default function Footer() {
  return (
    <footer className="hairline mt-10 pb-8 pt-9 md:pt-12" aria-label="Site footer">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="display display-sentence text-[2.4rem] text-ink">
            Moksha<span className="text-accent">.</span>
          </p>
          <p className="mt-3 text-sm text-muted">Mokshagna Maddasani · Software Engineer & SDET</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="inline-flex min-h-[44px] items-center py-1 text-sm text-muted transition-colors hover:text-ink md:min-h-0">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Elsewhere</p>
          <ul className="space-y-1 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex min-h-[44px] items-center gap-3 py-1 text-muted md:min-h-0 transition-colors hover:text-ink">
                <FiMail aria-hidden className="h-4 w-4 text-accent" />
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-3 py-1 text-muted md:min-h-0 transition-colors hover:text-ink">
                <FaLinkedinIn aria-hidden className="h-4 w-4 text-accent" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-3 py-1 text-muted md:min-h-0 transition-colors hover:text-ink">
                <FaGithub aria-hidden className="h-4 w-4 text-accent" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <p className="text-xs text-muted">© {new Date().getFullYear()} Mokshagna Maddasani. All rights reserved.</p>
        <VisitCounter />
      </div>
    </footer>
  )
}

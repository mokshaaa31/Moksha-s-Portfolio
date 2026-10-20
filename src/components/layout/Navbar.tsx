import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../../data/profile'
import Monogram from '../common/Monogram'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1))
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id)
          else setActive((cur) => (cur === en.target.id ? '' : cur))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className="fixed z-[80] flex items-center justify-between transition-colors duration-500"
        style={{
          top: 'var(--frame-y)',
          left: 'var(--frame-x)',
          right: 'var(--frame-x)',
          height: 'var(--nav-h)',
          paddingInline: 'var(--pad-x)',
          background: scrolled || open ? '#050505' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          borderTopLeftRadius: 'var(--frame-radius)',
          borderTopRightRadius: 'var(--frame-radius)',
        }}
      >
        <a href="#home" aria-label="Mokshagna Maddasani, home" className="-ml-1 flex min-h-[44px] min-w-[44px] items-center" onClick={close}>
          <Monogram />
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="hidden text-[0.8rem] text-muted transition-colors hover:text-accent xl:block"
        >
          {profile.email}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href.slice(1) ? 'true' : undefined}
              className={`relative py-1 text-[0.8rem] tracking-wide transition-colors hover:text-ink after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-500 ${
                active === item.href.slice(1) ? 'text-ink after:scale-x-100' : 'text-muted after:scale-x-0'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="border-b border-accent pb-0.5 text-[0.8rem] tracking-wide text-accent transition-colors hover:text-ink hover:border-ink"
          >
            Resume
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 flex min-h-[44px] min-w-[44px] items-center justify-end gap-3 text-[0.78rem] uppercase tracking-[0.2em] text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed z-[79] flex flex-col justify-between bg-canvas"
          style={{
            inset: 'var(--frame-y) var(--frame-x)',
            borderRadius: 'var(--frame-radius)',
            padding: 'calc(var(--nav-h) + 28px) var(--pad-x) 32px',
          }}
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={close}
                  className="display display-sentence block py-1.5 text-[1.35rem] text-ink md:text-[1.9rem] hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 text-sm text-muted">
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="link-u w-fit text-accent" onClick={close}>
              Download resume
            </a>
            <a href={`mailto:${profile.email}`} className="w-fit hover:text-accent">
              {profile.email}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

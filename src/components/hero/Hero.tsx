import { useLayoutEffect, useRef } from 'react'
import { profile } from '../../data/profile'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import Button from '../common/Button'
import ArrowIcon from '../common/ArrowIcon'

export default function Hero() {
  const { photo } = profile
  const rootRef = useRef<HTMLElement>(null)

  // Gentle scroll-linked drift: headline lines slide apart, portrait settles.
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      const trigger = { trigger: root, start: 'top top', end: 'bottom top', scrub: 0.8 }
      const lines = root.querySelectorAll('.line-mask')
      gsap.to(lines[0], { xPercent: -3, ease: 'none', scrollTrigger: trigger })
      gsap.to(lines[1], { xPercent: 3, ease: 'none', scrollTrigger: trigger })
      gsap.fromTo(
        root.querySelector('.hero-img'),
        { scale: 1.14, yPercent: -3 },
        { scale: 1, yPercent: 3, ease: 'none', scrollTrigger: { trigger: root.querySelector('figure'), start: 'top 95%', end: 'bottom 10%', scrub: 0.8 } },
      )
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} id="home" aria-labelledby="hero-title" className="pb-12 pt-[calc(var(--nav-h)+2.5rem)] md:pb-16 md:pt-[calc(var(--nav-h)+4.5rem)]">
      {/* Headline: label sits left of line one, line two flush left, as in an editorial masthead */}
      <h1 id="hero-title" className="display">
        <span className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-end sm:gap-[clamp(1.5rem,5cqi,5rem)]">
          <span className="eyebrow eyebrow-muted fade-in max-w-[13rem] shrink-0 pb-[0.9em] !tracking-[0.16em]" style={{ '--d': '0.9s' } as React.CSSProperties}>
            {profile.label}
          </span>
          <span className="line-mask sm:whitespace-nowrap text-[clamp(2.2rem,7.6cqi,6.4rem)] text-ink">
            <span style={{ '--d': '0.1s' } as React.CSSProperties}>Building with</span>
          </span>
        </span>
        <span className="line-mask mt-1 text-[clamp(2.2rem,7.6cqi,6.4rem)] text-accent">
          <span style={{ '--d': '0.25s' } as React.CSSProperties}>Logic &amp; Curiosity</span>
        </span>
      </h1>

      <div className="mt-10 grid items-end gap-12 md:mt-12 md:grid-cols-12 md:gap-8">
        <figure className="md:col-span-5">
          <div className="photo-reveal overflow-hidden bg-outer">
            <img
              src={photo.src}
              width={photo.width}
              height={photo.height}
              alt={photo.alt}
              fetchPriority="high"
              decoding="async"
              className="hero-img block h-auto w-full object-cover will-change-transform"
            />
          </div>
          <figcaption className="fade-in mt-4 flex justify-between text-[0.72rem] uppercase tracking-[0.18em] text-muted" style={{ '--d': '1.4s' } as React.CSSProperties}>
            <span>{profile.name}</span>
            <span>{profile.location}</span>
          </figcaption>
        </figure>

        <div className="fade-in md:col-span-4 md:col-start-8 md:pb-10" style={{ '--d': '1.1s' } as React.CSSProperties}>
          <div className="space-y-5 text-[0.95rem] leading-[1.8] text-muted">
            {profile.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="mt-8 border-l border-accent/60 pl-4 text-[0.82rem] leading-relaxed text-muted">
            <span className="eyebrow block pb-1">Currently</span>
            {profile.current.role} at <span className="text-ink">{profile.current.company}</span> · since {profile.current.since}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href="#about" className="link-u">
              Read more <ArrowIcon />
            </a>
            <Button variant="solid" href={profile.resumeUrl} download={profile.resumeFileName}>
              Download resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

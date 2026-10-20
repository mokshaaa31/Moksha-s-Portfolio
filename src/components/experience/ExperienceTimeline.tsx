import { useLayoutEffect, useRef } from 'react'
import { experiences } from '../../data/experience'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import Reveal from '../common/Reveal'

export default function ExperienceTimeline() {
  const listRef = useRef<HTMLOListElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)

  // The lavender rule fills as the reader moves down the list.
  useLayoutEffect(() => {
    const list = listRef.current
    const fill = fillRef.current
    if (!list || !fill || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: list, start: 'top 70%', end: 'bottom 70%', scrub: 0.6 },
        },
      )
    }, list)
    return () => ctx.revert()
  }, [])

  return (
    <ol ref={listRef} className="relative [--tl-col:12rem] [--tl-gap:5rem]">
      {/* timeline rule */}
      <span aria-hidden className="absolute bottom-0 left-[5px] top-2 w-px bg-line md:left-[calc(var(--tl-col)+var(--tl-gap)/2)]" />
      <span
        ref={fillRef}
        aria-hidden
        className="absolute bottom-0 left-[5px] top-2 w-px origin-top bg-accent md:left-[calc(var(--tl-col)+var(--tl-gap)/2)]"
      />

      {experiences.map((exp) => (
        <li key={exp.company} className="relative pb-12 pl-8 last:pb-0 md:grid md:grid-cols-[var(--tl-col)_minmax(0,1fr)] md:gap-x-[var(--tl-gap)] md:pb-14 md:pl-0">
          <span
            aria-hidden
            className={`absolute left-0 top-[0.55rem] h-[11px] w-[11px] rounded-full border border-accent md:left-[calc(var(--tl-col)+var(--tl-gap)/2-5px)] ${
              exp.current ? 'pulse-dot bg-accent' : 'bg-canvas'
            }`}
          />
          <Reveal className="md:col-start-1 md:row-start-1 md:text-right">
            <p className="eyebrow">{exp.dates}</p>
            <p className="mt-2 text-sm text-muted">{exp.location}</p>
            {exp.current && <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink">Current</p>}
          </Reveal>

          <Reveal className="mt-5 md:col-start-2 md:row-start-1 md:mt-0" delay={0.08} stagger=":scope > *">
            <h3 className="display display-sentence text-[clamp(1.6rem,3.1cqi,2.4rem)] text-ink">{exp.company}</h3>
            <p className="mt-2 text-[0.95rem] font-medium text-accent-soft">{exp.role}</p>
            <ul className="mt-7 space-y-3.5">
              {exp.bullets.map((b) => (
                <li key={b} className="relative max-w-[42rem] pl-5 text-[0.95rem] md:pl-6 leading-[1.75] text-muted">
                  <span aria-hidden className="absolute left-0 top-[0.8em] h-px w-2.5 bg-accent/70" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}

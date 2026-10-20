import { useLayoutEffect, useRef, type ElementType, type ReactNode } from 'react'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  y?: number
  /** CSS selector for children to stagger. When omitted the element itself reveals. */
  stagger?: string
}

/** Scroll-triggered fade/rise. Content stays visible if JS or motion is unavailable. */
export default function Reveal({ children, as: Tag = 'div', className, delay = 0, y = 28, stagger }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const calm = prefersReducedMotion()
    const ctx = gsap.context(() => {
      const targets = stagger ? el.querySelectorAll(stagger) : el
      gsap.from(targets, {
        opacity: 0,
        y: calm ? 0 : y,
        duration: calm ? 0.9 : 1,
        delay,
        ease: 'power3.out',
        stagger: stagger ? 0.09 : 0,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [delay, y, stagger])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

import { Fragment, useLayoutEffect, useRef, type ElementType } from 'react'
import { gsap } from '../../lib/gsap'
import { prefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export type TextPart = { text: string; className?: string }

type Props = {
  parts: TextPart[]
  as?: ElementType
  className?: string
  id?: string
}

/** Headline that rises word by word when scrolled into view. Plain text if motion is reduced. */
export default function SplitText({ parts, as: Tag = 'h2', className, id }: Props) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const calm = prefersReducedMotion()
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.split-inner'), {
        yPercent: calm ? 0 : 115,
        opacity: calm ? 0 : 1,
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.07,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <Tag ref={ref} id={id} className={className}>
      {parts.map((part, pi) => {
        const words = part.text.split(' ')
        return (
          <span key={pi} className={part.className}>
            {words.map((w, wi) => (
              <Fragment key={wi}>
                <span className="split-word">
                  <span className="split-inner">{w}</span>
                </span>
                {wi < words.length - 1 || pi < parts.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </span>
        )
      })}
    </Tag>
  )
}

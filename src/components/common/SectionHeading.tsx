import Reveal from './Reveal'
import SplitText from './SplitText'

type Props = {
  index: string
  eyebrow: string
  /** White part of the heading */
  lead: string
  /** Lavender part of the heading */
  accent?: string
  id?: string
  className?: string
}

export default function SectionHeading({ index, eyebrow, lead, accent, id, className = '' }: Props) {
  return (
    <div className={className}>
      <Reveal>
        <p className="eyebrow mb-7 flex items-center gap-4">
          <span className="tabular-nums">{index}</span>
          <span aria-hidden className="h-px w-10 bg-accent/60" />
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <SplitText
        id={id}
        className="display text-[clamp(2.1rem,5.4cqi,4.4rem)] text-ink"
        parts={[{ text: lead }, ...(accent ? [{ text: accent, className: 'text-accent' }] : [])]}
      />
    </div>
  )
}

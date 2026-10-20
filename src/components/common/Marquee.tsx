const items = [
  'Software Engineering',
  'Test Automation',
  'Artificial Intelligence',
  'Full-Stack Development',
  'Machine Learning',
]

/** Decorative ticker between hero and About. Hidden from assistive tech. */
export default function Marquee() {
  const group = (
    <ul className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <li key={t} className="flex items-center">
          <span
            className={`display display-sentence whitespace-nowrap px-[clamp(1.5rem,3vw,3rem)] text-[clamp(1.2rem,2.2vw,1.9rem)] italic ${
              i % 2 ? 'text-accent' : 'text-ink/85'
            }`}
          >
            {t}
          </span>
          <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-accent/80" />
        </li>
      ))}
    </ul>
  )
  return (
    <div aria-hidden className="ticker py-4 md:py-5" style={{ marginInline: 'calc(var(--pad-x) * -1)' }}>
      <div className="ticker-track">
        {group}
        {group}
        {group}
        {group}
      </div>
    </div>
  )
}

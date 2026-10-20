/** Original typographic mark: a high-contrast serif "M" doubled with a lavender hairline. */
export default function Monogram({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-display text-[1.7rem] leading-none tracking-tight ${className}`}
      aria-hidden
    >
      <span className="text-ink">M</span>
      <span className="-ml-[0.32em] text-accent">M</span>
    </span>
  )
}

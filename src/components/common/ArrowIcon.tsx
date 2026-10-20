export default function ArrowIcon({ className = 'arrow' }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 9.5 9.5 2.5M4 2.5h5.5V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  )
}

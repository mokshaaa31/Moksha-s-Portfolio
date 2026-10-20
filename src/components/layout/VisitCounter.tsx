import { useEffect, useState } from 'react'
import { FiEye } from 'react-icons/fi'
import { prefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const API = 'https://abacus.jasoncameron.dev'
const NAMESPACE = import.meta.env.VITE_VISIT_NAMESPACE ?? 'moksha-portfolio-7f3a9c21'
const KEY = 'visits'
const SEEN_FLAG = 'moksha-portfolio-counted'
const isLocal = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)
// Local development never counts, unless a test namespace is supplied explicitly.
const countHere = !isLocal || !!import.meta.env.VITE_VISIT_NAMESPACE

function alreadyCounted(): boolean {
  try {
    return localStorage.getItem(SEEN_FLAG) === '1'
  } catch {
    return false
  }
}

async function fetchCount(): Promise<number | null> {
  const shouldHit = countHere && !alreadyCounted()
  try {
    let res = await fetch(`${API}/${shouldHit ? 'hit' : 'get'}/${NAMESPACE}/${KEY}`)
    if (res.status === 404 && !shouldHit) res = await fetch(`${API}/get/${NAMESPACE}/${KEY}`)
    if (!res.ok) return null
    const { value } = (await res.json()) as { value: number }
    if (shouldHit) {
      try {
        localStorage.setItem(SEEN_FLAG, '1')
      } catch {
        /* storage unavailable: the visit may be counted again next time */
      }
    }
    return typeof value === 'number' ? value : null
  } catch {
    return null
  }
}

/** Unique-browser visit count. Hidden if the counter service cannot be reached. */
export default function VisitCounter() {
  const [target, setTarget] = useState<number | null>(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    let alive = true
    fetchCount().then((n) => alive && setTarget(n))
    return () => {
      alive = false
    }
  }, [])

  useEffect(() => {
    if (target === null) return
    if (prefersReducedMotion() || target < 2) {
      setShown(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400)
      setShown(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])

  if (target === null) return null
  return (
    <p className="inline-flex items-center gap-2.5 text-xs text-muted" aria-label={`${target} visits`}>
      <FiEye aria-hidden className="h-4 w-4 text-accent" />
      <span className="tabular-nums text-ink">{shown.toLocaleString()}</span>
      <span className="uppercase tracking-[0.16em]">{target === 1 ? 'visit' : 'visits'}</span>
    </p>
  )
}

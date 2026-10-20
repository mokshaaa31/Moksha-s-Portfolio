import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'

const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent('Hello Moksha')}`

async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    ta.remove()
    return ok
  }
}

/** "Say hello" opens a small menu, so it always works even without a desktop mail app configured. */
export default function SayHello() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const onCopy = async () => {
    if (await copy(profile.email)) {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    }
  }

  const item =
    'flex min-h-[44px] w-full items-center px-5 text-left text-[0.9rem] text-ink transition-colors hover:bg-accent hover:text-canvas'

  return (
    <div ref={wrap} className="relative inline-block">
      <button
        type="button"
        className="btn btn-solid"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Say hello
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      </button>

      {open && (
        <div role="menu" className="absolute left-0 top-[calc(100%+10px)] z-30 w-64 overflow-hidden rounded-xl border border-line bg-soft shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          <a role="menuitem" className={item} href={gmail} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            Write in Gmail
          </a>
          <a role="menuitem" className={`${item} border-t border-line`} href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
            Open my mail app
          </a>
          <button role="menuitem" type="button" className={`${item} border-t border-line`} onClick={onCopy}>
            {copied ? 'Copied ✓' : 'Copy email address'}
          </button>
        </div>
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied' : ''}
      </span>
    </div>
  )
}

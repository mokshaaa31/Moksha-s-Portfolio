import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Node = { x: number; y: number; w: number; h: number; lines: string[]; accent?: boolean }
type Layout = { w: number; h: number; nodes: Node[]; edges: string[]; tags: { x: number; y: number; text: string }[] }

const H: Layout = {
  w: 1200,
  h: 392,
  tags: [
    { x: 10, y: 38, text: 'Video path' },
    { x: 10, y: 226, text: 'Audio path' },
  ],
  nodes: [
    { x: 10, y: 56, w: 170, h: 76, lines: ['Video', 'input'] },
    { x: 210, y: 56, w: 170, h: 76, lines: ['Vision', 'Transformer', 'encoder'] },
    { x: 410, y: 56, w: 170, h: 76, lines: ['Video', 'representation'] },
    { x: 10, y: 244, w: 170, h: 76, lines: ['Audio', 'input'] },
    { x: 210, y: 244, w: 170, h: 76, lines: ['CNN-based', 'audio encoder'] },
    { x: 410, y: 244, w: 170, h: 76, lines: ['Audio', 'representation'] },
    { x: 620, y: 148, w: 190, h: 96, lines: ['Cross-attention', 'fusion'], accent: true },
    { x: 840, y: 156, w: 150, h: 80, lines: ['Softmax', 'classifier'] },
    { x: 1020, y: 156, w: 170, h: 80, lines: ['Emotion', 'prediction'] },
  ],
  edges: [
    'M180 94 H210', 'M380 94 H410', 'M580 94 H715 V148',
    'M180 282 H210', 'M380 282 H410', 'M580 282 H715 V244',
    'M810 196 H840', 'M990 196 H1020',
  ],
}

const V: Layout = {
  w: 380,
  h: 740,
  tags: [
    { x: 20, y: 16, text: 'Video path' },
    { x: 200, y: 16, text: 'Audio path' },
  ],
  nodes: [
    { x: 20, y: 30, w: 160, h: 72, lines: ['Video', 'input'] },
    { x: 20, y: 142, w: 160, h: 80, lines: ['Vision', 'Transformer', 'encoder'] },
    { x: 20, y: 262, w: 160, h: 72, lines: ['Video', 'representation'] },
    { x: 200, y: 30, w: 160, h: 72, lines: ['Audio', 'input'] },
    { x: 200, y: 142, w: 160, h: 80, lines: ['CNN-based', 'audio encoder'] },
    { x: 200, y: 262, w: 160, h: 72, lines: ['Audio', 'representation'] },
    { x: 70, y: 402, w: 240, h: 88, lines: ['Cross-attention', 'fusion'], accent: true },
    { x: 90, y: 530, w: 200, h: 72, lines: ['Softmax', 'classifier'] },
    { x: 90, y: 642, w: 200, h: 72, lines: ['Emotion', 'prediction'] },
  ],
  edges: [
    'M100 102 V142', 'M100 222 V262', 'M100 334 V402',
    'M280 102 V142', 'M280 222 V262', 'M280 334 V402',
    'M190 490 V530', 'M190 602 V642',
  ],
}

function Diagram({ layout, id }: { layout: Layout; id: string }) {
  const lineH = 16
  return (
    <svg
      viewBox={`0 0 ${layout.w} ${layout.h}`}
      role="img"
      aria-labelledby={`${id}-t ${id}-d`}
      className="h-auto w-full"
    >
      <title id={`${id}-t`}>Multimodal emotion recognition architecture</title>
      <desc id={`${id}-d`}>
        Video input passes through a Vision Transformer encoder to a video representation. Audio input passes through a
        CNN-based audio encoder to an audio representation. Both representations meet in a cross-attention fusion
        module, followed by a softmax classifier that produces the emotion prediction.
      </desc>
      <defs>
        <marker id={`${id}-arrow`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M1 1 7 4 1 7" fill="none" stroke="var(--color-accent)" strokeWidth="1.3" />
        </marker>
      </defs>

      {layout.tags.map((t) => (
        <text key={t.text} x={t.x} y={t.y} className="dg-tag">
          {t.text}
        </text>
      ))}

      {layout.edges.map((d, i) => (
        <path key={d} d={d} className="dg-edge dg-node-edge" markerEnd={`url(#${id}-arrow)`} style={{ ['--i' as string]: i }} />
      ))}

      {layout.nodes.map((n, i) => {
        const startY = n.y + n.h / 2 - ((n.lines.length - 1) * lineH) / 2 + 4.5
        return (
          <g key={n.lines.join(' ')} className="dg-node" style={{ ['--i' as string]: i }}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} className={`dg-box ${n.accent ? 'dg-box--accent' : ''}`} />
            {n.lines.map((l, li) => (
              <text key={l} x={n.x + n.w / 2} y={startY + li * lineH} textAnchor="middle" className="dg-label">
                {l}
              </text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

export default function ProjectArchitecture() {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'idle' | 'armed' | 'live'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    setState('armed')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('live')
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <figure>
      <div ref={ref} data-state={state} className="dg mx-auto max-w-[27rem] lg:max-w-none">
        <div className="hidden lg:block">
          <Diagram layout={H} id="dg-h" />
        </div>
        <div className="lg:hidden">
          <Diagram layout={V} id="dg-v" />
        </div>
      </div>
      <figcaption className="mt-6 text-center text-[0.72rem] uppercase tracking-[0.18em] text-muted">
        Architecture overview · simplified from the project description
      </figcaption>
    </figure>
  )
}

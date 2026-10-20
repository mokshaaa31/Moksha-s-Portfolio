import { featuredProject as fp } from '../../data/projects'
import Reveal from '../common/Reveal'
import SplitText from '../common/SplitText'
import ArrowIcon from '../common/ArrowIcon'
import ProjectArchitecture from './ProjectArchitecture'

export default function FeaturedProject() {
  return (
    <article aria-labelledby="featured-title">
      <Reveal>
        <p className="eyebrow eyebrow-muted">{fp.eyebrow}</p>
        <SplitText
          as="h3"
          id="featured-title"
          className="display mt-6 text-[clamp(1.9rem,5.2cqi,4.4rem)]"
          parts={[
            { text: fp.title[0], className: 'block text-ink' },
            { text: fp.title[1], className: 'block text-accent' },
          ]}
        />
      </Reveal>

      <div className="mt-10 grid gap-14 md:mt-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5 lg:col-span-4">
          <p className="eyebrow mb-5">The problem</p>
          <p className="body-copy text-[1.02rem]">{fp.problem}</p>
        </Reveal>
        <Reveal className="md:col-span-7 lg:col-span-6 lg:col-start-7" delay={0.08}>
          <p className="eyebrow mb-5">Technical approach</p>
          <ol className="space-y-6">
            {fp.approach.map((a, i) => (
              <li key={a.title} className="grid grid-cols-[2.5rem_1fr] gap-2">
                <span className="display display-sentence text-xl text-accent">0{i + 1}</span>
                <div>
                  <p className="font-medium text-ink">{a.title}</p>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Reveal className="hairline mt-12 pt-8 md:mt-14 md:pt-10">
        <p className="eyebrow mb-10">Architecture</p>
        <ProjectArchitecture />
      </Reveal>

      <Reveal className="hairline mt-12 grid gap-12 pt-8 md:mt-14 md:grid-cols-12 md:gap-8 md:pt-10" stagger=":scope > div">
        <div className="md:order-1 md:col-span-6 lg:order-none lg:col-span-3">
          <p className="eyebrow mb-5">Technology stack</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 md:block md:space-y-2">
            {fp.stack.map((t) => (
              <li key={t} className="text-[0.98rem] text-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:order-3 md:col-span-12 lg:order-none lg:col-span-5">
          <p className="eyebrow mb-5">My contribution</p>
          <ul className="space-y-3">
            {fp.contribution.map((c) => (
              <li key={c} className="relative pl-6 text-[0.95rem] leading-[1.75] text-muted">
                <span aria-hidden className="absolute left-0 top-[0.8em] h-px w-3 bg-accent/70" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:order-2 md:col-span-6 lg:order-none lg:col-span-3 lg:col-start-10">
          <p className="eyebrow mb-5">Evaluation</p>
          <ul className="space-y-2">
            {fp.evaluation.map((e) => (
              <li key={e} className="text-[0.98rem] text-ink">
                {e}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[0.85rem] text-muted">{fp.evaluationNote}</p>
        </div>
      </Reveal>

      <Reveal className="mt-9 flex flex-wrap gap-8">
        {fp.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link-u text-accent">
            {l.label} <ArrowIcon />
          </a>
        ))}
      </Reveal>
    </article>
  )
}

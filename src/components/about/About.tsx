import { about } from '../../data/profile'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="hairline py-12 md:py-20">
      <SectionHeading
        id="about-title"
        index="01"
        eyebrow={about.eyebrow}
        lead="Curious by nature."
        accent="Technical by design."
      />

      <div className="mt-10 grid gap-14 md:mt-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <dl className="space-y-6">
            {about.facts.map((f) => (
              <div key={f.label} className="hairline pt-4">
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-2 text-[0.95rem] leading-snug text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal stagger="p" className="space-y-6">
            {about.paragraphs.map((p) => (
              <p key={p} className="body-copy text-[1.02rem]">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="mt-9">
            <blockquote className="display display-sentence border-l border-accent pl-6 text-[clamp(1.3rem,2.5cqi,1.8rem)] italic text-accent-soft">
              &ldquo;{about.quote}&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { education } from '../../data/education'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

export default function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="hairline py-12 md:py-20">
      <SectionHeading index="05" eyebrow="Education" id="education-title" lead="Where I" accent="learned." />

      <ol className="mt-10 border-b border-line md:mt-14">
        {education.map((e, i) => (
          <Reveal as="li" key={e.school} className="hairline grid gap-5 py-7 md:grid-cols-12 md:gap-8 md:py-9">
            <div className="md:col-span-3">
              <p className="eyebrow">{e.dates}</p>
              <p className="mt-2 text-sm text-muted">{e.location}</p>
            </div>
            <div className="md:col-span-8 md:col-start-5">
              <h3
                className={`display display-sentence text-ink ${
                  i === 0 ? 'text-[clamp(1.6rem,3.1cqi,2.4rem)]' : 'text-[clamp(1.3rem,2.3cqi,1.7rem)]'
                }`}
              >
                {e.school}
              </h3>
              <p className="mt-2 text-[0.95rem] font-medium text-accent-soft">{e.program}</p>
              {e.detail && <p className="mt-4 text-[0.95rem] text-muted">{e.detail}</p>}
              {e.highlight && (
                <p className="mt-5 inline-block border-l border-accent pl-4 text-[0.95rem] text-ink">{e.highlight}</p>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

import { certifications } from '../../data/certifications'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

export default function CertificationsSection() {
  return (
    <section id="certifications" aria-labelledby="certs-title" className="hairline py-12 md:py-20">
      <SectionHeading index="06" eyebrow="Certifications" id="certs-title" lead="Always" accent="learning." />

      <ol className="mt-10 border-b border-line md:mt-14">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.name} className="hairline grid gap-4 py-6 md:grid-cols-12 md:items-baseline md:gap-8 md:py-7">
            <span className="eyebrow tabular-nums md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="display display-sentence text-[clamp(1.2rem,2.3cqi,1.7rem)] text-ink md:col-span-8">{c.name}</h3>
            <p className="eyebrow eyebrow-muted md:col-span-3 md:text-right">{c.issuer}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

import SectionHeading from '../common/SectionHeading'
import ExperienceTimeline from './ExperienceTimeline'

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="hairline py-12 md:py-20">
      <SectionHeading
        id="experience-title"
        index="02"
        eyebrow="Experience"
        lead="The work"
        accent="so far."
        className="md:ml-[17rem]"
      />
      <div className="mt-10 md:mt-14">
        <ExperienceTimeline />
      </div>
    </section>
  )
}

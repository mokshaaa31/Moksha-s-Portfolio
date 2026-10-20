import { skillGroups } from '../../data/skills'
import { getSkillIcon } from '../../data/skillIcons'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="hairline py-12 md:py-20">
      <SectionHeading index="04" eyebrow="Technical skills" id="skills-title" lead="Tools I" accent="reach for." />

      <div className="mt-10 border-b border-line md:mt-14">
        {skillGroups.map((g) => (
          <Reveal key={g.label} stagger="p, li" className="hairline grid gap-5 py-5 md:grid-cols-12 md:gap-8 md:py-7">
            <p className="eyebrow md:col-span-3 md:pt-2">{g.label}</p>
            <ul className="flex flex-wrap items-center gap-x-9 gap-y-3 md:col-span-9">
              {g.items.map((item) => {
                const Icon = getSkillIcon(item)
                return (
                  <li key={item} className="flex items-center gap-3">
                    {Icon ? (
                      <Icon className="h-[1.05rem] w-[1.05rem] shrink-0 text-accent" aria-hidden />
                    ) : (
                      <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    )}
                    <span className="display display-sentence text-[clamp(1.1rem,1.9cqi,1.4rem)] text-ink">{item}</span>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

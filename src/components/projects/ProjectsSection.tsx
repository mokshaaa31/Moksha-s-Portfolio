import { otherProjects } from '../../data/projects'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="hairline py-12 md:py-20">
      <SectionHeading index="03" eyebrow="Projects" id="projects-title" lead="Things I've" accent="built." />

      <div className="mt-12 md:mt-16">
        <FeaturedProject />
      </div>

      <div className="mt-16 md:mt-24">
        <Reveal className="mb-10 flex items-end justify-between gap-6 md:mb-9">
          <h3 className="display display-sentence text-[clamp(1.5rem,3cqi,2.2rem)] text-ink">
            More <span className="text-accent">projects</span>
          </h3>
          <p className="eyebrow eyebrow-muted hidden sm:block">From internships</p>
        </Reveal>
        <ul className="border-b border-line">
          {otherProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

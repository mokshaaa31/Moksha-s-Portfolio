import type { ProjectEntry } from '../../data/projects'
import ArrowIcon from '../common/ArrowIcon'
import Reveal from '../common/Reveal'

/** Minimal editorial row (not a card): large serif name, quiet metadata. */
export default function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  return (
    <Reveal as="li" className="project-row hairline grid gap-5 py-7 md:grid-cols-12 md:gap-8 md:py-9">
      <span className="eyebrow tabular-nums md:col-span-1 md:pt-3">{String(index + 1).padStart(2, '0')}</span>
      <div className="md:col-span-5">
        <h4 className="project-title display display-sentence text-[clamp(1.6rem,3.3cqi,2.5rem)] text-ink">
          {project.name}
        </h4>
        <p className="eyebrow eyebrow-muted mt-3 !tracking-[0.14em]">{project.context}</p>
      </div>
      <div className="md:col-span-5 md:col-start-8">
        <p className="body-copy">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[0.78rem] text-ink/80">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.href && (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="link-u mt-6 text-accent">
            {project.hrefLabel ?? 'View project'} <ArrowIcon />
          </a>
        )}
      </div>
    </Reveal>
  )
}

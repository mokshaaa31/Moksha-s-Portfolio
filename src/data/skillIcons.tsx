import type { ComponentType } from 'react'
import { DiJava, DiHtml5, DiCss3, DiEclipse } from 'react-icons/di'
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSelenium,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiClaude,
  SiIntellijidea,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

type IconType = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>

/** Brand icons only where a recognisable one exists; everything else renders text only. */
const icons: Record<string, IconType> = {
  Java: DiJava,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: DiHtml5,
  CSS: DiCss3,
  'Tailwind CSS': SiTailwindcss,
  Selenium: SiSelenium,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  GitHub: SiGithub,
  Claude: SiClaude,
  'VS Code': VscVscode,
  'IntelliJ IDEA': SiIntellijidea,
  Eclipse: DiEclipse,
}

export const getSkillIcon = (label: string): IconType | undefined => icons[label]

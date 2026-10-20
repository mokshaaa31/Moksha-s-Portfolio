import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { profile } from '../../data/profile'
import Reveal from '../common/Reveal'
import SplitText from '../common/SplitText'
import SayHello from './SayHello'
import ArrowIcon from '../common/ArrowIcon'

const details = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false, Icon: FiMail },
  { label: 'LinkedIn', value: 'linkedin.com/in/mokshagna1231', href: profile.linkedin, external: true, Icon: FaLinkedinIn },
  { label: 'GitHub', value: 'github.com/mokshaaa31', href: profile.github, external: true, Icon: FaGithub },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, external: false, Icon: FiPhone },
]

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="hairline py-12 md:py-20">
      <Reveal>
        <p className="eyebrow mb-7 flex items-center gap-4">
          <span className="tabular-nums">07</span>
          <span aria-hidden className="h-px w-10 bg-accent/60" />
          <span>Contact</span>
        </p>
        <SplitText
          id="contact-title"
          className="display text-[clamp(2.2rem,7cqi,5.8rem)]"
          parts={[
            { text: 'Let\u2019s build', className: 'block text-ink' },
            { text: 'something meaningful.', className: 'block text-accent' },
          ]}
        />
      </Reveal>

      <div className="mt-10 grid gap-14 md:mt-14 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <p className="body-copy text-[1.02rem]">
            I&rsquo;m always happy to talk about software engineering, test automation, or how AI can be put to good use.
            If you have a role, a project, or just a question, write to me.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <SayHello />
            <a href={profile.resumeUrl} download={profile.resumeFileName} className="link-u">
              Download resume <ArrowIcon />
            </a>
          </div>
        </Reveal>

        <Reveal as="dl" className="md:col-span-6 md:col-start-7" stagger=":scope > div">
          {details.map((d) => (
            <div key={d.label} className="hairline grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:items-baseline">
              <dt className="eyebrow">{d.label}</dt>
              <dd>
                <a
                  href={d.href}
                  {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center gap-3 break-all py-1 text-[1.02rem] text-ink transition-colors hover:text-accent"
                >
                  <d.Icon aria-hidden className="h-4 w-4 shrink-0 text-accent" />
                  {d.value}
                </a>
              </dd>
            </div>
          ))}
          <div className="hairline pt-5 text-sm text-muted">Based in {profile.location}</div>
        </Reveal>
      </div>
    </section>
  )
}

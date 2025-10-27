import { Helmet } from 'react-helmet';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { featuredProject, secondaryProjects } from '../data/projects';

const Projects = () => (
  <div className="space-y-16">
    <Helmet>
      <title>Initiatives &amp; Achievements</title>
      <meta
        name="description"
        content="Explore Kristopher Roller’s initiatives that improved documentation clarity, reporting visibility, and team performance."
      />
    </Helmet>
    <section className="section-container space-y-12">
      <SectionHeader
        eyebrow="Initiatives &amp; Achievements"
        title="Projects that improved clarity and team performance"
        description="I’ve led and contributed to initiatives that strengthened team knowledge, improved documentation accuracy, and enhanced service consistency."
      />
      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-slate-50">{featuredProject.title}</h2>
          <p className="text-sm text-slate-300">{featuredProject.description}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {featuredProject.metrics.map((metric) => (
              <div key={metric.label} className="card glass space-y-2 border-slate-800/70 bg-slate-900/70 p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-primary/80">{metric.label}</p>
                <p className="text-base font-semibold text-slate-50">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            {featuredProject.tech.map((tech) => (
              <span key={tech} className="badge-chip">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {featuredProject.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
        <div className="card glass overflow-hidden border-slate-800/70 bg-slate-900/60">
          <div className="aspect-video bg-gradient-to-br from-primary/40 via-slate-900 to-purple-700/40">
            <img
              src={featuredProject.image}
              alt="Operations playbook dashboards and workflow visuals"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="px-8 pb-8 pt-6 text-sm text-slate-300">
            Built for clarity and consistency: updated guidance, visual aids, and callouts keep agents confident during every customer interaction.
          </p>
        </div>
      </div>
    </section>
    <section className="section-container space-y-10">
      <SectionHeader
        eyebrow="Additional initiatives"
        title="More ways I support teams"
        description="Each achievement focuses on making it easier for agents and leaders to deliver great service."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {secondaryProjects.map((project) => (
          <article key={project.title} className="card glass space-y-4 border-slate-800/70 bg-slate-900/70 p-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-50">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-slate-800/70 bg-slate-950/50 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-primary/70">{metric.label}</p>
                  <p className="mt-2 text-sm text-slate-200">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-800 px-3 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
    <PageBridge
      eyebrow="Next up"
      title="See how the initiatives connect with the work"
      description="These achievements support the day-to-day leadership and technical support wins you’ll find elsewhere on the site."
      links={[
        {
          label: 'Experience timeline',
          to: '/experience',
          description: 'Trace the roles where I led teams and spotted the gaps these initiatives now solve.'
        },
        {
          label: 'Resume & downloads',
          to: '/resume',
          description: 'Share a concise overview of my leadership and support impact with your stakeholders.'
        },
        {
          label: 'Contact Kristopher',
          to: '/contact',
          description: 'Let’s discuss how similar initiatives could support your agents or customers.'
        }
      ]}
    />
  </div>
);

export default Projects;

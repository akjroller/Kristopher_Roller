import { Helmet } from 'react-helmet';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { featuredProject, secondaryProjects } from '../data/projects';

const Projects = () => (
  <div className="space-y-16">
    <Helmet>
      <title>Projects</title>
      <meta
        name="description"
        content="A closer look at the D4ET bot and supporting automation projects crafted by Kristopher Roller."
      />
    </Helmet>
    <section className="section-container space-y-12">
      <SectionHeader
        eyebrow="Featured project"
        title={featuredProject.title}
        description={featuredProject.description}
      />
      <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="space-y-6">
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
              alt="D4ET dashboard mockup"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="px-8 pb-8 pt-6 text-sm text-slate-300">
            Designed for clarity in chaos: the bot’s dashboard surfaces live event schedules, uptime analytics, and health alerts so the team can respond instantly.
          </p>
        </div>
      </div>
    </section>
    <section className="section-container space-y-10">
      <SectionHeader
        eyebrow="More builds"
        title="Supporting automations and enablement projects"
        description="A sample of systems and tooling I’ve created to bring visibility, precision, and focus to support operations."
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
      title="See how the builds connect with the work"
      description="These projects sit on top of the day-to-day leadership and support wins you’ll find elsewhere on the site."
      links={[
        {
          label: 'Experience timeline',
          to: '/experience',
          description: 'Trace the roles where I led teams and spotted the gaps these tools now solve.'
        },
        {
          label: 'Resume & downloads',
          to: '/resume',
          description: 'Share a concise overview of my leadership and automation impact with your stakeholders.'
        },
        {
          label: 'Contact Kristopher',
          to: '/contact',
          description: 'Let’s discuss how similar tooling could support your agents or customers.'
        }
      ]}
    />
  </div>
);

export default Projects;

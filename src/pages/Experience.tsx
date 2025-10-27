import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { ExperienceCategory, experiences } from '../data/experience';

const filters: ExperienceCategory[] = [
  'Supervisor Leadership',
  'Technical Support',
  'Coding & Automation',
  'Call Center Foundations'
];

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceCategory>('Supervisor Leadership');

  const filtered = useMemo(
    () => experiences.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="space-y-16">
      <Helmet>
        <title>Experience</title>
        <meta
          name="description"
          content="Explore Kristopher Roller’s experience leading technical support teams, reducing handle time, and driving documentation excellence."
        />
      </Helmet>
      <section className="section-container space-y-10">
        <SectionHeader
          eyebrow="Experience"
          title="Where I’ve delivered impact"
          description="Explore my supervisor leadership wins, technical support excellence, automation builds, and the call center foundation that still shapes my approach."
        />
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                filter === activeFilter
                  ? 'border-primary bg-primary/20 text-white shadow-glow'
                  : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="space-y-6">
          {filtered.map((item) => (
            <article key={item.id} className="card glass space-y-5 border-slate-800/70 bg-slate-900/70 p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">{item.role}</h3>
                  <p className="text-sm font-medium text-primary">{item.company}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.period}</div>
              </div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-500">
                Focus: {item.category}
              </p>
              {item.aht ? (
                <p className="text-xs uppercase tracking-[0.32em] text-teal-300">{item.aht}</p>
              ) : null}
              <ul className="space-y-2 text-sm text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="leading-relaxed">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <PageBridge
        eyebrow="Connect the dots"
        title="Experience that feeds every other page"
        description="Compare these roles with the automation builds and resume highlights to see the throughline in how I work."
        links={[
          {
            label: 'Projects & automation',
            to: '/projects',
            description: 'Explore the D4ET bot and supporting tools that came out of leading support operations.'
          },
          {
            label: 'Resume & downloads',
            to: '/resume',
            description: 'Get a condensed overview plus a PDF you can share with your stakeholders.'
          },
          {
            label: 'Contact Kristopher',
            to: '/contact',
            description: 'Start a conversation about how these experiences translate to your team’s needs.'
          }
        ]}
      />
    </div>
  );
};

export default Experience;

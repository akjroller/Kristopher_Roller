import { Helmet } from 'react-helmet';
import { MapPin, BadgeCheck, Cpu, Bot } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { funFacts, journey } from '../data/about';

const iconMap = {
  'map-pin': MapPin,
  'badge-check': BadgeCheck,
  cpu: Cpu,
  bot: Bot
};

const About = () => (
  <div className="space-y-16">
    <Helmet>
      <title>About Kristopher Roller</title>
      <meta
        name="description"
        content="Explore Kristopher Roller’s journey from frontline advocate to call center supervisor, escalation expert, and enablement strategist."
      />
    </Helmet>
    <section className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="My story"
            title="Technical support leadership shaped by frontline experience"
            description="I started as a customer advocate, stepped into supervisor roles, and now pair remote operations, escalations, and documentation to keep teams confident."
          />
          <div className="space-y-6">
            {journey.map((entry) => (
              <article key={entry.title} className="border-l-2 border-primary/60 pl-6">
                <p className="text-xs uppercase tracking-[0.28em] text-primary/80">{entry.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-50">{entry.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{entry.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-glow">
            <img
              src="/headshot.svg"
              alt="Kristopher Roller smiling"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <blockquote className="card bg-slate-900/60 p-8 text-lg text-slate-200">
            “The Roller Method means lead with calm, solve with empathy, and automate the follow-through.”
          </blockquote>
        </div>
      </div>
    </section>
    <section className="section-container space-y-10">
      <SectionHeader eyebrow="Fast facts" title="Details hiring managers ask about" description="Snapshot stats that show how I support remote customers and the teams behind them." />
      <div className="grid gap-6 md:grid-cols-4">
        {funFacts.map((fact) => {
          const Icon = iconMap[fact.icon as keyof typeof iconMap];
          return (
            <div key={fact.label} className="card glass flex h-full flex-col items-start gap-4 bg-slate-900/60 p-6">
              {Icon ? <Icon className="h-6 w-6 text-primary" aria-hidden /> : null}
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{fact.label}</p>
              <p className="text-base font-medium text-slate-200">{fact.value}</p>
            </div>
          );
        })}
      </div>
    </section>
      <PageBridge
        eyebrow="Where to next"
        title="See how leadership, support, and enablement connect"
        description="Each page adds context for how I coach agents, resolve issues, and keep documentation and tools current."
        links={[
          {
            label: 'Experience timeline',
            to: '/experience',
            description: 'See how supervisor leadership, technical support, and automation show up in real roles.'
          },
          {
            label: 'Projects & automation',
            to: '/projects',
            description: 'Review the operations playbook refresh and automation programs built for remote teams.'
          },
          {
            label: 'Resume & downloads',
            to: '/resume',
            description: 'Grab a printable resume plus quick highlights to share with your team.'
        }
      ]}
    />
  </div>
);

export default About;

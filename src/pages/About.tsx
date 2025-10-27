import { Helmet } from 'react-helmet';
import { MapPin, Timer, UsersRound, FileText } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import PageBridge from '../components/common/PageBridge';
import { funFacts, journey } from '../data/about';

const iconMap = {
  'map-pin': MapPin,
  timer: Timer,
  users: UsersRound,
  'file-text': FileText
};

const About = () => (
  <div className="space-y-16">
    <Helmet>
      <title>About Kristopher Roller</title>
      <meta
        name="description"
        content="Explore Kristopher Roller’s journey from frontline advocate to remote leader supporting technical teams with empathy and clarity."
      />
    </Helmet>
    <section className="section-container">
      <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="My story"
            title="Leadership shaped by frontline experience"
            description="I began on the phones solving complex benefits questions, quickly becoming the teammate others shadowed for calm coaching. That frontline foundation led to call center leadership roles where I learned how to mentor 25+ agents, drive KPIs, and keep customers informed under pressure. Today I blend that experience with process improvement — rewriting playbooks, guiding escalations, and helping teams deliver confident customer care."
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
            “I lead by example — staying calm under pressure, keeping communication clear, and ensuring every customer and agent feels supported.”
          </blockquote>
        </div>
      </div>
    </section>
    <section className="section-container space-y-10">
      <SectionHeader
        eyebrow="Fast facts"
        title="Snapshot of how I support teams"
        description="Details that highlight the service quality, coaching, and documentation strengths I bring to every program."
      />
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
      title="Explore the work behind the story"
      description="Dive into the roles, initiatives, and highlights that show how I deliver steady support and team leadership."
      links={[
        {
          label: 'Experience timeline',
          to: '/experience',
          description: 'Review how frontline insights and leadership decisions translate into measurable results.'
        },
        {
          label: 'Proof & initiatives',
          to: '/projects',
          description: 'See the documentation and reporting improvements that keep teams aligned.'
        },
        {
          label: 'Résumé & downloads',
          to: '/resume',
          description: 'Share a concise overview of my skills, strengths, and service focus.'
        }
      ]}
    />
  </div>
);

export default About;

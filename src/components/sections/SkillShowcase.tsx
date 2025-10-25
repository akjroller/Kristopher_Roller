import { motion } from 'framer-motion';
import {
  Bot,
  FileText,
  Headset,
  LineChart,
  Sparkles,
  Workflow
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const focusAreas = [
  'Designing calm, high-performing support experiences',
  'Coaching teams with data-backed playbooks',
  'Automating insights so leaders can act sooner'
];

const impactStats = [
  { label: 'Servers powered by D4ET', value: '3,500+' },
  { label: 'Knowledge refreshes delivered', value: '60+ articles' },
  { label: 'Avg. handle time maintained', value: '< 5 minutes' }
];

const toolset = [
  'Python',
  'AWS',
  'PostgreSQL',
  'Discord API',
  'Notion',
  'Zendesk',
  'Power BI',
  'Automation Anywhere'
];

const skillGroups = [
  {
    title: 'Support operations leadership',
    description:
      'Omnichannel triage, crisis communications, and the day-to-day rhythms that keep teams confident under pressure.',
    icon: Headset,
    items: ['Escalation playbooks', 'Queue health analytics', 'Voice, chat, & email orchestration']
  },
  {
    title: 'Documentation & enablement',
    description:
      'Transforming static knowledge bases into living systems that drive faster onboarding and consistent resolutions.',
    icon: FileText,
    items: ['Knowledge lifecycle management', 'Process clarity audits', 'Self-service UX design']
  },
  {
    title: 'Automation & internal tooling',
    description:
      'Building scrappy, resilient tools that surface the right signals for agents, leaders, and communities.',
    icon: Bot,
    items: ['Discord & Slack bots', 'Workflow automation', 'API-driven data pipelines']
  },
  {
    title: 'Insights & continuous improvement',
    description:
      'Translating complex datasets into next steps that protect customer trust and unlock team focus.',
    icon: LineChart,
    items: ['Support forecasting', 'Voice of the customer loops', 'KPI instrumentation & reporting']
  },
  {
    title: 'Agile collaboration',
    description:
      'Facilitating retros, standups, and cross-functional partnerships that keep outcomes aligned with strategy.',
    icon: Workflow,
    items: ['Sprint & Kanban rituals', 'Stakeholder storytelling', 'Roadmapping & prioritization']
  },
  {
    title: 'Experience design mindset',
    description:
      'Pairing empathy and experimentation to craft moments that feel personal, inclusive, and trustworthy.',
    icon: Sparkles,
    items: ['Journey mapping', 'Voice & tone systems', 'Feedback loops & surveys']
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.06,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const SkillShowcase = () => (
  <section className="section-container space-y-12">
    <SectionHeader
      eyebrow="Signature strengths"
      title="The Roller Method toolset"
      description="An end-to-end approach that blends support leadership, technical curiosity, and a product mindset to deliver remarkable customer experiences."
      align="center"
    />
    <div className="grid gap-10 xl:grid-cols-[1.05fr,0.95fr] xl:items-start">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="card glass relative overflow-hidden border-slate-800/70 bg-slate-900/70 p-10"
      >
        <div className="pointer-events-none absolute -top-32 right-[-15%] h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-[-35%] left-[-20%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />
        <div className="relative space-y-8">
          <p className="max-w-xl text-lg text-slate-200">
            I thrive at the intersection of human-centered support and technical systems. Whether it&apos;s restoring calm during a
            launch, rebuilding documentation, or shipping automation that scales empathy, I create clarity and momentum for every
            stakeholder involved.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-3 text-sm text-slate-300"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="grid gap-4 md:grid-cols-3">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-primary/20 bg-primary/10 p-4 text-center">
                <p className="text-xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.28em] text-primary/80">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.32em] text-slate-400">
            {toolset.map((item) => (
              <span key={item} className="rounded-full border border-slate-800/70 bg-slate-950/70 px-3 py-1 text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.article
              key={group.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={cardVariants}
              className="skill-card glass h-full space-y-4 border-slate-800/70"
            >
              <span className="icon-burst h-12 w-12">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
                <p className="text-sm text-slate-300">{group.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillShowcase;

import { motion } from 'framer-motion';
import { ShieldCheck, LifeBuoy, Code2, PhoneCall } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const focusAreas = [
  'Remote call center leadership grounded in huddles, 1:1s, QA reviews, and scorecards',
  'Technical troubleshooting for tax, insurance, and retail platforms across phone, chat, email, and video',
  'Knowledge base rewrites and automation that keep documentation, macros, and alerts accurate'
];

const impactStats = [
  { label: 'Average handle time', value: '< 5 minutes sustained' },
  { label: 'Daily cases supported', value: '50–75 omnichannel contacts' },
  { label: 'Knowledge assets updated', value: '40+ refreshed articles & macros' }
];

const toolset = [
  'Zendesk',
  'Salesforce',
  'Five9',
  'Nice CXone',
  'Notion & Confluence',
  'SharePoint',
  'Python',
  'Power BI',
  'Slack & Teams automation',
  'AWS & PostgreSQL'
];

const skillGroups = [
  {
    title: 'Supervisor leadership system',
    description:
      'Performance management, scheduling, payroll, and QA cadences tailored to each agent — keeping distributed teams aligned.',
    icon: ShieldCheck,
    tone: 'primary',
    items: [
      'Daily huddles, scorecards, and standups',
      'Escalation response and crisis communication playbooks',
      'Hiring, payroll, scheduling, and stakeholder reporting'
    ]
  },
  {
    title: 'Technical support practice',
    description:
      'Hands-on troubleshooting across TurboTax, insurance, and retail platforms with swift escalations and thorough documentation.',
    icon: LifeBuoy,
    tone: 'primary',
    items: [
      'Security-sensitive verification and fraud prevention',
      'Omnichannel troubleshooting (voice, chat, email, video)',
      'AHT/AWT targets maintained under five minutes'
    ]
  },
  {
    title: 'Enablement & automation toolkit',
    description:
      'Automation, documentation refreshes, and analytics built from frontline insights so the next customer gets faster answers.',
    icon: Code2,
    tone: 'primary',
    items: [
      'Python automation powering alerts and reporting',
      'API orchestration, integrations, and task queues',
      'Knowledge base, macro, and LMS content maintenance'
    ]
  },
  {
    title: 'Call center foundations',
    description:
      'Grounded in years of frontline experience — empathy, de-escalation, and clear communication with every customer.',
    icon: PhoneCall,
    tone: 'supporting',
    items: [
      'First-contact resolution and ACW discipline',
      'Soft-skills mentoring, shadowing, and QA calibration',
      'High-volume readiness, scheduling, and adherence tracking'
    ]
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
      eyebrow="Skills in practice"
      title="The mix of leadership, support, and code I rely on"
      description="Think of this section as the legend for the rest of the site. Each grouping links to examples in the experience and project pages where the skills were put to work."
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
            Leadership, support, and enablement overlap in my day-to-day. I document what I learn on the floor, fold it into training plans, and automate the follow-up so teams always have the latest answers.
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
              className={`skill-card glass h-full space-y-4 border-slate-800/70 ${
                group.tone === 'supporting' ? 'opacity-80 border-dashed' : ''
              }`}
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

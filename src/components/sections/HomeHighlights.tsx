import { motion } from 'framer-motion';
import { UsersRound, LifeBuoy, Code2, PhoneCall } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const highlights = [
  {
    title: 'Supervisor-grade leadership',
    description:
      'I run calm, metrics-driven contact center teams — blending coaching rhythms, QA loops, and stakeholder comms that keep programs ahead of targets.',
    icon: UsersRound
  },
  {
    title: 'Technical support mastery',
    description:
      'From TurboTax escalations to hardware triage, I translate complex issues into empathetic, efficient resolutions backed by < 5 minute handle times.',
    icon: LifeBuoy
  },
  {
    title: 'Builder & automation mindset',
    description:
      'Python, APIs, and analytics are my toolkit for crafting bots and dashboards that surface the right insight exactly when teams need it.',
    icon: Code2
  },
  {
    title: 'Call center fundamentals',
    description:
      'Years on the phones taught me patience, active listening, and how to protect the customer experience no matter the queue volume.',
    icon: PhoneCall
  }
];

const HomeHighlights = () => (
  <section className="section-container space-y-12">
    <SectionHeader
      eyebrow="Why teams partner with me"
      title="Supervisor first, support expert always"
      description="My career blends frontline leadership, hands-on technical troubleshooting, and the coding chops to keep knowledge and automation sharp."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {highlights.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
          className="skill-card glass h-full space-y-4 border-slate-800/70"
        >
          {item.icon ? (
            <span className="icon-burst h-12 w-12">
              <item.icon className="h-5 w-5 text-primary" aria-hidden />
            </span>
          ) : null}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default HomeHighlights;

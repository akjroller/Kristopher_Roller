import { motion } from 'framer-motion';
import { UsersRound, LifeBuoy, Code2, PhoneCall } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const highlights = [
  {
    title: 'Supervisor-led operations',
    description:
      'I keep remote teams aligned with daily huddles, scorecard reviews, and transparent coaching plans that protect KPIs and morale.',
    icon: UsersRound
  },
  {
    title: 'Escalation & security readiness',
    description:
      'Complex tax, benefits, and security cases come my way — I calm customers, coordinate specialists, and close loops with documented fixes.',
    icon: LifeBuoy
  },
  {
    title: 'Training & enablement mindset',
    description:
      'I pair supervisor coaching with refreshed knowledge bases, LMS updates, and QA calibrations so every agent knows what “great” looks like.',
    icon: Code2
  },
  {
    title: 'Call center roots',
    description:
      'Years on the phones built the empathy, active listening, and process discipline that still guide every operational decision.',
    icon: PhoneCall
  }
];

const HomeHighlights = () => (
  <section className="section-container space-y-12">
    <SectionHeader
      eyebrow="Supervisor snapshot"
      title="The four pillars I bring to every program"
      description="Every story on this site ladders up to these themes — operations leadership, escalation mastery, enablement excellence, and the frontline empathy that started it all."
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

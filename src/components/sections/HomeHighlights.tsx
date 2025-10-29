import { motion } from 'framer-motion';
import { UsersRound, LifeBuoy, NotebookPen, ShieldCheck } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const highlights = [
  {
    title: 'Omnichannel technical mastery',
    description:
      'Expert in phone, chat, email, and video support. I resolve issues swiftly while maintaining empathy and calm across 50–75 daily customer interactions.',
    icon: LifeBuoy
  },
  {
    title: 'Escalation leadership & security control',
    description:
      'Own the toughest cases with structure and composure. My escalation playbooks and security protocols reduced repeat cases by 18%.',
    icon: ShieldCheck
  },
  {
    title: 'Coaching & enablement culture',
    description:
      'Mentor peers and rewrite KBs so no one gets stuck twice. My documentation refreshes helped 12 new hires reach full productivity in under a month.',
    icon: NotebookPen
  },
  {
    title: 'Operational & team performance',
    description:
      'Leverage metrics, QA insights, and dashboards to guide continuous improvement. Leadership built on empathy, consistency, and accountability.',
    icon: UsersRound
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

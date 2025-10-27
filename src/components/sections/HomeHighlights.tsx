import { motion } from 'framer-motion';
import { UsersRound, LifeBuoy, Code2, ShieldCheck } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const highlights = [
  {
    title: 'Omnichannel technical support',
    description:
      'Phone, chat, email, and video support are part of my daily flow — I troubleshoot fast while keeping customers informed and calm.',
    icon: LifeBuoy
  },
  {
    title: 'Escalation & security readiness',
    description:
      'When issues require heightened verification or supervisor support, I guide the process, protect data, and document what to do next time.',
    icon: ShieldCheck
  },
  {
    title: 'Training & enablement mindset',
    description:
      'I rewrite articles, refresh macros, and mentor peers so knowledge bases stay accurate and new hires onboard faster.',
    icon: Code2
  },
  {
    title: 'Call center leadership roots',
    description:
      'Years on the phones and in supervisor roles taught me how to coach, track KPIs, and spot process gaps before they impact customers.',
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

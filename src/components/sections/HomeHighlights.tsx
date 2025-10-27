import { motion } from 'framer-motion';
import { UsersRound, LifeBuoy, Code2, PhoneCall } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const highlights = [
  {
    title: 'Leadership in the queue',
    description:
      'I guide remote teams through peak seasons with weekly coaching, scorecard reviews, and calm escalation management — the rhythms hiring managers expect from an operations lead.',
    icon: UsersRound
  },
  {
    title: 'Hands-on technical support',
    description:
      'From TurboTax escalations to hardware triage, I stay close to the queue. Average handle times stay under five minutes because I document, share, and automate what works.',
    icon: LifeBuoy
  },
  {
    title: 'Builder & automation mindset',
    description:
      'Python, APIs, and analytics help me close gaps I notice while leading teams. Every build is grounded in what agents and customers actually ask for.',
    icon: Code2
  },
  {
    title: 'Call center foundations',
    description:
      'Years on the phones built the patience, active listening, and customer-first decisions that still anchor my leadership style.',
    icon: PhoneCall
  }
];

const HomeHighlights = () => (
  <section className="section-container space-y-12">
    <SectionHeader
      eyebrow="Quick tour"
      title="How this resume is organized"
      description="This home page surfaces the themes you will see across the experience, project, and resume pages. Dive into any card to explore the underlying work."
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

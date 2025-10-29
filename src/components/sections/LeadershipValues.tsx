import { motion } from 'framer-motion';
import { Compass, MessageCircleHeart, NotebookPen } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';

const values = [
  {
    title: 'Clarity before speed',
    description:
      'Volume follows clarity. I translate performance metrics into shared dashboards and daily standups so everyone understands the “why” behind their targets.',
    proof: '15-minute daily huddles with metrics and next actions',
    icon: Compass
  },
  {
    title: 'Empathy-driven escalation',
    description:
      'Every escalation is a moment to reinforce trust. I stay on-call for live support, document the fix, and update the playbook before the next shift.',
    proof: '18% drop in repeat escalations post-refresh',
    icon: MessageCircleHeart
  },
  {
    title: 'Document the win',
    description:
      'Great fixes become great documentation. Every new solution feeds back into guides, macros, or KB updates to scale team knowledge.',
    proof: '40+ articles rewritten & standardized across programs',
    icon: NotebookPen
  }
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const LeadershipValues = () => (
  <section className="section-container">
    <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-800/70 bg-slate-950/80 p-10 shadow-[0_30px_80px_-60px_rgba(250,204,21,0.6)] md:p-14">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),transparent_60%),_radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.16),transparent_65%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
        <div className="space-y-8">
          <SectionHeader
            eyebrow="Leadership snapshot"
            title="The principles guiding how I support teams"
            description="These are the habits I rely on when queues spike, escalations stack up, or a process needs a refresh. They keep teams aligned, customers informed, and leaders confident."
          />
          <blockquote className="rounded-3xl border border-primary/25 bg-primary/10 p-6 text-base text-slate-100 shadow-[0_18px_40px_-22px_rgba(250,204,21,0.55)] md:text-lg">
            “Kristopher anticipates the next question before you even ask it. He documents the fix, shares it with the right people, and checks back to make sure the update sticks.”
            <footer className="mt-4 text-xs uppercase tracking-[0.28em] text-primary/80">Peer feedback · Remote CX program</footer>
          </blockquote>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={container} className="grid gap-6 sm:grid-cols-2">
          {values.map(({ title, description, proof, icon: Icon }) => (
            <motion.article key={title} variants={item} className="group relative h-full overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/80 p-6 transition duration-300">
              <div className="pointer-events-none absolute -right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <span className="icon-burst h-12 w-12">
                <Icon className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <div className="mt-4 space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
                <p className="text-xs uppercase tracking-[0.32em] text-primary/80">{proof}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default LeadershipValues;

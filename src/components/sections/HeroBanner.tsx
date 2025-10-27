import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, BriefcaseBusiness } from 'lucide-react';

const stats = [
  { label: 'Leadership impact', value: 'Supervisor for 25+ remote agents' },
  { label: 'Escalation success', value: '< 5 minute handle time on complex cases' },
  { label: 'Enablement wins', value: 'Knowledge refreshes and training paths launched' }
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const HeroBanner = () => (
  <header className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="hero-gradient" />
    </div>
    <div className="section-container grid gap-16 pt-12 lg:grid-cols-[1.05fr,0.9fr] lg:items-center">
      <motion.div initial="hidden" animate="visible" className="space-y-8">
        <motion.p className="eyebrow" custom={0} variants={fade}>
          Kristopher Roller · Call Center Supervisor · Technical Support Leader · Enablement Partner
        </motion.p>
        <motion.h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl" custom={1} variants={fade}>
          Remote operations leader steering call center teams with a frontline agent’s instincts.
        </motion.h1>
        <motion.p className="max-w-2xl text-lg text-slate-300 md:text-xl" custom={2} variants={fade}>
          Explore how I combine supervisor coaching, escalation expertise, and documentation strategy to keep call center programs calm, compliant, and customer-obsessed. Years on the phones give me the credibility to coach from experience while keeping every agent aligned to the plan.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4" custom={3} variants={fade}>
          <Link to="/experience" className="btn-primary">
            Experience timeline
          </Link>
          <Link to="/resume" className="btn-secondary">
            Resume &amp; downloads
          </Link>
        </motion.div>
        <motion.div className="flex flex-wrap items-center gap-3 text-sm text-slate-300" custom={4} variants={fade}>
          <a
            href="https://github.com/akjroller"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-950/60 px-4 py-2 transition hover:border-primary/70 hover:text-white"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kristopher-roller-84775294/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-950/60 px-4 py-2 transition hover:border-primary/70 hover:text-white"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href="https://profile.indeed.com/p/kristopherr-20y8qlr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-950/60 px-4 py-2 transition hover:border-primary/70 hover:text-white"
          >
            <BriefcaseBusiness className="h-4 w-4" aria-hidden />
            Indeed
          </a>
        </motion.div>
      </motion.div>
      <motion.div initial="hidden" animate="visible" className="card glass grid gap-4 p-8" variants={cardContainer}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            variants={fade}
            className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-50">{stat.value}</p>
          </motion.div>
        ))}
        <motion.p className="text-sm text-slate-400" custom={4} variants={fade}>
          These are the metrics I guard daily — stable teams, quick escalations, and enablement that makes the next call easier.
        </motion.p>
      </motion.div>
    </div>
  </header>
);

export default HeroBanner;

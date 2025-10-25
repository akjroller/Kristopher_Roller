import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Average handle time', value: '< 5 minutes' },
  { label: 'Documentation refreshes', value: '60+ knowledge articles updated' },
  { label: 'Community reach', value: 'D4ET bot serving 413k+ users' }
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
          Kristopher Roller — Technical Support Professional &amp; Process Optimizer
        </motion.p>
        <motion.h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl" custom={1} variants={fade}>
          Delivering clarity, consistency, and continuous improvement — that&apos;s <span className="gradient-text">The Roller Method</span>.
        </motion.h1>
        <motion.p className="max-w-2xl text-lg text-slate-300 md:text-xl" custom={2} variants={fade}>
          I translate complex customer challenges into reliable systems, empowering teams to respond faster, teach better, and build trust across every touchpoint.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4" custom={3} variants={fade}>
          <Link to="/resume" className="btn-primary">
            View Resume
          </Link>
          <Link to="/projects" className="btn-secondary">
            See Projects
          </Link>
        </motion.div>
      </motion.div>
      <motion.div initial="hidden" animate="visible" className="card glass grid gap-4 p-8" variants={cardContainer}>
        {stats.map((stat, index) => (
          <motion.div key={stat.label} custom={index} variants={fade} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-50">{stat.value}</p>
          </motion.div>
        ))}
        <motion.p className="text-sm text-slate-400" custom={4} variants={fade}>
          Trusted by leaders for high-stakes support, knowledge management, and community-driven development.
        </motion.p>
      </motion.div>
    </div>
  </header>
);

export default HeroBanner;

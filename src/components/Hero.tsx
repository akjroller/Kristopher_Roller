import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' }
  })
};

const Hero = () => {
  return (
    <header className="section-container relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <motion.div initial="hidden" animate="visible" className="max-w-3xl space-y-6">
        <motion.span className="badge" custom={0} variants={fadeUp}>
          Technical Support Leader • Customer Experience Strategist
        </motion.span>
        <motion.h1 className="text-4xl font-semibold tracking-tight md:text-6xl" custom={0.1} variants={fadeUp}>
          Hi, I&apos;m <span className="gradient-text">Kristopher Roller</span>
        </motion.h1>
        <motion.p className="text-lg text-slate-300 md:text-xl" custom={0.2} variants={fadeUp}>
          I help organizations deliver resilient, empathetic support experiences by combining
          deep technical troubleshooting with human-centered leadership.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4" custom={0.3} variants={fadeUp}>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Let&apos;s collaborate
          </a>
          <a
            href="https://github.com/akjroller"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-secondary hover:text-white"
          >
            View my GitHub
          </a>
        </motion.div>
      </motion.div>

      <motion.dl
        initial="hidden"
        animate="visible"
        className="mt-14 grid gap-6 text-sm text-slate-300 sm:grid-cols-3"
      >
        {[{
          label: 'Average handle time (AHT)',
          value: 'Under 5 minutes'
        },
        {
          label: 'Teams supported',
          value: 'Leadership & enterprise clients'
        },
        {
          label: 'Community impact',
          value: 'D4ET bot serving 413k+ users'
        }].map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={0.4 + index * 0.1}
            variants={fadeUp}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5"
          >
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</dt>
            <dd className="mt-2 text-lg font-semibold text-white">{stat.value}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </header>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, BriefcaseBusiness, FileText, UsersRound } from 'lucide-react';
import { resumeUrl } from '../../data/resume';

const stats = [
  { label: 'Escalations resolved', value: '18% drop after updated playbooks & KB refreshes' },
  { label: 'Agent onboarding', value: '12 new hires ramped with mentoring & quick-guides' },
  { label: 'Customer sentiment', value: 'Consistent 95% QA scores across 50–75 contacts daily' }
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
          Technical Support &amp; Call Center Leadership
        </motion.p>
        <motion.h1 className="text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl" custom={1} variants={fade}>
          Kristopher Roller
        </motion.h1>
        <motion.h2 className="text-xl font-medium text-primary md:text-2xl" custom={2} variants={fade}>
          Technical Support &amp; Call Center Leader — empowering teams, elevating CX, and streamlining operations.
        </motion.h2>
        <motion.p className="max-w-2xl text-lg text-slate-300 md:text-xl" custom={3} variants={fade}>
          I started on the phones and grew into remote leadership roles where calm guidance, documentation, and mentorship power
          every win. Today I help distributed teams solve complex customer challenges, tighten processes, and deliver service
          that earns trust the first time. I’m passionate about turning frontline insights into playbooks that keep teams
          confident long after the call ends.
        </motion.p>
        <motion.div className="flex flex-wrap gap-4" custom={4} variants={fade}>
          <a href={resumeUrl} className="btn-primary inline-flex items-center gap-2" download>
            <FileText className="h-4 w-4" aria-hidden />
            Download Résumé (PDF)
          </a>
          <Link to="/experience" className="btn-secondary">
            View experience timeline
          </Link>
        </motion.div>
        <motion.div className="flex flex-wrap items-center gap-3 text-sm text-slate-300" custom={5} variants={fade}>
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
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/20 px-4 py-2 text-primary transition hover:bg-primary/30"
          >
            <UsersRound className="h-4 w-4" aria-hidden />
            Connect with me
          </Link>
        </motion.div>
      </motion.div>
      <motion.div initial="hidden" animate="visible" className="card glass grid gap-6 p-8" variants={cardContainer}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            variants={fade}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-inner shadow-black/20"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold text-slate-50">{stat.value}</p>
          </motion.div>
        ))}
        <motion.p className="text-sm italic text-slate-300" custom={4} variants={fade}>
          “Kristopher steadies the room, gives agents exactly what they need, and turns tough conversations into confident
          customer moments.” — Former Conduent Supervisor
        </motion.p>
      </motion.div>
    </div>
  </header>
);

export default HeroBanner;

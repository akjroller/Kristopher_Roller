import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, BriefcaseBusiness, FileText, UsersRound } from 'lucide-react';
import { resumeUrl } from '../../data/resume';

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
          Remote team leader · Technical support strategist · Process optimizer
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold tracking-tight text-slate-50 md:text-6xl"
          custom={1}
          variants={fade}
        >
          Kristopher Roller
        </motion.h1>
        <motion.h2
          className="max-w-2xl text-2xl font-semibold text-slate-200 md:text-3xl"
          custom={2}
          variants={fade}
        >
          Turning complex customer challenges into streamlined processes and confident teams.
        </motion.h2>
        <motion.p className="max-w-2xl text-lg text-slate-300 md:text-xl" custom={3} variants={fade}>
          I combine frontline experience with a calm, analytical approach to leadership. Whether it’s rewriting documentation,
          mentoring new hires, or building dashboards that boost clarity and performance — my focus is creating systems that
          make great service repeatable.
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
        {/* Portrait & tagline */}
        <motion.figure
          className="flex items-center gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/60 p-4"
          custom={0}
          variants={fade}
        >
          <img
            src="/headshot.svg"
            alt="Portrait of Kristopher Roller"
            className="h-16 w-16 rounded-2xl border border-slate-800 object-cover"
            loading="lazy"
          />
          <figcaption className="text-sm text-slate-300">
            <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
              Technical Support Leader &amp; Team Mentor
            </span>
            <span className="block text-base text-slate-100">
              Guiding remote teams to deliver efficient, empathetic, and reliable support experiences
            </span>
          </figcaption>
        </motion.figure>

        {/* How I Lead */}
        <motion.div
          custom={1}
          variants={fade}
          className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-inner shadow-black/20"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">How I Lead</p>
          <ul className="mt-2 space-y-2 text-slate-50 text-base">
            <li>🎯 Build clarity and confidence through calm communication and daily coaching</li>
            <li>🧭 Turn complex technical problems into clear, documented solutions</li>
            <li>💡 Create playbooks and guides that help new hires ramp faster and veterans stay sharp</li>
          </ul>
        </motion.div>

        {/* Impact Highlights */}
        <motion.div
          custom={2}
          variants={fade}
          className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 shadow-inner shadow-black/20"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Impact Highlights</p>
          <ul className="mt-2 space-y-2 text-slate-50 text-base">
            <li>📊 Improved QA scores to 95%+ through coaching and documentation alignment</li>
            <li>🔁 Reduced repeat escalations by 18% with clear verification &amp; process guides</li>
            <li>👥 Mentored 25+ agents to exceed performance goals across multiple programs</li>
          </ul>
        </motion.div>

        {/* Quote */}
        <motion.p className="text-sm italic text-slate-300" custom={3} variants={fade}>
          “Kris doesn’t just fix problems — he builds the systems that keep them from coming back.”
          <br />— Former Supervisor, Conduent
        </motion.p>
      </motion.div>
    </div>
  </header>
);

export default HeroBanner;

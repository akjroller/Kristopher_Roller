import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

const highlights = [
  {
    title: 'Built for leadership-ready support',
    description:
      'From security-sensitive escalations to contact center supervision, I keep teams calm, focused, and accountable while protecting customer trust.'
  },
  {
    title: 'Documentation that drives performance',
    description:
      'I rework knowledge bases into living systems that shorten ramp times, reduce rework, and create clarity for agents and customers alike.'
  },
  {
    title: 'Automation that scales insight',
    description:
      'I love pairing Python, APIs, and analytics to surface trends and proactively flag opportunities for improvement.'
  }
];

const HomeHighlights = () => (
  <section className="section-container space-y-12">
    <SectionHeader
      eyebrow="Why teams partner with me"
      title="Support excellence with a builder mindset"
      description="My toolkit blends technical troubleshooting, agile leadership, and a product-driven approach to customer experience."
      align="center"
    />
    <div className="grid gap-6 md:grid-cols-3">
      {highlights.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
          className="card h-full space-y-3 border-slate-800/70 bg-slate-900/50 p-7"
        >
          <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
          <p className="text-sm text-slate-300">{item.description}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default HomeHighlights;

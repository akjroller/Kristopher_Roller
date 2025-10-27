import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { testimonials } from '../../data/testimonials';

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

const Testimonials = () => (
  <section className="section-container space-y-12">
    <SectionHeader
      eyebrow="Testimonials"
      title="Proof from the people I support"
      description="Colleagues, supervisors, and partners shared how my leadership, documentation, and calm communication show up during the toughest days."
      align="center"
    />
    <motion.div
      className="grid gap-6 lg:grid-cols-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      {testimonials.map((testimonial) => (
        <motion.blockquote
          key={testimonial.name}
          variants={item}
          className="card glass flex h-full flex-col justify-between gap-6 border-slate-800/70 bg-slate-900/70 p-8"
        >
          <p className="text-base text-slate-200 leading-relaxed">“{testimonial.quote}”</p>
          <footer className="space-y-1 text-sm text-primary/80">
            <p className="font-semibold text-slate-50">{testimonial.name}</p>
            <p className="uppercase tracking-[0.28em] text-primary/70">{testimonial.role}</p>
          </footer>
        </motion.blockquote>
      ))}
    </motion.div>
  </section>
);

export default Testimonials;

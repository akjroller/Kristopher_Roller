import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

export interface PageBridgeLink {
  label: string;
  to: string;
  description: string;
}

interface PageBridgeProps {
  eyebrow: string;
  title: string;
  description: string;
  links: PageBridgeLink[];
}

const PageBridge = ({ eyebrow, title, description, links }: PageBridgeProps) => (
  <section className="section-container space-y-10">
    <SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" />
    <div className="grid gap-4 md:grid-cols-3">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="card glass group flex h-full flex-col justify-between gap-6 border-slate-800/70 bg-slate-900/70 p-6 text-left transition hover:border-primary/60 hover:bg-slate-900/80"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold text-slate-100">{link.label}</p>
            <p className="text-sm text-slate-300">{link.description}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary/80 transition group-hover:text-primary">
            Explore
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      ))}
    </div>
  </section>
);

export default PageBridge;

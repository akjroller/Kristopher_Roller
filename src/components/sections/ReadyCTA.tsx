import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { resumeUrl } from '../../data/resume';

const ReadyCTA = () => (
  <section className="section-container">
    <div className="card glass flex flex-col gap-6 bg-slate-900/70 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
      <div className="space-y-3">
        <p className="eyebrow mx-auto w-fit md:mx-0">Open to remote technical support &amp; team leadership opportunities</p>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">Let’s strengthen your customer operations together</h2>
        <p className="text-sm text-slate-300 md:max-w-xl">
          I bring 10+ years of experience in remote support, leadership, and process improvement. Whether your team needs mentorship,
          better documentation, or faster resolutions, I can help implement scalable solutions that elevate performance and customer satisfaction.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 md:items-end">
        <Link to="/contact" className="btn-primary">
          Let&apos;s connect
        </Link>
        <a
          href={resumeUrl}
          className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary transition hover:bg-primary/20"
          download
        >
          <FileText className="h-4 w-4" aria-hidden />
          Résumé PDF
        </a>
        <a href="mailto:akjroller@gmail.com" className="text-sm font-medium text-slate-300 transition hover:text-white">
          akjroller@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default ReadyCTA;

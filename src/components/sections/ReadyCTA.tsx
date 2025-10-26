import { Link } from 'react-router-dom';

const ReadyCTA = () => (
  <section className="section-container">
    <div className="card glass flex flex-col gap-6 bg-slate-900/70 p-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
      <div className="space-y-3">
        <p className="eyebrow mx-auto w-fit md:mx-0">Let&apos;s collaborate</p>
        <h2 className="text-3xl font-semibold text-slate-50 md:text-4xl">Reach out if you want to talk roles, projects, or ideas</h2>
        <p className="text-sm text-slate-300 md:max-w-xl">
          This site is a living resume, so I keep it updated as my responsibilities evolve. If something here sparks a conversation, I&apos;d enjoy hearing from you.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 md:items-end">
        <Link to="/contact" className="btn-primary">
          Contact page
        </Link>
        <a href="mailto:akjroller@gmail.com" className="text-sm font-medium text-slate-300 transition hover:text-white">
          akjroller@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default ReadyCTA;

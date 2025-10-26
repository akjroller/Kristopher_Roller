import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';

const ImpactTeaser = () => (
  <section className="section-container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Project spotlight"
        title="Diablo 4 Events Tracker (D4ET)"
        description="A Discord bot that I architected, led, and still maintain. It is a good example of how I pair support experience with engineering curiosity to build something teams rely on."
      />
      <ul className="space-y-3 text-sm text-slate-300">
        <li className="card bg-slate-900/50 p-5 text-left">Delivered event notifications in &lt; 500ms using a distributed worker pattern and aggressive caching.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Coordinated a 5-person distributed team, driving roadmap priorities, QA, and community feedback loops.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Scaled infrastructure with Python, AWS Lambda, Aurora, Redis, and CDN layers for resiliency.</li>
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link to="/projects" className="btn-primary">
          See more projects
        </Link>
        <a
          href="https://github.com/akjroller"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          View GitHub profile
        </a>
      </div>
    </div>
    <div className="card glass space-y-4 p-8">
      <p className="text-sm text-slate-300">Tech stack</p>
      <div className="flex flex-wrap gap-3 text-sm text-slate-200">
        {["Python", "TypeScript", "AWS", "PostgreSQL", "Redis", "Discord API", "Docker", "Agile leadership"].map((item) => (
          <span key={item} className="badge-chip">{item}</span>
        ))}
      </div>
      <p className="text-sm text-slate-400">I document the system choices, metrics, and community feedback for anyone who wants to dig deeper.</p>
    </div>
  </section>
);

export default ImpactTeaser;

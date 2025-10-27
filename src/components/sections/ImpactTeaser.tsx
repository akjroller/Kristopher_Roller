import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';

const ImpactTeaser = () => (
  <section className="section-container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Project spotlight"
        title="Operations Playbook & Knowledge Refresh"
        description="A multi-month initiative where I rewrote call flows, macros, and LMS content while layering in automation that keeps frontline agents and leaders working from the same playbook."
      />
      <ul className="space-y-3 text-sm text-slate-300">
        <li className="card bg-slate-900/50 p-5 text-left">Interviewed agents, QA, and leadership to surface pain points, then rebuilt 40+ knowledge articles and macros with clearer branching logic.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Paired Power BI dashboards with weekly enablement standups so trends translated into immediate coaching and LMS updates.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Automated change logs and notifications in Slack/Teams, keeping remote agents informed without disrupting handle time.</li>
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
      <p className="text-sm text-slate-300">Toolkit</p>
      <div className="flex flex-wrap gap-3 text-sm text-slate-200">
        {['Notion', 'Confluence', 'Zendesk', 'Power BI', 'Python automation', 'Slack workflows', 'Change management'].map((item) => (
          <span key={item} className="badge-chip">{item}</span>
        ))}
      </div>
      <p className="text-sm text-slate-400">The end result: faster onboarding, fewer escalations, and leaders with a real-time view of what agents need next.</p>
    </div>
  </section>
);

export default ImpactTeaser;

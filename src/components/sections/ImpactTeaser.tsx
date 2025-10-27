import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';

const ImpactTeaser = () => (
  <section className="section-container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Project spotlight"
        title="Technical Support Knowledge Refresh"
        description="An initiative born from frontline observations — rewriting support articles, macros, and change logs so TurboTax and insurance queues stay accurate under pressure."
      />
      <ul className="space-y-3 text-sm text-slate-300">
        <li className="card bg-slate-900/50 p-5 text-left">Interviewed agents, QA, and leadership to surface friction, then rebuilt 40+ knowledge articles and macros with clearer branching logic.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Coordinated enablement standups so documentation updates fed directly into coaching, LMS content, and escalation paths.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Automated change notifications in Slack and Teams to keep remote agents informed without adding to handle time.</li>
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
        {['Notion', 'Confluence', 'Zendesk', 'SharePoint', 'Power BI', 'Python automation', 'Slack & Teams workflows'].map((item) => (
          <span key={item} className="badge-chip">{item}</span>
        ))}
      </div>
      <p className="text-sm text-slate-400">The result: faster onboarding, fewer escalations, and leadership visibility into what agents and customers need next.</p>
    </div>
  </section>
);

export default ImpactTeaser;

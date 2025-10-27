import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { resumeUrl } from '../../data/resume';

const ImpactTeaser = () => (
  <section className="section-container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Initiative spotlight"
        title="Knowledge Base Refresh"
        description="Audited and updated 40+ internal articles and macros so agents and customers have accurate, easy-to-follow guidance during every interaction. The refresh reduced repeat escalations by 18% and trimmed onboarding ramp for new hires."
      />
      <ul className="space-y-3 text-sm text-slate-300">
        <li className="card bg-slate-900/50 p-5 text-left">Interviewed agents, QA partners, and leaders to map the 20 most frequent blockers adding minutes to calls.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Rewrote articles and macros with clearer steps, annotated screenshots, and escalation criteria for remote teams.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Aligned coaching, QA checklists, and change logs so every update was reinforced in daily standups.</li>
      </ul>
      <div className="flex flex-wrap gap-4">
        <Link to="/projects" className="btn-primary">
          See more initiatives
        </Link>
        <a href={resumeUrl} className="btn-ghost" download>
          Download résumé
        </a>
      </div>
    </div>
    <div className="card glass space-y-4 p-8">
      <p className="text-sm text-slate-300">Toolkit</p>
      <div className="flex flex-wrap gap-3 text-sm text-slate-200">
        {['Notion', 'Confluence', 'Zendesk', 'SharePoint', 'Excel', 'Power BI', 'Slack & Teams workflows'].map((item) => (
          <span key={item} className="badge-chip">{item}</span>
        ))}
      </div>
      <p className="text-sm text-slate-300">Result: 18% fewer repeat escalations, faster onboarding for 12 new hires, and clear visibility into emerging customer needs.</p>
    </div>
  </section>
);

export default ImpactTeaser;

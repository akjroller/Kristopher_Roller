import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import { resumeUrl } from '../../data/resume';

const ImpactTeaser = () => (
  <section className="section-container grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Initiative spotlight"
        title="Knowledge Base Modernization"
        description="Led a 40+ article rewrite to unify tone, improve accuracy, and reduce confusion across multiple support teams. The overhaul cut repeat escalations by 18% and accelerated onboarding for new hires."
      />
      <ul className="space-y-3 text-sm text-slate-300">
        <li className="card bg-slate-900/50 p-5 text-left">Partnered with QA and agents to identify top 20 friction points affecting AHT and FCR.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Redesigned articles with annotated visuals, escalation logic, and clear policy mapping.</li>
        <li className="card bg-slate-900/50 p-5 text-left">Aligned all updates with daily huddles, ensuring coaching and QA reinforcement.</li>
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

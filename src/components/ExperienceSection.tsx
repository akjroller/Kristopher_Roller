interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Technical Service Representative',
    company: 'Retail Imaging Management Group',
    period: 'Sep 2025 – Present · Remote',
    points: [
      'Deliver inbound and outbound support across phone, chat, and email with enterprise-grade professionalism.',
      'Troubleshoot complex hardware, software, and administrative issues while maintaining sub-5 minute AHT.',
      'Rewrite knowledge base content to sharpen clarity and empower faster resolutions across the organization.',
      'Mentor teammates and partner with leadership on continuous service improvements.'
    ]
  },
  {
    role: 'Resolution Specialist & Security Services Expert',
    company: 'Concentrix',
    period: 'Feb 2025 – Mar 2025 · Remote',
    points: [
      'Handled escalations requiring deep product knowledge and calm, empathetic communication.',
      'Collaborated with IT partners to isolate and resolve multi-platform software defects.',
      'Joined the Security Services team to safeguard TurboTax users and uphold privacy best practices.'
    ]
  },
  {
    role: 'Technical Support Representative',
    company: 'Concentrix',
    period: 'Jan 2025 – Feb 2025 · Remote',
    points: [
      'Guided TurboTax customers through software navigation, filings, and amendments via phone and video.',
      'Escalated complex issues while preserving high customer satisfaction scores and clarity of communication.',
      'Balanced multiple systems and channels simultaneously to deliver timely, accurate resolutions.'
    ]
  },
  {
    role: 'Support Specialist',
    company: 'NTT DATA',
    period: 'Sep 2023 – Jan 2025 · Remote',
    points: [
      'Fielded 50–75 daily calls assisting policyholders, agents, and internal teams with nuanced insurance inquiries.',
      'Resolved issues through deep product knowledge and proactive collaboration with leadership.',
      'Maintained top-tier service standards across productivity and quality benchmarks.'
    ]
  }
];

const ExperienceSection = () => (
  <section id="experience" className="section-container">
    <div className="mb-12 max-w-3xl">
      <p className="badge">Experience</p>
      <h2 className="section-title">Driving outcomes across technical support and operations</h2>
      <p className="section-subtitle">
        From frontline troubleshooting to leading escalations and documentation redesigns, I partner with teams
        to reduce friction, protect customer trust, and scale service excellence.
      </p>
    </div>

    <div className="relative timeline space-y-10 md:space-y-12">
      {experiences.map((experience) => (
        <article key={experience.role} className="timeline-item">
          <div className="card space-y-4 md:ml-8">
            <header className="space-y-1">
              <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
              <p className="text-sm font-medium text-primary">{experience.company}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{experience.period}</p>
            </header>
            <ul className="space-y-2 text-sm text-slate-300">
              {experience.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ExperienceSection;

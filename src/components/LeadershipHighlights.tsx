const leadershipHighlights = [
  {
    title: 'Call Center Supervisor',
    company: 'Conduent',
    period: 'Oct 2021 – Mar 2022',
    impact: [
      'Led a 25+ person team, coaching for quality, productivity, and compliance.',
      'Launched contests and targeted training that elevated KPIs across the program.',
      'Owned hiring, performance reviews, payroll, and stakeholder communications.'
    ]
  },
  {
    title: 'Call Center Team Leader',
    company: 'Conduent',
    period: 'Sep 2021 – Oct 2021',
    impact: [
      'Partnered with supervisors to deliver KPIs through collaborative coaching.',
      'Streamlined process updates and ensured real-time knowledge transfer to agents.',
      'Monitored productivity to identify trends and close skill gaps quickly.'
    ]
  }
];

const LeadershipHighlights = () => (
  <section id="leadership" className="section-container">
    <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
      <div>
        <p className="badge">Leadership</p>
        <h2 className="section-title">Empowering teams to operate with clarity and confidence</h2>
        <p className="section-subtitle">
          Beyond frontline support, I have led large remote teams, balancing people-first coaching with
          operational rigor. I prioritize transparent communication, data-backed decisions, and accountability.
        </p>
      </div>
      <div className="space-y-6">
        {leadershipHighlights.map((highlight) => (
          <article key={highlight.title} className="card space-y-4">
            <header>
              <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
              <p className="text-sm font-medium text-primary">{highlight.company}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{highlight.period}</p>
            </header>
            <ul className="space-y-2 text-sm text-slate-300">
              {highlight.impact.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipHighlights;

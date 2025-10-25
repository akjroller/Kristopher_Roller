const skills = [
  {
    title: 'Customer Experience',
    items: ['Remote call center operations', 'Escalation handling', 'Coaching & mentorship', 'Process documentation']
  },
  {
    title: 'Technical',
    items: ['Hardware & software troubleshooting', 'SaaS platform support', 'Ticketing & CRM systems', 'Knowledge base management']
  },
  {
    title: 'Leadership & Delivery',
    items: ['Team performance management', 'Agile & Scrum practices', 'Cross-functional collaboration', 'Operational improvement']
  }
];

const certifications = [
  {
    title: 'NTT DATA Agile and Scrum Certification',
    year: '2024',
    description: 'Validates the ability to lead Agile teams, manage backlogs, and drive iterative delivery.'
  },
  {
    title: 'Google Technical Support Fundamentals',
    year: '2021',
    description: 'Foundational credential covering troubleshooting, customer empathy, and networking basics.'
  },
  {
    title: 'Microsoft Office 360 Workshop',
    year: '2012',
    description: 'Hands-on experience with productivity tooling that supports efficient documentation and analysis.'
  }
];

const SkillsCertifications = () => (
  <section id="skills" className="section-container">
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="badge">Core strengths</p>
        <h2 className="section-title">Where I create momentum</h2>
        <p className="section-subtitle">
          I connect people, process, and technology to unlock measurable improvements across support ecosystems.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title} className="card space-y-3">
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {skill.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <p className="badge">Certifications</p>
        <h2 className="section-title">Continuous learning</h2>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <article key={cert.title} className="card space-y-2">
              <header className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <span className="badge text-xs">{cert.year}</span>
              </header>
              <p className="text-sm text-slate-300">{cert.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsCertifications;

const About = () => (
  <section id="about" className="section-container">
    <div className="max-w-4xl space-y-6">
      <p className="badge">Summary</p>
      <h2 className="section-title">Amplifying customer trust with agile, data-informed support</h2>
      <p className="section-subtitle">
        I&apos;m a dedicated technical support professional specializing in remote contact center excellence.
        Across multiple enterprise programs, I have built a reputation for translating complex issues into
        actionable insights, leading documentation revamps, and coaching teams toward measurable service wins.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card space-y-3">
          <h3 className="text-xl font-semibold text-white">What I bring</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Expert troubleshooting across SaaS, desktop, and mobile ecosystems</li>
            <li>• Data-guided process improvements that lower handle time and rework</li>
            <li>• Mentorship-first leadership focused on empathy, clarity, and accountability</li>
          </ul>
        </div>
        <div className="card space-y-3">
          <h3 className="text-xl font-semibold text-white">How I work</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Advocate for knowledge sharing and cross-team collaboration</li>
            <li>• Partner with stakeholders to eliminate documentation gaps</li>
            <li>• Stay calm under pressure while keeping customers fully informed</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;

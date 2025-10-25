const ImpactShowcase = () => (
  <section id="impact" className="section-container">
    <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr]">
      <div className="space-y-6">
        <p className="badge">Featured initiative</p>
        <h2 className="section-title">Creator & Lead Developer, Diablo 4 Events Tracker (D4ET)</h2>
        <p className="section-subtitle">
          I architected and led a 5-person distributed team to build a high-performance Discord bot that keeps
          Diablo 4 players synced with in-game world events. The bot now serves over 413,000 users across more
          than 3,500 servers.
        </p>
        <ul className="card space-y-3 text-sm text-slate-300">
          <li>• Delivered real-time, reliable event alerts that outpaced competing tools.</li>
          <li>• Tuned performance and uptime using Python 3, PostgreSQL Aurora, AWS, Redis, and CDN pipelines.</li>
          <li>• Applied product thinking and community engagement to refine the experience with every release.</li>
        </ul>
      </div>
      <div className="card space-y-4">
        <h3 className="text-lg font-semibold text-white">Technical toolkit</h3>
        <div className="flex flex-wrap gap-3 text-sm text-slate-300">
          {["Python 3", "PostgreSQL", "AWS", "Redis", "CDN", "Discord API", "Agile leadership"].map((item) => (
            <span key={item} className="badge bg-slate-900/80">{item}</span>
          ))}
        </div>
        <a
          href="https://github.com/akjroller"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-secondary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-secondary/20"
        >
          Explore my code on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default ImpactShowcase;

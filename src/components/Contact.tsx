const Contact = () => (
  <section id="contact" className="section-container">
    <div className="card flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
      <div className="space-y-2">
        <p className="badge mx-auto w-fit md:mx-0">Let&apos;s connect</p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Ready to craft standout support experiences?</h2>
        <p className="text-sm text-slate-300 md:max-w-xl">
          I&apos;m currently open to technical support leadership, escalation management, and process enablement roles.
          Let&apos;s talk about how I can help elevate your customer experience.
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 md:items-end">
        <a
          href="mailto:akjroller@gmail.com"
          className="inline-flex items-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-secondary/40 transition hover:-translate-y-0.5 hover:bg-secondary/90"
        >
          Email Kristopher
        </a>
        <a href="tel:+17655805549" className="text-sm font-medium text-slate-300 hover:text-white">
          (765) 580-5549
        </a>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Richmond, IN • Authorized to work in the US</p>
      </div>
    </div>
  </section>
);

export default Contact;

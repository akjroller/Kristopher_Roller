const Footer = () => (
  <footer className="section-container border-t border-slate-800/60 py-10 text-center text-xs text-slate-500">
    <div className="space-y-3">
      <p>&copy; {new Date().getFullYear()} Kristopher Roller. Crafted with care in Richmond, IN.</p>
      <div className="flex items-center justify-center gap-4 text-slate-400">
        <a href="mailto:akjroller@gmail.com" className="transition hover:text-white">
          Email
        </a>
        <span className="text-slate-700">•</span>
        <a href="https://github.com/akjroller" className="transition hover:text-white" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="text-slate-700">•</span>
        <a href="tel:+17655805549" className="transition hover:text-white">
          (765) 580-5549
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

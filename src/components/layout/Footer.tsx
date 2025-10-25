import { Link } from 'react-router-dom';
import { navigation } from '../../data/navigation';

const Footer = () => (
  <footer className="border-t border-slate-800/60 bg-slate-950/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">The Roller Method</p>
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Kristopher Roller. Built with clarity, consistency, and continuous improvement.</p>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-500">
        {navigation.map((item) => (
          <Link key={item.path} to={item.path} className="transition hover:text-slate-200">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

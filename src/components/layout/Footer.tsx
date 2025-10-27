import { Link } from 'react-router-dom';
import { Linkedin, BriefcaseBusiness, Mail, FileText } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { resumeUrl } from '../../data/resume';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kristopher-roller-84775294/', icon: Linkedin },
  { label: 'Indeed', href: 'https://profile.indeed.com/p/kristopherr-20y8qlr', icon: BriefcaseBusiness },
  { label: 'Email', href: 'mailto:akjroller@gmail.com', icon: Mail },
  { label: 'Résumé PDF', href: resumeUrl, icon: FileText }
];

const Footer = () => (
  <footer className="border-t border-slate-800/60 bg-slate-950/80">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-12">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">The Roller Method</p>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Kristopher Roller. Supervisor-led support, documentation that empowers teams, and service that builds confidence.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-slate-500">
        {navigation.map((item) => (
          <Link key={item.path} to={item.path} className="transition hover:text-slate-200">
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-400 transition hover:border-primary/60 hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden />
              {social.label}
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;

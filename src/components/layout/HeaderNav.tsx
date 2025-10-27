import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { resumeUrl } from '../../data/resume';

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  const linkBaseStyles =
    'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b border-slate-800/60 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-2xl shadow-lg shadow-black/30' : 'bg-slate-950/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <NavLink
          to="/"
          aria-label="Kristopher Roller home"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.4em] text-slate-200"
        >
          KR
        </NavLink>
        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${linkBaseStyles} ${
                  isActive
                    ? 'bg-primary/20 text-white shadow-glow'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary transition hover:bg-primary/30"
            download
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume PDF
          </a>
          <NavLink
            to="/contact"
            className="inline-flex items-center rounded-full border border-primary/60 bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-primary/90"
          >
            Connect
          </NavLink>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-800 p-2 text-slate-200 transition hover:bg-slate-900 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isOpen ? (
        <nav className="border-t border-slate-800/60 bg-slate-950/95 px-6 pb-6 pt-3 shadow-lg lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkBaseStyles} justify-center ${
                    isActive ? 'bg-primary/20 text-white' : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
              download
            >
              <Download className="h-4 w-4" aria-hidden />
              Resume PDF
            </a>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-slate-900 shadow-glow transition hover:bg-primary/90"
            >
              Let&apos;s connect
            </NavLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default HeaderNav;

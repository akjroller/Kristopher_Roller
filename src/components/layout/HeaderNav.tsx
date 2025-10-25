import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '../../data/navigation';

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
        isScrolled ? 'bg-slate-950/90 backdrop-blur-xl' : 'bg-slate-950/40 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <NavLink to="/" className="flex items-center gap-2 text-sm font-semibold tracking-[0.35em] text-slate-200">
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
        <NavLink
          to="/contact"
          className="hidden items-center rounded-full border border-primary/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary transition hover:border-primary hover:bg-primary/20 hover:text-white lg:inline-flex"
        >
          Connect
        </NavLink>
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
        <nav className="border-t border-slate-800/60 bg-slate-950/95 px-6 pb-6 pt-2 shadow-lg lg:hidden">
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
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-primary/90"
            >
              Let&apos;s collaborate
            </NavLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default HeaderNav;

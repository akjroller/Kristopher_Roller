import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#skills', label: 'Skills' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' }
];

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur border-b border-slate-800/70' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="text-sm font-semibold tracking-[0.3em] text-slate-300 uppercase">
          KR
        </a>
        <div className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:akjroller@gmail.com"
          className="hidden rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 transition hover:border-secondary hover:text-white md:inline-flex"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default HeaderNav;

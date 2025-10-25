import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const SiteLayout = () => (
  <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="background-grid" aria-hidden />
      <div className="orb orb-one" aria-hidden />
      <div className="orb orb-two" aria-hidden />
      <div className="orb orb-three" aria-hidden />
    </div>
    <ScrollToTop />
    <HeaderNav />
    <main className="pt-24">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default SiteLayout;

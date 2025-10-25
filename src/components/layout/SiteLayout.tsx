import { Outlet } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const SiteLayout = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100">
    <ScrollToTop />
    <HeaderNav />
    <main className="pt-24">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default SiteLayout;

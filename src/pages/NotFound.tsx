import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="section-container flex min-h-[60vh] flex-col items-center justify-center text-center">
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <p className="eyebrow">404</p>
    <h1 className="mt-6 text-4xl font-semibold text-slate-50 md:text-5xl">The Roller Method couldn&apos;t find that page.</h1>
    <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
      Let&apos;s get you back to the work that matters. Explore my experience, projects, or reach out directly.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link to="/" className="btn-primary">
        Return home
      </Link>
      <Link to="/contact" className="btn-ghost">
        Contact Kristopher
      </Link>
    </div>
  </section>
);

export default NotFound;

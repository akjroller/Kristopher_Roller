import { Helmet } from 'react-helmet';
import HeroBanner from '../components/sections/HeroBanner';
import HomeHighlights from '../components/sections/HomeHighlights';
import ImpactTeaser from '../components/sections/ImpactTeaser';
import ReadyCTA from '../components/sections/ReadyCTA';
import SkillShowcase from '../components/sections/SkillShowcase';
import LeadershipValues from '../components/sections/LeadershipValues';
import Testimonials from '../components/sections/Testimonials';

const Home = () => (
  <div className="space-y-12">
    <Helmet>
      <title>Kristopher Roller — Technical Support &amp; Call Center Leader</title>
    </Helmet>
    <HeroBanner />
    <HomeHighlights />
    <SkillShowcase />
    <LeadershipValues />
    <ImpactTeaser />
    <Testimonials />
    <ReadyCTA />
  </div>
);

export default Home;

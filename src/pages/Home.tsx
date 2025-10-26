import { Helmet } from 'react-helmet';
import HeroBanner from '../components/sections/HeroBanner';
import HomeHighlights from '../components/sections/HomeHighlights';
import ImpactTeaser from '../components/sections/ImpactTeaser';
import ReadyCTA from '../components/sections/ReadyCTA';
import SkillShowcase from '../components/sections/SkillShowcase';

const Home = () => (
  <div className="space-y-12">
    <Helmet>
      <title>Kristopher Roller — Supervisor Leadership, Technical Support &amp; Automation</title>
    </Helmet>
    <HeroBanner />
    <HomeHighlights />
    <SkillShowcase />
    <ImpactTeaser />
    <ReadyCTA />
  </div>
);

export default Home;

import { Helmet } from 'react-helmet';
import HeroBanner from '../components/sections/HeroBanner';
import HomeHighlights from '../components/sections/HomeHighlights';
import ImpactTeaser from '../components/sections/ImpactTeaser';
import ReadyCTA from '../components/sections/ReadyCTA';

const Home = () => (
  <div className="space-y-6">
    <Helmet>
      <title>Kristopher Roller — Technical Support &amp; Process Optimization</title>
    </Helmet>
    <HeroBanner />
    <HomeHighlights />
    <ImpactTeaser />
    <ReadyCTA />
  </div>
);

export default Home;

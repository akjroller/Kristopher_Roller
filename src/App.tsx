import About from './components/About';
import Contact from './components/Contact';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import ImpactShowcase from './components/ImpactShowcase';
import LeadershipHighlights from './components/LeadershipHighlights';
import SkillsCertifications from './components/SkillsCertifications';

const App = () => {
  return (
    <div id="top" className="bg-slate-950 text-slate-100">
      <HeaderNav />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <LeadershipHighlights />
        <SkillsCertifications />
        <ImpactShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

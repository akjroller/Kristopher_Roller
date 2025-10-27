import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteLayout from './components/layout/SiteLayout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <Helmet defaultTitle="Kristopher Roller – Technical Support & Call Center Leader | Process Improvement & Customer Experience" titleTemplate="%s | The Roller Method">
      <html lang="en" />
      <meta
        name="description"
        content="Kristopher Roller is a technical support and call center leader specializing in process improvement, documentation, and people-first coaching."
      />
      <meta name="theme-color" content="#020617" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kristopher Roller – Technical Support & Call Center Leader | Process Improvement & Customer Experience" />
      <meta property="og:description" content="Technical support professional with over a decade of leadership experience. Skilled in process optimization, documentation, and empowering teams to exceed customer expectations." />
      <meta property="og:image" content="/headshot.svg" />
      <meta property="og:url" content="https://kristopherroller.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kristopher Roller – Technical Support & Call Center Leader" />
      <meta name="twitter:description" content="Remote technical support and call center leader focused on customer experience, documentation, and team coaching." />
      <meta name="twitter:image" content="/headshot.svg" />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kristopher Roller",
            "jobTitle": "Technical Support & Call Center Leader",
            "url": "https://kristopherroller.com",
            "sameAs": [
              "https://www.linkedin.com/in/kristopher-roller-84775294/",
              "https://profile.indeed.com/p/kristopherr-20y8qlr"
            ],
            "email": "mailto:akjroller@gmail.com",
            "description": "Technical support and call center leader empowering teams, elevating customer experience, and streamlining operations."
          }
        `}
      </script>
    </Helmet>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
);

export default App;

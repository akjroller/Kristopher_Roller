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
    <Helmet defaultTitle="Kristopher Roller — Call Center Supervisor & Technical Support Leader" titleTemplate="%s | The Roller Method">
      <html lang="en" />
      <meta
        name="description"
        content="Interactive resume for Kristopher Roller — call center supervisor, technical support leader, enablement strategist, and automation partner."
      />
      <meta name="theme-color" content="#0f172a" />
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

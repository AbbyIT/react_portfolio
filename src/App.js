import React from 'react';
import PortfolioContainer from'./components/PortfolioContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Gallery" element={<Gallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
          <Route path="Resume/*" element={<Resume />} />
        </Routes>

        
      </div>
    </Router>
  );
}

export default App;


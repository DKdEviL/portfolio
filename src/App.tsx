import React from 'react';
import './App.css';
import AboutMe from './components/about/About';
import Contact from './components/contact/Contact';
import WorkExperience from './components/experience/WorkExperience';
import Info from './components/info/info';
import NavBar from './components/navbar/Navbar';
import SocialLinks from './components/social/SocialLinks';

function App() {
  return (
    <div>
      <header>

      <NavBar />
      </header>
      <aside>

      <SocialLinks />
      </aside>
      <section>
        <div>
        <Info />
        </div>
        <div id='aboutMe'>
          <AboutMe />
        </div>
        <div id="experience">
          <WorkExperience />
        </div>
        <div id="contactMe">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;

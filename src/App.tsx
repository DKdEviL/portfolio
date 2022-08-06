import React from 'react';
import './App.css';
import AboutMe from './components/about/About';
import Contact from './components/contact/Contact';
import WorkExperience from './components/experience/WorkExperience';
import Info from './components/info/info';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
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
      <section className='main_container'>
        <div className='neo_container'>
        <Info />
        </div>
        <div id='aboutMe' className='neo_container'>
          <AboutMe />
        </div>
        <div className='neo_container' id="experience">
          <WorkExperience />
        </div>
        <div className='neo_container' id="myProjects">
          <Projects />
        </div>
        <div className='neo_container' id="contactMe">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;

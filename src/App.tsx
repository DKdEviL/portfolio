import React from 'react';
import './App.css';
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

        </div>
      </section>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/about/About";
import Contact from "./components/contact/Contact";
import WorkExperience from "./components/experience/WorkExperience";
import Info from "./components/info/info";
import NavBar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import SocialLinks from "./components/social/SocialLinks";

function App() {
  const [headerBgColor, setHeaderBgColor] = useState<string>("transparent");
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 95) {
        setHeaderBgColor("#f1f5f7");
      } else {
        setHeaderBgColor("transparent");
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* <div className="body_container">
        <div className="wave_container"></div>
        <div className="wave">
          <svg
            style={{
              width: "100%",
              minWidth: "960px",j.
              marginLeft: "50%",
              color: "#f1f5f7",
              transform: "translateX(-50%)",
            }}
            viewBox="0 0 1440 116"
            preserveAspectRatio="none"
          >
            <path d="M0,80.4l40-21.1C80,37.7,160-3.9,240,1s160,58.5,240,74.1c80,16.2,160-5.6,240-10.7c80-4.9,160,4.9,240,21.1c80,15.6,160,37.4,240,26.5s160-52.6,200-74.1l40-21.1V0H0V80.4z"></path>
          </svg>
        </div>
        <header
          className="sticky-top"
          style={{
            background: headerBgColor,
            top: "-25px",
            transition: "all 0.5s",
          }}
        >
          <NavBar />
        </header>
        <aside>
          <SocialLinks />
        </aside>
        <section className="main_container">
          <div>
            <Info />
          </div>
          <div id="aboutMe">
            <AboutMe />
          </div>
          <div id="experience">
            <WorkExperience />
          </div>
          <div id="myProjects">
            <Projects />
          </div>
          <div id="contactMe">
            <Contact />
          </div>
        </section>
        <footer className="d-flex justify-content-center align-items-center">
          Handcrafter by me &#169; <a href="https://www.linkedin.com/in/deepak-18" className="link-light">Deepak</a>
        </footer>
      </div> */}
    </>
  );
}

export default App;

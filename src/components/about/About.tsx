import React from "react";
import { ListGroup } from "react-bootstrap";
import aboutMeImage from '../../boy_mobile.svg';
import { PrimarySkills, SecondarySkills } from "../../data/skills";
import './About.scss';

const AboutMe = () => {
  return (
    <div className="container d-flex flex-column flex-sm-row">
      <div className="my-5">
        <p className="fs-4">
          Hello! My name is Deepak and I enjoy developing things that live on
          the internet. My interest in web development started back in 2018 when
          I was shortlisted for Google India Scholarship challenge to learn
          Frontend Web Development — turns out learning with that amazing
          community taught me a lot about HTML, CSS, JavaScript & ReactJs!
        </p>
        <p className="fs-4">
          My main focus these days is developing accessible, reusable components
          and delivering the WOW! user experience for a variety of clients.
        </p>
        <p className="fs-4">
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="d-flex w-100">
          <ListGroup variant="flush">
            {PrimarySkills.map((skill) => (
              <ListGroup.Item key={skill} className="list-group-item">
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <ListGroup variant="flush">
            {SecondarySkills.map((skill) => (
              <ListGroup.Item key={skill} className="list-group-item">
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      <div>
        <img src={aboutMeImage} width={400} height={450} />
      </div>
    </div>
  );
};

export default AboutMe;

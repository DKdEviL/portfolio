import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Carousel, Image } from "react-bootstrap";
import { projectsData } from "../../data/projects";
import './Projects.scss';

const Projects = () => {
  return (
    <Carousel variant="dark" fade interval={2000} className='project_carousel'>
      {projectsData.map((project) => {
        return (
          
          <Carousel.Item key={project.title}>
            <div className="align-items-center project_card">
            <div className="card_blob"></div>
            <span className="card_img">{project.title.toUpperCase().charAt(0)}</span>
            <Image className="card_img-image" src={project.image} alt='project_image'/>
            <h2>
            {project.title} <br /><span>{project.description}</span>
            </h2>
            <p>
            <a href={project.link}>
            <FontAwesomeIcon
              className="link-social"
              icon={faGithub}
              size="3x"
            />
          </a>
            </p>
          </div>
          {/* <div className="project_card">
          <div className="card_blob"></div>
          <span className="card_img"></span>
          </div> */}
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Projects;

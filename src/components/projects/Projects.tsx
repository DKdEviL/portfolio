import { Card, Carousel, Image } from "react-bootstrap";
import { projectsData } from "../../data/projects";
import './Projects.scss';

const Projects = () => {
  return (
    <Carousel variant="dark" fade interval={2000} className='project_carousel'>
      {projectsData.map((project) => {
        return (
          
          <Carousel.Item>
            <Card className="text-white border-0 align-items-center bg-transparent">
            {/* <Card.Img rounded src={project.image} alt="project image" /> */}
            <Image rounded src={project.image} alt="project image" className="card-img"/>
            <Card.ImgOverlay>
              <Card.Title className='fw-bold'>{project.title}</Card.Title>
              <Card.Text className='fw-bold'>{project.description}</Card.Text>
              <Card.Text className='fw-bold'>Last updated 3 mins ago </Card.Text>
            </Card.ImgOverlay>
          </Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Projects;

import React from "react";
import {
  Alert,
  Button,
  Col,
  Fade,
  ListGroup,
  Nav,
  Row,
  Stack,
  Tab,
} from "react-bootstrap";
import { empHistory } from "../../data/employment";
import ContactButton from "../AnimatedButton/ContactButton";
import "./WorkExperience.scss";

const WorkExperience = () => {
  return (
    <div className="container my-5 section_container">
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={empHistory[0].employer_name + "-0"}
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {empHistory.map((employer, index) => (
                <Nav.Item>
                  <Nav.Link
                    className="company_tab"
                    eventKey={employer.employer_name + "-" + index}
                  >
                    {employer.employer_name}
                  </Nav.Link>
                </Nav.Item>
              ))}
              <Nav.Item>
                <Nav.Link className="company_tab" eventKey={"haveOffer"}>
                  Any Offer?
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {empHistory.map((employer, index) => (
                <Tab.Pane eventKey={employer.employer_name + "-" + index}>
                  <ListGroup variant="flush">
                    {employer.details.map((details, index) => (
                      <ListGroup.Item
                        key={"detail-" + index}
                        className="list-group-item experience_summary"
                      >
                        {details}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab.Pane>
              ))}
              <Tab.Pane eventKey={"haveOffer"} className="offer">
                <Alert
                  key={"info-alert"}
                  variant={"info"}
                  className="fw-bold text-center"
                >
                  Do you have something for me?
                </Alert>
                <Stack
                  gap={2}
                  className="col-md-5 mx-auto justify-content-center align-items-center"
                >
                  <ContactButton title="Let's Talk" />
                </Stack>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default WorkExperience;

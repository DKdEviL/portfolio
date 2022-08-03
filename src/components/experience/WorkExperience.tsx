import React from 'react';
import { Col, ListGroup, Nav, Row, Tab } from 'react-bootstrap';
import { empHistory } from '../../data/employment';

const WorkExperience = () => {
    return (
      <div className="container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {empHistory.map((employer, index) => (
                  <Nav.Item>
                    <Nav.Link eventKey={employer.employer_name + "-" + index}>
                      {employer.employer_name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
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
                          className="list-group-item"
                        >
                          {details}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
}

export default WorkExperience;
import { Button, Card } from "react-bootstrap";


const Contact = () => {
    return (
      <Card className="text-center">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Card.Title>Get In Touch</Card.Title>
          <Card.Text>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </Card.Text>
          <Button variant="primary">Say Hello</Button>
        </Card.Body>
      </Card>
    );
};

export default Contact;

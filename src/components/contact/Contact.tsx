import { Button, Card } from "react-bootstrap";
import ContactButton from "../AnimatedButton/ContactButton";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center text-center border-0 vh-100">
      {/* <Card.Header>Featured</Card.Header> */}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>Get In Touch</Card.Title>
        <h5>
          Living, Learning & Leveling up
          <br />
          one day at a time
        </h5>
        <Card.Text>
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </Card.Text>
        <ContactButton title="Say Hello" />
      </div>
    </div>
  );
};

export default Contact;

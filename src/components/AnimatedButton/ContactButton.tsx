import { Button } from "react-bootstrap";
import { IContactButtonProps } from "../../utils/types.interfaces";
import "./ContactButton.scss";

const ContactButton = (props: IContactButtonProps) => {
  return (
    <Button
      className="contact_btn d-flex justify-content-center align-items-center my-0"
      variant="secondary"
    >
      {props.title}
    </Button>
  );
};

export default ContactButton;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./SocialLinks.scss";
import { SOCIAL_LINKS } from "../../utils/enum";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div
      className="vstack gap-3 justify-content-end position-fixed bottom-0 social_container"
    >
      <ul className="nav flex-sm-column justify-content-center">
        <li className="nav-item">
          <a className="nav-link social" href={SOCIAL_LINKS.GIT}>
            <FontAwesomeIcon
              className="link-social"
              icon={faGithub}
              size="2x"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link social" href={SOCIAL_LINKS.LINKEDIN}>
            <FontAwesomeIcon
              className="link-social"
              icon={faLinkedin}
              size="2x"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link social" href={SOCIAL_LINKS.INSTA}>
            <FontAwesomeIcon
              className="link-social"
              icon={faInstagram}
              size="2x"
            />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link social" href={SOCIAL_LINKS.EMAIL}>
            <FontAwesomeIcon
              className="link-social"
              icon={faEnvelope}
              size="2x"
            />
          </a>
        </li>
      </ul>

      <div
        className="d-flex justify-content-center d-sm-flex d-none"
        style={{ height: "200px" }}
      >
        <div className="vr"></div>
      </div>
    </div>
  );
};

export default SocialLinks;

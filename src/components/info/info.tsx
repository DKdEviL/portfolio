import React, { useEffect, useState } from "react";
import { empHistory } from "../../data/employment";
import "./info.scss";

const Info = () => {

  return (
    <div className="container">
      <p className="lead">Hi, I am</p>
      <h1 className="display-3">Deepak</h1>
      <h1 className="display-5">
        - <u>Frontend Developer</u>
      </h1>
      <p className="fs-4">
        I’m a software developer specializing in developing websites with
        exceptional digital experiences. Currently, I’m focused on building
        accessible, human-centered products at{" "}
        <a
          href={
            empHistory.find((employer) => employer.current_employer === true)
              ?.website
          }
          target="_"
          className="btn btn-primary stretched-link"
        >
          {
            empHistory.find((employer) => employer.current_employer === true)
              ?.employer_name
          }
        </a>
      </p>
    </div>
  );
};

export default Info;

import React, { useEffect, useState } from "react";
import "./info.scss";

const Info = () => {
  return (
    <div className="container section_container d-flex flex-column justify-content-center">
      <h1 className="name focusName">Deepak</h1>
      <h1 className="display-5 my-3 title">
        - <u>Frontend Developer</u>
      </h1>
      <p className="fs-4 info my-5">
        I'm a <strong>developer</strong> in <strong>Haryana, India</strong>. I like working on the{" "}
        <strong>front-end</strong> of the web. Currently, I’m focused on
        building accessible, human-centered products.
      </p>
    </div>
  );
};

export default Info;

import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import FlagIcon from "../FlagIcon";
import "./about.scss";

const About = forwardRef((props, ref) => {
  const about = useSelector((state) => state.about.about);
  return (
    <div ref={ref} className="about">
      <div className="about__mainA">
        <div className="mainA__who">
          <h1>Who I am</h1>
          <p dangerouslySetInnerHTML={{ __html: about }}></p>
        </div>
        <div className="mainA_cv">
          <a className="cv_link" href="/">
            <FlagIcon code="pl" /> CV
          </a>
          <a className="cv_link" href="/">
            <FlagIcon code="gb" /> CV
          </a>
        </div>
      </div>
    </div>
  );
});

export default About;

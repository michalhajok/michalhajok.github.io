import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./projects.scss";

const Projects = forwardRef((props, ref) => {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <div ref={ref} className="projects">
      <div className="projects__mainP">
        <h1 className="mainP__title">Projects</h1>
        <div className="mainP__listProjects">
          {projects.map(({ title, about, linkGithub, linkDemo }, index) => (
            <div key={title} className="listProjects__project">
              <div className="project__about">
                <p>{about}</p>
                <div className="about__links">
                  <a href={linkGithub} target="blank">
                    <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
                  </a>
                  <a href={linkDemo} target="blank">
                    <FontAwesomeIcon size="2x" icon={["far", "file-code"]} />
                  </a>
                </div>
              </div>
              <div className="project__title">
                <p>
                  0{index + 1} <br /> {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;

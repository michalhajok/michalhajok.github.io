import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlagIcon from "../FlagIcon";

import "./skills.scss";

const Skills = forwardRef((props, ref) => {
  const skills = useSelector((state) => state.skills);
  const { technologies, languages } = skills;

  return (
    <div className="skills" ref={ref}>
      <div className="skills__mainS">
        <h1 className="mainS__title">Skills</h1>
        <div className="mainS__technologies">
          <h3>Technologies</h3>
          <div className="technologies__list">
            {technologies.map(({ title, icon, level, color }) => (
              <div key={title} className="list__technology">
                <FontAwesomeIcon
                  size="2x"
                  icon={icon}
                  style={{ color: color }}
                />
                <div className="technology__tooltip">
                  <p className="tooltip__text">
                    {title} - {level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mainS__languages">
          <h3>Languages</h3>
          <div className="languages__list">
            {languages.map(({ title, flag, level }) => (
              <article className="list__language" key={title}>
                <FlagIcon code={flag} />
                <p>{title}</p>
                <p>( {level} )</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;

import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.scss";

const Footer = () => {
  const socialMedia = useSelector((state) => state.socialMedia.socialMedia);

  return (
    <div className="footer">
      <div className="footer__mail">
        <a href="mailto:hajokmichal@gmail.com">hajokmichal@gmail.com</a>
      </div>
      <div className="footer__socialMedia">
        {socialMedia.map(({ title, link }) => (
          <a key={link} href={link} target="blank">
            <FontAwesomeIcon icon={["fab", title]} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

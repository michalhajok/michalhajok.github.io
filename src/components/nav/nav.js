import React from "react";

import "./nav.scss";

const Nav = ({ refs }) => {
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <ul className="nav">
        {links.map((link, index) => (
          <li
            key={link}
            onClick={() => {
              refs[index + 1].current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

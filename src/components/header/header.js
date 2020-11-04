import React, { forwardRef } from "react";
import photo from "../../photo.jpg";
import "./header.scss";

const Header = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="header">
      <div className="header__mainH">
        <div className="mainH__front">
          <p>Front developer</p>
        </div>
        <figure className="mainH__figure">
          <img src={photo} alt="" />
        </figure>
        <section className="mainH__text">
          <p>Hi, I am</p>
          <h2>Michal Hajok</h2>
        </section>
      </div>
    </div>
  );
});

export default Header;

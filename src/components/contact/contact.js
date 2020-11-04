import React, { forwardRef } from "react";

import "./contact.scss";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <div className="contact__mainC">
        <h1 className="mainC__title">Contact</h1>
        <form className="mainC__form">
          <label>
            <input type="text" placeholder="Email" required />
          </label>
          <label>
            <input type="text" placeholder="Name of your company" required />
          </label>
          <label>
            <textarea wrap="true" placeholder="Message" required></textarea>
          </label>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
});

export default Contact;

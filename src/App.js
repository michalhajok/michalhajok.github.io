import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faNode,
  faJs,
  faReact,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

import Home from "./pages/home/home";
import Cursor from "./components/cursor/cursor";

import "./App.scss";

library.add(
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faNode,
  faJs,
  faReact,
  faSass,
  faGitAlt,
  faDatabase,
  faFileCode
);

function App() {
  return (
    <div
      className="App"
      // onContextMenu={(e) => {
      //   e.preventDefault();
      // }}
    >
      <Cursor />
      <Home />
    </div>
  );
}

export default App;

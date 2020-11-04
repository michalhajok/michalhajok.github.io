import React, { useRef } from "react";

import Header from "../../components/header";
import About from "../../components/about/about";
import Nav from "../../components/nav/nav";
import Projects from "../../components/projects";
import Skills from "../../components/skills";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import "./home.scss";

const Home = () => {
  const header = useRef();
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const contact = useRef();

  const refs = [header, about, skills, projects, contact];

  return (
    <div className="home">
      <Nav refs={refs} />
      <Header ref={header} />
      <About ref={about} />
      <Skills ref={skills} />
      <Projects ref={projects} />
      <Contact ref={contact} />
      <Footer />
    </div>
  );
};

export default Home;

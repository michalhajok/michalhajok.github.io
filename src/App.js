import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";


import './App.scss';


const App = () =>  (
    <div className="App">
        <nav className="navbar">
            <ul className="navbar__nav">
                {/* <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Projects</li> */}
            </ul>
            <figure className="navbar__figure">
                <img src="pictures//photo.jpg" alt="photosad"/>                
                <p>Michał Hajok</p>
                <div>
                <a href="https://www.linkedin.com/in/michalhajok//" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/michalhajok" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </figure>
        </nav>
        <main>
            <About />
            <Experience />
            <Projects />
            {/* <Contact /> */}
        </main>
    </div>
)

export default App;

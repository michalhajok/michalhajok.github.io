import React, { useState } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faDesktop } from "@fortawesome/free-solid-svg-icons";

import {data as projects} from './projects.json'

import './projects.scss'

const Projects = () => {
    const [x, setX] = useState(0)
    
    const left = () => {
        x === 0 ?
            setX(-100 * (projects.length - 1))
            :
            setX(x + 100)
    }
    
    const right = () => {
        x === -100 * (projects.length - 1)  ? 
            setX(0)
            :
            setX(x - 100)
    }
    
    
    return (
        <section className="section sections_projects">
            <h2 className="section__header">Projects</h2>
            <div className="projects__items">
            <div className="items--carousel">
                <div className="items__arrowLeft" onClick={left}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                {
                    projects.map(({title, details, github, demo, picture}) => (
                        <div className="items__project" style={{transform: `translate(${x}%)`}}  key={title}>
                        <figure className="project__figure">
                            <img src={picture} alt="pictures" />
                        </figure>
                        <div className="project__main">
                            <h2>{title}</h2>
                            <div>
                                <p>{details}</p>
                            </div>
                            <div className="main__links">
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                                <a href={demo} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faDesktop} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                    ))
                }
                <div className="items__arrowRight" onClick={right}>
                <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            </div>
        </section>
    )
}

export default Projects

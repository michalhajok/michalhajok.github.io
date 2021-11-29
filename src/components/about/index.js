import React from 'react'

import { skills } from './skills.json'

import './about.scss'

const getYears = () => {
    const birthday = new Date(2000, 7, 29)
    const now = Date.now()
    const years =  Math.floor((now - birthday) / (100000 * 315376))
    return years
}

const About = () =>  (
    <section className="section sections__about">
    <h2 className="section__header">About me</h2>
    

    <div className="about__details">
        <p>
            Hi! My name is Michal and I am {getYears()} years old.  I work with medical software, my duty is to check mistakes in software or database and try to repair them. I done advance course in Szkola Reacta. In my projects I used React, Redux, React-Router, Sass, ExpressJs. In the future I would like to work as front-end developer.
            In my spare time I like to play on the console and develop myself. I am also a volunteer firefighter.
        </p>
        <p>Location: Silesia / Cracow / Remote</p>
        <div className="details__cv">
            <a href="/cv.pdf" target="_blank">My cv</a>
        </div>
    </div>
    <div className="about__skills">
        <h2 className="section__header">Skills</h2>
        <div className="skills__main">
            {skills.main.map(({name, level}) => (
                <div key={name} className="main__skill">
                    <div className="skill__label">
                        <div>{name}</div>
                        <div>{level}</div>
                    </div>
                    <span>
                        <span className={level.replace(/\s/g, "")}>
                        </span>
                    </span>
                </div>
            ))}
        </div>
        <div className="skills__rest">
            {skills.rest.map(e => (
                <div key={e}>{e}</div>
            ))}
        </div>
    </div>
</section>
)


export default About

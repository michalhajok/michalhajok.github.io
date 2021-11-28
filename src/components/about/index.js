import React from 'react'

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
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Sass</li>
            <li>Node Js</li>
            <li>Git</li>
            <li>SQL</li>
            <li>React Native</li>
            <li>Next Js</li>
        </ul>
    </div>
</section>
)


export default About

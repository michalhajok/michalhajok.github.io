import React from 'react'

import { experience } from './experience.json'

import './experience.scss'

const Experience = () => {
    return (
        <section  className="section sections__experiences">
            <h2 className="section__header">Experience</h2>
            <div className="experiences__three">
                    {
                        experience.map(({title, firm, dates, place}, index) => (
                            <div 
                                key={title} 
                                className={`three__experience ${index %2 === 0 ? 'left' : 'right' }`}
                            >
                                <div className="experience__content">
                                    <span></span>
                                    <h3>{title}</h3>
                                    <p>{firm} - {place}</p>
                                    <p className="content__date">{dates}</p>
                                </div>
                                <div className="experience__null"></div>
                            </div>
                        ))
                    }
            </div>
        </section>
    )
}

export default Experience

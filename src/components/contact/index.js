import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import './contact.scss'

const Contact = () =>  (
        <section className="section sections__contact">
            <div className="contact__message">
                <h2 className="section__header">Contact</h2>
                <form className="message__form">
                    <div className="form__inputs">
                        <label htmlFor="name"></label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="off"
                            placeholder="Name" 
                        />
                    </div>
                    <div className="form__inputs">
                        <label htmlFor="email"></label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="E-Mail" 
                        />
                    </div>
                    <div className="form__inputs">
                        <label htmlFor="topic"></label>
                        <input 
                            type="text"
                            id="topic"
                            name="topic"
                            autoComplete="off"
                            placeholder="Topic" 
                        />
                    </div>
                    <div className="form__text">
                        <label htmlFor="message"></label>
                        <textarea                             
                            type="text"
                            id="message"
                            name="message"
                            autoComplete="off"
                            placeholder="Message" 
                        />
                    </div>
                </form>
            </div>
            <div className="contact__footer">
                <div className="footer__social">
                    <ul>
                        <a href="https://www.linkedin.com/in/michalhajok//" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://github.com/michalhajok" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faAt} size="2x" /> 
                        </a>
                    </ul>
                </div>
                <div className="footer__text" >
                    <span></span>
                    <p>&copy; 2021 Created by Michał Hajok</p>
                </div>
            </div>
        </section>
    )

export default Contact

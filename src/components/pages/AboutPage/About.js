import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

import './About.css';

function About() {
    return (
        <>
            <div className='about'>
                <div className='row'>
                    <div className='col'>
                        <div className='about__img-wrapper'>
                            <img src='images/meCasual.JPEG'></img>
                        </div>
                        <div className='about__contact-text-wrapper'>
                            <h2>Contact</h2>
                            tamn@andrew.cmu.edu
                            Links
                            <div className='social-icons'>
                                <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                                >
                                    <FaInstagram />
                                </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <FaTwitter />
                            </Link>
                            <Link
                                className='social-icon-link'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <FaLinkedin />
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div classname='col'>
                        <div className='about__text-wrapper'>
                            <div className='about__top-line'>hey, thanks for dropping in!</div>
                            <p className='biography'>
                                My name is Tam, and I’m a Product Designer focusing on people in design. Currently I’m completing my Master’s in Human-Computer Interaction at Carnegie Mellon University.
                                <br/>
                                I have an interdisciplinary background in software development and the digital humanities, which has informed and enriched the way I approach design. By viewing technology as a medium through which to better connect with people, interpreting and empathizing with their past and present becomes so much more possible.
                                <br/>
                                In my freetime, I enjoy creating illustrations, and I’m finally learning how to cook more than Kraft Mac & Cheese. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

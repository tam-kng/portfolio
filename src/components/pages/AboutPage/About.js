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
import meCasual from '../../../images/meCasual.JPEG';

function About() {
    return (
        <>
            <div className='about'>
                <div className='about-row'>
                    <div className='about-col'>
                        <div className='about__img-wrapper'>
                            <img src={meCasual}></img>
                        </div>
                    </div>
                    <div classname='about-col'>
                        <div className='about__text-wrapper'>
                            <div className='about__top-line'>hey, thanks for dropping in!</div>
                            <p className='biography'>
                                My name is Tam, and I’m a Product Designer focusing on people in design. Currently I’m completing my Master’s in Human-Computer Interaction at Carnegie Mellon University.
                                <br/>
                                <br/>
                                I have an interdisciplinary background in software development and the digital humanities, which has informed and enriched the way I approach design. By viewing technology as a medium through which to better connect with people, empathy becomes so much more possible.
                                <br/>
                                <br/>
                                In my freetime I enjoy creating illustrations, and I’m perfecting my ponzu beef bowl recipe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

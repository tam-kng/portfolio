import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import 'arrow.svg'

import { Button } from './Button.js';
import Arrow from './Arrow.js';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <Link to='/vitro' className='project-links'>
            <motion.div 
                className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
                variants={projectMotion}
                initial='rest'
                whileHover='hover'
                transition={{ type: "tween" }}
            >
                <div className='container'>
                    <div className='row home__hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                {/*
                                <Link to='/sign-up'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                                </Link>
                                */}
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                            <motion.div className='home__hero-arrow-wrapper' variants={arrowMotion}>
                                <Arrow className='home__hero-arrow' fill='black'/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default HeroSection;

const projectMotion = {
    hover: {
        scale: 1.025
    }
};

const arrowMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };

const arrowContainer = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1
  }
};

const hoverProject = {
    
}
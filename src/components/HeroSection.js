import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import arrowIcon from '../images/arrow-icon.svg';
import './HeroSection.css';

/* Create HeroSection component to hold projects */
function HeroSection({
    topLine, lightText, lightTextDesc, headline, description, img, bkg, alt, imgStart, completed, link
}) {
    const imageUrl = window.innerWidth >= 650 ? img : bkg;

    return (
        <Link to={link} className='project-links'>
            <motion.div 
                className={completed ? 'home__hero-section' : 'home__hero-section incomplete-section'}
                variants={projectMotion}
                initial='rest'
                whileHover={completed ? 'hover' : 'hoverIncomplete'}
                transition={{ type: "tween" }}
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <div className='container'>
                    <div className='row home__hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className='col'>
                            <div className='home__hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            </div>
                        </div>
                        <div className='col'>
                            {/*}
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                            {*/}
                            <motion.div className='home__hero-arrow-wrapper' variants={arrowMotion}>
                                <img src={arrowIcon} alt='arrow'></img>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default HeroSection;

/* Framer motion variants for use in project card hover and arrow animations */
const projectMotion = {
    hover: {
        scale: 1.025,
    },
    hoverIncomplete: {
        opacity: .5,
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
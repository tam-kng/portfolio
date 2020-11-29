import React from 'react'
import { motion } from 'framer-motion';


import HeroSection from '../../HeroSection.js';
import { homeObjOne, homeObjTwo } from './Data.js';

import './Home.css';

function Home() {
    return (
        <>
            <div className='home'>
                <div className='intro'>
                    <div className='greeting'>
                        hello!
                    </div>
                    <p>I’m Tam, a <span className='highlight'>Product Designer.</span> I find my passion in building nuanced 
                    and user-focused experiences. Currently earning my <span className='highlight'>Master of Human-Computer 
                    Interaction</span> @ <span className='highlight'>Carnegie Mellon University.</span></p>
                    Come say hi!
                </div>
                <div className='projects-container'>
                    <HeroSection {...homeObjOne} />
                    <HeroSection {...homeObjTwo} />
                </div>
            </div>
        </>
    )
}

export default Home

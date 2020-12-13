import React from 'react'

import HeroSection from '../../HeroSection.js';
import { foragerObj, kstObj, vitroObj } from '../../ProjectData.js';
import './Home.css';

/* Create Home component holding hero sections (project-specific cards) */
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
                    Interaction</span> @ <br/><span className='highlight'>Carnegie Mellon University.</span></p>
                    Come say hi!
                </div>
                <div className='projects-container'>
                    <HeroSection {...foragerObj} />
                    <HeroSection {...kstObj} />
                    <HeroSection {...vitroObj} />
                </div>
            </div>
        </>
    )
}

export default Home

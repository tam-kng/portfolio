import React from 'react'
import { motion } from 'framer-motion';

import './Resume.css';
import resumeImg from '../../../images/Tam_Nguyen-Dec2020_Resume.png';

function Resume() {
    return (
        <>
            <div className='resume'>
                <div className='resume__img-container'>
                    <img src={resumeImg}></img>
                </div>
            </div>
        </>
    )
}

export default Resume


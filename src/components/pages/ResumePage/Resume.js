import React from 'react'

import './Resume.css';
import resumeImg from '../../../images/Tam_Nguyen-Dec2020_Resume.png';

/* Create resume component */
function Resume() {
    return (
        <>
            <div className='resume'>
                <div className='resume__img-container'>
                    <img src={resumeImg} alt='tam resume'></img>
                </div>
            </div>
        </>
    )
}

export default Resume


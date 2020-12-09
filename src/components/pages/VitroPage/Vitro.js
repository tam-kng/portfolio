import React from 'react'
import { motion } from 'framer-motion';

import './Vitro.css';
import { vitroViewObj } from '../ProjectData.js';
import vitroViewImg from '../../../images/vitroView.png';

function Vitro() {
    return (
        <>
            <div className='vitro'>
                <div className='row'>
                    <div className='vitro__top-line'>Vitro View</div>
                    <div className='vitro__intro'>{vitroViewObj.introduction}</div>
                </div>
                <div className='vitro__img-container'>
                    <img src={vitroViewImg} className='vitro__img'></img>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='vitro__spec-wrapper'>
                            <div className='team-header'>Team Members</div>
                            <p className='team-names'>
                                {vitroViewObj.teamMembers[0]}
                                <br/>
                                {vitroViewObj.teamMembers[1]}
                            </p>
                            <div className='role-header'>My Roles</div>
                            <p classname='roles'>
                                {vitroViewObj.roles[0]}
                                <br/>
                                {vitroViewObj.roles[1]}
                            </p>
                            <div className='timeline-header'>Timeline</div>
                            <p classname='timeline'>
                                {vitroViewObj.timeline}
                            </p>
                            <div className='tools'>Tools</div>
                            <p className='tools'>
                                {vitroViewObj.tools[0]}
                                <br/>
                                {vitroViewObj.tools[1]}
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='vitro__description-wrapper'>
                            {vitroViewObj.introduction}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vitro
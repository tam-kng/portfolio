import React from 'react'
import { motion } from 'framer-motion';

import './Forager.css';
import { foragerObj } from '../ProjectData.js';
import foragerHomeSmallImg from '../../../images/forager-home-small.svg';
import foragerDoubleImg from '../../../images/forager-double.svg';

function Forager() {
    return (
        <>
            <div className='forager'>
                <div className='project-row'>
                    <div className='project-col forager-header'>
                        <div className='forager__top-line'>Forager</div>
                        <div className='forager__intro'>{foragerObj.introduction}</div>
                    </div>
                    <div className='forager__img-container'>
                        <img className='forager__img' src={foragerHomeSmallImg} ></img>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='project-col'>
                        <div className='forager__spec-wrapper'>
                            <div className='team-header'>Team Members</div>
                            <p className='team-names'>
                                {foragerObj.teamMembers[0]}
                                <br/>
                                {foragerObj.teamMembers[1]}
                                <br/>
                                {foragerObj.teamMembers[2]}
                                <br/>
                                {foragerObj.teamMembers[3]}
                            </p>
                            <div className='role-header'>My Roles</div>
                            <p classname='roles'>
                                {foragerObj.roles[0]}
                                <br/>
                                {foragerObj.roles[1]}
                            </p>
                            <div className='timeline-header'>Timeline</div>
                            <p classname='timeline'>
                                {foragerObj.timeline}
                            </p>
                            <div className='tools'>Tools</div>
                            <p className='tools'>
                                {foragerObj.tools[0]}
                                <br/>
                                {foragerObj.tools[1]}
                            </p>
                        </div>
                    </div>
                    <div className='project-col'>
                        <div className='forager__description-wrapper'>
                            {foragerObj.introduction}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forager;
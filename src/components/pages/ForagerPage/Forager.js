import React from 'react'
import { motion } from 'framer-motion';

import './Forager.css';
import { foragerObj } from '../ProjectData.js';
import foragerHomeSmallImg from '../../../images/forager-home-small.svg';
import foragerInStoreImg from '../../../images/forager-home-in-store.svg';
import hatIcon from '../../../images/cowboy-hat.svg';
import calendarIcon from '../../../images/calendar.svg';
import teamIcon from '../../../images/team.svg';
import toolsIcon from '../../../images/tools.svg';
import foragerDoubleImg from '../../../images/forager-double.svg';

function Forager() {
    return (
        <>
            <div className='forager'>
                <div className='project-header'>
                    <div className='project-row project-nav'>
                        <div className='project-nav-item'>PROBLEM</div>
                        <div className='project-nav-item'>SOLUTION</div>
                        <div className='project-nav-item'>VALUE</div>
                        <div className='project-nav-item'>PROCESS</div>
                    </div>
                    <div className='project-row header-title'>
                        <div className='project-col'>
                            <div className='header-title-txt'>
                                Forager
                            </div>
                            <div className='header-title-block'></div>
                            <div className='header-body-txt'>
                                Forager puts users first as they shop for groceries, optimizing their grocery trip while limiting their risk and exposure to COVID-19.
                                Reimagining a universal activity to address a rapidly changing world felt like a necessary and exciting challenge, and so I dived into this project so build a better, safer experience.
                            </div>
                        </div>
                        <div className='project-col'>
                            <div className='header-title-img-container'>
                                <img src={foragerHomeSmallImg}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='in-store-img-container'>
                        <img src={foragerInStoreImg}></img>
                    </div>
                </div>
                <div className='project-row'>
                    <div className='project-specs'>
                        <div className='project-col'>
                            <img src={hatIcon}></img>
                            <div className='spec-title'>
                                MY ROLES
                            </div>
                            <div className='spec'>
                                Lead UX designer
                                <br/>
                                UX researcher
                            </div>
                        </div>
                        <div className='project-col'>
                            <img src={toolsIcon}></img>
                            <div className='spec-title'>
                                    MY TOOLS
                                </div>
                                <div className='spec'>
                                    Figma
                                    <br/>
                                    Miro
                                </div>
                            </div>
                        <div className='project-col'>
                            <img src={teamIcon}></img>
                            <div className='spec-title'>
                                    TEAM
                                </div>
                                <div className='spec'>
                                    Tam Nguyen
                                    <br/>
                                    Onyekachi Nwabueze
                                    <br/>
                                    Lia Slaton
                                    <br/>
                                    Eric Li
                                </div>
                            </div>
                        <div className='project-col'>
                            <img src={calendarIcon}></img>
                            <div className='spec-title'>
                                    TIMELINE
                                </div>
                                <div className='spec'>
                                    Nov - Dec 2020
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forager;
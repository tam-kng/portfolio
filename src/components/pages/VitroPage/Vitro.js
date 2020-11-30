import React from 'react'
import { motion } from 'framer-motion';

import './Vitro.css';

function Vitro() {
    return (
        <>
            <div className='vitro'>
                <div className='row'>
                    <div className='vitro__top-line'>Vitro View</div>
                </div>
                <div className='vitro__img-container'>
                    <img src='images/vitroView.png' className='vitro__img'></img>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='vitro__spec-wrapper'>
                            <div className='role-header'>Role</div>
                            <p className='role-description'>
                                Designer | Tam Nguyen
                                <br/>
                                Project Manager | Reese McArdle
                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='vitro__description-wrapper'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vitro
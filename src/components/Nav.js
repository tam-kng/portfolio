import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import './hamburgers.css';
import './Nav.css';

/* Create Nav component for universal site navigation */
function Nav() {
    // react hooks to set state
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className='nav'>
                    <div className='nav-container container'>
                        <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
                            Tam Nguyen
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <button class="hamburger hamburger--collapse is-active" type="button">
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </button>
                                    :
                                    <button class="hamburger hamburger--collapse" type="button">
                                        <span class="hamburger-box">
                                            <span class="hamburger-inner"></span>
                                        </span>
                                    </button>
                            }
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>work</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>about</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>resume</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}
export default Nav;
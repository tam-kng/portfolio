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
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Button } from './Button.js';
import './Nav.css';

function Nav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    /*
    // pass in empty array
    useEffect(() => {
        showButton();
    }, []);
    */

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className='nav'>
                    <div className='nav-container container'>
                        <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
                            <MdFingerprint className='navbar-icon' />
                            Tam Nguyen
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
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
                            {/*}
                            <li className='nav-btn'>
                                {button ? (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                    </Link>
                                ) : (
                                    <Link to='/sign-up' className='btn-link'>
                                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile' onClick={closeMobileMenu}>SIGN UP</Button>
                                    </Link>
                                )}
                            </li>
                                */}
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}
export default Nav;
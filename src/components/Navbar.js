import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Women's Prohibiton
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/mark'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Overview
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/shaan'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gender Barrier
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/farhan'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Movements and Bootleggers
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sandy'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prohibition and Women's Rights
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/arvin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Temperance Movement
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/cited'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                MLA Works Citation
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

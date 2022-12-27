import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className='nav-bar'>
            <h1><FontAwesomeIcon icon={faGlobe}/> my <span>travel</span> journal</h1>
    </nav>
  )
}

export default Navbar
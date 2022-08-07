import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header-container'>
      <nav className='menu-items'>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact Us</Link>
        <Link to={'/about'}>About Us</Link>
      </nav>
    </header>

  )

}


export default Header;
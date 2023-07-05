import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
// import tour from '../media/tourlog.png'
import About from './About';

const Navbar = ({ handleSearch, showSearchBar  }) => {
  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>Tour<span>Buddy</span></h1>
      <ul className='nav-menu' style={{ justifyContent: 'flex-end' }}>
        <li>
         <Link to='/' className='nav-links' style={{ color: 'red'}}>
          <i class="fa-solid fa-house-user"></i>
          Home</Link>
        </li>
        <li>
         <Link to='/about' className='nav-links' style={{ color: 'red' }}>
          <i class="fa-solid fa-circle-info"></i>
          About</Link>
        </li>
      
        <li>
         <Link to='/contact' className='nav-links' style={{ color: 'red'}}>
          <i class="fa-solid fa-address-book"></i>
          Contact</Link>
        </li>
      </ul>
      {showSearchBar && (
        <div className='searchbar'>
          <input type='text' placeholder='Search' onChange={handleSearch} />
        </div>
      )}
    </nav>
  )
}

export default Navbar;

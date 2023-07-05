import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tourpackage.css';
// import searchIcon from '/media/search1.png';

const Tourpackage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Logic for handling the search query
    console.log('Search query:', searchQuery);
  };

  return (
    <header>
        <p></p>
      <nav>
        <div className='search-container'>
        
         <center>
         <img src="/media/bgvd4.mp4" alt="Search Icon" className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search here........"
            />
            </center>
          </div>
         <p></p>
          <ul className="navbar">
          <li>
            <Link to="/HotelsAndResorts">HotelAndResorts</Link>
          </li>
          <li>
            <Link to="/tour-cruises">Tour & Cruises</Link>
          </li>
          <li>
            <Link to="/ultralux">Ultralux</Link>
          </li>
          <li>
            <Link to="/flights">Flights</Link>
          </li>
          <li>
            <Link to="/trip-planner">Trip Planner</Link>
          </li>
          <li>
            <Link to="/gift-cards">Gift Cards</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Tourpackage;




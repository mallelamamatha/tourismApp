import React, { useState } from 'react';
// import vdeo from '/media/bgvd4.mp4';
import './welcome.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Test from './Test';
// import award1 from '/media/Award1.webp';
// import award2 from '../media/Award2.webp'
// import award3 from '../media/Award3.webp'
import Chatbox from './Chatbox';
import FeatureIcons from './FeatureIcons';
import Footer from './Footer';

const Homepage = () => {
  
  return (
    <div>
      <div className="video-container">
       <video src="/media/bgvd4.mp4" autoPlay loop muted />
       <div className='bar'>
         <Navbar showSearchBar={false} />
       </div>
        <div className="video-text">
          <h1>Welcome To TourBuddy</h1>
          <p>Explore The India, Just One Click!</p>
          <Link to='/states'><button className='button1'>Get Started</button></Link>
        </div>
      </div>
      <section className="section tour container">
        <h3 className="section-title"><i class="fa-solid fa-landmark-flag"></i> Trending destinations</h3>
        <div className="tour__container">
        <div className="tour__card">
            <img src='images/tajmahal3.jpg' alt="" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Taj Mahal</h5>
              <span className="tour__data-subtitle">Delhi</span>
            </div>
          </div>
          <div className="tour__card">
            <img src='images/hyd/hyderabad.jpg' alt="abc" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Charminar</h5>
              <span className="tour__data-subtitle">Hyderabad</span>
            </div>
          </div>
          <div class="tour__card">
            <img src='images/mumbai1.jpg' alt="abc" className="tour__card-img" />
            <div className="tour__data">
              <h5 className="tour__data-title">Gate Of India</h5>
              <span className="tour__data-subtitle">Mumbai</span>
            </div>
          </div>
        </div>
      </section>
    
      <h3 className="section-title"><i class="fa-solid fa-landmark-dome"></i> Must Visit Destinations</h3>
      <Test />
      <div className="testimonials-section">
  <h2 className='section-title'><i class="fa fa-quote-left" aria-hidden="true"></i> Testimonials</h2>
  <div className="testimonial">
    <div className="testimonial-content">
      <p className="quote">""TourBuddy makes exploring effortless, providing detailed maps and personalized recommendations, ensuring an incredible travel experience in every destination.""</p>
      <p className="author">- John Doe</p>
    </div>
  </div>
  <div className="testimonial">
    <div className="testimonial-content">
      <p className="quote">"Discover hidden gems and immerse yourself in local culture with TourBuddy's curated itineraries and audio guides, making every trip unforgettable."</p>
      <p className="author">- Jane Smith</p>
    </div>
  </div>
  <div className="testimonial">
    <div className="testimonial-content">
      <p className="quote">"With TourBuddy as your travel companion, explore new destinations confidently, with real-time updates and expertly crafted content at your fingertips."</p>
      <p className="author">- Jane Smith</p>
    </div>
  </div>
  </div>
      <section className="section recognitions">
        <h3 className="section-title"><i className="fa-solid fa-award"></i> Recognitions</h3>
        <div className="recognitions__container">
          {/* Add your recognitions here */}
          <div className="recognition__card">
            <img src="/media/Award1.webp" alt="Award 1" className="recognition__card-img" />
          </div>
          <div className="recognition__card">
            <img src="/media/Award2.webp" alt="Award 2" className="recognition__card-img" />
          </div>
          <div className="recognition__card">
            <img src="/media/Award3.webp" alt="Award 1" className="recognition__card-img" />
          </div>
        </div>
      </section>
      <FeatureIcons />
      <Chatbox />
      <Footer />
    </div>
  );
};

export default Homepage;


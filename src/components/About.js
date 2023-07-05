import React from 'react';
import './about.css';
//import './contact.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
        <header className="header" id="header">
      <Navbar />
    </header>
    {/* <div className="about-background">
    <img src='\images\watermark.jpg' alt="abc" />
     
    </div>  */}
      


    <div className="about-container">
    {/* <img src='/images/watermark.jpg' alt="abc" /> */}

    <div className="about-image">
     <img src='/images/aboutimage.png' alt="abc" />
     </div> 

      <h2 className="about-title">Tourbuddy</h2>
      
      
      
      <p className="about-description">
        Tourbuddy is your ultimate travel companion, dedicated to providing exceptional tourism experiences. 
        Whether you are an adventurous explorer or a leisure seeker, Tourbuddy offers a wide range of curated 
        tours and activities to suit your preferences. With our knowledgeable guides and carefully crafted itineraries, 
        we ensure that every journey with Tourbuddy is memorable and enjoyable.

        Tourbuddy is your ultimate travel companion, dedicated to providing exceptional tourism experiences. 
        Whether you are an adventurous explorer or a leisure seeker, Tourbuddy offers a wide range of curated 
        tours and activities to suit your preferences. With our knowledgeable guides and carefully crafted itineraries, 
        we ensure that every journey with Tourbuddy is memorable and enjoyable.

        Tourbuddy is your ultimate travel companion, dedicated to providing exceptional tourism experiences. 
        Whether you are an adventurous explorer or a leisure seeker, Tourbuddy offers a wide range of curated 
        tours and activities to suit your preferences. With our knowledgeable guides and carefully crafted itineraries, 
        we ensure that every journey with Tourbuddy is memorable and enjoyable.

      </p>
      <p className="about-description">
        Discover the hidden gems of different destinations, immerse yourself in the local culture, and create lifelong memories. 
        Our team of travel experts is committed to delivering personalized services and ensuring your safety and comfort throughout 
        your travel experience. Let Tourbuddy be your trusted companion in your next unforgettable adventure.

        Discover the hidden gems of different destinations, immerse yourself in the local culture, and create lifelong memories. 
        Our team of travel experts is committed to delivering personalized services and ensuring your safety and comfort throughout 
        your travel experience. Let Tourbuddy be your trusted companion in your next unforgettable adventure.

        Discover the hidden gems of different destinations, immerse yourself in the local culture, and create lifelong memories. 
        Our team of travel experts is committed to delivering personalized services and ensuring your safety and comfort throughout 
        your travel experience. Let Tourbuddy be your trusted companion in your next unforgettable adventure.

        Discover the hidden gems of different destinations, immerse yourself in the local culture, and create lifelong memories. 
        Our team of travel experts is committed to delivering personalized services and ensuring your safety and comfort throughout 
        your travel experience. Let Tourbuddy be your trusted companion in your next unforgettable adventure.
      </p>


    </div>
    </div>
    

  );
};

export default About;

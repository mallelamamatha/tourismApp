import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaHome, FaList, FaAddressBook } from 'react-icons/fa';
const Footer = () => {
  const phoneNumber = "+1 123-456-7890"; // Replace with your phone number
  const emailAddress = "c@tourbuddy.com"; // Replace with your email address
  const address = "Floor: 5, Fairfield by Marriott, Road No. 2, Hyderabad, Telangana 500032"; // Replace with your address

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 style={{ color: 'blue', fontSize: '20px', fontStyle: 'italic' }}>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/"><FaHome /> Home</a></li>
              <li><a href="/states"><FaList /> States</a></li>
              <li><a href="/contact"><FaAddressBook /> Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5 style={{ color: 'blue', fontSize: '20px' }}>Additional</h5>
            <ul className="footer-links">
              <li><a href="/explore-destination">Explore Destination</a></li>
              <li><a href="/plan-your-trip">Plan Your Trip</a></li>
              <li><a href="/customer-reviews-and-testimonials">Customer Reviews and Testimonials</a></li>
            </ul>
          </div>
          <div className="col">
            <h5 style={{ color: 'blue', fontSize: '20px', fontStyle: 'italic' }}>Subscribe</h5>
            <form className="footer-email-signup">
              <input type="email" placeholder="Enter your email...." className="email-input" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="col">
            <h5 style={{ color: 'blue', fontSize: '20px', fontStyle: 'italic' }}>Contact</h5>
            <ul className="footer-links">
              <li><a href={`tel:${phoneNumber}`}><FaPhone /> {phoneNumber}</a></li>
              <li><a href={`mailto:${emailAddress}`}><FaEnvelope /> {emailAddress}</a></li>
              <li><a href="#"><FaMapMarkerAlt /> {address}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="footer-links">
       
        <h5 style={{color:'blue'}}>Follow Us</h5>
  <li><a href="https://www.facebook.com"><FaFacebook /> Facebook</a></li>
  <li><a href="https://www.twitter.com"><FaTwitter /> Twitter</a></li>
  <li><a href="https://www.instagram.com"><FaInstagram /> Instagram</a></li>
  <li><a href="https://www.youtube.com"><FaYoutube /> YouTube</a></li>

</ul>

     
      <p className="social-media-community">Connect and join our social media community</p>
      <div>
        <div className="footer-bottom" style={{ marginTop: '20px', backgroundColor: 'lightgray', textAlign: 'center' }}>
          <p className="centered" style={{ margin: '0', padding: '10px' }}>&copy; {new Date().getFullYear()} TourBuddy.com. Developed By Challengers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

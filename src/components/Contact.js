import React from 'react';
import './Contact.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contactUS">
        <div className="contactUS-container">
          <div className="contact-image"></div>
          <div className="contact-form shadow-effect">
            <h1>Contact Us</h1>
            <h2>Add Questions about one of our tours? Looking for advice? Our customer service team is here to help.</h2>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="Mobile Number" placeholder="Your Mobile Number" required />
              <textarea name="message" rows='4' placeholder="Your Message" required />
              <button type="submit">Send Message</button>
            </form>
            {/* <div className="social-icons"> */}
              {/* Uncomment and replace the image sources with the actual social media icons */}
              {/* <img src='twitter.png' alt='facebook' />
              <img src='instagram.png' alt='insta' /> */}
              {/* <img src='https://w7.pngwing.com/pngs/367/789/png-transparent-social-media-youtube-facebook-f8-social-network-social-media-text-trademark-logo-thumbnail.png' alt=''/>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;

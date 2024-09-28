import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: ShoppingMart@gmail.com</p>
          <p>Phone: +999 999 9999</p>
        </div>

        <div className="social-media">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>

        <div className="subscription">
          <h3>Subscribe to our newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopping Mart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

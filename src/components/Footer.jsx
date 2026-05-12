import React, { useState } from 'react';
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (email) {
      setSubscribed(true);
      setEmail(""); // clear input
    }
  };

  return (
    <footer className="premium-footer">
      <div className='footer-container'>
        <div className='footer-box'>
          <h2>About Us</h2>
          <p>We provide quality products with comfort, style and trust. Shop with confidence and enjoy premium services.</p>
          <p>Ecoshop is a home of quality and home of affordable handbags.</p>
        </div>

        <div className='footer-box'>
          <h2>Contact Us</h2>
          <p>Email: info@ecoshop.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        <div className='footer-form'>
          <h2>Subscribe to our Newsletter</h2>
          {subscribed ? (
            <p className="text-success">✅ Thanks for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>

        <div className='footer-box'>
          <h2>Stay Connected</h2>
          <div className='social-icons'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p>Follow us on social media for the latest updates and offers.</p>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>Developed by Joy Charles &copy; 2023 Ecoshop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

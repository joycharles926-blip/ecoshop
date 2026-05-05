import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="premium-footer">
        <div className='footer-container'>
            <div className='footer-box'>
                <h2>About US</h2>
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
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className='footer-box'>
                <h2>Stay Connected</h2>
                <div className='social-icons'>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">X</a>
                    <a href="#">WhatsApp</a>
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
import { Link } from "react-router-dom";
import logoa from '../assests/Logoa.svg';
import {SocialIcon } from "react-social-icons";
function Footer() {
  return (
    <footer className="footer-nav">
       
        <div className="footer-logo">
        <li className="footer">
          <img
            src={logoa}
            alt="Little Lemon logo"/>
        </li>
        </div>
        <div className="footer-contact-links">
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
           
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>
      </div>
      <div className="footer-contact-address">
        <li>
          <h1>Contact</h1>
          <ul >
            <li>65,15th street Chicago</li>
            <li>291911</li>
              
          </ul>
        </li>
        </div>
        
     
      <div className="footer-scocial-media">
        <h1>Follow us on:</h1>
      <div>facebook<SocialIcon network="facebook"/></div>
      <div>instagram<SocialIcon network="instagram"/></div>
      <div>twitter<SocialIcon network="twitter"/></div>
      </div>
    
    </footer>
  )
}
  export default Footer;
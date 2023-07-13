import React from 'react' ;
import logo from '../assests/Logob.svg';
//import BookingForm  from "../components/BookingForm";
//import restimg from '../assests/restauranfood.jpg';
import { Link } from "react-router-dom";
<meta name="description" content="your text goes here"/>
function Navbar() {
  
  
 
return (
  <nav className="navbar">
    <nav className="nav-leftWrapper" >
      <img src={logo} alt="restaurant"/>
     
    </nav>
    <nav className="nav-rightWrapper">
      <ul className="navbar-menu">
      <li className="navbar-menuitem"> <Link to="/home"> Home</Link></li>
      <li className="navbar-menuitem"><Link to="/about"> About </Link></li>
      <li className="navbar-menuitem"><Link to="/menu"> Menu</Link></li>
      <li className="navbar-menuitem"><Link to="/reservations"> Reservations </Link></li>
      <li  className="navbar-menuitem"><Link to="/orderonline"> Order Online</Link></li>
      <li className="navbar-menuitem"><Link to="/login"> Login </Link></li>
      </ul>
      
    </nav>
  </nav>
);
}



export default Navbar;



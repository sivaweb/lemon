//import React, { useState } from 'react' ;
import { useState } from 'react';
import logo from '../assests/Logob.svg';
import { NavLink } from "react-router-dom";
function Navbar() {
const[menuOpen,setMenuOpen]=useState(false);
return (
  <>
  <div className="navbar">
    <nav className="nav-leftWrapper" >
      <img src={logo} alt="restaurant"/>
      <div className="menu" onClick={()=>{setMenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>

      </div>
    </nav>
    <nav className="nav-rightWrapper">
      <ul className={menuOpen ? "open":""}>
      <li className="navbar-menuitem">
         <NavLink to="/home"> Home</NavLink></li>
      <li className="navbar-menuitem">
        <NavLink  to="/about"> About </NavLink></li>
      <li className="navbar-menuitem">
        <NavLink  to="/menu"> Menu</NavLink></li>
      <li className="navbar-menuitem">
        <NavLink  to="/reservations"> Reservations </NavLink></li>
      <li  className="navbar-menuitem">
        <NavLink  to="/orderonline"> Order Online</NavLink></li>
      <li className="navbar-menuitem">
        <NavLink  to="/login"> Login </NavLink></li>
      </ul>
   </nav>

  </div>

 </> 
);
}
export default Navbar;



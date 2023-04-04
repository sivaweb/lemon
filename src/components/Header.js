import React from 'react' ;

import restimg from '../assests/restauranfood.jpg';
import logo from '../assests/Logo.svg';
<meta name="description" content="your text goes here"/>
function Header() {
  return (
  
 <nav> 
     <ul>
      <li><a href="/home">Homepage</a></li>        
      <li><a href="/about">About Us</a></li>
      <li><a href="/blog">Blog</a></li>  
      </ul>
   <a href="/book" role="button">Book a table</a>

   <img className='restimg' src={restimg} alt="Logo" />;
   <img className='logo' src={logo} alt="Logo" />;
</nav>



  );
}

export default Header



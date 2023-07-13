import React from 'react' ;
import restimg from '../assests/restauranfood.jpg';
import { Link } from "react-router-dom";
<meta name="description" content="your text goes here"/>
function CallToAction() {
 return (
  <div className='call-to-A'>
     <div className='call-left'>
       <h1>Little Lemon</h1>
       <h2>Chicago</h2>
       <p>We are family owned Mediterranean restaurant,focused on traditional recepies
        served with modern twist </p>
        <div>
      <button className='call-btn'>
      <Link to="/reservations">Reserve a table</Link></button>
    </div>
    </div>
  <div className='call-right'>
    <img src={restimg} alt="restaurant"/>
  </div>
    </div>

 );
}



export default CallToAction;



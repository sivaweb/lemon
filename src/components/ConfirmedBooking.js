import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import saladg from '../assests/greek salad.jpg'; 
import {CalendarIcon ,TimeIcon} from "@chakra-ui/icons"
import {Card,CardContent} from '@material-ui/core';

  function ConfirmedBooking()
  {
   const location=useLocation();
  //console.log(location)
    if(location.state == null){
        return (
          <div>
          <div className='order-container' >
            <div className='order-confirm' >
                 <div>
                  <h1> Little Lemon </h1>
                <p > Healthy meal delivered to your door, order now</p>
             <Link align="center" to="/menu"><button >Order Now</button></Link>
            </div>
                <div>
                <img src={saladg} alt="restaurant" />
                 </div>
                 </div>
             </div>
         </div>
        )
       }
      return (
       <div className='booking-confirm-msg'>
               <Card  className='book-card'>
                     <CardContent className="card_content_spls" >
                              <div >
                              <p>Your Booking is confirmed <span >{location.state.firstName}  {location.state.lastName}</span> </p>

                              <p> On <CalendarIcon/> <span>  {location.state.date}</span>  time <TimeIcon/><span > {location.state.time}</span> </p>

                              <p>Have wonderful time on <span >{location.state.occasion}</span>  with your loved ones</p>

                             <p>Thank you !!!</p>
                           <button> <Link to="/home">Confirm Now</Link></button>
                              </div>
                                
                      </CardContent>
              </Card>


      </div>  
      )
  }
export default ConfirmedBooking;

import {Card,CardContent,CardMedia,Button} from '@material-ui/core';
import greeksalad from '../assests/greek salad.jpg';

import bruchettaS from '../assests/bruchetta.svg';
 import dessertLemon from '../assests/lemon dessert.jpg';

function Specials() {
  return (
    <div className='week-spls'>
    <h1>This week specials !</h1>
    <div className='specials'>
         <Card  className='spls-card'>
                            <CardMedia className='spls-img' ><img src= {greeksalad} alt ="pic"/></CardMedia>
                                <CardContent className="card_content_spls" >
                              <div className='price'>
                                  <div>
                                <h2>GreekSalad</h2>
                               </div>
                               <div>
                              <span>$6.99</span>
                               </div>
                                </div>
                                <div>
                                   <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                                  garnished with crunchy garlic and rosemary croutons. </p>
                                 <Button>Order a delivery</Button>
                                 </div>
                              </CardContent>
                        </Card>

                   <Card className='spls-card'>
                            <CardMedia className='spls-img' ><img src = {bruchettaS} alt ="pic"/></CardMedia>
                                 <CardContent className="card_content_spls" >
                                <div className='price'>
                                  <div>
                                <h2>Bruchettas</h2>
                               </div>
                               <div>
                              <span>$12.99</span>
                               </div>
                                </div>
                                <div>
                                  <p>Our Bruschetta is made from grilled bread that has been smeared with 
                                  garlic and seasoned with salt and olive oil.garlic and seasoned with salt and olive oil </p>
                                 <Button>Order a delivery</Button>
                                 </div>
                              </CardContent>
                        </Card>

                  <Card  className='spls-card' >
                            <CardMedia className='spls-img' ><img src = {dessertLemon} alt ="pic"/></CardMedia>
                             <CardContent className="card_content_spls" >
                              <div className='price'>
                                  <div>
                                <h2>LemonDessert</h2>
                               </div>
                               <div>
                              <span>$5.00</span>
                               </div>
                                </div>
                                <div>
                                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and 
                                      is as authentic as can be imagined.</p>
                                 <Button>Order a delivery</Button>
                                 </div>
                              </CardContent>
                        </Card>
    </div>
  </div>
  );
}

export default Specials;
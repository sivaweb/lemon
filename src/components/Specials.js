// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import {Box,Card,CardContent,CardMedia,Button} from '@material-ui/core';
import greeksalad from '../assests/greek salad.jpg';

import bruchettaS from '../assests/bruchetta.svg';
 import dessertLemon from '../assests/lemon dessert.jpg';

function Specials() {
  return (
    <div className='week-spls'>
    <h1>This week specials !</h1>
    <div className='specials'>
    
      <Box>
      <Card className='spls-card'>
                            <CardMedia className='spls-img' ><img src= {greeksalad} alt ="pic"/></CardMedia>
                                <CardContent className="card_content_spls" >
                              <div className='price'>
                                  <div>
                                <strong>GreekSalad</strong>
                               </div>
                               <div>
                              <span>$6.99</span>
                               </div>
                                </div>
                                   <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                                  garnished with crunchy garlic and rosemary croutons. </p>
                                 <Button>Order a delivery</Button>
                              </CardContent>
                        </Card>

             </Box>
             <Box>
      <Card className='spls-card'>
                            <CardMedia className='spls-img' ><img src = {bruchettaS} alt ="pic"/></CardMedia>
                                 <CardContent className="card_content_spls" >
                                <div className='price'>
                                  <div>
                                <strong>Bruchettas</strong>
                               </div>
                               <div>
                              <span>$12.99</span>
                               </div>
                                </div>
                                  <p>Our Bruschetta is made from grilled bread that has been smeared with 
                                  garlic and seasoned with salt and olive oil. </p>
                                 <Button>Order a delivery</Button>
                              </CardContent>
                        </Card>

             </Box>
             <Box>
      <Card className='spls-card'>
                            <CardMedia className='spls-img' ><img src = {dessertLemon} alt ="pic"/></CardMedia>
                               
                              <CardContent className="card_content_spls" >
                              <div className='price'>
                                  <div>
                                <strong>LemonDessert</strong>
                               </div>
                               <div>
                              <span>$ 5.00</span>
                               </div>
                                </div>
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                                 <Button>Order a delivery</Button>
                              </CardContent>
                        </Card>

             </Box>
  </div>
  </div>
  );
}

export default Specials;
import {Box,Card,CardContent,CardMedia,Button} from '@material-ui/core';

 import { Link } from "react-router-dom";
 import dessert from'../assests/lemon dessert.jpg';
 import drink from'../assests/lemondrink.jpg';
 import bruchetta from'../assests/bruchetta.svg';
 //import greeksalad from'../assests/greek salad.jpg';
function Menu() {
  return (
           <div className='menu_contaniner' >
                       <div className='rest-menu-hero'>
                            <div>
                                 <h1>Little Lemon</h1>
                                 <p >We are family owned Mediterranean restaurant,focused on traditional recepie served with modern twist </p>
                                <Link align="center" to="/login"><button className='delivery-btn' >Login to order</button></Link>
                             </div>
                         </div>    
            
            <div className='rest-menu-meal'>
            <div className='rest-menu-main'>
              <Box>
                <Card className='menu-card'>
                <CardMedia className='menu-img' ><img src = {bruchetta} alt ="pic"/></CardMedia>
                      <h1>Main</h1>
                       <CardContent className="card_content_main" >
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
                          <div className='price'>
                            <div>
                              <strong>Tacos</strong>
                            </div>
                            <div>
                             <span>$17.99</span>
                            </div>
                          </div>
                              <p>Oven Baked Tacos are a quick and easy dinner. Tacos in a crisp shell that doesn't fall apart when you bite into it. </p>
                              <Button>Order a delivery</Button>
                            </CardContent>
                        </Card>

             </Box>
             </div>
             <div className='rest-menu-sub-dessert'  >
             <Box>
               <Card className='menu-card' >
               <CardMedia className='menu-img' ><img src = {dessert} alt ="pic"/></CardMedia>
                               
                            <h1>Dessert</h1>
                              <CardContent className="card_content_dessert"  >
                                   <div className='price'>
                                  <div>
                                <strong>Cheese Cake</strong>
                               </div>
                               <div>
                              <span>$ 8.00</span>
                               </div>
                                </div>
                                <p> Yummy cheesecake, from creamy, smooth chocolate to light and fresh strawberry</p>
                              
  
                              <div className='price'>
                                  <div>
                                <strong>LemonDessert</strong>
                               </div>
                               <div>
                              <span>$ 5.00</span>
                               </div>
                                </div>
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic .</p>
                                 <Button>Order a delivery</Button>
                              </CardContent>
                        </Card>

             </Box>
             </div>
             <div className='rest-menu-sub-drink'>
             <Box>
              <Card className='menu-card'>
              <CardMedia className='menu-img' ><img src = {drink} alt ="pic"/></CardMedia>
                 <h1>Drinks</h1>
                
                <CardContent className="card_content_drink" >
                <div className='hot_cold_drink' >    
                    <div className='cold_drink'>
                      <h2>Cold drinks</h2>
                          <div className='price'>
                             <p>Apple juice</p>
                             <div>
                              <span>$ 5.00</span>
                             </div>
                           </div>
                           <div className='price'>
                              <p>Lemon juice</p>
                               <div>
                              <span>$ 3.00</span>
                              </div>
                            </div>
                            <div className='price'>
                            
                                <p>Orange juice</p>
                              <div>
                              <span>$ 5.00</span>
                              </div>
                            </div>
                      </div>
                       <div  className='hot_drink'>
                            <h2>Hot drinks</h2>
                              <div className='price'>
                                <div>
                                 <p>Coffee</p>
                               </div>
                               <div>
                              <span>$ 5.00</span>
                              </div>
                              </div>
                                <div className='price'>
                                <div>
                                <p>Tea</p>
                               </div>
                               <div>
                              <span>$ 3.00</span>
                               </div>
                                </div>
                                <div className='price'>
                                <div>
                                <p>Hot chocolate</p>
                               </div>
                               <div>
                              <span>$ 5.00</span>
                              </div>
                               </div>
                            </div>   
                             </div >
                                <Button >Order a delivery</Button>
                               </CardContent>
                         </Card>

             </Box>
             </div>         
             </div>
             </div>
 

  );
}

export default Menu;
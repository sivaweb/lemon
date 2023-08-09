
import restaurantImg from '../assests/restaurant.jpg';
import { EmailIcon, PhoneIcon} from "@chakra-ui/icons"
function About(){
    return(
   <div className="about-container">
          <div className="about-info" >
               <div>
               <h1>Little Lemon</h1>
                <p> 
                 The focus is on fresh products, pronounced flavours and simple preparation.
                  Essentially, Mediterranean cuisine is made up of plant food and
                  minimally processed staples where herbs and spices are essential ingredients. 
                  Usually, there's lots of fruit, veggies, legumes, grains, olive oil and aromatic herbs
                </p>
              </div>
           
               <img className="restu-img"src={restaurantImg} alt="restaurant"/>
              
            </div>
                
             <div className='about-address' >
               <div>
                <h2 >Address</h2>
                  <ul>
                    <li><strong>Contact:</strong><br></br>
                     65,15th street Chicago<br></br>
                     291911
                     </li>
                     <li> <EmailIcon/> Email : littlelemon@mail.com</li>
                      <li><PhoneIcon/>phone number : ++1 312-888-999</li>
                    </ul>
                 </div>
                 <div >
                  <ul>
                   <li> <strong>Operating hours</strong></li> 

                   <li>Monday - Friday:  10:00am - 9:00pm</li> 
              

                   <li>Saturday & Sunday : 8:00am - 10:00 pm </li> 

                   </ul>
                 </div>
                 
                    
               
                  
                </div>
          
   </div>
    )
}
export default About
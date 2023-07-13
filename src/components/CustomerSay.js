import React from "react";
import { Avatar } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Cathy from '../assests/Cathy.jpg';
import Mark from '../assests/Mark.jpg';
import Anna from '../assests/Anna.jpg';
import Joey from '../assests/Joey.jpg';

function CustomerSay()  {
  return (
    <div  className="testimonial" >
      <h1 >TESTIMONIALS</h1>
      <div style={{height:"30rem",display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"2rem"}}>
        
           <div style={{display:"flex",height:"20rem",width:"120rem",gap:"10rem",padding:"3rem"} }>

                       <Card className='customer-review'>
                            <Avatar
                                className='customer-avatar'
                                alt="Anna pic"
                                src={Anna} />
                              <CardContent className="card_content"style={{color:"black"}} >
                                <strong>Anna</strong>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                 Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                              </CardContent>
                        </Card>

                        <Card className='customer-review'>
                            <Avatar
                                className='customer-avatar'
                                alt="Mark pic"
                                src={Mark} 
                              />
                            <CardContent className="card_content"style={{color:"black"}}>
                                <strong>Mark</strong>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
                                     repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                            </CardContent>
                        </Card>

                        <Card className='customer-review'>
                            <Avatar
                                className='customer-avatar'
                                alt="Joey pic"
                                src={Joey} 
                              
                            />
                            
                            <CardContent className="card_content"style={{color:"black"}}>
                                <strong>Joey</strong>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
                                    repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                            </CardContent>
                        </Card>
                        <Card className='customer-review'>
                            <Avatar
                                className='customer-avatar'
                                alt="Cathy pic"
                                src={Cathy} 
                              
                            />
                             <CardContent className="card_content"style={{color:"black"}}>
                                <strong>Cathy</strong>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
                            </CardContent>
                        </Card>
          </div>
    
    </div>
    </div>
  );
};
export default CustomerSay;

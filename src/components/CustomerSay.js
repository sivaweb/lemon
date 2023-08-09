import React from "react";
import { Avatar } from "@material-ui/core";
import {Card,CardContent} from '@material-ui/core';

import Cathy from '../assests/Cathy.jpg';
import Mark from '../assests/Mark.jpg';
import Anna from '../assests/Anna.jpg';
import Joey from '../assests/Joey.jpg';

function CustomerSay()  {
  return (
    <div  className="testimonial-container" >
      <h1 >Testimonials</h1>
      <div className="testmonial"  >
                         <div>
                        <Card className='customer-review'>
                        <Avatar
                                className='customer-avatar'style={{width:"5rem",height:"5rem"}}
                                alt="Anna pic"
                                src={Anna} />
                              <CardContent className="card_content"style={{color:"#333",padding:"1rem"}} >
                                                              <strong>Anna</strong>
                                <p> Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam. </p>
                              </CardContent>
                        </Card>
                        </div>
                        <div>

                        <Card className='customer-review'>
                        <Avatar
                                className='customer-avatar'style={{width:"5rem",height:"5rem"}}
                                alt="Mark pic"
                                src={Mark} />
                            <CardContent className="card_content"style={{color:"#333",padding:"1rem"}}>
                                <strong>Mark</strong>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam.</p>
                            </CardContent>
                        </Card>
                        </div>
                         <div>
                        <Card className='customer-review'>
                            <Avatar
                                className='customer-avatar'style={{width:"5rem",height:"5rem"}}
                                alt="Joey pic"
                                src={Joey} />
                                <CardContent className="card_content"style={{color:"#333",padding:"1rem"}}>
                                <strong>Joey</strong>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam.</p>
                                </CardContent>
                        </Card>
                        </div>

                        <div>
                        <Card className='customer-review'>
                            <Avatar
                                className='customer-avatar'style={{width:"5rem",height:"5rem"}}
                                alt="Cathy pic"
                                src={Cathy}/>
                             <CardContent className="card_content"style={{color:"#333",padding:"1rem"}}>
                                <strong>Cathy</strong>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam.</p>
                            </CardContent>
                        </Card>
                        </div>
           </div>
        </div>
  );
};
export default CustomerSay;

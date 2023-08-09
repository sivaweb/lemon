
import React, { useState } from "react";
import restpic from '../assests/MarioAdrianA.jpg';
import {useNavigate} from "react-router-dom";
import { submitAPI } from "../BookingAPI";
import {Card,CardContent} from '@material-ui/core';

  function BookingForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [guest, setGuest] = useState({value:"",isTouched: false}); 
    const [occasion, setOccasion] = useState("None");    
    const [date, setSelectDate] = useState("");    
    const [time, setSelectTime] = useState("");

     const navigate = useNavigate();
     const GuestErrorMessage = () => { 
       return ( 
         <p className="FieldError">Guest must not be more than 50</p> 
         ); 
       }

     const clearForm = (e) => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setGuest("");
      setOccasion("");
      setSelectTime("");
    }
//validation
    const getIsFormValid = () => { 
         return ( 
     guest.value < 50 && occasion!=="None"
      ); 
    }; 
  //navigate to confirmation page
   const submitForm = async (formData) => {
       if (submitAPI(formData)===true){
         navigate('/orderonline',{replace:true,state:{firstName,lastName,occasion,time,date}});
          console.log(formData)
    }else {
           console.log(`form submission failed with status`);
        }
    }

   const handleSubmit =async(e)=>{
     e.preventDefault();
       const formData = {
            firstName:firstName,
            lastName:lastName ,
            email:email,
            guest:guest.value,
            time:time,
            date:date,
            occasion:occasion
          }
          //console.log(formData);
        submitForm(formData);
        alert(`Confirm your resrvation  Name: ${firstName}${lastName},email: ${email}, Number of guest${guest.value} ,on${date},${time},${occasion}`);
        getIsFormValid();
        clearForm();
      };

      return ( 
        <div className="form-container">
             <div className="form-reser-info">
            <div>
              <h1>Reserve a table</h1>
              <p> "Welcome to our Little Lemon restaurant. You will find happiness and food here!" </p>
            </div>
            <img src={restpic} alt="restaurant"/>
            </div>
           
           <div className="form-reserv"> 
           
             <Card className="res-card">
             <CardContent className="res-c">
             <form className="reservation-form" onSubmit={handleSubmit}>
               <div>
              
                 <h1>Make a reservation </h1>
                  <label htmlFor="firstName" >FirstName</label> <br></br>
                  <input
                  className="name-form"type="text" id="firstName"placeholder="FirstName" required minLength={2}
                  maxLength={50}value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
               </div>
  
               <div>
                <label htmlFor="lastName">LastName</label> <br></br>
                <input className="name-form"type="text" id="lastName" placeholder="LastName"required minLength={5} maxLength={50}
                 value={lastName} onChange={(e) => setLastName(e.target.value)}/>
               </div>
  
              <div>
               <label htmlFor="email">Email</label> <br></br>
               <input className="name-form" type="email" id="email" placeholder="Email" value={email} required minLength={4} maxLength={50}
               onChange={(e) => setEmail(e.target.value)}/>
              </div>
       
             <div>
              <label htmlFor="guest">Guest</label> <br></br>
              <input  className="name-form" value={guest.value} id="guest" placeholder="guest must be less than 50"
              onChange={(e) => {setGuest({...guest,value: e.target.value} );}}
              onBlur={() => {setGuest({ ...guest, isTouched: true }); }}/>
              {guest.isTouched && guest.value>50 ? ( <GuestErrorMessage /> ) : null}  
             </div> 
            
             <div>
              <label htmlFor="date">Select Date</label> <br></br>
             <input className="name-form" type="date" id="date" required
             onChange={(e)=>setSelectDate(e.target.value)}/>
             </div>

            <div>
             <label htmlFor="time">Select Time</label> <br></br>
             <select id="time" value={time} onChange={(e) => setSelectTime( e.target.value)} className="name-form" required >
             {props.initializeTimes}
             </select>
            </div>

            <div>
             <label htmlFor="occasion">Occasion</label> <br></br>
             <select className="name-form" id="occasion" type="text" value={occasion} onChange={(e) => setOccasion( e.target.value)}>
              <option>None</option>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Other</option>
             </select>
            </div>
            <div>
            <button className="form-btn"type="submit" disabled={!getIsFormValid()} >Book Now</button>  
          
            </div>
         
         </form>
        </CardContent>
         </Card>
        
         </div>
       
       </div>
      
    );

  }
 export default BookingForm;  
 


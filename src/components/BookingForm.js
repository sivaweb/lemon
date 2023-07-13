
import React, { useState } from "react";
//import {  useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
  function BookingForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");    
    const [selectTime, setSelectTime] = useState(props.availableTimes.map((times,index) => <option key={index}>{times}</option>));

    function handleDateChange(e) {
      var stringify = e.target.value;
      const date = new Date(stringify);
      props.updateTimes(date);
     setSelectTime(props.availableTimes.map((times,index) => <option key={index}>{times}</option>));
     alert(`set${date}`)
      console.log("time",{setSelectTime})
        }
    //  const clearForm = (e) => {
    //   setFirstName("");
    //   setLastName("");
    //   setEmail("");
    //   setOccasion("");
    //   setSelectTime("");
    // }
   const handleSubmit =async(e)=>{
     e.preventDefault();
       const formData = {
            first_Name:firstName ,
            last_Name:lastName ,
            email:email ,
            guest:guest,
          }
          console.log(formData);
        alert(`Reservation is success! ${firstName}${lastName}, ${email}, ${guest} `);
      // clearForm();
      };
     
     return (  
      <form className="reservation-form"   onSubmit={handleSubmit}>
        <div>
      
          <label htmlFor="firstName">FirstName</label> <br></br>
          <input
            type="text"
            id="firstName"
            placeholder="FirstName"
            required
            minLength={2}
            maxLength={50}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </div>
  
        <div>
          <label htmlFor="lastName">LastName</label> <br></br>
          <input
            type="text"
            id="lastName"
            placeholder="LastName"
            minLength={5}
            maxLength={50}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </div>
  
        <div>
          <label htmlFor="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            required
            minLength={4}
            maxLength={50}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
         <div>
          <label htmlFor="guest">Number of Guest</label> <br></br>
          <input
            type="number"
            id="guest"
            placeholder="Number of Guest"
            value={guest}
            required
            min={1}
            max={50}
            onChange={(e) => setGuest(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="date">Select Date</label> <br></br>
          <input
            type="date"
            id="date"
            required
            onChange={handleDateChange}></input>
          </div>

          <div>
          <label htmlFor="time">Select Time</label> <br></br>
          <select id="times"  required >
            {selectTime}
          </select>
        </div>
         <div>
          <label htmlFor="occasion">Occasion</label> <br></br>
          <select
          // data-testid="occasion"
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Other</option>
          </select>
        </div>
         <div>
           <p>
              Your have reservation is successful,sigin in 
              </p>
             <button type="submit">Book
              {/* <Link className="redirect-button" 
             to="/orderonline">Book</Link> */}
           </button>  
         </div>
      </form>
    );
  }
export default BookingForm;  

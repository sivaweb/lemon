import React from 'react' ;
import BookingForm from "./BookingForm";
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer,useEffect } from "react";
import { fetchAPI, submitAPI } from "../BookingAPI.js";
import {useNavigate} from "react-router-dom";
export default function BookingPage() {
 const navigate =useNavigate();
  function updateTimes(date) {
    return fetchAPI(date);
  }
 useEffect(()=>{console.log("changed",updateTimes)},[])
  const initializeTimes = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
const submitForm=(formData)=>{
    if (submitAPI(formData)===true){
      navigate("/home");
    }
  
}
  return (
    <>
      
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
    </>
  );
}
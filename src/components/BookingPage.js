import React from 'react' ;
import BookingForm from "./BookingForm";
import { useReducer} from "react";
import { fetchAPI} from "../BookingAPI.js";

export default function BookingPage() {
  function updateTimes(date) {
      return fetchAPI(date)
  }
  const initializeTimes =fetchAPI(new Date() );
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
   <BookingForm availableTimes={availableTimes} initializeTimes={(availableTimes.map(time => <option>{time}</option>))} updateTimes={dispatch} />
     </>
  );
}
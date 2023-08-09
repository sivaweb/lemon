import {  Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BookingPage from "./components/BookingPage";
import BookingForm from "./components/BookingForm";
import About from "./pages/About";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import ConfirmedBooking from "./components/ConfirmedBooking";


function App(){
  return(
    <>
    <div>
   <Navbar/>
    <Routes> 
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/home" element={<HomePage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/login"element={<Login/>}></Route>
    <Route path="/Menu"element={<Menu/>}></Route>
    <Route path="/orderonline"element={<ConfirmedBooking/>}></Route>
    <Route path="/reservations"element={<BookingPage/>}></Route>
    <Route path="/reservations"element={<BookingForm/>}></Route>
    </Routes>
<Footer/>
</div>
</>
  )
}
export default App;
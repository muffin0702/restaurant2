import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
   <div className="navbar">
     <a  href="#home" className="navbara">Home</a>

     <a href="#aboutus" className="navbara">About us</a>

     <a href="#menu" className="navbara">Menu</a>

     <a href="#footer" className="navbara">Contact Us</a>

     <a className="navbara" href="https://airrsv.net/reservation-itdcanada/calendar">Reservation</a>
   </div>
  );
}

export default NavBar;
// import { Navbar, Nav } from "react-bootstrap";
import {NavLink } from "react-router-dom";
// import react from "react-router-dom";

// import "./style.css";

function Header() {
  return (
    <div>
      <ul className="navbar">
         <li><NavLink
        style={({isActive})=>{return {backgroundColor: isActive ? "#e38528" : ""}}} 
        className="nav-bar-link" to="/">Home</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return {backgroundColor: isActive ? "#e38528" : ""}}} 
        className="nav-bar-link" to="/about">About</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return {backgroundColor: isActive ? "#e38528" : ""}}} 
        className="nav-bar-link" to="/services">Services</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return {backgroundColor: isActive ? "#e38528" : ""}}} 
        className="nav-bar-link" to="/experience">Experience</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return {backgroundColor: isActive ? "#e38528" : ""}}} 
        className="nav-bar-link" to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return {backgroundColor: isActive ? "#e38528" : ""}}} 
        className="nav-bar-link" to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
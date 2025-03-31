import React, { useState } from 'react'
import "./Navbar.css"
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const[isOpen,setisOpen] =useState(false);
  const toggleMenu = ()=>{
    setisOpen(!isOpen);
  };
  return (
    
    <div className='navbar'>
      <div className='title'><h1>Leave counting</h1></div>
      {/*Navbar Title*/}
      <ul className={isOpen ?"navbar-list active":"navbar-list"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="icon" onClick={toggleMenu}>
      <FaBars />
      </div>
    </div>
  )
}

export default Navbar


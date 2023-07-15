import React from 'react'
import "./navbar.css"
import { HiSquares2X2,HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { IoHelpCircleSharp } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <ul className='part1'>
          <li  className='  menu2'><a className='logo1' href=""><HiSquares2X2/></a></li > 
          <li  className='menu1'><a href="">logo2</a></li > 
          <li  className='menu1 projects'><a href="">Projects</a></li > 
          <li  className='menu1'><a href="">Filters</a></li > 
          <li  className='menu1'><a href="">Dashboard</a></li > 
          <li  className='menu1 dropdown'><a href=" ">Apps</a></li>
           
          <li><button className='button-create'>Create</button></li > 
        
       </ul>
      <ul className='part2'>

      <li><input className="search" type="text" placeholder='Search'></input></li > 
      <li  className='  menu2'><a className='logo1' href=""><IoHelpCircleSharp/></a></li > 
      <li  className='  menu2'><a className='logo1' href=""><HiMiniArrowRightOnRectangle/></a></li > 
      
      </ul>
    
    </nav>
    </>
  )
}
export default Navbar;

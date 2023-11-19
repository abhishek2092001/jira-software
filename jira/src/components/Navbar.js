import React, { useState } from 'react'
import "./navbar.css"
import Navcomponent from './Navcomponent';
import { Link } from 'react-router-dom'
import { HiSquares2X2, HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { IoHelpCircleSharp } from "react-icons/io5";

import { FiChevronDown } from "react-icons/fi";
const Navbar = () => {
  const [openprofile, setopenprofile] = useState(true)
  return (
    <>
      <nav className='nav'>
        <ul className='part1'>
          <li className='  menu2'><a className='logo1 a1' href="#"><HiSquares2X2/></a></li >
          <li className='menu1'><a className="a1" href="#"><img className='jira' src='https://www.automation-consultants.com/wp-content/uploads/2018/04/Jira-Software@2x-blue.png' alt='logo'/></a></li >
          <li className='resp' onClick={() => setopenprofile((prev) => !prev)}>menu<FiChevronDown /></li>
          <li>
            {
              openprofile && <Navcomponent />

            }
          </li>

          <li><button className='button-create' > <Link className='abutton' to="/Create2">Create</Link></button></li >


        </ul>
        <ul className='part2'>

          <li><input className="search" type="text" placeholder='Search'></input></li >
          <li className='  menu2'><a className='logo1 a1' href="#"><IoHelpCircleSharp /></a></li >
          <li className='  menu2'><a className='logo1 a1' href="#"><HiMiniArrowRightOnRectangle /></a></li >

        </ul>

      </nav>
    </>
  )
}
export default Navbar;

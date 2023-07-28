import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import Appcomponent from './Appcomponent';
import Createdash from './Createdash';
// import { IoHelpCircleSharp } from "react-icons/io5";
const Navcomponent = () => {
  const [open, setopen] = useState(false)
  const [dash, setdash] = useState(false)
  return (
    <div>
      <ul className='cont'>

        <li className='menu1 projects resp1'><Link className='a1' to="/Project">Projects</Link></li >
        <li className='menu1 resp1'><Link className='a1' to="/Filters">Filters</Link></li >
        <li className='menu1 resp1 a1' onClick={() => setdash((prev) => !prev)}>Dashboard<FiChevronDown /></li>
        {dash && <Createdash />}
        <li className='menu1 dropdown101 resp1 a1' onClick={() => setopen((prev) => !prev)}>Apps<FiChevronDown /></li>
        {open && <Appcomponent />}
      </ul>
    </div>
  )
}

export default Navcomponent

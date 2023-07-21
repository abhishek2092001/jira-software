import React from 'react';
import { useState } from 'react';
import './Headertable.css'
import Dashboardtable from "./Dashboardtable";
import { FaSearch} from "react-icons/fa";
const Headertable = () => {
    const Owner=['Owner','owner2','owner3']
    const[selectedState,setSelectedState] = useState('');
    console.log(selectedState)
    const Project=['Project','Project2','Project3']
    const[selectedProject,setSelectedProject] = useState('');
    console.log(selectedProject)
    const Group=['Group','Group2','group33']
    const[selectedGroup,setSelectedGroup] = useState('');
    console.log(selectedGroup)
  return (
    <>
      <h2 className='head'> Dashboards</h2>
      <div className="row">
      <div className='input-wrapper'> <input placeholder=''/> <FaSearch id="bar"/>
      </div>
      
       <select className="dropdown" onChange={(e) => { setSelectedState(e.target.value)}}>
            {
                Owner.map(state => {
                    return<option>{state}</option>
                })
            }

        </select>
        <select className="dropdown" onChange={(e) => { setSelectedProject(e.target.value)}}> <input placeholder='owner'/>
            {
                Project.map(state => {
                    return<option>{state}</option>
                })
            }

        </select>
        <select className="dropdown" onChange={(e) => { setSelectedState(e.target.value)}}>
            {
                Group.map(state => {
                    return<option>{state}</option>
                })
            }

        </select>
      </div>
      
     <div><Dashboardtable/></div> 

    </>
    
     
  )
}

export default Headertable;

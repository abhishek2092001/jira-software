import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Createdash = () => {
  return (
    <>
      <div className='createdash'>
        <div className="button1"><Link className="a3" to="/navg/vew-all-projects">View all Dashboards</Link></div>
        <div className="button1"><Link className="a3" to="/navg/Create-Dashboards">Create Dashboards</Link></div>

      </div>
    </>
  )
}

export default Createdash;

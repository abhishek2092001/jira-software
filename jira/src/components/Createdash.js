import React from 'react'
import {Link} from 'react-router-dom'
const Createdash = () => {
  return (
    <>
    <div className='createdash'>
      <div className="button1"><Link className="a3" to="/vew-all-projects">View all Dashboards</Link></div>
      <div className="button1"><Link className="a3" to="/Create-Dashboards">Create Dashboards</Link></div>
      
    </div>
    </>
  )
}

export default Createdash;
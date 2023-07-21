import React from 'react'
import './dashboardtable.css'
const Dashboardtable = () => {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th className="heading">Name</th>
          <th className="heading">Owner</th>
          <th className="heading" >Viewers</th>
          <th className="heading">Editors</th>
          <th className="heading">Starred By</th>
        </tr>
        <tr>
       <td>   <hr></hr> </td>
       <td>   <hr></hr> </td>
       <td>   <hr></hr> </td>
       <td>   <hr></hr> </td>
       <td>   <hr></hr> </td>
       
        </tr>
      </thead>

      
    </table>
  )
}

export default Dashboardtable;

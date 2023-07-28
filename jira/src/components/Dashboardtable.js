import React, { useEffect, useState } from 'react'
import './dashboardtable.css'
const Dashboardtable = () => {
  const [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch("http://localhost:3050/data").then((result)=>{
  //     return result.json()}).then((resp)=>{
  //       // console.warn(resp)
  //       setData(resp);
  //     })
    
  // },[])
  //console.warn(data)
  return (
    <table className="Table">
      <thead>
        <tr>
          <th className="heading">NAME</th>
          <th className="heading">OWNER</th>
          <th className="heading" >VIEWERS</th>
          <th className="heading">EDITORS</th>
          <th className="heading">STARRED BY</th>
        </tr>
        <tr>
          <td>   <hr></hr></td>
          <td>   <hr></hr> </td>
          <td>   <hr></hr> </td>
          <td>   <hr></hr> </td>
          <td>   <hr></hr> </td>

        </tr>
      </thead>
      <tbody>
        {
          data.map((item, i) =>
            <tr key={i}>
              <td className="body"><h3>{item.Name}</h3></td>
              <td className="body"><h3>{item.owner}</h3></td>
              <td className="body"><h2>{item.viewers}</h2></td>
              <td className="body"><h2>{item.editors}</h2></td>
              <td className="body"><h2>{item.starred}</h2></td>
            </tr>
          )
        }
      </tbody>



    </table>
  )
}

export default Dashboardtable;

import React,{useEffect,useState} from 'react'
import './dashboardtable.css'
const Dashboardtable = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3050/data").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setData(resp)
      })
    })
  },[])
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
          data.map((item,i)=>
            <tr key={i}>
              <td className="body">{item.Name}</td>
             <td className="body">{item.owner}</td>
             <td className="body">{item.viewers}</td>
             <td className="body">{item.editors}</td>
              <td className="body">{item.starred}</td>
          </tr>
          )
        }
      </tbody>


      
    </table>
  )
}

export default Dashboardtable;

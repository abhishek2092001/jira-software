import React from 'react'
import "./navbar.css"
const Appcomponent = () => {
  return (
   <>
   <div className='container'>
       <div className='cont1'>
        <div className='cont-1'>RECOMMENDED FOR YOUR TEAM</div>
        <div className='cont-2'>Ship faster with marketplace apps that integrate your team’s tools with Jira.</div>
       </div>
       <div className='Slack'><a className='a2' href="#">Slack</a></div>
       <div className='Powerbi'><a className='a2' href="#">Power Bi(Analytics)</a></div>
       <div className='easyagile'> <a className='a2' href="#">Easy Agile TeamRhythm</a></div>
       <div className='explore'><a className='a2' href="#">Explore more apps</a></div>
    </div>
   </>
  )
}

export default Appcomponent;
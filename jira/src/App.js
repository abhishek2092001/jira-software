
import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Project from './components/Project'
import IssueForm from './components/Create2';
import Filters from './components/Filters';
import Headertable from './components/Headertable';
import Dashboard1 from "./components/Dashboard1";
import Login  from './components/Login';
import Register  from './components/Register';
import {Routes, Route} from "react-router-dom";

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);

  return (
    <>
   
    <Routes>
    <Route path='/navg' element={<Navbar/> }/>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Filters'element={<Filters/>}/>
      <Route path='/Create-Dashboards'element={<Dashboard1/>}/>
      <Route path='/Create2'element={<IssueForm/>}/>
      <Route path='/vew-all-projects'element={<Headertable/>}/>
    </Routes>
    <div className="App01">
      {
        // <Login/>
        currentForm === "login" ? <Login onFormSwitch={(formname)=>{setCurrentForm(formname)}} /> : <Register onFormSwitch={(formname)=>{setCurrentForm(formname)}} />
      }
    </div>
    </>

  )
}

export default App

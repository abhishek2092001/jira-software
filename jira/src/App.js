
import React from 'react'
import Navbar from './components/Navbar'
import Project from './components/Project'
import IssueForm from './components/Create2';
import Filters from './components/Filters';
import Headertable from './components/Headertable';
import Dashboard1 from "./components/Dashboard1";
import {BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/> 
    
    <Routes>
      <Route path='/Project' element={<Project/>}/>
      <Route path='/Filters'element={<Filters/>}/>
      <Route path='/Create-Dashboards'element={<Dashboard1/>}/>
      <Route path='/Create2'element={<IssueForm/>}/>
      <Route path='/vew-all-projects'element={<Headertable/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App;

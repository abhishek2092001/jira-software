import React, { useState , useEffect} from 'react';
import  './dashboard1.css';
const IssueForm = () =>{

  const [Project,setProj]=useState([]);
  const [Issue_type,setIssue]=useState("");
  const [info,setInfo]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/Pr_Schema").then((result)=>{
      return result.json()}).then((resp)=>{
        // console.warn(resp)
        setInfo(resp);
      })
    
  },[])

  function saveData()
  {
    let data={Project,Issue_type}
  // console.warn(data);
    fetch("http://localhost:8000/Pr_Schema", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then((resp)=>{
      // console.warn("resp",resp);;
      resp.json().then((result)=>{
        console.warn("result",result)
      })
    })
  }




  return (
    <div className="issue-form">
      <h2>Create Issue</h2>
      <div className="warning">
        <span className="warning-icon">&#9888;</span>
        You do not have permission to create issues in this project.
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="project"> Project<sup class="star">*</sup></label>
          <select id="project" name="project" onChange={(e)=>{setProj(e.target.value)}} placeholder='Select a project' required>
            <option  name=" project" value= {Project} >Select a project</option>
            {
            info.map(( itim , j) => 
              <option value={itim.Project} key={j} >{itim.Project}</option>
    
              )
              }
            {/* Project options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issueType"> Issue Type<sup class="star">*</sup></label>
          <select id="issueType" onChange={(e)=>{setIssue(e.target.value)}} required>
            <option value= {Issue_type} >Select an issue type</option>
            {
            info.map(( itim , j) => 
              <option value={itim.Issue_type} key={j} >{itim.Issue_type}</option>
    
              )
              }
            {/* Issue type options */}
          </select>
        </div>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" />
            Create Another Issue
          </label>
        </div>
        <div className="button-group">
          <button type="submit" className="create-button"  onClick={saveData} >
            Create
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default IssueForm;
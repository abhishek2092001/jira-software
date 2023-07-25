import React, { useState , useEffect} from 'react';
import  './dashboard1.css';
const IssueForm = () =>{

  const [proj,setProj]=useState("hello");
  const [issue,setIssue]=useState("");

  function saveData()
  {
    let data={proj,issue}
  // console.warn(data);
    fetch("http://localhost:3031/users", {
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
          <select id="project" name="project" placeholder='Select a project' required>
            <option  name=" project" value= {proj} onChange={(e)=>{setProj(e.target.value)}}>Select a project</option>
            <select>Select a project</select>
            {/* Project options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issueType"> Issue Type<sup class="star">*</sup></label>
          <select id="issueType" required>
            <option value= {issue} onChange={(e)=>{setIssue(e.target.value)}}>Select an issue type</option>
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
import React from 'react';
import  './dashboard1.css';
const Dashboard1 = () => {
  return (
    <div className="issue-form11">
      <h2>Create Dashboard</h2>

      <form>
        <div className="form-group">
          <label htmlFor="project"> Name<sup class="star">*</sup></label>
          <input type="text" id="project" required />
        </div>
        <div className="form-group">
          <label htmlFor="issueType"> Description<sup class="star">*</sup></label>
          <input type="text" id="issueType" required />
        </div>

        <div>
          <label htmlFor="viewer">viewer</label>
           <select name="" id="viewer">
            <option value="">Private</option>
            <option value="">Project</option>
            <option value="">User</option>
            <option value="">Group</option>
            <option value="">My organisation</option>
           </select>
           <button id='save'>Add</button>
           <h3>Private</h3>
        </div><hr></hr>
        <div>
          <label htmlFor="viewer">Editors</label>
           <select name="" id="viewer">
            <option value="">Private</option>
            <option value="">Project</option>
            <option value="">User</option>
            <option value="">Group</option>
            <option value="">My organisation</option>
           </select>
           <button id='save'>Add</button>
           <h3>Private</h3>
        </div><hr></hr><br></br>

        <div className="button-group">
          <button type="submit" className="create-button">
            Save
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>


        </div>
      </form>
    </div>
  );
};

export default Dashboard1;

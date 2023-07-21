import React, { useState } from 'react';
import  './dashboard1.css';
const IssueForm = () =>{
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
          <select id="project" required>
            <option value="">Select a project</option>
            {/* Project options */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issueType"> Issue Type<sup class="star">*</sup></label>
          <select id="issueType" required>
            <option value="">Select an issue type</option>
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
          <button type="submit" className="create-button">
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
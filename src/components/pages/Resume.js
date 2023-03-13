import React from "react";
import  projectJson from "../../Json/Project.json"

function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
       Please see the link to my resume below:
       <a href= {projectJson[5].resumeLink} button type="button" class="btn btn-success"> Resume</a> 

      </p>
    </div>
  );
}

export default Resume;

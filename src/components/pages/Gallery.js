import React from "react";
import  projectJson from "../../Json/Project.json"
import projectRedesign from "../../assets/projectRedesign.jpg"
import passwordProject from "../../assets/passwordProject.jpg"
import weatherDashboard from "../../assets/weatherDashboard.jpg"
import timedQuiz from "../../assets/timedQuiz.jpg"
import foodify from "../../assets/foodify.jpg"
import myLogo from "../../assets/myLogo.jpg"
import style from "../../assets/style.css"




// create an object with github, name, links, decsription; export to 
function Gallery() {
// fill out JSON file with all the projects information and update the cards in gallery with the appropriate JSON info
  console.log(projectJson)
  return (
    <div>
      <h1>Project Gallery</h1>
      <p>
        This features links to all my projects
      </p>
      {/* displays foodify project in gallery */}
      {/* <img src={project1}></img> */}
      <div class="card text-white bg-primary mb-3" style={{ width: "18rem;" }}>
        <div class="card-header"> <h1>{projectJson[0].projectTitle} </h1></div>
        <div class="card-body">
          <h5 class="card-title">About foodify project</h5>
          <p class="card-text">The App allows the users to type in the ingredients they have in their fridge. It then provides a suggestion about recipes that they can make with the available ingredients. 
                For example, if a user types in Spaghetti, prawns, red peppers, onions, it will produce a dish of ‘pasta with shrimp and Bell peppers or Roasted Red Peppers and Herbs.
                The App also enables users to type in the name a dish. This will then produce full ingredients of the dish along with its calories contents.</p>
                <img src={foodify} alt="foodie" width="600" height="400"></img>
                <a href= {projectJson[0].deployedLink} button type="button" class="btn btn-success"> Please click here to view the full project </a>
      </div>
      </div>
{/* displays portfolio design project in gallery */}
      <div class="card text-white bg-secondary mb-3" style={{ width: "18rem;"}}>
        <div class="card-header"><h1>{projectJson[1].projectTitle}</h1></div>
        <div class="card-body">
          <h5 class="card-title">About Portfolio Project</h5>
          <p class="card-text">This Project is about creating a portfolio of my experience, various projects, cv and contact details for prospective employers
          It contains information about my work, expereinces, skills learnt and projects. </p>
          <img src={projectRedesign} alt="lady" width="600" height="400"></img>
          <a href= {projectJson[1].deployedLink} button type="button" class="btn btn-success"> Please click here to view the full project </a>
        </div>
      </div>


      <div class="card text-white bg-success mb-3" style={{ width: "18rem;"}}>
        <div class="card-header"><h1>{projectJson[2].projectTitle}</h1></div>
        <div class="card-body">
          <h5 class="card-title">About Password Generator Project</h5>
          <p class="card-text">The purpose of this project is for the code to generate a passport when generate password button is clicked.</p>
          <img src={passwordProject} alt="password image" width="600" height="400"></img>
          <a href= {projectJson[2].deployedLink} button type="button" class="btn btn-success"> Please click here to view the full project </a>
        </div>
      </div>
      <div class="card text-white bg-danger mb-3" style= {{width: "18rem;"}}>
        <div class="card-header"><h1>{projectJson[3].projectTitle}</h1></div>
        <div class="card-body">
          <h5 class="card-title">About Weather Dashboard Project </h5>
          <p class="card-text">The project involve using API to show the weather outlook for multiple city to allow users to plan their trip accordingly. On this project the 5 Day Weather Forecast was used to retrieve weather data for cities. The link shows how to use the 5 Day Forecast API. 
                               It invloves registering for an API key in order to use this API.</p>
          <img src={weatherDashboard} alt="foodie" width="600" height="400"></img>
          <a href= {projectJson[3].deployedLink} button type="button" class="btn btn-success"> Please click here to view the full project </a>
        </div>
      </div>
      <div class="card text-white bg-warning mb-3" style={{width: "18rem;"}}>
        <div class="card-header"><h1>{projectJson[4].projectTitle}</h1></div>
        <div class="card-body">
          <h5 class="card-title">About Time Quiz Project</h5>
          <p class="card-text">This project is about building a timed coding quiz with multiple-choice questions. This app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript code. 
                               It has a clean, polished, and responsive user interface.</p>
            <img src={timedQuiz} alt="Quiz image" width="600" height="400"></img>
            <a href= {projectJson[3].deployedLink} button type="button" class="btn btn-success"> Please click here to view the full project </a>
            
        </div>
      </div>
    </div>
  );
}

export default Gallery;

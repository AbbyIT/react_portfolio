import React from "react";
import  projectJson from "../../Json/Project.json"
import projectRedesign from "../../assets/projectRedesign.jpg"
import foodify from "../../assets/foodify.jpg"
import aboutMe from "../../assets/aboutMe.jpg"
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
      {/* <img src={project1}></img> */}
      <div class="card text-white bg-primary mb-3" style={{ width: "18rem;" }}>
        <div class="card-header"> <h1>{projectJson[0].projectTitle} </h1></div>
        <div class="card-body">
          <h5 class="card-title">About foodify project</h5>
          <p class="card-text">The App allows the users to type in the ingredients they have in their fridge. It then provides a suggestion about recipes that they can make with the available ingredients. 
                                For example, if a user types in Spaghetti, prawns, red peppers, onions, it will produce a dish of ‘pasta with shrimp and Bell peppers or Roasted Red Peppers and Herbs.
                                The App also enables users to type in the name a dish. This will then produce full ingredients of the dish along with its calories contents.</p>
                                <img src={foodify}></img>
                                {/* <a href= "{projectJson[1].deployedLink}"  button type="button" class="btn btn-success">Please click here to view the full project</button> </a> */}
        </div>

      </div>

      <div class="card text-white bg-secondary mb-3" style={{ width: "18rem;"}}>
        <div class="card-header">{projectJson[1].projectTitle}</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
        </div>
      </div>
      <div class="card text-white bg-success mb-3" style={{ width: "18rem;"}}>
        <div class="card-header">{projectJson[2].projectTitle}</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-danger mb-3" style= {{width: "18rem;"}}>
        <div class="card-header">{projectJson[3].projectTitle}</div>
        <div class="card-body">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <div class="card text-white bg-warning mb-3" style={{width: "18rem;"}}>
        <div class="card-header">{projectJson[4].projectTitle}</div>
        <div class="card-body">
          <h5 class="card-title">Warning card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      

    </div>
  );
}

export default Gallery;

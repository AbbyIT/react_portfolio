import React from "react";
import  projectJson from "../../Json/Project.json"

function About() {
  return (
    <div>

      <h1>About Me</h1>
      <p>
      I am currently working for a Local authority in London as a Housing Projects Officer.
      I enjoy working on code as I find this challenging at thesame time, i love it when my code works!
      I enjoying learning new concepts and applying this to my project. I have experience of using CSS, HTML and Javascript. 
      I enjoy learninf new skills and love working corrabolatively with others
      I enjoy travelling around the world to exotic places. 
      </p>


          <p>07940 755322</p>
          <p>Abby@gmail.com</p>
          <a href= {projectJson[1].gitHub} ></a>
          {/* <a href= {projectJson[1].gitHub} button type="button" class="btn btn-success"></a> */}
          <p>Github</p>
          <a href ="https://open.spotify.com/"> </a>
          <p>Spotify</p>
          <a href="https://publish.twitter.com/"> </a>
          <p>Twitter</p>
        

</div>
  );
}

export default About;

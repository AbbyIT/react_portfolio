import React from "react";
import myLogo from "../../assets/myLogo.jpg"


function Home() {
  return (
    <div>
      <h1>Welcome to my page</h1>

      <img src={myLogo} alt="My pic" width="200" height="300"></img>
      <p>
        I am Abby and I have been learning about webpage development using JAVA Script, REACT, CSS and HTML. I enjoy problem solving and workign on various projects.
        I have spent the last few months learnign to perfect my web development skills.

      </p>

    </div>


  );
}

export default Home;

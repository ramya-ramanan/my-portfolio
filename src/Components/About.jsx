import React from "react";
function About ()  {
    return(
        <div id="about" className="section">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-content">

          <div className="about-box">

            <h3> Who Am I? </h3>

            <p>
              I am a computer science student interested in web development and modern technologies.
              I enjoy creating simple and useful applications.
            </p>

            <p>
              I am currently improving my skills in CSS, JavaScript, React, databases and full-stack development.
            </p>

          </div>

          <div className="about-box">

            <h3> My Goal </h3>

            <p> 
              My goal is to become a skilled full-stack developer and build applications that solve real-world problems. 
              
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};
    
export default About;
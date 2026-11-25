import React from "react";

function Project(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p> <b>Technologies:</b> {props.technology} </p> 

    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="section">
      <div className="container">

        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">

          <Project
            title="Portfolio"
            description=" My personal portfolio website :
            It showcases my projects, GitHub and LinkedIn profle ,Skills with a responsive layout and smooth transitions"
            technology="React, JavaScript, CSS"
            
          />

          <Project
            title="SpotIQ"
            description="Smart Parking System: A web application for finding and booking available parking spaces."
            technology="React, JavaScript, CSS"
            
          />

          <Project
            title="Aurevant"
            description="Fine-Dining Restaurant Website: Its a responsive restaurant website with a digital menu and table booking system.
             along with admin dashboard to manage content, reservations, and customer enquiries."
            technology="Base44 tool"          
          />

        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
const Skills = () => {

  const skills = [
    {
      name: "HTML",icon: "devicon-html5-plain colored"
    },

    { 
      name: "CSS", icon: "devicon-css3-plain colored"
    },

    {
      name: "React", icon: "devicon-react-original colored"
    },
    {
      name: "git", icon:"devicon-git-plain colored"
    },

    {
      name: "GitHub", icon: "devicon-github-original"
    },
    {
      name:"Python" , icon: "devicon-python-plain colored"

    }
  ];

  return (
    <div id="skills" className="section">

      <div className="container">

        <h2 className="section-title"> Technical Skills </h2>

        <div className="skills-container">

          {skills.map((skill) => (

            <div className="skill-card" key={skill.name} >
              <i className={skill.icon}></i>
              <h3> {skill.name} </h3>
            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Skills;
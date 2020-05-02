import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectContainer = (props) => {
  return (
    <div className="center" style={{ marginTop: "-5px" }}>
      <h5>Projects</h5>

      {/* map through skills and put out a card for each */}

      {props.projects.map((project) => {
        return (
          <div className=" col s6 m4 l6 " key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectContainer;

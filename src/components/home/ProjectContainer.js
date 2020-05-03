import React from "react";
import ProjectCard from "./ProjectCard";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

const ProjectContainer = (props) => {
  return (
    <div className="center" style={{ marginTop: "-5px" }}>
      <H5>Projects</H5>
      <Zoom>
        {/* map through skills and put out a card for each */}
        {props.projects.map((project) => {
          return (
            <div className=" col s6 m4 l6 " key={project.id}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </Zoom>
    </div>
  );
};
const H5 = styled.h5`
  font-family: "Ubuntu";
`;

export default ProjectContainer;

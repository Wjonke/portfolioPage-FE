import React from "react";
import styled from "styled-components";

const Project = (props) => {
  return (
    <ProjectStyle>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src="https://res.cloudinary.com/wjonke/image/upload/v1587408921/sample.jpg"
            alt=""
          />
        </div>
        <div className="card-content">
          <span className="left-align">
            <h5>{props.project.name}</h5>
            <ul>
              <li>{props.project.techStack}</li>
              <li>{props.project.role}</li>
              <li>{props.project.description}</li>
            </ul>
          </span>
          <span className="card-title activator grey-text text-darken-4">
            Click for more<i className="material-icons right">more_vert</i>
          </span>
        </div>

        <div className="card-reveal col s12 ">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <span>
            <Div className="center">
              <StyledLink className="card" href={props.project.code_url}>
                FE Code
              </StyledLink>

              <StyledLink className="card" href={props.project.deployed_url}>
                Site
              </StyledLink>

              <StyledLink className="card" href={props.project.code_url}>
                BE Code
              </StyledLink>

              <StyledLink className="card" href={props.project.deployed_url}>
                Site
              </StyledLink>
            </Div>
          </span>
        </div>
      </div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  padding: 3%;
  &:hover {
    /* color: dodgerblue; */
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
    font-family: "Roboto", sans-serif;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  font-family: "Roboto", sans-serif;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 2%;
  padding: 2%;
  border: 1px solid black;

  &:hover {
    border: 1px solid dodgerblue;
    color: dodgerblue;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;
export default Project;

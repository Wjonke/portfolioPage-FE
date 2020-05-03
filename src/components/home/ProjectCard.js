import React from "react";
import styled from "styled-components";

const Project = (props) => {
  return (
    <ProjectStyle className="card ">
      <div className="card-content left-align">
        <P>
          Sample Project, this will be an onHover changing link to the project
          view, should include :<Li>picture</Li>
          <Li>title</Li>
          <Li> role</Li>
        </P>
      </div>
    </ProjectStyle>
  );
};

const ProjectStyle = styled.div`
  padding: 3%;
  &:hover {
    color: dodgerblue;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
    font-family: "Roboto, serif";
  }
`;
const Li = styled.li`
  font-family: "Roboto, serif";
  }
`;
const P = styled.p`
  font-family: "Roboto, serif";
  }
`;
export default Project;

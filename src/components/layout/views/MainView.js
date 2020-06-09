import React, { useState, useEffect } from "react";
import styled from "styled-components";

import OverviewContainer from "../../home/OverviewContainer";
import ProjectContainer from "../../home/ProjectContainer";
import SkillContainer from "../../home/SkillContainer";

import getData from "../../../utility/GetData";
import Spinner from "../../../utility/Spinner";

const MainView = (props) => {
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();

  useEffect(() => {
    getData("skills").then((res) => {
      // console.log("skills from getData --->", res.data);
      setSkills(res.data);
    });

    getData("projects").then((res) => {
      //console.log("projects from getData---->", res.data);

      setProjects(res.data);
    });
  }, []);

  //console.log("skills from state", skills);
  //console.log("projects from state", projects);

  return (
    <Div className="row">
      {skills && projects ? (
        <span>
          <div className=" col s12 l6">
            <OverviewContainer />
            <div className="divider"></div>
            {/* pass skills state down to child */}
            <SkillContainer skills={skills} />
          </div>

          <div className=" col s12 l6">
            {/* pass projects state down to child and spread in props*/}
            <ProjectContainer {...props} projects={projects} />
          </div>
        </span>
      ) : (
        <div className="center">
          <Spinner />
        </div>
      )}
    </Div>
  );
};

const Div = styled.div`
  background-color: #f5f5f5;
`;

export default MainView;

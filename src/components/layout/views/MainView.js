import React, { useState, useEffect } from "react";

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
      // console.log("projects from getData---->", res.data);

      setProjects(res.data);
    });
  }, []);

  // console.log("skills from state", skills);
  // console.log("projects from state", projects);

  return (
    <div className="row">
      {skills ? (
        <div className=" col s12 l6">
          <OverviewContainer />
          <div className="divider"></div>
          {/* pass skills state down to child */}
          <SkillContainer skills={skills} />
        </div>
      ) : (
        <Spinner />
      )}

      {projects ? (
        <div className=" col s12 l6">
          {/* pass projects state down to child and spread in props*/}
          <ProjectContainer {...props} projects={projects} />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MainView;

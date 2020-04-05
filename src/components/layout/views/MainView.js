//main component between header/footer
//split in two columns vertically
//left column split horizontally, top half is about me overview, bottom is skills tiles/cards
//right column for project cards that link to an about page with project info and links to project and code base

import React, { useState, useEffect } from "react";

import Overview from "../../home/OverviewContainer";
import Projects from "../../home/ProjectContainer";
import Skills from "../../home/SkillContainer";

import Spinner from "../../../utility/Spinner";
import GetData from "../../../utility/GetData";

const MainView = props => {
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();

  //   useEffect(() => {
  //     GetData("skills").then(res => {
  //       setSkills(res.data.entries);
  //     });
  //     GetData("projects").then(res => {
  //       setProjects(res.data.entries);
  //     });
  //   }, []);

  return (
    <div class="row">
      {skills && projects ? (
        <div class="row">
          <div class="col s12 l6">
            <Overview />
            <Skills skills={skills} />
          </div>

          <div class="col s12 l6">
            <Projects {...props} projects={projects} />
          </div>
        </div>
      ) : (
        <div class="section">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default MainView;

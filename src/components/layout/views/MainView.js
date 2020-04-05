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

const MainView = () => {
  const [skills, setSkills] = useState();
  const [projects, setProjects] = useState();

  useEffect(() => {
    GetData("skills").then(res => {
      setSkills(res.data.entries);
    });
    GetData("projects").then(res => {
      setProjects(res.data.entries);
    });
  }, []);

  return (
    <div>
      {skills && projects ? (
        <div>
          <div>
            <Overview />
            <Skills skills={skills} />
          </div>

          <div>
            <Projects {...props} projects={projects} />
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default MainView;

//main component between header/footer
//split in two columns vertically
//left column split horizontally, top half is about me overview, bottom is skills tiles/cards
//right column for project cards that link to an about page with project info and links to project and code base

import React from "react";

import OverviewContainer from "../../home/OverviewContainer";
import ProjectContainer from "../../home/ProjectContainer";
import SkillContainer from "../../home/SkillContainer";

const MainView = props => {
  return (
    <div className="row">
      <div className=" col s12 l6">
        <OverviewContainer />
        <div className="divider"></div>
        <SkillContainer />
      </div>

      <div className=" col s12 l6">
        <ProjectContainer />
      </div>
    </div>
  );
};

export default MainView;

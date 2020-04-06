import React from "react";
import SkillCard from "./SkillCard";

const SkillContainer = (props) => {
  return (
    <div className="row">
      <h5>Skills</h5>
      <div className=" col s12 l6">
        {/* map through skills and put out a card for each */}
        {props.skills.map((skill) => {
          return <SkillCard skill={skill} key={skill.id} />;
        })}
      </div>
    </div>
  );
};

export default SkillContainer;

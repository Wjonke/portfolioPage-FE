import React from "react";
import SkillCard from "./SkillCard";

const SkillContainer = (props) => {
  return (
    <div>
      <div className="center">
        <h5>Skills</h5>
      </div>

      {/* map through skills and put out a card for each */}

      {props.skills.map((skill) => {
        return (
          <div className=" col s4 m3 l3 " key={skill.id}>
            <SkillCard skill={skill} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillContainer;

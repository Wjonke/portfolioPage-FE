import React from "react";
import SkillCard from "./SkillCard";

const SkillContainer = (props) => {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>
        <h5>Skills</h5>
      </div>

      <div className=" col s12 " style={{ border: "1px solid red" }}>
        {/* map through skills and put out a card for each */}

        {props.skills.map((skill) => {
          return (
            <div className=" col s6 m3 l4 " style={{ border: "1px solid red" }}>
              <SkillCard skill={skill} key={skill.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillContainer;

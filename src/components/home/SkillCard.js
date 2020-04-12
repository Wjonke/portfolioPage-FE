import React from "react";

const SkillCard = (props) => {
  return (
    <div className="card ">
      <div className="card-image">
        <img src="images/sample-1.jpg" alt="test pic" />
      </div>
      <div className="card-content center">
        <p className="left-align">
          Sample Skill, includes:
          <li>picture</li>
          <li> title</li>
          <li>Content: {props.skill.entry}</li>
        </p>
      </div>
    </div>
  );
};

export default SkillCard;

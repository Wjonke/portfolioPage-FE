import React from "react";
const SkillCard = (props) => {
  console.log(props.skill);
  return (
    <div className="card ">
      <div className="card-image">
        <img src={props.skill.img} alt="Skill img" />
      </div>
      <div className="card-content center">
        <p>{props.skill.title}</p>
      </div>
    </div>
  );
};

export default SkillCard;

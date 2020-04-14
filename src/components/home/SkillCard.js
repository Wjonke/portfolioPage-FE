import React from "react";
import JS from "../../images/JS.jpg";
const SkillCard = (props) => {
  console.log(props.skill);
  return (
    <div className="card ">
      <div className="card-image" style={{ background: "black" }}>
        <img src={props.skill.img} alt="Skill img" />
      </div>
      <div className="card-content center">
        <p>{props.skill.title}</p>
      </div>
    </div>
  );
};

export default SkillCard;

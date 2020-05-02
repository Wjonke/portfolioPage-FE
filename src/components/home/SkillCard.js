import React from "react";
const SkillCard = (props) => {
  console.log(props.skill);
  return (
    <div
      className="card small"
      style={{
        width: "100px",
        height: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card-image"
        style={{
          maxWidth: "95%",
          maxHeight: "95%",
          display: "block",
        }}
      >
        <img src={props.skill.imgUrl} alt="Skill img" />
      </div>
      <div className="card-content center">
        <p>{props.skill.name}</p>
      </div>
    </div>
  );
};

export default SkillCard;

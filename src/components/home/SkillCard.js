import React from "react";

const SkillCard = () => {
  return (
    <div className="card ">
      <div className="card-image">
        <img src="images/sample-1.jpg" alt="test pic" />
      </div>
      <div className="card-content center">
        <p style={{ border: "1px solid black" }}>Sample Skill</p>
      </div>
    </div>
  );
};

export default SkillCard;

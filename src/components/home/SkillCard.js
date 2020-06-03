import React from "react";
import styled from "styled-components";

const SkillCard = (props) => {
  //   console.log(props.skill);
  return (
    <SkillStyle
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
        <FontStyle>{props.skill.name}</FontStyle>
      </div>
    </SkillStyle>
  );
};

const SkillStyle = styled.div`
  padding: 3%;
  &:hover {
    color: dodgerblue;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;

const FontStyle = styled.p`
  font-family: "Roboto";
  }
`;

export default SkillCard;

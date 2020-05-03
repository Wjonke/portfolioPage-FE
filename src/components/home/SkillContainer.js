import React from "react";
import SkillCard from "./SkillCard";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";

const SkillContainer = (props) => {
  return (
    <div>
      <div className="center">
        <H5>Skills</H5>
      </div>
      <Zoom>
        {/* map through skills and put out a card for each */}

        {props.skills.map((skill) => {
          return (
            <div className=" col s4 m3 l3 " key={skill.id}>
              <SkillCard skill={skill} />
            </div>
          );
        })}
      </Zoom>
    </div>
  );
};
const H5 = styled.h5`
  font-family: "Ubuntu";
`;

export default SkillContainer;

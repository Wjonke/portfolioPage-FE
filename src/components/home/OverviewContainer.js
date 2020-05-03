import React from "react";
import Overview from "./Overview";
import styled from "styled-components";

const OverviewContainer = () => {
  return (
    <div>
      <div>
        <div className="center">
          <H4>Full-Stack Web Developer | Experienced Senior Project Manager</H4>
        </div>
      </div>

      <Overview />
    </div>
  );
};
const H4 = styled.h4`
  font-family: "Ubuntu";
`;
export default OverviewContainer;

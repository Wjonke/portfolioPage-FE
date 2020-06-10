import React from "react";
import styled from "styled-components";

const Overview = () => {
  return (
    <div className=" center-align">
      <P style={{ paddingLeft: "3em", paddingRight: "3em" }}>
        I am a Full-stack Web Developer with experience using JavaScript,
        Python, HTML, CSS, React, NodeJS with Express, algorithms, data
        structures and testing. Previously, I was a Senior Project Manager for a
        low-voltage security company. I also carry a GA low-voltage license.
      </P>
    </div>
  );
};
const P = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-size: 1.25rem;
`;
// const P = styled.p`
//   font-family: "Roboto", sans-serif;
// `;
export default Overview;

import React from "react";
import Overview from "./Overview";
import Spinner from "../../utility/Spinner";

const OverviewContainer = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ border: "1px solid red" }}>
        <div>
          <h5>Full-Stack Web Developer | Experienced Senior Project Manager</h5>
        </div>
      </div>
      <Overview />
    </div>
  );
};

export default OverviewContainer;

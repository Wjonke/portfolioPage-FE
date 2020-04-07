import React from "react";
import Spinner from "../../utility/Spinner";

const ProjectContainer = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ border: "1px solid red" }}>
        <h5>Projects</h5>
      </div>

      <Spinner />
    </div>
  );
};

export default ProjectContainer;

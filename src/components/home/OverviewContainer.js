import React from "react";
import Overview from "./Overview";
import Spinner from "../../utility/Spinner";

const OverviewContainer = () => {
  if (Overview) {
    return (
      <div className="center">
        <Overview />
      </div>
    );
  } else {
    return (
      <div className="center">
        <Spinner />
      </div>
    );
  }
};

export default OverviewContainer;

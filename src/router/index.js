import React from "react";
import { Route } from "react-router-dom";

import MainView from "../components/layout/views/MainView";
import ProjectView from "../components/layout/views/ProjectView";

export default function Routes() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => {
          return <MainView {...props} />;
        }}
      />

      <Route exact path="/project/:id" component={ProjectView} />
    </div>
  );
}

import React, { useEffect } from "react";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import RouterView from "./router/index";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "font-awesome/css/font-awesome.min.css";

function App() {
  useEffect(() => {
    //auto initializes Materialize's JS
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <RouterView />
      <Footer />
    </div>
  );
}

export default App;

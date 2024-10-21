import React from "react";
import Navitems from "./components/navitems";
import Navheader from "./components/navheader";
import Home from "./components/home";
import About from "./components/about";

function App() {
  return (
    <div>
      <Navheader />
      <Navitems />
      <Home />
      <About />
    </div>
  );
}

export default App;

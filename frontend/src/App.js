import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import SingleUser from "./components/SingleUser/SingleUser";
import Home from "./components/Home/Home";
import MultiUser from "./components/MultiUser/MultiUser";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/explore/single/:handle" component={SingleUser} />
      <Route
        path="/explore/multi/:firstHandle&:secondHandle"
        component={MultiUser}
      />
    </div>
  );
}

export default App;

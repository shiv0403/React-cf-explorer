import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import AboutCf from "./components/AboutCf";
import TopProg from "./components/TopProg";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="app_showcase">
        <div className="app_showcase_about">
          <h1>CF-EXPLORER</h1>
          <p>Know about Competitive Programming Community on Codeforces!</p>
        </div>
        <img
          src="https://avinash-in.github.io/images/pic.png"
          alt="exploring-img"
        />
      </div>

      <div className="app_explore">
        <Card className="app_explore_cards">
          <CardContent>
            <Typography color="textSecondary">hi there</Typography>
          </CardContent>
          <CardActions>
            <button type="submit">GO</button>
          </CardActions>
        </Card>
        <Card className="app_explore_cards">
          <CardContent>
            <Typography color="textSecondary">hi there</Typography>
          </CardContent>
          <CardActions>
            <button type="submit">GO</button>
          </CardActions>
        </Card>
      </div>

      <AboutCf />
      {/* top prog. */}
      <TopProg />
      {/* footer */}
    </div>
  );
}

export default App;

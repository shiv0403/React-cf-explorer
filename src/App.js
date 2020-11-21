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
          <CardContent className="Card_form">
            <h2>Enter CF Handle</h2>
            <form action="">
              <input type="text" placeholder="Enter here" spellCheck="false" />
              <br />
              <button type="submit" className="cards_btn">
                GO
              </button>
            </form>
          </CardContent>
        </Card>
        <Card className="app_explore_cards">
          <CardContent className="Card_form">
            <h2>Enter CF Handles</h2>
            <form action="">
              <input
                type="text"
                placeholder="First handle"
                spellCheck="false"
              />
              <br />
              <input
                type="text"
                placeholder="Second handle"
                spellCheck="false"
              />
              <br />
              <button type="submit" className="cards_btn">
                GO
              </button>
            </form>
          </CardContent>
        </Card>
      </div>

      <AboutCf />
      {/* top prog. */}
      <TopProg />
      {/* footer */}
      <div className="app_footer">
        <p>© Shivansh Gupta 2020</p>
      </div>
    </div>
  );
}

export default App;

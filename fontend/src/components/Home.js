import React, { useState } from "react";
import "../App.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import AboutCf from "./AboutCf";
import TopProg from "./TopProg";
import axios from "./axios";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const [Handle, setHandle] = useState("");
  const [Data, setData] = useState({});

  const History = useHistory();

  const getHandle = (e) => {
    setHandle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    History.push(`/explore/${Handle}`);
  };

  return (
    <div className="home">
      <div className="home_showcase">
        <div className="home_showcase_about">
          <h1>CF-EXPLORER</h1>
          <p>Know about Competitive Programming Community on Codeforces!</p>
        </div>
        <img
          src="https://avinash-in.github.io/images/pic.png"
          alt="exploring-img"
        />
      </div>

      <div className="home_explore">
        <Card className="home_explore_cards">
          <CardContent className="Card_form">
            <h2>Enter CF Handle</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter here"
                spellCheck="false"
                onChange={getHandle}
              />
              <br />
              <button type="submit" className="cards_btn">
                GO
              </button>
            </form>
          </CardContent>
        </Card>
        <Card className="home_explore_cards">
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

      <TopProg />

      <div className="home_footer">
        <p>© Shivansh Gupta 2020</p>
      </div>
    </div>
  );
}

export default Home;

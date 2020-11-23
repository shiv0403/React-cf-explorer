import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AboutCf from "./AboutCf";
import TopProg from "./TopProg";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const [Handle, setHandle] = useState("");
  const [FirstHandle, setFirstHandle] = useState("");
  const [SecondHandle, setSecondHandle] = useState("");

  const History = useHistory();

  const getHandle = (e) => {
    setHandle(e.target.value);
  };

  const getFirstHandle = (e) => {
    setFirstHandle(e.target.value);
  };

  const getSecondHandle = (e) => {
    setSecondHandle(e.target.value);
  };

  const handleSubmitSingle = async (e) => {
    e.preventDefault();
    History.push(`/explore/single/${Handle}`);
  };

  const handleSubmitMulti = async (e) => {
    e.preventDefault();
    History.push(`/explore/multi/${FirstHandle}&${SecondHandle}`);
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
            <form onSubmit={handleSubmitSingle}>
              <input
                type="text"
                placeholder="Enter here"
                spellCheck="false"
                required
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
            <form onSubmit={handleSubmitMulti}>
              <input
                type="text"
                placeholder="First handle"
                spellCheck="false"
                required
                onChange={getFirstHandle}
              />
              <br />
              <input
                type="text"
                placeholder="Second handle"
                spellCheck="false"
                required
                onChange={getSecondHandle}
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

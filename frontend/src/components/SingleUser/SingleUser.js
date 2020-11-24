import React, { useEffect, useState } from "react";
import "./SingleUser.css";
import LineGraphSingle from "./LineGraphSingle";
import RecentProb from "./RecentProb";
import RecentContest from "./RecentContest";
import UserInfo from "../UserInfo";

const RatingStyle = {
  marginTop: "30px",
  marginBottom: "20px",
  color: "#686e69",
  fontSize: "2.8rem",
};

function SingleUser() {
  const urlArray = window.location.href.split("/");
  const Handle = urlArray[urlArray.length - 1];

  return (
    <div className="single">
      <UserInfo handle={Handle} />
      <div className="single_graph">
        <h1 style={RatingStyle}>Rating Graph</h1>
        <LineGraphSingle handle={Handle} />
      </div>
      <div className="single_recentContest">
        <RecentContest handle={Handle} />
      </div>
      {/* <div className="single_recentProbs">
        <RecentProb handle={Handle} />
      </div> */}
    </div>
  );
}

export default SingleUser;

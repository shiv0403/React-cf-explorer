import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./SingleUser.css";
import LineGraph from "./LineGraph";

function SingleUser() {
  const [UserInfo, setUserInfo] = useState({});
  const urlArray = window.location.href.split("/");
  const Handle = urlArray[urlArray.length - 1];

  useEffect(() => {
    async function getInfo() {
      const req = await axios.get(`/explore/Info/${Handle}`); // axios returns a promise
      setUserInfo(req.data);
    }
    getInfo();
  }, []);

  return (
    <div className="single">
      <div className="single_info">
        <h1>
          {UserInfo.firstName} {UserInfo.lastName}
        </h1>
        <img src={UserInfo.titlePhoto} alt={UserInfo.Handle} />
        <h3>Current Rating: {UserInfo.rating}</h3>
        <h3>Maximum Rating: {UserInfo.maxRating}</h3>
        <h3>Title: {UserInfo.rank}</h3>
      </div>
      <div className="single_graph">
        <LineGraph handle={Handle} />
      </div>
    </div>
  );
}

export default SingleUser;

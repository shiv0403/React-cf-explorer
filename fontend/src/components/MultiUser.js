import React, { useEffect, useState } from "react";
import "./MultiUser.css";
import { getHandles } from "./util";
import axios from "./axios";
import LineGraphMulti from "./LineGraphMulti";
import CommonContest from "./CommonContest";

function MultiUser() {
  const urlArray = window.location.href;
  const [FirstUserInfo, setFirstUserInfo] = useState([]);
  const [SecondUserInfo, setSecondUserInfo] = useState([]);

  const handles = getHandles(urlArray);

  useEffect(() => {
    async function getInfo() {
      const req1 = await axios.get(`/explore/Info/${handles[0]}`); // axios returns a promise
      setFirstUserInfo(req1.data);
      const req2 = await axios.get(`/explore/Info/${handles[1]}`);
      setSecondUserInfo(req2.data);
    }
    getInfo();
  }, []);

  return (
    <div className="multi">
      <div className="multi_info">
        <div className="multi_info_first">
          <h1>
            {FirstUserInfo.firstName} {FirstUserInfo.lastName} aka{" "}
            {FirstUserInfo.handle}
          </h1>
          <img src={FirstUserInfo.titlePhoto} alt="" />
          <h3>Current Rating: {FirstUserInfo.rating}</h3>
          <h3>Maximum Rating: {FirstUserInfo.maxRating}</h3>
          <h3>Title: {FirstUserInfo.rank}</h3>
        </div>
        <div className="multi_info_vs">
          <h2>VS 🔥</h2>
        </div>
        <div className="multi_info_second">
          <h1>
            {SecondUserInfo.firstName} {SecondUserInfo.lastName} aka{" "}
            {SecondUserInfo.handle}
          </h1>
          <img src={SecondUserInfo.titlePhoto} alt="" />
          <h3>Current Rating: {SecondUserInfo.rating}</h3>
          <h3>Maximum Rating: {SecondUserInfo.maxRating}</h3>
          <h3>Title: {SecondUserInfo.rank}</h3>
        </div>
      </div>
      <div className="multi_graph">
        <LineGraphMulti handles={handles} />
      </div>
      <div className="multi_commonContest">
        <CommonContest handles={handles} />
      </div>
    </div>
  );
}

export default MultiUser;

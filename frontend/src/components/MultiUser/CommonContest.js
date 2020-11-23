import React, { useEffect } from "react";
import "./CommonContests.css";
import { useState } from "react";
import axios from "./../axios";
import { getCommonContest } from "./../util";

function CommonContest({ handles }) {
  const [Contest1, setContest1] = useState([]);
  const [Contest2, setContest2] = useState([]);

  useEffect(() => {
    async function getContests() {
      const req1 = await axios.get(`/explore/Rating/${handles[0]}`); // axios returns a promise
      setContest1(req1.data);
      const req2 = await axios.get(`/explore/Rating/${handles[1]}`); // axios returns a promise
      setContest2(req2.data);
    }
    getContests();
  }, []);

  const CommonContests = getCommonContest(Contest1, Contest2);
  CommonContests.reverse();

  return (
    <div className="common">
      <h1>Common Contests given:</h1>
      <div className="common_contests">
        {CommonContests.map((Contest) => {
          return (
            <tr className="row">
              <td>{Contest.firstInfo.contestName}</td>
              <td>
                <div className="row_ratingDiff">
                  {Contest.firstInfo.newRating - Contest.firstInfo.oldRating}{" "}
                </div>
                <div className="row_ratingDiff">
                  {Contest.secondInfo.newRating - Contest.secondInfo.oldRating}
                </div>
              </td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default CommonContest;

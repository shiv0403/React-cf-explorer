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
            <div
              className="row"
              style={{
                borderLeft:
                  Contest.firstInfo.newRating - Contest.firstInfo.oldRating >= 0
                    ? "16px solid lightGreen"
                    : "16px solid red",
                borderRight:
                  Contest.secondInfo.newRating - Contest.secondInfo.oldRating >=
                  0
                    ? "16px solid lightGreen"
                    : "16px solid red",
              }}
            >
              <h2>{Contest.firstInfo.contestName}</h2>
              <div className="row_ratingChanges">
                <div className="row_ratingDiff">
                  <h3>
                    {Contest.firstInfo.newRating -
                      Contest.firstInfo.oldRating >=
                    0
                      ? "+"
                      : "-"}
                    {""}
                    {Math.abs(
                      Contest.firstInfo.newRating - Contest.firstInfo.oldRating
                    )}
                  </h3>
                </div>
                <div className="row_ratingDiff">
                  <h3>
                    {Contest.secondInfo.newRating -
                      Contest.secondInfo.oldRating >=
                    0
                      ? "+"
                      : "-"}
                    {""}
                    {Math.abs(
                      Contest.secondInfo.newRating -
                        Contest.secondInfo.oldRating
                    )}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommonContest;

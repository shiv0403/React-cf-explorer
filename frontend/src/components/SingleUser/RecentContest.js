import React, { useEffect, useState } from "react";
import "./RecentContest.css";
import axios from "./../axios";

function RecentContest({ handle }) {
  const [UserContest, setUserContest] = useState([]);

  useEffect(() => {
    async function getInfo() {
      const req = await axios.get(`/explore/Rating/${handle}`); // axios returns a promise
      setUserContest(req.data.reverse());
    }
    getInfo();
  }, []);

  return (
    <div className="recentContest">
      <h1>Contests</h1>
      <div className="recentContest_list">
        {UserContest.map((contest) => {
          return (
            <tr
              style={{
                backgroundColor:
                  contest.newRating - contest.oldRating >= 0
                    ? "#42e352"
                    : "red",
              }}
            >
              <td>
                <h3>{contest.contestName}</h3>
              </td>
              <td>
                <h3>
                  {contest.newRating - contest.oldRating >= 0 ? "+" : "-"}
                  {""}
                  {Math.abs(contest.newRating - contest.oldRating)}
                </h3>
              </td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default RecentContest;

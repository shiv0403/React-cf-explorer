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
            <tr>
              <td>{contest.contestName}</td>
              <td>{contest.newRating - contest.oldRating}</td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default RecentContest;

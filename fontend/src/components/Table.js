import React, { useEffect } from "react";
import "./Table.css";
import axios from "./axios";
import { useState } from "react";

function Table({ handle }) {
  const [UserStatus, setUserStatus] = useState([]);

  useEffect(() => {
    async function getInfo() {
      const req = await axios.get(`/explore/Status/${handle}`); // axios returns a promise
      setUserStatus(req.data);
    }
    getInfo();
  }, []);

  return (
    <div className="table">
      <h1>Recent problems</h1>
      <div className="table_content">
        {UserStatus.map((Problem) => {
          return (
            <tr>
              <td>{Problem.problem.name}</td>
              <td>{Problem.verdict}</td>
            </tr>
          );
        })}
      </div>
    </div>
  );
}

export default Table;

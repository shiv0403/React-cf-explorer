import React, { useEffect, useState } from "react";
import "./UserInfo.css";
import { getColor } from "./util";
import axios from "../components/axios";

function UserInfo({ handle }) {
  const [UserInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      const req = await axios.get(`/explore/Info/${handle}`); // axios returns a promise
      setUserInfo(req.data);
    }
    getInfo();
  }, []);

  return (
    <div className="userInfo">
      <div
        className="user_info"
        style={{ backgroundColor: getColor(UserInfo) }}
      >
        {UserInfo.firstName ? (
          <h1>
            {UserInfo.firstName} {UserInfo.lastName} aka{" "}
            <span style={{ fontFamily: "sans-serif" }}>{UserInfo.handle}</span>
          </h1>
        ) : (
          <h1>
            <span style={{ fontFamily: "sans-serif" }}>{UserInfo.handle}</span>
          </h1>
        )}

        <div className="user_info_img">
          <img src={UserInfo.titlePhoto} alt={UserInfo.Handle} />
        </div>

        <h3>
          <span
            className="user_info_span"
            style={{ color: "#f6f6f6", fontWeight: "1000" }}
          >
            Current Rating:
          </span>{" "}
          <span style={{ fontFamily: "sans-serif" }}>{UserInfo.rating}</span>
        </h3>
        <h3>
          <span
            className="user_info_span"
            style={{ color: "#f6f6f6", fontWeight: "1000" }}
          >
            Maximum Rating:
          </span>{" "}
          <span style={{ fontFamily: "sans-serif" }}>{UserInfo.maxRating}</span>
        </h3>
        <h3>
          <span
            className="user_info_span"
            style={{ color: "#f6f6f6", fontWeight: "1000" }}
          >
            Title:
          </span>{" "}
          <span style={{ fontFamily: "sans-serif" }}>{UserInfo.rank}</span>
        </h3>
      </div>
    </div>
  );
}

export default UserInfo;

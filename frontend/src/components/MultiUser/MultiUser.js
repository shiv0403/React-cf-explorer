import React, { useEffect, useState } from "react";
import "./MultiUser.css";
import { getHandles, getColor } from "./../util";
import LineGraphMulti from "./LineGraphMulti";
import CommonContest from "./CommonContest";
import UserInfo from "../UserInfo";

function MultiUser() {
  const urlArray = window.location.href;

  const handles = getHandles(urlArray);

  return (
    <div className="multi">
      <div className="multi_info">
        <UserInfo handle={handles[0]} />

        <UserInfo handle={handles[1]} />
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

import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./SingleUser.css";

function SingleUser() {
  const [Data, setData] = useState({});

  useEffect(() => {
    const urlArray = window.location.href.split("/");
    const Handle = urlArray[urlArray.length - 1];
    async function getData() {
      const req = await axios.get(`/explore/${Handle}`); // axios returns a promise
      setData(req.data);
    }
    getData();
  }, []);

  return (
    <div className="single">
      <h1>{Data.handle}</h1>
    </div>
  );
}

export default SingleUser;

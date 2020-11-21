import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./TopProg.css";
import { Typography, CardMedia } from "@material-ui/core";
import topProgs from "./data";

function TopProg() {
  const [Info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const time = new Date().getTime();
      const key = "ce72ebe1d56ebe106c52288686ac4c30c4539f07";
      const SecKey = "e4b23d29ca62a1d0adcf1c234120681bc2bd6941";
      let handles = "";
      topProgs.forEach((person) => {
        handles = handles + person.handle + ";";
      });

      const url =
        "https://codeforces.com/api/user.info?handles=" +
        handles +
        "&&apikey=" +
        key +
        "&time=" +
        time +
        "&apiSig=123456" +
        "sha512Hex(123456/user.info?handles=" +
        handles +
        "&apikey=" +
        key +
        "&time=" +
        time +
        "#" +
        SecKey +
        ")";

      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data.result);
        });
    }
    fetchData();
  }, []);

  return (
    <div className="topProgs">
      <h1>Top Competitive Programmers around the globe!</h1>
      <div className="topProgs_cards">
        {Info.length > 0 &&
          Info.map((person) => (
            <Card>
              <CardContent>
                <CardMedia
                  style={{
                    height: "110px",
                    width: "220px",
                    paddingTop: "56.25%",
                  }}
                  image={person.titlePhoto}
                />
                <Typography color="textPrimary">
                  {person.firstName} {""} {person.lastName}
                </Typography>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default TopProg;

const express = require("express");
const axios = require("axios");
const fetch = require("node-fetch");
const Cors = require("cors");

const app = express();
app.use(Cors());
const PORT = process.env.PORT || 9000;

async function fetchData(handle) {
  const time = new Date().getTime();
  const key = "ce72ebe1d56ebe106c52288686ac4c30c4539f07";
  const SecKey = "e4b23d29ca62a1d0adcf1c234120681bc2bd6941";

  const url =
    "https://codeforces.com/api/user.info?handles=" +
    handle +
    "&&apikey=" +
    key +
    "&time=" +
    time +
    "&apiSig=123456" +
    "sha512Hex(123456/user.info?handles=" +
    handle +
    "&apikey=" +
    key +
    "&time=" +
    time +
    "#" +
    SecKey +
    ")";

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

app.get("/", (req, res) => {
  res.send("This is home route");
});

app.get("/explore/:Handle", (req, res) => {
  const handle = req.params.Handle;
  fetchData(handle).then((data) => {
    if (data.status !== "OK") {
      console.log("No such handle");
      res.send("No such user");
    } else {
      console.log("Found!");
      res.status(200).send(data.result[0]); //here data[0] is an object
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on 9000!");
});

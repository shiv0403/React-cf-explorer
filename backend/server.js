const express = require("express");
const fetch = require("node-fetch");
const Cors = require("cors");

const app = express();
app.use(Cors());
const PORT = process.env.PORT || 9000;

async function fetchInfo(handle) {
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

async function fetchRating(handle) {
  const time = new Date().getTime();
  const key = "ce72ebe1d56ebe106c52288686ac4c30c4539f07";
  const SecKey = "e4b23d29ca62a1d0adcf1c234120681bc2bd6941";

  const url =
    "https://codeforces.com/api/user.rating?handle=" +
    handle +
    "&&apikey=" +
    key +
    "&time=" +
    time +
    "&apiSig=123456" +
    "sha512Hex(123456/user.rating?handle=" +
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

async function fetchStatus(handle) {
  const time = new Date().getTime();
  const key = "ce72ebe1d56ebe106c52288686ac4c30c4539f07";
  const SecKey = "e4b23d29ca62a1d0adcf1c234120681bc2bd6941";

  const url =
    "https://codeforces.com/api/user.status?handle=" +
    handle +
    "&from=1&count=20" +
    "&&apikey=" +
    key +
    "&time=" +
    time +
    "&apiSig=123456" +
    "sha512Hex(123456/user.status?handle=" +
    handle +
    "&from=1&count=20" +
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

app.get("/explore/Info/:Handle", (req, res) => {
  const handle = req.params.Handle;
  fetchInfo(handle).then((data) => {
    if (data.status !== "OK") {
      res.send("No such user");
    } else {
      res.status(200).send(data.result[0]); //here data[0] is an object
    }
  });
});

app.get("/explore/Rating/:Handle", (req, res) => {
  const handle = req.params.Handle;
  fetchRating(handle).then((data) => {
    if (data.status !== "OK") {
      res.send("No Contest attended yet!");
    } else {
      res.status(200).send(data.result);
    }
  });
});

app.get("/explore/Status/:Handle", (req, res) => {
  const handle = req.params.Handle;
  fetchStatus(handle).then((data) => {
    if (data.status !== "OK") {
      res.send("No Contest attended yet!");
    } else {
      res.status(200).send(data.result);
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on 9000!");
});

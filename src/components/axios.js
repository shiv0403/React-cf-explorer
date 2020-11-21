import axios from "axios";

const instance = axios.create({
  baseURL: "https://codeforces.com/api/",
});

export default instance;

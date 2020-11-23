import axios from "axios";

const instance = axios.create({
  baseURL: "https://cf-explorer-backend.herokuapp.com/",
});

export default instance;

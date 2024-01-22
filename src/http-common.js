import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8081/api", //api //might have to change the URL
  headers: {
    "Content-type": "application/json"
  }
});
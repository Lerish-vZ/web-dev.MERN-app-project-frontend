import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", //might have to change th URL
  headers: {
    "Content-type": "application/json"
  }
});
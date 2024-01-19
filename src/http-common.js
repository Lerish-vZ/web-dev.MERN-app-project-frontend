import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", //might have to change the URL
  headers: {
    "Content-type": "application/json"
  }
});
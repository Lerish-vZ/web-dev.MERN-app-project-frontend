import axios from "axios";

export default axios.create({
  baseURL: "https://lvz-web-development-bezkoder-tutorial-app.onrender.com", //"http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});

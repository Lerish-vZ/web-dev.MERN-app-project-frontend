import axios from "axios";

export default axios.create({
  baseURL: "https://lvz-web-dev-tutorial-backend-app.onrender.com/",
  headers: {
    "Content-type": "application/json"
  }
});
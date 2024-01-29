import axios from "axios";

export default axios.create({
  baseURL: "https://lvz-web-dev-tutorial-backend-app.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});
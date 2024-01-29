import axios from "axios";

export default axios.create({
  baseURL: "https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});

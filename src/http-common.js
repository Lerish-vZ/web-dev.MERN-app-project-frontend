import axios from "axios";

export default axios.create({
  baseURL: "https://tutorial-backend-av5n.onrender.com/api/tutorials",
  headers: {
    "Content-type": "application/json"
  }
});
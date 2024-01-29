import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://tutorial-backend.onrender.com/api/tutorials/");
  }

  get(id) {
    return http.get(`https://tutorial-backend.onrender.com/api/tutorials/${id}`);
  }

  create(data) {
    return http.post("https://tutorial-backend.onrender.com/api/tutorials/", data);
  }

  update(id, data) {
    return http.put(`https://tutorial-backend.onrender.com/api/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://tutorial-backend.onrender.com/api/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`https://tutorial-backend.onrender.com/api/tutorials`);
  }

  findByTitle(title) {
    return http.get(`https://tutorial-backend.onrender.com/api/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
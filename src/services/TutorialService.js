import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials");
  }

  get(id) {
    return http.get(`https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials/${id}`);
  }

  create(data) {
    return http.post("https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials", data);
  }

  update(id, data) {
    return http.put(`https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials`);
  }

  findByTitle(title) {
    return http.get(`https://lvz-web-development-bezkoder-tutorial-app.onrender.com/api/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
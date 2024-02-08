import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

class QuestionService {
    getQuestions() {
      return axios.get(API_BASE_URL + "/start", {
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
      });
    }
    addQuestion(question) {
      return axios.post(API_BASE_URL + "/add-question", question, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  
    // getEventByID(id) {
    //   return axios.get(EVENT_API_BASE_URL + "/" + id);
    // }
  
    // deleteEvenyById(id) {
    //   return axios.delete(EVENT_API_BASE_URL + "/" + id);
    // }
  }
  
  export default new QuestionService();
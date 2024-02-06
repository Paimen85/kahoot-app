import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:5000";

class AuthService {
    loginPageCall(email, password) {
      return axios.post(AUTH_API_BASE_URL + "/login", {
        email,
        password
      });
    }
    // addEvent(event) {
    //   return axios.post(EVENT_API_BASE_URL, event);
    // }
  
    // getEventByID(id) {
    //   return axios.get(EVENT_API_BASE_URL + "/" + id);
    // }
  
    // deleteEvenyById(id) {
    //   return axios.delete(EVENT_API_BASE_URL + "/" + id);
    // }
  }
  
  export default new AuthService();
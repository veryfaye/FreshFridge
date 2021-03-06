import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  saveFood: function(foodData) {
    return axios.post("/api/food", foodData);
  }
};
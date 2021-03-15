import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  getUser: function(userData){
    return axios.post("/api/user/login", userData);
  },
  saveFood: function(foodData) {
    return axios.post("/api/food", foodData);
  },
  getFoods: function() {
    return axios.get("/api/food");
  },
  getFood: function (id) {
    return axios.get("/api/food/" + id);
  }
};
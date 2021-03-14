import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  getUser: function(userData){
    return axios.post("/api/user/login", userData);
  },
  // ec
  logoutUser: function(userData){
    return axios.get("/api/user/logout", userData);
  },
  saveFood: function(foodData) {
    return axios.post("/api/food", foodData);
  },
  getFoods: function() {
    return axios.get("/api/food");
  },
  getFood: function (id) {
    return axios.get("/api/food/" + id);
  },
  // ec
  getAllGrocery: function(id) {
    return axios.get("/get-all/grocery" + id); 
  },
  // ec
  userFood: function(userID) {
    return axios.post 
  }

};
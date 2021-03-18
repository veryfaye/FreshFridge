import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  getUser: function(userData){
    return axios.post("/api/user/login", userData);
  },
  getUserByToken:function(token){
    return axios.get("/api/user/getByToken/"+token);
  },
  updateUser:function(userData){
    return axios.put("/api/user/updatePassword",userData);
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
  getAllGrocery: function() {
    return axios.put("/api/user/get-all/grocery"); 
  },
  addGrocery: function(id) {
    return axios.put("/api/user/grocery-item/" + id); 
  },
  // add fridge items
  addFridge: function(fridgeData) {
    return axios.post("/api/fridge", fridgeData); 
  }, 
  // get all user fridge items
  userFridge: function() {
    return axios.get("/api/fridge"); 
  }, 
  // update the user fridge
  updateFridge: function(id) {
    return axios.get("/api/fridge/" + id); 
  }, 
  // remove grocery items
  removeGrocery: function(id) {
    return axios.get("/api/food/delete/" + id); 
  }
};
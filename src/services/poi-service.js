import axios from "axios";
import {user} from "../stores.js"
import {poi} from "../stores.js"

export class PoiService {
  categoryList = [];
  poiList = [];
  baseUrl = "http://DESKTOP-9AB3VU3:4000";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.poi) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.poi);
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token
        });
        localStorage.poi = JSON.stringify(response.data.token)
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      const response = await axios.post(this.baseUrl + "/api/users", userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }
  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.poi = null;
  }

  async getCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories")
      this.categoryList = await response.data;
      return this.categoryList;
    } catch (error) {
      return [];
    }
  }
  async getCategoryById(id){
    try{
      const response = await axios.get(this.baseUrl + "/api/categories/" + id)
      const category = await response.data;
      console.log(category); 
      return category;
    }catch (error) {
      return [];
  }
}
  async getCategoryPois(id){
    try{
      const response = await axios.get(this.baseUrl + "/api/categories/" + id + "/pois")
      const poiList = await response.data;
      console.log(poiList);
      return poiList;
    } catch (error) {
      return [];
    }

  }
  async getPois() {
    try {
      const response = await axios.get(this.baseUrl + "/api/pois")
      console.log(response)
      this.poiList = await response.data;
      return this.poiList;
    } catch (error) {
      return [];
    }
  }
  async createPoi(name, description, category, lat, long, creator, image) {
    try {
      const poi = {
        name: name,
        description: description,
        category: category,
        lat: lat,
        long: long,
        creator: creator,
        image: image
      };
      //const cat = await axios.get(this.baseUrl + '/api/categories')
      console.log(poi);
      const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/pois", poi);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
  async deletePoi(id) {
    try {

//     const response1= await axios.get(`${this.baseUrl}/api/pois/${id}`);
      
      //const cat = await axios.get(this.baseUrl + '/api/categories')
     // console.log(response1);
      const response = await axios.delete(`${this.baseUrl}/api/pois/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  }
  async updateSettings(firstName, lastName, email, password, id) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        _id: id
      };
      console.log(userDetails);
      const response = await axios.put(`${this.baseUrl}/api/users/${id}`, userDetails);
      const newUser = await response.data;
      user.set(newUser);
      return true;
    } catch (error) {
      return false;
    }
  }
  async deleteUser(id){
        try {
          const response = await axios.delete(`${this.baseUrl}/api/users/${id}`);
          return response.data;
        } catch (e) {
          return null;
        }
      }
    }
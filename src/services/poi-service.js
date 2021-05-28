import axios from "axios";
import {user} from "../stores.js"
import {poi} from "../stores.js"
import {category} from "../stores"


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
      console.log(response)
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
      token: "",

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
  async updateCategory(name, id) {
    try {
      const categoryDetails = {
        name: name,
        _id: id
      };
     // console.log(categoryDetails);
      const response = await axios.put(this.baseUrl + "/api/categories/" + id, categoryDetails);
      const newCategory = await response.data;
     // console.log(newCategory);
      category.set(newCategory);
      return true;
    } catch (error) {
      return false;
    }
  }
  async deleteCategory(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/api/categories/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  }
  async addCategory(name) {
    try {
      const category = {
        name: name,
      };
      //const cat = await axios.get(this.baseUrl + '/api/categories')
     // console.log(poi);
      const response = await axios.post(this.baseUrl + "/api/categories ", category);
      return true;
    } catch (error) {
      return false;
    }
  }
  async getPois() {
    try {
      const response = await axios.get(this.baseUrl + "/api/pois")
     // console.log(response)
      this.poiList = await response.data;
      return this.poiList;
    } catch (error) {
      return [];
    }
  }
  async getPoiById(id) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/pois/${id}`)
      //console.log(response)
      const poi = await response.data;
      //console.log(poi)
      return poi;
    } catch (error) {
      return null;
    }
  }
  async getImages(id){
    try{
      console.log(id);
      const response = await axios.get(`${this.baseUrl}/api/gallery/${id}`)
      const images = await response.data;
      console.log(images);
      return images;
    } catch (error){
      return null;
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
     // console.log(poi);
      const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/pois", poi);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
  async deletePoi(id) {
    try {
      const response = await axios.delete(`${this.baseUrl}/api/pois/${id}`);
      return response.data;
    } catch (error) {
      return false;
    }
  }
  async updatePoi(name, description, category, lat, long, image, creator, id) {
    try {
      const poiDetails = {
        name: name,
        description: description,
        category: category,
        lat: lat,
        long: long,
        image: image,
        creator: creator,
        _id: id
      };
      console.log(poiDetails);
      const response = await axios.put(this.baseUrl + "/api/pois/" + id, poiDetails);
      const newPoi = await response.data;
      console.log(response);
      poi.set(newPoi);
      return true;
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
  async getUserById(id){
    const response = await axios.get(`${this.baseUrl}/api/users/${id}`)
      //console.log(response)
      const user = await response.data;
      user.set(user);
     // console.log(user)
      return user;
    } catch (error) {
      return null;
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
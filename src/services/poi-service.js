import axios from "axios";
import {user} from "../stores.js"

export class PoiService {
  categoryList = [];
  poiList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      user.set(response.data);
      return response.status == 200;
    } catch (error) {
      return false;
    }
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

  async getPois() {
    try {
      const response = await axios.get(this.baseUrl + "/api/pois")
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
      const response = await axios.post(this.baseUrl + "/api/categories/" + category._id + "/pois", poi);
      return response.status == 200;
    } catch (error) {
      return false;
    }
  }
}
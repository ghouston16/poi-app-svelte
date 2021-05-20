export class PoiService {
  categoryList = [];
  baseUrl = "";

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getCategories() {
    try {
      const response = await fetch(this.baseUrl + "/api/categories")
      this.categoryList = await response.json();
      return this.categoryList;
    } catch (error) {
      return [];
    }
  }

  async getPois() {
    try {
      const response = await fetch(this.baseUrl + "/api/pois")
      this.poiList = await response.json();
      return this.poiList;
    } catch (error) {
      return [];
    }
  }
}
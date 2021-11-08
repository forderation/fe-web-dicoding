import API_ENDPOINT from './api-endpoint';

class Repositories {
  static async getListRestataurant () {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async getDetailRestaturant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default Repositories;

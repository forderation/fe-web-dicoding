import API_ENDPOINT from './api-endpoint';

class Repositories {
  static async getListRestataurant () {
    const errorMessage = 'sorry there is something problem with our server, please reload again';
    let response;
    try {
      response = await fetch(API_ENDPOINT.LIST);
    } catch (_) {
      throw errorMessage;
    }
    const responseJson = await response.json();
    if (responseJson.error) {
      throw responseJson.message || errorMessage;
    }
    return responseJson;
  }

  static async getDetailRestaturant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default Repositories;

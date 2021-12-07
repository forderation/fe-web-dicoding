import Toast from '../util/toastr';
import API_ENDPOINT from '../global/api-endpoint';

const ERROR_MESSAGE = 'Sorry there is something problem: ';

class RestaurantRepository {
  static async getListRestaurant () {
    let response;
    try {
      response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      if (responseJson.error) {
        throw responseJson.message || ERROR_MESSAGE;
      }
      return responseJson;
    } catch (error) {
      Toast.notify().error(ERROR_MESSAGE + error.toString());
      throw new Error(ERROR_MESSAGE);
    }
  }

  static async getDetailRestaurant (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (error) {
      Toast.notify().error(ERROR_MESSAGE + error.toString());
      throw new Error(ERROR_MESSAGE);
    }
  }

  static async postReview (review) {
    try {
      const response = await fetch(API_ENDPOINT.SUBMIT_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
      });
      return response.json();
    } catch (error) {
      Toast.notify().error(ERROR_MESSAGE + error.toString());
      throw new Error(ERROR_MESSAGE);
    }
  }

  static async searchRestaurant (query) {
    let response = [];
    if (!query || query.length < 1) {
      return response;
    }
    try {
      response = await fetch(API_ENDPOINT.SEARCH(query));
      const responseJson = await response.json();
      if (responseJson.error) {
        throw responseJson.message || ERROR_MESSAGE;
      }
      return responseJson;
    } catch (error) {
      Toast.notify().error(ERROR_MESSAGE + error.toString());
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default RestaurantRepository;

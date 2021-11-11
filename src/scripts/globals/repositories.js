import toast from '../utils/toastr';
import API_ENDPOINT from './api-endpoint';

const ERROR_MESSAGE = 'sorry there is something problem. error message: ';

class Repositories {
  static async getListRestataurant () {
    let response;
    try {
      response = await fetch(API_ENDPOINT.LIST);
      const responseJson = await response.json();
      if (responseJson.error) {
        throw responseJson.message || ERROR_MESSAGE;
      }
      return responseJson;
    } catch (error) {
      toast().error(ERROR_MESSAGE + error.toString());
      throw new Error(ERROR_MESSAGE);
    }
  }

  static async getDetailRestaturant (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      return response.json();
    } catch (error) {
      toast().error(ERROR_MESSAGE + error.toString());
      throw new Error(ERROR_MESSAGE);
    }
  }
}

export default Repositories;

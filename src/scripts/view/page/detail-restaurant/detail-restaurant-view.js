import Spin from '../../../util/spinner';

export default class DetailRestaurantView {
  constructor ({ likeButtonManager }) {
    this._likeButtonManager = likeButtonManager;
    this._spinner = new Spin('#detail-content');
  }

  getTemplate () {
    return /* html */`
      <div id="error-section">
      </div>
      <div id="detail-content">
      </div>
      <div id="likeButtonContainer" tabindex="1"></div>
    `;
  }

  setIsLoading (state) {
    if (state) {
      this._spinner.loadSpinner();
    } else {
      this._spinner.stopSpinner();
    }
  }

  async showDetail (restaurant) {
    const restaurantContainer = document.querySelector('#detail-content');
    const detailPage = document.createElement('detail-page');
    detailPage.restaurant = restaurant;
    restaurantContainer.innerHTML += detailPage;
    await this._likeButtonManager.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurant
    });
    document.querySelector('#error-section').remove();
  }

  showError () {
    const errorContainer = document.querySelector('#error-section');
    const errorComponent = document.createElement('error-internal');
    errorContainer.innerHTML += errorComponent;
  }

  showNotFound () {
    const restaurantContainer = document.querySelector('#detail-content');
    const notFoundElement = document.createElement('not-found');
    restaurantContainer.innerHTML += notFoundElement;
  }
}

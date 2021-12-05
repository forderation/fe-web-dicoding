import Spin from '../../../util/spinner';

export default class FavListRestaurantView {
  constructor () {
    this._spinner = new Spin('#contents');
  }

  getTemplate () {
    return /* html */ `
    <div class="hero">
      <img src="./images/heros/hero-image_4.jpg" alt="Liked Foods" />
    </div>
    <div id="error-section">
    </div>
    <div class="top-banner" id="fav-title">
      <h1 id="banner-desc">Your Favorite Restaurants</h1>
    </div>
    <div id="contents" class="explore-foods">
    </div>
    `;
  }

  setIsLoading (state) {
    if (state) {
      this._spinner.loadSpinner();
    } else {
      this._spinner.stopSpinner();
    }
  }

  showFavoriteList (restaurants) {
    const restaurantContainer = document.querySelector('#contents');
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      restaurantContainer.appendChild(restaurantItem);
    });
  }

  showEmptyList () {
    const restaurantContainer = document.querySelector('#contents');
    const notFoundElement = document.createElement('empty-favorite');
    restaurantContainer.appendChild(notFoundElement);
    restaurantContainer.classList.remove('explore-foods');
  }

  showError () {
    document.querySelector('#fav-title').style.display = 'none';
    document.querySelector('#contents').style.display = 'none';
    const errorContainer = document.querySelector('#error-section');
    const errorComponent = document.createElement('error-internal');
    errorContainer.appendChild(errorComponent);
  }
}

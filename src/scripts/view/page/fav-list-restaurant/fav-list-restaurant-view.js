import Spin from '../../../util/spinner';

export default class FavListRestaurantView {
  constructor () {
    this._spinner = new Spin('#contents');
  }

  set query (query) {
    this._query = query;
  }

  get query () {
    return this._query;
  }

  getTemplate () {
    return /* html */ `
    <div class="hero">
      <img src="./images/heros/hero-image_4.jpg" alt="Liked Foods" />
    </div>
    <div class="top-banner" id="fav-title">
      <h1 id="banner-desc">Your Favorite Restaurants</h1>
      <form id="form-search">
        <div class="form-wrap">
          <input type="text" class="form-control" id="input-search" aria-describedby="search" placeholder="type restaurant name" />
          <button id="submit-search" class="btn-primary"> <i class="fas fa-search"></i> Search</button>
        </div>
      </form>
    </div>
    <div id="contents" class="explore-foods">
    </div>
    <div id="placeholder">
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

  setCallbackSearch () {
    const that = this;
    document.querySelector('#form-search').addEventListener('submit', function (event) {
      event.preventDefault();
      const query = document.querySelector('#input-search').value;
      that.query = query;
      document.dispatchEvent(new CustomEvent('search-favorite-restaurant'));
    });
  }

  showFavoriteList (restaurants) {
    const restaurantContainer = document.querySelector('#contents');
    document.querySelector('#contents').style.display = 'grid';
    restaurantContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      restaurantContainer.appendChild(restaurantItem);
    });
    document.querySelector('#placeholder').style.display = 'none';
  }

  showEmptySearch (keyword) {
    document.querySelector('#placeholder').style.display = 'block';
    const restaurantContainer = document.querySelector('#placeholder');
    restaurantContainer.innerHTML = '';
    const notSearchElement = document.createElement('empty-search');
    notSearchElement.keyword = keyword;
    restaurantContainer.appendChild(notSearchElement);
    document.querySelector('#contents').style.display = 'none';
  }

  showEmptyList () {
    document.querySelector('#placeholder').style.display = 'block';
    document.querySelector('#fav-title').style.display = 'none';
    const restaurantContainer = document.querySelector('#placeholder');
    restaurantContainer.innerHTML = '';
    const notFoundElement = document.createElement('empty-favorite');
    restaurantContainer.appendChild(notFoundElement);
    document.querySelector('#contents').style.display = 'none';
  }

  showError () {
    document.querySelector('#placeholder').style.display = 'block';
    document.querySelector('#fav-title').style.display = 'none';
    document.querySelector('#contents').style.display = 'none';
    const errorContainer = document.querySelector('#placeholder');
    errorContainer.innerHTML = '';
    const errorComponent = document.createElement('error-internal');
    errorContainer.appendChild(errorComponent);
    document.querySelector('#contents').style.display = 'none';
  }
}


export default class FavListRestaurantView {
  constructor ({ spinner }) {
    this._spinner = spinner;
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
      <picture>
        <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/hero-image_4-small.jpg" class="lazyload">
        <source media="(max-width: 1000px)" type="image/jpeg" srcset="./images/hero-image_4-large.jpg" class="lazyload">
        <img src="./images/hero-image_4.jpg" alt="Liked Foods" class="lazyload">
      </picture>
    </div>
    <div class="top-banner" id="fav-title">
      <h1 id="banner-desc">Your Favorite Restaurants</h1>
      <form id="form-search">
        <div class="form-wrap">
          <input type="text" class="form-control" id="input-search" aria-describedby="search" placeholder="search with type restaurant name" />
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
    if (this._spinner) {
      if (state) {
        this._spinner.loadSpinner();
      } else {
        this._spinner.stopSpinner();
      }
    }
  }

  setCallbackSearch () {
    const that = this;
    document.querySelector('#form-search').addEventListener('submit', function (event) {
      event.preventDefault();
      const query = document.querySelector('#input-search').value;
      that.query = query.trim();
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
    restaurantContainer.dispatchEvent(new Event('restaurants:updated'));
  }

  showEmptySearch (keyword) {
    document.querySelector('#placeholder').style.display = 'block';
    const placeHolder = document.querySelector('#placeholder');
    placeHolder.innerHTML = '';
    const notSearchElement = document.createElement('empty-search');
    notSearchElement.keyword = keyword;
    placeHolder.appendChild(notSearchElement);
    document.querySelector('#contents').style.display = 'none';
    placeHolder.dispatchEvent(new Event('restaurants:updated'));
  }

  showEmptyList () {
    document.querySelector('#placeholder').style.display = 'block';
    document.querySelector('#fav-title').style.display = 'none';
    const placeHolder = document.querySelector('#placeholder');
    placeHolder.innerHTML = '';
    const notFoundElement = document.createElement('empty-favorite');
    placeHolder.appendChild(notFoundElement);
    document.querySelector('#contents').style.display = 'none';
    placeHolder.dispatchEvent(new Event('restaurants:updated'));
  }

  showError () {
    document.querySelector('#placeholder').style.display = 'block';
    document.querySelector('#fav-title').style.display = 'none';
    document.querySelector('#contents').style.display = 'none';
    const placeHolder = document.querySelector('#placeholder');
    placeHolder.innerHTML = '';
    const errorComponent = document.createElement('error-internal');
    placeHolder.appendChild(errorComponent);
    document.querySelector('#contents').style.display = 'none';
  }
}

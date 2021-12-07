import Spin from '../../../util/spinner';

export default class HomeView {
  constructor () {
    this._spinner = new Spin('#detail-content');
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
        <img src="./images/heros/hero-image_2.jpg" alt="Explore Foods" />
      </div>
      <div class="top-banner" id="banner-food">
        <form id="form-search">
          <div class="form-wrap">
            <input type="text" class="form-control" id="input-search" aria-describedby="search" placeholder="search with type restaurant name" />
            <button id="submit-search" class="btn-primary"> <i class="fas fa-search"></i> Search</button>
          </div>
        </form>
        <h1 id="banner-title" tabindex="0">What we serve</h1>
        <div class="services">
          <section class="service">
            <img src="./images/img1.png" alt="Easy To Order" />
            <figcaption tabindex="0">Easy To Order</figcaption>
            <p tabindex="0">You only need a few steps in ordering food.</p>
          </section>
          <section class="service">
            <img src="./images/img2.png" alt="Fastest Delivery" />
            <figcaption tabindex="0">Fastest Delivery</figcaption>
            <p tabindex="0">Delivery that is always on time even faster.</p>
          </section>
          <section class="service">
            <img src="./images/img3.png" alt="Best Quality" />
            <figcaption tabindex="0">Best Quality</figcaption>
            <p tabindex="0">Not only fast for us quality is also number one.</p>
          </section>
        </div>
        <h1 id="banner-desc" tabindex="0">Explore Your Foods</h1>
      </div>
      <div id="home" tabindex="-1">
        <div id="contents" class="explore-foods"></div>
        <div id="placeholder"></div>
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
      document.dispatchEvent(new CustomEvent('search-restaurant'));
    });
  }

  focus () {
    document.querySelector('#home').focus();
  }

  showHome (restaurants) {
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

  showError () {
    document.querySelector('#placeholder').style.display = 'block';
    document.querySelector('#contents').style.display = 'none';
    const errorContainer = document.querySelector('#placeholder');
    errorContainer.innerHTML = '';
    const errorComponent = document.createElement('error-internal');
    errorContainer.appendChild(errorComponent);
    document.querySelector('#contents').style.display = 'none';
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
}

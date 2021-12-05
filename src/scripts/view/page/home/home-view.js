import Spin from '../../../util/spinner';

export default class HomeView {
  constructor () {
    this._spinner = new Spin('#detail-content');
  }

  getTemplate () {
    return /* html */ `
      <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="Explore Foods" />
      </div>
      <div id="error-section">
      </div>
      <div class="top-banner" id="banner-food">
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
      <div id="contents" class="explore-foods"></div>
    `;
  }

  setIsLoading (state) {
    if (state) {
      this._spinner.loadSpinner();
    } else {
      this._spinner.stopSpinner();
    }
  }

  showHome (restaurants) {
    const restaurantContainer = document.querySelector('#contents');
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      restaurantContainer.appendChild(restaurantItem);
    });
  }

  showError () {
    document.querySelector('#banner-food').style.display = 'none';
    document.querySelector('#contents').style.display = 'none';
    const errorContainer = document.querySelector('#error-section');
    const errorComponent = document.createElement('error-internal');
    errorContainer.appendChild(errorComponent);
  }
}

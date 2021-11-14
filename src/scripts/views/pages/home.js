import $ from 'jquery';
import { loadSpinner, stopSpinner } from '../../utils/spinner';
import Repositories from '../../data/repositories';

const Home = {
  render () {
    return /* html */ `
      <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="Explore Foods" />
      </div>
      <div id="error-section">
      </div>
      <div class="top-banner" id="banner-food">
        <h1 id="banner-title">What we serve</h1>
        <div class="services">
          <section class="service">
            <img src="./images/img1.png" alt="Easy To Order" />
            <figcaption>Easy To Order</figcaption>
            <p>You only need a few steps in ordering food.</p>
          </section>
          <section class="service">
            <img src="./images/img2.png" alt="Fastest Delivery" />
            <figcaption>Fastest Delivery</figcaption>
            <p>Delivery that is always ontime even faster.</p>
          </section>
          <section class="service">
            <img src="./images/img3.png" alt="Best Quality" />
            <figcaption>Best Quality</figcaption>
            <p>Not only fast for us quality is also number one.</p>
          </section>
        </div>
        <h1 id="banner-desc">Explore Your Foods</h1>
      </div>
      <div id="contents" class="explore-foods"></div>
    `;
  },
  async afterRender () {
    const restaturantContainer = $('#contents');
    loadSpinner(restaturantContainer);
    let response = null;
    try {
      response = await Repositories.getListRestataurant();
    } catch (_) {
      this.afterLoad(true);
      return;
    }
    this.afterLoad();
    response.restaurants.forEach((restaturantData) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaturant = restaturantData;
      restaturantContainer.append(restaurantItem);
    });
  },
  afterLoad (isError = false) {
    if (isError) {
      $('#banner-food').hide();
      $('#contents').hide();
      const errorContainer = $('#error-section');
      const errorComponent = document.createElement('error-internal');
      errorContainer.append(errorComponent);
    } else {
      $('#error-section').remove();
    }
    stopSpinner();
  }
};

export default Home;

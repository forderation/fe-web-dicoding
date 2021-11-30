import $ from 'jquery';
import FavRestaturantIdb from '../../data/fav-restaurant-idb';
import { loadSpinner, stopSpinner } from '../../util/spinner';

const LikedRestaturant = {
  async render () {
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
  },
  async afterRender () {
    const restaturantContainer = $('#contents');
    loadSpinner(restaturantContainer);
    let restaturants = null;
    try {
      restaturants = await FavRestaturantIdb.getListRestaturant();
    } catch (_) {
      this.afterLoad(true);
      return;
    }
    this.afterLoad();
    if (restaturants == null || restaturants.length < 1) {
      const notFoundElement = document.createElement('empty-favorite');
      restaturantContainer.html(notFoundElement);
      restaturantContainer.removeClass('explore-foods');
      return;
    }
    restaturants.forEach((restaturantData) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaturant = restaturantData;
      restaturantContainer.append(restaurantItem);
    });
  },
  afterLoad (isError = false) {
    if (isError) {
      $('#fav-title').hide();
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

export default LikedRestaturant;

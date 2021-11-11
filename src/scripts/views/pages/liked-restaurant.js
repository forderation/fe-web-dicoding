import $ from 'jquery';
import FavRestaturantIdb from '../../data/fav-restaurant-idb';
import { loadSpinner, stopSpinner } from '../../utils/spinner';

const LikedRestaturant = {
  async render () {
    return /* html */ `
    <div class="hero">
      <img src="./images/heros/hero-image_4.jpg" alt="Liked Foods" />
    </div>
    <div class="top-banner" id="fav-title">
      <h1 id="banner-desc">Your Favorite Foods</h1>
    </div>
    <div id="contents" class="explore-foods">
    </div>
    `;
  },
  async afterRender () {
    const restaturantContainer = $('#contents');
    const spiner = loadSpinner(restaturantContainer);
    const restaturants = await FavRestaturantIdb.getListRestaturant();
    if (restaturants == null || restaturants.length < 1) {
      const notFoundElement = document.createElement('empty-favorite');
      restaturantContainer.html(notFoundElement);
      restaturantContainer.removeClass('explore-foods');
      return;
    }
    stopSpinner(spiner);
    restaturants.forEach((restaturantData) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaturant = restaturantData;
      restaturantContainer.append(restaurantItem);
    });
  }
};

export default LikedRestaturant;

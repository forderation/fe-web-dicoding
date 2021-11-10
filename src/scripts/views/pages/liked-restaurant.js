import $ from 'jquery';
import FavRestaturantIdb from '../../data/fav-restaurant-idb';
import { createResturantItemTemplate } from '../templates/template-creator';

const LikedRestaturant = {
  async render () {
    return /* html */ `
    <div class="hero">
      <img src="./images/heros/hero-image_4.jpg" alt="" />
    </div>
    <div class="top-banner">
      <h1 id="banner-desc">Your Favorite Foods</h1>
    </div>
    <div id="contents" class="explore-foods"></div>
    `;
  },
  async afterRender () {
    const restaturants = await FavRestaturantIdb.getListRestaturant();
    const restaturantContainer = $('#contents');
    restaturants.forEach(function (restaturant) {
      const template = createResturantItemTemplate(restaturant);
      restaturantContainer.append(template);
    });
  }
};

export default LikedRestaturant;

import $ from 'jquery';
import Repositories from '../../globals/repositories';
import UrlParser from '../../routes/url-parser';
import LikeButtonManager from '../../utils/like-button-manager';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render () {
    return /* html */`
      <div id="detail-content">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender () {
    const url = UrlParser.parseActiveWithoutCombiner();
    const response = await Repositories.getDetailRestaturant(url.id);
    if (response.error) {
      window.location.hash = '#/not-found';
      return;
    }
    const restaurant = response.restaurant;
    const restaturantContainer = $('#detail-content');
    restaturantContainer.html(createRestaurantDetailTemplate(restaurant));
    await LikeButtonManager.init({
      likeButtonContainer: $('#likeButtonContainer'),
      restaurant: restaurant
    });
  }
};

export default DetailRestaurant;

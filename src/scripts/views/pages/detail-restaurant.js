import $ from 'jquery';
import Repositories from '../../globals/repositories';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonComponent from '../../utils/like-button-component';

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
    const restaurant = response.restaurant;
    const restaturantContainer = $('#detail-content');
    restaturantContainer.html(createRestaurantDetailTemplate(restaurant));
    await LikeButtonComponent.init({
      likeButtonContainer: $('#likeButtonContainer'),
      restaurant: restaurant
    });
  }
};

export default DetailRestaurant;

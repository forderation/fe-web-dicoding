import Repositories from '../../globals/repositories';
import UrlParser from '../../routes/url-parser';
import $ from 'jquery';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render () {
    return /* html */`
      <div class="detail-page" id="detail-content">
      </div>
    `;
  },
  async afterRender () {
    const url = UrlParser.parseActiveWithoutCombiner();
    const response = await Repositories.getDetailRestaturant(url.id);
    const restaurant = response.restaurant;
    const restaturantContainer = $('#detail-content');
    restaturantContainer.html(createRestaurantDetailTemplate(restaurant));
  }
};

export default DetailRestaurant;

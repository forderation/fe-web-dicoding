import $ from 'jquery';
import Repositories from '../../globals/repositories';
import UrlParser from '../../routes/url-parser';
import LikeButtonManager from '../../utils/like-button-manager';

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
    const restaturantContainer = $('#detail-content');
    if (response.error) {
      const notFoundElement = document.createElement('not-found');
      restaturantContainer.html(notFoundElement);
      return;
    }
    const restaurant = response.restaurant;
    const detailPage = document.createElement('detail-page');
    detailPage.restaurant = restaurant;
    restaturantContainer.html(detailPage);
    await LikeButtonManager.init({
      likeButtonContainer: $('#likeButtonContainer'),
      restaurant: restaurant
    });
  }
};

export default DetailRestaurant;

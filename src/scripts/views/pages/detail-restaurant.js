import $ from 'jquery';
import Repositories from '../../data/repositories';
import UrlParser from '../../routes/url-parser';
import LikeButtonManager from '../../utils/like-button-manager';
import { loadSpinner, stopSpinner } from '../../utils/spinner';

const DetailRestaurant = {
  async render () {
    return /* html */`
      <div id="error-section">
      </div>
      <div id="detail-content">
      </div>
      <div id="likeButtonContainer" tabindex="1"></div>
    `;
  },
  async afterRender () {
    const url = UrlParser.parseActiveWithoutCombiner();
    const restaturantContainer = $('#detail-content');
    loadSpinner(restaturantContainer);
    let response = null;
    try {
      response = await Repositories.getDetailRestaturant(url.id);
    } catch (_) {
      this.afterLoad(true);
    }
    this.afterLoad();
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
  },
  afterLoad (isError = false) {
    if (isError) {
      $('#detail-content').hide();
      const errorContainer = $('#error-section');
      const errorComponent = document.createElement('error-internal');
      errorContainer.append(errorComponent);
    } else {
      $('#error-section').remove();
    }
    stopSpinner();
  }
};

export default DetailRestaurant;

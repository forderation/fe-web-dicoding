import FavRestaturantIdb from '../../data/fav-restaurant-idb';
import $ from 'jquery';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../templates/template-creator';

const LikeButtonComponent = {

  TAG_LIKE_BUTTON: '#likeButton',

  async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaturant = restaurant;
    await this._renderButton();
  },

  async _renderButton () {
    const { id } = this._restaturant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist (id) {
    const restaturant = await FavRestaturantIdb.getRestaurant(id);
    return !!restaturant;
  },

  _renderLiked () {
    const template = createLikedButtonTemplate();
    this._likeButtonContainer.html(template);
    const likeButton = $(this.TAG_LIKE_BUTTON);
    const thisComponent = this;
    likeButton.on('click', async function () {
      await FavRestaturantIdb.deleteRestaurant(thisComponent._restaturant.id);
      thisComponent._renderButton();
    });
  },

  _renderLike () {
    const template = createLikeButtonTemplate();
    this._likeButtonContainer.html(template);
    const likeButton = $(this.TAG_LIKE_BUTTON);
    const thisComponent = this;
    likeButton.on('click', async function () {
      await FavRestaturantIdb.putRestaurant(thisComponent._restaturant);
      thisComponent._renderButton();
    });
  }
};

export default LikeButtonComponent;

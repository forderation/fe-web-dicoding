import FavRestaurantIdb from '../data/fav-restaurant-idb';
import $ from 'jquery';
import toast from './toastr';

const LikeButtonManager = {

  TAG_LIKE_BUTTON: '#likeButton',

  async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton () {
    const { id } = this._restaurant;
    const isRestaurantExist = await this._isRestaurantExist(id);
    isRestaurantExist ? this._renderLiked() : this._renderLike();
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLiked () {
    const likeButtonTemplate = document.createElement('like-button');
    likeButtonTemplate.like = true;
    this._likeButtonContainer.html(likeButtonTemplate);
    const likeButton = $(this.TAG_LIKE_BUTTON);
    const that = this;
    likeButton.on('click', async () => {
      await FavRestaurantIdb.deleteRestaurant(that._restaurant.id);
      toast().warning(`removed ${that._restaurant.name} from favorite restaurant`.toLowerCase());
      that._renderButton();
    });
  },

  _renderLike () {
    const likeButtonTemplate = document.createElement('like-button');
    likeButtonTemplate.like = false;
    this._likeButtonContainer.html(likeButtonTemplate);
    const likeButton = $(this.TAG_LIKE_BUTTON);
    const that = this;
    likeButton.on('click', async () => {
      await FavRestaurantIdb.putRestaurant(that._restaurant);
      toast().success(`added ${that._restaurant.name} to favorite restaurant`.toLowerCase());
      that._renderButton();
    });
  }
};

export default LikeButtonManager;

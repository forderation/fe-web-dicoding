import FavRestaurantIdb from '../data/fav-restaurant-idb';
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
    const likeButtonElement = document.createElement('like-button');
    likeButtonElement.like = true;
    this._likeButtonContainer.innerHTML = '';
    this._likeButtonContainer.appendChild(likeButtonElement);
    const likeButton = document.querySelector(this.TAG_LIKE_BUTTON);
    const that = this;
    likeButton.addEventListener('click', async function () {
      await FavRestaurantIdb.deleteRestaurant(that._restaurant.id);
      toast().warning(`removed ${that._restaurant.name} from favorite restaurant`.toLowerCase());
      await that._renderButton();
    });
  },

  _renderLike () {
    const likeButtonElement = document.createElement('like-button');
    likeButtonElement.like = false;
    this._likeButtonContainer.innerHTML = '';
    this._likeButtonContainer.appendChild(likeButtonElement);
    const likeButton = document.querySelector(this.TAG_LIKE_BUTTON);
    const that = this;
    likeButton.addEventListener('click', async function () {
      await FavRestaurantIdb.putRestaurant(that._restaurant);
      toast().success(`added ${that._restaurant.name} to favorite restaurant`.toLowerCase());
      await that._renderButton();
    });
  }
};

export default LikeButtonManager;

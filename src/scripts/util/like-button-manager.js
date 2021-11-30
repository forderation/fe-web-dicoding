import FavRestaturantIdb from '../data/fav-restaurant-idb';
import $ from 'jquery';
import toast from './toastr';

const LikeButtonManager = {

  TAG_LIKE_BUTTON: '#likeButton',

  async init ({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaturant = restaurant;
    await this._renderButton();
  },

  async _renderButton () {
    const { id } = this._restaturant;
    const isRestaurantExist = await this._isRestaurantExist(id);
    isRestaurantExist ? this._renderLiked() : this._renderLike();
  },

  async _isRestaurantExist (id) {
    const restaturant = await FavRestaturantIdb.getRestaurant(id);
    return !!restaturant;
  },

  _renderLiked () {
    const likeButtonTemplate = document.createElement('like-button');
    likeButtonTemplate.like = true;
    this._likeButtonContainer.html(likeButtonTemplate);
    const likeButton = $(this.TAG_LIKE_BUTTON);
    const that = this;
    likeButton.on('click', async () => {
      await FavRestaturantIdb.deleteRestaurant(that._restaturant.id);
      toast().warning(`removed ${that._restaturant.name} from favorite restaurant`.toLowerCase());
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
      await FavRestaturantIdb.putRestaurant(that._restaturant);
      toast().success(`added ${that._restaturant.name} to favorite restaurant`.toLowerCase());
      that._renderButton();
    });
  }
};

export default LikeButtonManager;

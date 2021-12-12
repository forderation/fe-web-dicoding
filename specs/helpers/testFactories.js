import LikeButtonManager from '../../src/scripts/util/like-button-manager';
import EmptyFavorite from '../../src/scripts/view/component/empty-favorite';
import EmptySearch from '../../src/scripts/view/component/empty-search';
import ErrorInternal from '../../src/scripts/view/component/error-internal';
import NotFound from '../../src/scripts/view/component/not-found';
import RestaurantItem from '../../src/scripts/view/component/restaurant-item';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonManager.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant: restaurant
  });
};

const createCustomElement = () => {
  customElements.define('restaurant-item', RestaurantItem);
  customElements.define('not-found', NotFound);
  customElements.define('empty-favorite', EmptyFavorite);
  customElements.define('error-internal', ErrorInternal);
  customElements.define('empty-search', EmptySearch);
};

export { createLikeButtonPresenterWithRestaurant, createCustomElement };

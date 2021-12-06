import LikeButtonManager from '../../src/scripts/util/like-button-manager';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonManager.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant: restaurant
  });
};

export { createLikeButtonPresenterWithRestaurant };

import FavRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import LikeButton from '../src/scripts/view/component/like-button';
import { createLikeButtonPresenterWithRestaurant } from './helpers/testFactories';

customElements.define('like-button', LikeButton);

describe('Liking a Restaurant', function () {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer" tabindex="1"></div>';
  };

  beforeEach(function () {
    addLikeButtonContainer();
  });

  it('should show the like button when restaurant has not been liked before', async function () {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    await FavRestaurantIdb.putRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavRestaurantIdb.getListRestaurant()).toEqual([{ id: 1 }]);

    FavRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavRestaurantIdb.getListRestaurant()).toEqual([]);
  });
});

import FavRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import { createLikeButtonPresenterWithRestaurant } from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Disliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavRestaurantIdb.getListRestaurant()).toEqual([]);
  });

  it('should not throw error if the dislike restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavRestaurantIdb.getListRestaurant()).toEqual([]);
  });
});

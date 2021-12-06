import FavRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    // eslint-disable-next-line no-unexpected-multiline
    (await FavRestaurantIdb.getListRestaurant()).forEach(async (restaurant) => {
      await FavRestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavRestaurantIdb);
});

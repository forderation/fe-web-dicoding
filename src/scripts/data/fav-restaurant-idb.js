import { openDB } from 'idb';
import CONFIG from '../global/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  }
});

const FavRestaurantIdb = {
  async getRestaurant (id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getListRestaurant () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestaurant (restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchRestaurant (query) {
    return (await this.getListRestaurant())
      .filter((restaurant) => {
        const lowerCasedRestaurantName = (restaurant.name || '-').toLowerCase();
        const restaurantTitle = lowerCasedRestaurantName.replace(/\s/g, '');
        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
        return restaurantTitle.indexOf(jammedQuery) !== -1;
      });
  }
};

export default FavRestaurantIdb;

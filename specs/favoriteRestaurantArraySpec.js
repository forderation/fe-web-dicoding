/* eslint-disable no-useless-return */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getRestaurant (id) {
    if (!id) return;
    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },
  getListRestaurant () {
    return favoriteRestaurants;
  },
  putRestaurant (restaurant) {
    if (!restaurant.hasOwnProperty('id')) return;
    if (this.getRestaurant(restaurant.id)) return;
    favoriteRestaurants.push(restaurant);
  },
  deleteRestaurant (id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
  searchRestaurant (query) {
    return this.getListRestaurant()
      .filter((restaurant) => {
        const lowerCasedRestaurantName = (restaurant.name || '-').toLowerCase();
        const restaurantTitle = lowerCasedRestaurantName.replace(/\s/g, '');
        const loweredCaseQuery = query.toLowerCase();
        const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
        return restaurantTitle.indexOf(jammedQuery) !== -1;
      });
  }
};

describe('favorite restaurant array contract test implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteRestaurants = []);
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});

export default class FavListRestaurantPresenter {
  constructor ({ view, favRestaurantDB }) {
    this._view = view;
    this._favRestaurantDB = favRestaurantDB;
    this._showFavListRestaurant();
    this._registerSearchEvent();
    this._view.setCallbackSearch();
  }

  async _showFavListRestaurant () {
    this._view.setIsLoading(true);
    let restaurants = null;
    try {
      restaurants = await this._favRestaurantDB.getListRestaurant();
    } catch (_) {
      this._view.setIsLoading(false);
      this._view.showError();
      return;
    }
    this._view.setIsLoading(false);
    if (restaurants == null || restaurants.length < 1) {
      this._view.showEmptyList();
      return;
    }
    this._view.showFavoriteList(restaurants);
  }

  _registerSearchEvent () {
    const that = this;
    document.addEventListener('search-favorite-restaurant', async function () {
      const query = that._view.query;
      if (query.length < 1) {
        return that._showFavListRestaurant();
      }
      that._view.setIsLoading(true);
      let restaurants = null;
      try {
        restaurants = await that._favRestaurantDB.searchRestaurant(query);
      } catch (error) {
        that._view.setIsLoading(false);
        that._view.showError();
      }
      that._view.setIsLoading(false);
      if (restaurants == null || restaurants.length < 1) {
        return that._view.showEmptySearch(query);
      }
      that._view.showFavoriteList(restaurants);
    });
  }
}

export default class FavListRestaurantPresenter {
  constructor ({ view, favRestaurantDB }) {
    this._view = view;
    this._favRestaurantDB = favRestaurantDB;
    this._showFavListRestaurant();
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
}

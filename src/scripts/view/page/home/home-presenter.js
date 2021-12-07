
export default class HomePresenter {
  constructor ({ homeView, repository }) {
    this._view = homeView;
    this._repository = repository;
    this._showHomePage();
    this._registerSearchEvent();
    this._view.setCallbackSearch();
  }

  async _showHomePage () {
    this._view.setIsLoading(true);
    let response = null;
    try {
      response = await this._repository.getListRestaurant();
    } catch (_) {
      this._view.setIsLoading(false);
      this._view.showError();
      return;
    }
    this._view.showHome(response.restaurants);
  }

  _registerSearchEvent () {
    const that = this;
    document.addEventListener('search-restaurant', async function () {
      const query = that._view.query;
      that._view.focus();
      if (query.length < 1) {
        return that._showHomePage();
      }
      that._view.setIsLoading(true);
      let response = null;
      try {
        response = await that._repository.searchRestaurant(query);
      } catch (error) {
        that._view.setIsLoading(false);
        that._view.showError();
      }
      that._view.setIsLoading(false);
      if (response.error) {
        return that._view.showError();
      }
      const restaurants = response.restaurants;
      if (restaurants == null || restaurants.length < 1) {
        return that._view.showEmptySearch(query);
      }
      that._view.showHome(restaurants);
    });
  }
}

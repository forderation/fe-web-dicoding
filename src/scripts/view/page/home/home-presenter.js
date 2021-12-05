
export default class HomePresenter {
  constructor ({ homeView, repository }) {
    this._homeView = homeView;
    this._repository = repository;
    this._showHomePage();
  }

  async _showHomePage () {
    this._homeView.setIsLoading(true);
    let response = null;
    try {
      response = await this._repository.getListRestaurant();
    } catch (_) {
      this._homeView.setIsLoading(false);
      this._homeView.showError();
      return;
    }
    this._homeView.showHome(response.restaurants);
  }
}


export default class DetailRestaurantPresenter {
  constructor ({ detailRestaurantView, urlParser, repository }) {
    this._detailRestaurantView = detailRestaurantView;
    this._urlParser = urlParser;
    this._repository = repository;
    this._parseUrl();
    this._showDetailPage();
  }

  get url () {
    return this._url;
  }

  _parseUrl () {
    this._url = this._urlParser.parseActiveWithoutCombiner();
  }

  async _showDetailPage () {
    this._detailRestaurantView.setIsLoading(true);
    let response = null;
    try {
      response = await this._repository.getDetailRestaurant(this.url);
    } catch (_) {
      this._detailRestaurantView.setIsLoading(false);
      this._detailRestaurantView.showError();
      return;
    }
    this._detailRestaurantView.setIsLoading(false);
    if (response.error) {
      this._detailRestaurantView.showNotFound();
    } else {
      this._detailRestaurantView.showDetail(response.restaurant);
    }
  }
}

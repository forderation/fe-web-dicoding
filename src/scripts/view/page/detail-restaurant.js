import RestaurantRepository from '../../data/repository';
import UrlParser from '../../route/url-parser';
import LikeButtonManager from '../../util/like-button-manager';
import Spin from '../../util/spinner';
import DetailRestaurantPresenter from './detail-restaurant/detail-restaurant-presenter';
import DetailRestaurantView from './detail-restaurant/detail-restaurant-view';

const view = new DetailRestaurantView({
  likeButtonManager: LikeButtonManager,
  spinner: Spin
});

const DetailRestaurant = {
  async render () {
    return view.getTemplate();
  },
  afterRender () {
    // eslint-disable-next-line no-new
    new DetailRestaurantPresenter({
      detailRestaurantView: view,
      urlParser: UrlParser,
      repository: RestaurantRepository
    });
  }
};

export default DetailRestaurant;

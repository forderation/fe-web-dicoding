import FavRestaurantIdb from '../../data/fav-restaurant-idb';
import Spin from '../../util/spinner';
import FavListRestaurantPresenter from './fav-list-restaurant/fav-list-restaurant-presenter';
import FavListRestaurantView from './fav-list-restaurant/fav-list-restaurant-view';

const view = new FavListRestaurantView({
  spinner: new Spin('#contents')
});

const LikedRestaurant = {
  render () {
    return view.getTemplate();
  },
  afterRender () {
    // eslint-disable-next-line no-new
    new FavListRestaurantPresenter({
      view: view,
      favRestaurantDB: FavRestaurantIdb
    });
  }
};

export default LikedRestaurant;

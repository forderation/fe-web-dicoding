import FavRestaurantIdb from '../../data/fav-restaurant-idb';
import FavListRestaurantPresenter from './fav-list-restaurant/fav-list-restaurant-presenter';
import FavListRestaurantView from './fav-list-restaurant/fav-list-restaurant-view';

const view = new FavListRestaurantView();

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

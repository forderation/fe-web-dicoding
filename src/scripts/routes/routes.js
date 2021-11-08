import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail-restaurant';
import LikedRestaturant from '../views/pages/liked-restaurant';
import ListRestaurant from '../views/pages/list-restaurant';

const routes = {
  '/': Home,
  '/list': ListRestaurant,
  '/detail/:id': DetailRestaurant,
  '/like': LikedRestaturant
};

export default routes;

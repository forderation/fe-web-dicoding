import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail-restaurant';
import LikedRestaturant from '../views/pages/liked-restaurant';

const routes = {
  '/': Home,
  '/detail/:id': DetailRestaurant,
  '/like': LikedRestaturant
};

export default routes;

import Home from '../view/page/home';
import DetailRestaurant from '../view/page/detail-restaurant';
import LikedRestaturant from '../view/page/liked-restaurant';

const routes = {
  '/': Home,
  '/detail/:id': DetailRestaurant,
  '/like': LikedRestaturant
};

export default routes;

import Home from '../view/page/home';
import DetailRestaurant from '../view/page/detail-restaurant';
import LikedRestaurant from '../view/page/liked-restaurant';

const routes = {
  '/': Home,
  '/detail/:id': DetailRestaurant,
  '/like': LikedRestaurant
};

export default routes;

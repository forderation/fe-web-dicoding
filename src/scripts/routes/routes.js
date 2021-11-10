import Home from '../views/pages/home';
import DetailRestaurant from '../views/pages/detail-restaurant';
import LikedRestaturant from '../views/pages/liked-restaurant';
import NotFound from '../views/pages/not-found';

const routes = {
  '/': Home,
  '/detail/:id': DetailRestaurant,
  '/like': LikedRestaturant,
  '/not-found': NotFound
};

export default routes;

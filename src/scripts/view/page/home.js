import RestaurantRepository from '../../data/repository';
import HomePresenter from './home/home-presenter';
import HomeView from './home/home-view';

const view = new HomeView();

const Home = {
  render () {
    return view.getTemplate();
  },
  async afterRender () {
    // eslint-disable-next-line no-new
    new HomePresenter({
      homeView: view,
      repository: RestaurantRepository
    });
  }
};

export default Home;

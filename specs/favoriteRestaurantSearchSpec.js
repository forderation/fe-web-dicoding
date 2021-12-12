import FavRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import FavListRestaurantPresenter from '../src/scripts/view/page/fav-list-restaurant/fav-list-restaurant-presenter';
import FavListRestaurantView from '../src/scripts/view/page/fav-list-restaurant/fav-list-restaurant-view';

describe('Searching restaurants', () => {
  let favoriteRestaurants;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('input-search');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
    const formSearch = document.getElementById('form-search');
    formSearch.dispatchEvent(new Event('submit'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavListRestaurantView({});
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavRestaurantIdb);
    // eslint-disable-next-line no-new
    new FavListRestaurantPresenter({
      view,
      favRestaurantDB: favoriteRestaurants
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurant('kafe');

      expect(view.query).toEqual('kafe');
    });

    it('should ask the model to search for restaurants', () => {
      searchRestaurant('kafe');

      expect(favoriteRestaurants.searchRestaurant).toHaveBeenCalledWith('kafe');
    });

    it('should show - for round restaurant without name does not contain title', (done) => {
      document.getElementById('contents').addEventListener('restaurants:updated', () => {
        const restaurantsTitle = document.querySelectorAll('.restaurant-a-title');

        expect(restaurantsTitle.item(0).textContent).toEqual('-');
        done();
      });

      favoriteRestaurants.searchRestaurant.withArgs('kafe').and.returnValues([
        { id: 444 }
      ]);

      searchRestaurant('kafe');
    });

    it('should show the restaurants found by favorite restaurants', (done) => {
      document.getElementById('contents')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant-card').length).toEqual(3);
          done();
        });

      favoriteRestaurants.searchRestaurant.withArgs('kafe makan').and.returnValues([
        { id: 111, name: 'kafe makan' },
        { id: 222, name: 'warung dan kafe makan' },
        { id: 333, name: 'kafe malam' }
      ]);

      searchRestaurant('kafe makan');
    });

    it('should show the name of the restaurants found by favorite restaurants', (done) => {
      document.getElementById('contents').addEventListener('restaurants:updated', () => {
        const restaurantsTitle = document.querySelectorAll('.restaurant-a-title');

        expect(restaurantsTitle.item(0).textContent).toEqual('kafe makan');
        expect(restaurantsTitle.item(1).textContent).toEqual('warung dan kafe');
        expect(restaurantsTitle.item(2).textContent).toEqual('kafe malam');
        done();
      });

      favoriteRestaurants.searchRestaurant.withArgs('kafe makan').and.returnValues([
        { id: 111, name: 'kafe makan' },
        { id: 222, name: 'warung dan kafe' },
        { id: 333, name: 'kafe malam' }
      ]);

      searchRestaurant('kafe makan');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurant(' ');

      expect(view.query.length).toEqual(0);

      searchRestaurant('    ');

      expect(view.query.length).toEqual(0);

      searchRestaurant('');

      expect(view.query.length).toEqual(0);

      searchRestaurant('\t');

      expect(view.query.length).toEqual(0);
    });

    it('should show all favorite restaurants', () => {
      searchRestaurant('    ');

      expect(favoriteRestaurants.getListRestaurant)
        .toHaveBeenCalledWith();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('placeholder')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.not-found').length)
            .toEqual(1);
          done();
        });

      favoriteRestaurants.searchRestaurant.withArgs('kafe').and.returnValues([]);

      searchRestaurant('kafe');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('placeholder').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-card').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurant.withArgs('kafe').and.returnValues([]);

      searchRestaurant('kafe');
    });
  });
});

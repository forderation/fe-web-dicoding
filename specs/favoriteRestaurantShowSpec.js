
import FavRestaurantIdb from '../src/scripts/data/fav-restaurant-idb';
import FavListRestaurantPresenter from '../src/scripts/view/page/fav-list-restaurant/fav-list-restaurant-presenter';
import FavListRestaurantView from '../src/scripts/view/page/fav-list-restaurant/fav-list-restaurant-view';
import { createCustomElement } from './helpers/testFactories';

describe('Showing all favorite restaurants', () => {
  let view;
  createCustomElement();

  const renderTemplate = () => {
    view = new FavListRestaurantView({});
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurant = spyOnAllFunctions(FavRestaurantIdb);

      // eslint-disable-next-line no-new
      new FavListRestaurantPresenter({
        view,
        favRestaurantDB: favoriteRestaurant
      });

      expect(favoriteRestaurant.getListRestaurant).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurant have been liked', (done) => {
      document.getElementById('placeholder').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('#fav_restaurant_not_found').length)
          .toEqual(1);
        done();
      });

      const favoriteRestaurant = spyOnAllFunctions(FavRestaurantIdb);
      favoriteRestaurant.getListRestaurant.and.returnValues([]);

      // eslint-disable-next-line no-new
      new FavListRestaurantPresenter({
        view,
        favRestaurantDB: favoriteRestaurant
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('contents').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-card').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavRestaurantIdb);
      favoriteRestaurants.getListRestaurant.and.returnValues([
        {
          id: 'rqdv5juczeskfw1e867',
          name: 'Melting Pot',
          description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
          pictureId: '14',
          city: 'Medan',
          rating: 4.2
        },
        {
          id: 's1knt6za9kkfw1e867',
          name: 'Kafe Kita',
          description: 'Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
          pictureId: '25',
          city: 'Gorontalo',
          rating: 4
        }
      ]);

      // eslint-disable-next-line no-new
      new FavListRestaurantPresenter({
        view,
        favRestaurantDB: favoriteRestaurants
      });
    });
  });
});

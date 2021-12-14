import API_ENDPOINT from '../../global/api-endpoint';

export default class RestaurantItem extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  get restaurant () {
    return this._restaurant;
  }

  render () {
    const restaurant = this._restaurant;
    this.innerHTML = /* html */ `
      <div class="card restaurant-card pointer">
          <section class="restaurant-header">
              <div class="image-card">
                  <img class="lazyload" width="640" height="360" src="${API_ENDPOINT.IMAGE(restaurant.pictureId)}" alt="${restaurant.name || 'restaurant'}" />
                  <div class="label-city">
                      <p>${restaurant.city || '-'}</p>
                  </div>
              </div>
          </section>
          <section class="restaurant-body">
              <i class="fas fa-star fa-lg"></i> ${restaurant.rating || '-'}
              <div class="restaurant-title">
                <a class="restaurant-a-title" href="${API_ENDPOINT.DETAIL_ROUTE(restaurant.id)}">${restaurant.name || '-'}</a>
              </div>
              <p class="restaurant-description">${restaurant.description || '-'}</p>
          </section>
      </div>
    `;
    this.addEventListener('click', function () {
      window.location.hash = API_ENDPOINT.DETAIL_ROUTE(restaurant.id);
    });
  }
}

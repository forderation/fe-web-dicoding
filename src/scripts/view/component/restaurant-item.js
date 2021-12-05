import API_ENDPOINT from '../../global/api-endpoint';

export default class RestaturantItem extends HTMLElement {
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
      <div class="card food-card pointer">
          <section class="food-header">
              <div class="image-card">
                  <img src="${API_ENDPOINT.IMAGE(restaurant.pictureId)}" alt="${restaurant.name}" />
                  <div class="label-city">
                      <p>${restaurant.city}</p>
                  </div>
              </div>
          </section>
          <section class="food-body">
              <i class="fas fa-star fa-lg"></i> ${restaurant.rating}
              <div class="food-title">
                <a href="${API_ENDPOINT.DETAIL_ROUTE(restaurant.id)}">${restaurant.name}</a>
              </div>
              <p class="food-description">${restaurant.description}</p>
          </section>
      </div>
    `;
    this.addEventListener('click', function () {
      window.location.hash = API_ENDPOINT.DETAIL_ROUTE(restaurant.id);
    });
  }
}

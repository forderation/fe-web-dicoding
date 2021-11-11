import API_ENDPOINT from '../../globals/api-endpoint';

export default class DetailPage extends HTMLElement {
  set restaurant (restaurantData) {
    this._restaurant = restaurantData;
    this.render();
  }

  get restaurant () {
    return this._restaurant;
  }

  render () {
    const restaurant = this._restaurant;
    this.innerHTML = /* html */ `
    <img class="image-detail" src="${API_ENDPOINT.IMAGE(restaurant.pictureId)}" alt="${restaurant.name}" />
    <div class="detail-page" id="detail-restaurant">
        <div class="heading-detail">
            <div class="head">
                <p class="title">${restaurant.name}</p>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <p>${restaurant.rating}</p>
                </div>
            </div>
            <div class="place">
                <i class="fas fa-map-marker-alt fa-2x"></i> ${restaurant.city}
                <p class="address">${restaurant.address}</p>
            </div>
        </div>
        <div class="tag-menu category-menu">
            ${this.parseTagItem(restaurant.categories)}
        </div>
        <div class="description-resturant">
            <p>${restaurant.description}</p>
        </div>
        <div class="menus-restaurant">
            <div class="heading">
                <i class="fas fa-utensils fa-2x"></i>
                <p class="title">Foods</p>
            </div>
            <div class="tag-menu food-menu">
                ${this.parseTagItem(restaurant.menus.foods)}
            </div>
        </div>
        <div class="menus-restaurant">
            <div class="heading">
                <i class="fas fa-wine-glass-alt fa-2x"></i>
                <p class="title">Drinks</p>
            </div>
            <div class="tag-menu">
                ${this.parseTagItem(restaurant.menus.drinks)}
            </div>
        </div>
        <div class="menus-restaurant">
            <div class="heading">
                <i class="far fa-comment fa-2x"></i>
                <p class="title">List of Review (${restaurant.customerReviews.length})</p>
            </div>
            <div class="tag-review">
                ${this.parseReviewItem(restaurant.customerReviews)}
            </div>
        </div>
    </div>
    `;
  }

  parseTagItem (categories) {
    const divMapping = categories.map((category) => {
      return /* html */ `<div>${category.name}</div>`;
    });
    return divMapping.join(' ');
  };

  parseReviewItem (reviews) {
    const divMapping = reviews.map((review) => {
      return /* html */ `
      <div class="card">
        <p>${review.name} : ${review.review}</p>
        <p>${review.date}</p>
      </div>`;
    });
    return divMapping.join(' ');
  };
}

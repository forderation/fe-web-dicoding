import API_ENDPOINT from '../../global/api-endpoint';
import toast from '../../util/toastr';
import UrlParser from '../../route/url-parser';
import RestaurantRepository from '../../data/repository';
import DateParser from '../../util/date-parser';

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
                <p class="title" tabindex="0">${restaurant.name}</p>
                <div class="rating" tabindex="0">
                    <i class="fas fa-star"></i>
                    <p>${restaurant.rating}</p>
                </div>
            </div>
            <div class="place" tabindex="0">
                <i class="fas fa-map-marker-alt fa-2x"></i> ${restaurant.city}
                <p class="address">${restaurant.address}</p>
            </div>
        </div>
        <div class="tag-menu category-menu">
            ${this.parseTagItem(restaurant.categories)}
        </div>
        <div class="description-resturant">
            <p tabindex="0">${restaurant.description}</p>
        </div>
        <section class="section-restaurant">
            <div class="heading">
                <i class="fas fa-utensils fa-2x"></i>
                <p class="title" tabindex="0">Foods</p>
            </div>
            <div class="tag-menu">
                ${this.parseTagItem(restaurant.menus.foods)}
            </div>
        </section>
        <section class="section-restaurant">
            <div class="heading">
                <i class="fas fa-wine-glass-alt fa-2x"></i>
                <p class="title" tabindex="0">Drinks</p>
            </div>
            <div class="tag-menu">
                ${this.parseTagItem(restaurant.menus.drinks)}
            </div>
        </section>
        <section class="section-restaurant">
            <div class="heading">
                <i class="far fa-comment-dots fa-2x"></i>
                <p class="title" tabindex="0">Add Review</p>
            </div>
            <div class="add-comment">
              <form id="form-review">
                <div class="form-group">
                  <label for="input-name">Name</label>
                  <input type="text" class="form-control" id="input-name" aria-describedby="name" placeholder="Input your name" required />
                </div>
                <div class="form-group">
                  <label for="input-review">Review</label>
                  <textarea class="form-control" id="input-review" rows="3" placeholder="How you expect this restaurant" required></textarea>
                </div>
                <div class="btn-wrapper">
                  <button id="submit-review" class="btn-primary"> <i class="far fa-paper-plane"></i> Submit</button>
                </div>
              </form>
            </div>
        </section>
        <section class="section-restaurant">
            <div class="heading">
                <i class="far fa-comments fa-2x"></i>
                <p class="title" tabindex="0">List of Review (${restaurant.customerReviews.length})</p>
            </div>
            <div class="tag-review">
                ${this.parseReviewItem(restaurant.customerReviews)}
            </div>
        </section>
    </div>
    `;
  }

  connectedCallback () {
    const that = this;
    document.addEventListener('detail-page-reload', function (event) {
      that.render();
      that.connectedCallback();
    });
    document.querySelector('#form-review').addEventListener('submit', function (event) {
      that.submitReview(event, that);
    });
  }

  async submitReview (event, that) {
    event.preventDefault();
    const inputName = document.querySelector('#input-name').value;
    const inputReview = document.querySelector('#input-review').value;
    const url = UrlParser.parseActiveWithoutCombiner();
    const review = {
      id: url.id,
      name: inputName,
      review: inputReview
    };
    const response = await RestaurantRepository.postReview(review);
    if (response.error) {
      return toast().error('Oops sorry we are got error:', response.message);
    }
    toast().success('success added review. thank you');
    that.restaurant.customerReviews.push({
      name: review.name,
      review: review.review,
      date: DateParser.getDateNow()
    });
    document.dispatchEvent(new CustomEvent('detail-page-reload'));
  }

  parseTagItem (categories) {
    const divMapping = categories.map((category) => {
      return /* html */ `<div class="card" tabindex="0">${category.name}</div>`;
    });
    return divMapping.join(' ');
  };

  parseReviewItem (reviews) {
    const divMapping = reviews.map((review) => {
      return /* html */ `
      <div class="card" tabindex="0">
        <p>${review.name} : ${review.review}</p>
        <p>${review.date}</p>
      </div>`;
    });
    return divMapping.join(' ');
  };
}

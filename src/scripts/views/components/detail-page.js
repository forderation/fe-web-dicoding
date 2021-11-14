import API_ENDPOINT from '../../globals/api-endpoint';
import $ from 'jquery';
import toast from '../../utils/toastr';
import UrlParser from '../../routes/url-parser';
import Repositories from '../../globals/repositories';

export default class DetailPage extends HTMLElement {
  set restaurant (restaurantData) {
    this._restaurant = restaurantData;
    this.render();
  }

  get restaurant () {
    return this._restaurant;
  }

  set reloadCallback (reloadCallback) {
    this._reloadCallback = reloadCallback;
  }

  get reloadCallback () {
    return this._reloadCallback;
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
        <section class="section-restaurant">
            <div class="heading">
                <i class="fas fa-utensils fa-2x"></i>
                <p class="title">Foods</p>
            </div>
            <div class="tag-menu">
                ${this.parseTagItem(restaurant.menus.foods)}
            </div>
        </section>
        <section class="section-restaurant">
            <div class="heading">
                <i class="fas fa-wine-glass-alt fa-2x"></i>
                <p class="title">Drinks</p>
            </div>
            <div class="tag-menu">
                ${this.parseTagItem(restaurant.menus.drinks)}
            </div>
        </section>
        <section class="section-restaurant">
            <div class="heading">
                <i class="far fa-comment-dots fa-2x"></i>
                <p class="title">Add Review</p>
            </div>
            <div class="add-comment">
              <form id="form-review" tabindex="0">
                <div class="form-group">
                  <label for="input-name">Name</label>
                  <input type="text" class="form-control" id="input-name" aria-describedby="name" placeholder="Input your name" required />
                </div>
                <div class="form-group">
                  <label for="input-review">Review</label>
                  <textarea class="form-control" id="input-review" rows="3" placeholder="How you expect this restaurant"></textarea>
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
                <p class="title">List of Review (${restaurant.customerReviews.length})</p>
            </div>
            <div class="tag-review">
                ${this.parseReviewItem(restaurant.customerReviews)}
            </div>
        </section>
    </div>
    `;
  }

  connectedCallback () {
    $('#form-review').on('submit', {
      reload: this._reloadCallback
    }, this.submitReview);
  }

  async submitReview (event) {
    event.preventDefault();
    const inputName = $('#input-name').val();
    const inputReview = $('#input-review').val();
    const url = UrlParser.parseActiveWithoutCombiner();
    const review = {
      id: url.id,
      name: inputName,
      review: inputReview
    };
    const response = await Repositories.postReview(review);
    if (response.error) {
      return toast().error('Opps sorry we are got error:', response.message);
    }
    toast().success('success added review. thank you');
    event.data.reload();
  }

  parseTagItem (categories) {
    const divMapping = categories.map((category) => {
      return /* html */ `<div class="card">${category.name}</div>`;
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

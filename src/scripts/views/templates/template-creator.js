import API_ENDPOINT from '../../globals/api-endpoint';

/**
 * Create template for restaurant card item
 * @param {*} restaturant
 * @returns
 */
const createResturantItemTemplate = (restaturant) => {
  return /* html */ `
    <div class="card">
        <section class="food-header">
            <div class="image-card">
                <img
                src="${API_ENDPOINT.IMAGE(restaturant.pictureId)}"
                alt="${restaturant.name}"
                />
                <div class="label-city">
                <p>${restaturant.city}</p>
                </div>
            </div>
            </section>
            <section class="food-body">
            <i class="fas fa-star"></i> ${restaturant.rating}
            <h1 class="food-title">${restaturant.name}</h1>
            <p class="food-description">${restaturant.description}</p>
            <a class="detail-link" href="${API_ENDPOINT.DETAIL_ROUTE(restaturant.id)}">Detail About ${restaturant.name}</a>
        </section>
    </div>`;
};

/**
 * Create template for detail page restaturant
 * @param {*} restaturant
 * @returns
 */
const createRestaurantDetailTemplate = (restaturant) => {
  return /* html */`
    <h2 class="movie__title">${restaturant.name}</h2>
      <img class="movie__poster" src="${API_ENDPOINT.IMAGE(restaturant.pictureId)}" alt="${restaturant.name}" />
    <div class="movie__info">
    <h3>Information</h3>
      <h4>City</h4>
      <p>${restaturant.city}</p>
      <h4>Address</h4>
      <p>${restaturant.address}</p>
      <h4>Rating</h4>
      <p>${restaturant.rating} minutes</p>
    </div>
    <div class="movie__overview">
      <h3>Description</h3>
      <p>${restaturant.description}</p>
    </div>
  `;
};

export {
  createResturantItemTemplate,
  createRestaurantDetailTemplate
};

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
            <i class="fas fa-star fa-lg"></i> ${restaturant.rating}
            <h1 class="food-title">${restaturant.name}</h1>
            <p class="food-description">${restaturant.description}</p>
            <a class="detail-link" href="${API_ENDPOINT.DETAIL_ROUTE(restaturant.id)}">Detail About ${restaturant.name}</a>
        </section>
    </div>`;
};

const parseTagItem = (categories) => {
  const divMapping = categories.map((category) => {
    return /* html */ `<div>${category.name}</div>`;
  });
  return divMapping.join(' ');
};

/**
 * Create template for detail page restaturant
 * @param {*} restaturant
 * @returns
 */
const createRestaurantDetailTemplate = (restaturant) => {
  return /* html */`
    <img class="image-detail" src="${API_ENDPOINT.IMAGE(restaturant.pictureId)}" alt="${restaturant.name}" />
    <div class="heading-detail">
      <div class="head">
        <p class="title">${restaturant.name}</p>
        <div class="rating">
          <i class="fas fa-star"></i> <p>${restaturant.rating}</p>
        </div>
      </div>
      <div class="place">
        <i class="fas fa-map-marker-alt fa-2x"></i> ${restaturant.city}
        <p class="address">${restaturant.address}</p>
      </div>
    </div>
    <div class="tag-menu">
      ${parseTagItem(restaturant.categories)}
    </div>
    <div class="description-resturant">
      <p>${restaturant.description}</p>
    </div>
    <div class="menus-restaurant">
      <div class="heading">
        <i class="fas fa-utensils fa-2x"></i> <p class="title">Foods</p>
      </div>
      <div class="tag-menu">
        ${parseTagItem(restaturant.menus.foods)}
      </div>
    </div>
    <div class="menus-restaurant">
      <div class="heading">
        <i class="fas fa-wine-glass-alt fa-2x"></i> <p class="title">Drinks</p>
      </div>
      <div class="tag-menu">
        ${parseTagItem(restaturant.menus.drinks)}
      </div>
    </div>
  `;
};

export {
  createResturantItemTemplate,
  createRestaurantDetailTemplate
};

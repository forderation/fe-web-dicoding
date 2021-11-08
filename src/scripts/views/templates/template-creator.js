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
            <a class="detail-link" href="${restaturant.pictureId}" target="_blank">Detail About ${restaturant.name}</a>
        </section>
    </div>`;
};

/**
 * TODO
 * @param {*} restaturant
 * @returns
 */
const createRestaurantDetailTemplate = (restaturant) => {
  return /* html */`
  <div class="detail-page">
    
  </div>  
  `;
};

export {
  createResturantItemTemplate,
  createRestaurantDetailTemplate
};

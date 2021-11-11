import API_ENDPOINT from '../../globals/api-endpoint';

export default class RestaturantItem extends HTMLElement {
  set restaturant (restaturant) {
    this._restaturant = restaturant;
    this.render();
  }

  get restaturant () {
    return this._restaturant;
  }

  render () {
    const restaturant = this._restaturant;
    this.innerHTML = /* html */ `
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
    </div>
    `;
  }
}

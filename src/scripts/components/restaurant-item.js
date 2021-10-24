export default class RestaturantItem extends HTMLElement {
  set restaturant (restaturant) {
    this._restaturant = restaturant;
    this.render();
  }

  get restaturant () {
    return this._restaturant;
  }

  render () {
    this.innerHTML = `
          <div class="card">
              <section class="food-header">
              <div class="image-card">
                  <img
                  src="${this._restaturant.pictureId}"
                  alt="${this._restaturant.name}"
                  />
                  <div class="label-city">
                  <p>${this._restaturant.city}</p>
                  </div>
              </div>
              </section>
              <section class="food-body">
                <i class="fas fa-star"></i> ${this._restaturant.rating}
                <h2 class="food-title">${this._restaturant.name}</h2>
                <p class="food-description">${this._restaturant.description}</p>
                <a class="detail-link" href="${this._restaturant.pictureId}" target="_blank">Detail About ${this._restaturant.name}</a>
              </section>
          </div>
            `;
  }
}

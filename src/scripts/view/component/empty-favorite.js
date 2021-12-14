export default class EmptyFavorite extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = /* html */ `
          <div class="top-banner" id="fav_restaurant_not_found">
              <section class="not-found">
                  <picture>
                    <source media="(max-width: 600px)" type="image/webp" srcset="./images/empty-small.webp" class="lazyload">
                    <source media="(max-width: 1000px)" type="image/webp" srcset="./images/empty-large.webp" class="lazyload">
                    <img src="./images/empty.webp" alt="Empty Favorite Restaurant" class="lazyload">
                  </picture>
                  <figcaption class="fav_restaurants_empty">Favorite Restaurants Empty</figcaption>
                  <p>Oops looks like you did not have favorite restaurants.</p>
                  <br/>
                  <a class="btn-primary" href="#/"> <i class="fas fa-search"></i> Explore Restaurants</a>
              </section>
          </div>
      `;
  }
}

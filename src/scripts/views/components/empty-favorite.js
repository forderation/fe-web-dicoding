export default class EmptyFavorite extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = /* html */ `
          <div class="top-banner">
              <section class="not-found">
                  <img src="./images/empty.jpg" alt="Empty Favorite Restaurant" />
                  <figcaption>Favorite Restaurants Empty</figcaption>
                  <p>Oops looks like you did not have favorite restaturants.</p>
                  <br/>
                  <a class="btn-primary" href="/"> <i class="fas fa-search"></i> Find Restaurants</a>
              </section>
          </div>
      `;
  }
}

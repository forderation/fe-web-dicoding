export default class NotFound extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = /* html */ `
        <div class="top-banner">
            <section class="not-found">
                <picture>
                  <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/404-small.jpg" class="lazyload">
                  <source media="(max-width: 1000px)" type="image/jpeg" srcset="./images/404-large.jpg" class="lazyload">
                  <img src="./images/404.jpg" alt="Not Found Page" class="lazyload">
                </picture>
                <figcaption>Page Not Found</figcaption>
                <p>Oops looks like you did not found your page.</p>
                <br/>
                <a class="btn-primary" href="#/"> <i class="fas fa-search"></i> Find Another Restaurants</a>
            </section>
        </div>
    `;
  }
}

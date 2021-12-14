export default class EmptySearch extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  set keyword (keyword) {
    this._keyword = keyword;
  }

  get keyword () {
    return this._keyword;
  }

  render () {
    this.innerHTML = /* html */ `
        <div class="top-banner">
            <section class="not-found">
                  <picture>
                    <source media="(max-width: 600px)" type="image/webp" srcset="./images/empty-small.webp" class="lazyload">
                    <source media="(max-width: 1000px)" type="image/webp" srcset="./images/empty-large.webp" class="lazyload">
                    <img src="./images/empty.webp" alt="Empty Search" class="lazyload">
                  </picture>
                <p>Oops looks like search for "${this._keyword}" is not found. You can try other keyword</p>
            </section>
        </div>
    `;
  }
}

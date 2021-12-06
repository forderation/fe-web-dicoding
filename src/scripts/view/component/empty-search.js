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
                <img src="./images/empty.jpg" alt="Empty Favorite Restaurant" />
                <p>Oops looks like search for "${this._keyword}" is not found. You can try other keyword</p>
            </section>
        </div>
    `;
  }
}

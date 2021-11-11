import $ from 'jquery';

export default class Restaturans extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants;
    this.connectedCallback();
  }

  get restaurants () {
    return this._restaurants;
  }

  connectedCallback () {
    const idElement = this.getAttribute('id');
    $(`#${idElement}`).empty();
    this.render();
  }

  render () {
    try {
      this._restaurants.forEach((res) => {
        this.elemenBuilder(res);
      });
    } catch (_) {}
  }

  elemenBuilder (item) {
    const itemElement = document.createElement('restaurant-item');
    itemElement.restaturant = item;
    this.appendChild(itemElement);
  }

  attributeChangedCallback (name, _, newValue) {
    this[name] = newValue;
    this.render();
  }
}

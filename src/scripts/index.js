import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Restaturants from './components/restaurants.js';
import RestaturantItem from './components/restaurant-item.js';

import restaurantsData from './DATA';

/**
 * Define custom element
 */
customElements.define('restaurant-item', RestaturantItem);
customElements.define('list-restaurant', Restaturants);

const contentElement = $('#contents')[0];
contentElement.restaurants = restaurantsData;

/**
 * Event listener drawer
 */
const drawerElement = $('#drawer');
$('main').on('click', function (event) {
  drawerElement.toggleClass('open');
  event.stopPropagation();
});
$('#hamburger').on('click', function (event) {
  drawerElement.toggleClass('open');
  event.stopPropagation();
});

/**
 * Add Font Awesome
 */
library.add(fas);
dom.i2svg();

import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import $ from 'jquery';

// font awesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// App shell and service
import App from './views/app';
import swRegister from './worker/register-service';

// custom element
import RestaturantItem from './views/components/restaurant-item';
import LikeButton from './views/components/like-button';

/**
 * Define custom element
 */
customElements.define('restaurant-item', RestaturantItem);
customElements.define('like-button', LikeButton);

const app = new App({
  button: $('#hamburger'),
  content: $('#main-content'),
  drawer: $('#drawer')
});

$(window).on('hashchange', function () {
  app.renderPage();
});

$(window).on('load', function () {
  app.renderPage();
  swRegister();
});

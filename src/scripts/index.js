/* for async await transpile */
import 'regenerator-runtime';

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
import swRegister from './sw-register';

// custom element
import RestaturantItem from './views/components/restaurant-item';
import LikeButton from './views/components/like-button';
import NotFound from './views/components/not-found';
import EmptyFavorite from './views/components/empty-favorite';
import DetailPage from './views/components/detail-page';
import ErrorInternal from './views/components/error-internal';

/**
 * Define custom element
 */
customElements.define('restaurant-item', RestaturantItem);
customElements.define('like-button', LikeButton);
customElements.define('not-found', NotFound);
customElements.define('empty-favorite', EmptyFavorite);
customElements.define('detail-page', DetailPage);
customElements.define('error-internal', ErrorInternal);

const app = new App({
  button: $('#hamburger'),
  content: $('#main-content'),
  drawer: $('#drawer')
});

$('#skip-link').on('click', function () {
  document.querySelector('#main-content').scrollIntoView();
  document.querySelector('#main-content').focus();
});

$(window).on('hashchange', function () {
  app.renderPage();
});

$(window).on('load', function () {
  app.renderPage();
  swRegister();
});

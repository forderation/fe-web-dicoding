/* for async await transpile */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import '../styles/responsive.css';

// App shell and service
import App from './view/app';
import swRegister from './sw-register';

// custom element
import RestaurantItem from './view/component/restaurant-item';
import LikeButton from './view/component/like-button';

import NotFound from './view/component/not-found';
import EmptyFavorite from './view/component/empty-favorite';
import DetailPage from './view/component/detail-page';
import ErrorInternal from './view/component/error-internal';
import EmptySearch from './view/component/empty-search';

const app = new App({
  button: document.querySelector('#hamburger'),
  content: document.querySelector('#main-content'),
  drawer: document.querySelector('#drawer')
});

window.onhashchange = function () {
  app.renderPage();
};

window.onload = function () {
  app.renderPage();
  swRegister();
};

document.querySelector('#skip-link').addEventListener('click', function () {
  document.querySelector('#main-content').scrollIntoView();
  document.querySelector('#main-content').focus();
});

/**
 * Define custom element
 */
customElements.define('restaurant-item', RestaurantItem);
customElements.define('like-button', LikeButton);
customElements.define('not-found', NotFound);
customElements.define('empty-favorite', EmptyFavorite);
customElements.define('detail-page', DetailPage);
customElements.define('error-internal', ErrorInternal);
customElements.define('empty-search', EmptySearch);

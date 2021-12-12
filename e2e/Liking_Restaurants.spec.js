const assert = require('assert');

const emptyTitleFavRestaurant = 'Favorite Restaurants Empty';

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking and unlike restaurant', async ({ I }) => {
  I.see(emptyTitleFavRestaurant, '.fav_restaurants_empty');
  I.amOnPage('/');

  I.seeElement('.restaurant-a-title');
  const firstRestaurant = locate('.restaurant-a-title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeAttributesOnElements('#likeButton', { 'aria-label': 'like this restaurant' });
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-card');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-a-title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('.restaurant-a-title').first());

  I.seeAttributesOnElements('#likeButton', { 'aria-label': 'unlike this restaurant' });
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see(emptyTitleFavRestaurant, '.fav_restaurants_empty');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#input-search');
  I.see(emptyTitleFavRestaurant, '.fav_restaurants_empty');
});

Scenario('searching restaurants', async ({ I }) => {
  I.see(emptyTitleFavRestaurant, '.fav_restaurants_empty');
  I.amOnPage('/');

  I.seeElement('.restaurant-a-title');
  const names = [];
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-a-title').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant-name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#input-search');

  const searchQuery = names[1].substring(1, 3);
  const matchingQuery = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#input-search', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-card');
  assert.strictEqual(matchingQuery.length, visibleLikedRestaurants);

  matchingQuery.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-a-title').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});

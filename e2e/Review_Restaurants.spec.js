const assert = require('assert');

Feature('Review Restaurants');

Scenario('success review restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-a-title');
  const firstRestaurant = locate('.restaurant-a-title').first();
  I.click(firstRestaurant);

  I.seeElement('#input-name');
  I.seeElement('#input-review');
  I.seeElement('#submit-review');

  const reviewerName = 'Alexander Malcolm';
  const reviewContent = 'Foods is looking good';

  I.fillField('#input-name', reviewerName);
  I.fillField('#input-review', reviewContent);
  I.click('#submit-review');
  I.see('.toast-success');
  I.wait(1);

  const reviewerNameSubmit = await I.grabTextFrom(locate('.reviewer-name').last());
  assert(reviewerNameSubmit, reviewerName);
  const reviewerContentSubmit = await I.grabTextFrom(locate('.reviewer-content').last());
  assert(reviewerNameSubmit, reviewerContentSubmit);
});

Scenario('fail review restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-a-title');
  const firstRestaurant = locate('.restaurant-a-title').first();
  I.click(firstRestaurant);

  I.seeElement('#input-name');
  I.seeElement('#input-review');
  I.seeElement('#submit-review');

  const reviewerName = 'Alexander Malcolm';
  const reviewContent = 'Foods is looking good';

  I.fillField('#input-name', reviewerName);
  I.click('#submit-review');
  I.dontSee('.toast-success');
  I.fillField('#input-name', '');

  I.fillField('#input-review', reviewContent);
  I.click('#submit-review');
  I.dontSee('.toast-success');
});

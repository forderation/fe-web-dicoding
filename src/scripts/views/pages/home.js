import $ from 'jquery';
import Repositories from '../../globals/repositories';
import { createResturantItemTemplate } from '../templates/template-creator';

const Home = {
  render () {
    return /* html */ `
      <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="" />
      </div>
      <div class="top-banner">
        <h1 id="banner-title">What we serve</h1>
        <div class="services">
          <section class="service">
            <img src="./images/img1.png" alt="Easy To Order" />
            <figcaption>Easy To Order</figcaption>
            <p>You only need a few steps in ordering food.</p>
          </section>
          <section class="service">
            <img src="./images/img2.png" alt="Fastest Delivery" />
            <figcaption>Fastest Delivery</figcaption>
            <p>Delivery that is always ontime even faster.</p>
          </section>
          <section class="service">
            <img src="./images/img3.png" alt="Best Quality" />
            <figcaption>Best Quality</figcaption>
            <p>Not only fast for us quality is also number one.</p>
          </section>
        </div>
        <h1 id="banner-desc">Explore Your Foods</h1>
      </div>
      <div id="contents" class="explore-foods"></div>
        `;
  },
  async afterRender () {
    const response = await Repositories.getListRestataurant();
    const restaturantContainer = $('#contents');
    response.restaurants.forEach((restaturant) => {
      const template = createResturantItemTemplate(restaturant);
      restaturantContainer.append(template);
    });
  }
};

export default Home;

import UrlParser from '../../routes/url-parser';

const DetailRestaurant = {
  async render () {
    return `
            
        `;
  },
  async afterRender () {
    UrlParser.parseActiveWithoutCombiner();
  }
};

export default DetailRestaurant;

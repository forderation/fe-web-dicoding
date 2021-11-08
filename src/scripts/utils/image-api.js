import CONFIG from '../../globals/config';

const IMAGE_API = {
  getImageUrl (id) {
    return CONFIG.BASE_IMAGE_URL + id;
  }
};

export default IMAGE_API;

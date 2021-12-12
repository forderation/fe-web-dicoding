import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}search?q=${query}`,
  IMAGE: (pictureId) => {
    const small = window.matchMedia('(max-width: 400px)');
    const medium = window.matchMedia('(max-width: 800px)');
    if (small.matches) {
      return `${CONFIG.SMALL_IMAGE_URL}${pictureId}`;
    } else if (medium.matches) {
      return `${CONFIG.MEDIUM_IMAGE_URL}${pictureId}`;
    } else {
      return `${CONFIG.LARGE_IMAGE_URL}${pictureId}`;
    }
  },
  DETAIL_ROUTE: (id) => `#/detail/${id}`,
  SUBMIT_REVIEW: `${CONFIG.BASE_URL}review`
};

export default API_ENDPOINT;

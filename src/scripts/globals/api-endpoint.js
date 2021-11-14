import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  IMAGE: (pictureId) => `${CONFIG.BASE_IMAGE_URL}${pictureId}`,
  DETAIL_ROUTE: (id) => `#/detail/${id}`,
  SUBMIT_REVIEW: `${CONFIG.BASE_URL}review`
};

export default API_ENDPOINT;

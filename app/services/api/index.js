import axios from 'axios';
import APP_CONSTANTS from 'app/config/constants';
import logger from 'app/utils/logger';

class ServiceApi {
  constructor() {
    this.api = axios.create({
      baseURL: APP_CONSTANTS.API_URL,
      timeout: 10000,
      validateStatus: status => status,
      headers: {
        Accept: 'application/json'
      }
    });

    this.api.interceptors.response.use(response => {
      const { status, config: { url, baseURL } } = response;
      const title = url.replace(baseURL, '');

      if (__DEV__) {
        // console.group('Response:');
        if (status >= 400) logger.error(title, response);
        // else logger.success(title, response);
        // console.groupEnd();
      }

      return response;
    }, error => ({ error: error }));

    this.useResponse = (success, failure) => {
      this.api.interceptors.response.use(response => {
        if (success) success(response);

        return response;
      }, ({ message }) => {
        if (failure) failure(message);

        return { error: message, data: {} };
      });
    };
  }

  fetchAds = params => this.api.get('/api/v1/autos', { params });
}

export default new ServiceApi();

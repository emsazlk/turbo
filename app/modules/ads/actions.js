export default {
  initial: callback => ({ type: 'ADS_INITIAL_REQUEST', callback }),

  fetch: callback => ({ type: 'ADS_FETCH_REQUEST', callback }),
  refresh: callback => ({ type: 'ADS_REFRESH_REQUEST', callback }),
};

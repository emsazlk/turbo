import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  vips: [],
  standard: [],
  ads_count: 0,

  isLoading: false,
  isRefreshing: false,

};

const reducer = (state = initialState, actions) => {
  const { type, payload = {} } = actions;

  switch (type) {
    case 'ADS_WRITE_DATA': return Object.assign({}, state, {
      standard: payload.standard,
      vips: payload.vips,
      ads_count: payload.ads_count
    });

    case 'ADS_LOADING': return Object.assign({}, state, {
      isLoading: payload.value
    });

    case 'ADS_REFRESHING': return Object.assign({}, state, {
      isRefreshing: payload.value
    });

    case 'RESET':
    case 'LOGOUT': return initialState;

    default: return state;
  }
};

const persistConfig = {
  key: 'ads',
  storage: AsyncStorage,
  whitelist: ['data']
};

export default persistReducer(persistConfig, reducer);
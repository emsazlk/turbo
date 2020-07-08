import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  data: [],
  ads_count: 0,
  cursor: null,

  isLoading: false,
  isRefreshing: false,

};

const reducer = (state = initialState, actions) => {
  const { type, payload = {} } = actions;

  switch (type) {
    case 'ADS_WRITE_DATA': return Object.assign({}, state, {
      data: payload.data,
      ads_count: payload.ads_count,
      cursor: payload.cursor
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
  whitelist: ['vips', 'standard', 'ads_count']
};

export default persistReducer(persistConfig, reducer);
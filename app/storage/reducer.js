import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import { combineReducers } from 'redux';
import { reducer as ads } from 'app/modules/ads';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'ads'
  ]
};

const reducer = combineReducers({
  ads
});

export default persistReducer(persistConfig, reducer);
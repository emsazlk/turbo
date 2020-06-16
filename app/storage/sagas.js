import { all, fork, take, select } from 'redux-saga/effects';
import logger from 'app/utils/logger';
import ads from 'app/modules/ads/saga';

function* watcher() {
  while (__DEV__) {
    const action = yield take('*');
    const state = yield select();

    if (action.type.match('@@')) return;

    if (action.type.match('FAIL')) {
      console.group('Sagas:');
      logger.success('Action:', action);
      logger.success('State:', state);
      console.groupEnd();
    }
  }
}

function* sagas() {
  yield all([
    fork(watcher),
    fork(ads)
  ]);
}

export default sagas;
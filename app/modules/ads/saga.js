import { all, fork, call, put, select, takeLatest } from 'redux-saga/effects';
import ServiceApi from 'app/services/api';
import Selectors from './selectors';

export default function* watchSagas() {
  yield all([
    fork(fetch),
    fork(loading),
    fork(refreshing),
  ]);
}

function* getFetchParams(action) {
  const { type } = action;

  const data = yield select(Selectors.getData);
  const cursor = yield select(Selectors.getCursor)

  const values = {
    data,
    query: null,
  };

  switch (type) {
    case 'ADS_FETCH_REQUEST': {

      if (data.length > 0 && cursor) {
        values.query = { cursor }
      }
    } break;

    case 'ADS_INITIAL_REQUEST':
    case 'ADS_REFRESH_REQUEST': {
      values.data = [];
    } break;

    default: null;
  }

  return ({
    data: values.data,
    query: values.query,
  });
}


function* fetch() {
  yield takeLatest([
    'ADS_INITIAL_REQUEST',
    'ADS_FETCH_REQUEST',
    'ADS_REFRESH_REQUEST'
  ], function* (action) {
    const { callback } = action;

    try {
      const params = yield call(getFetchParams, action);

      const response = yield call([ServiceApi, 'fetchAds'], params.query);

      const { status, statusText, data } = response;

      if (status !== 200) throw new Error(statusText);

      yield put({
        type: 'ADS_WRITE_DATA',
        payload: {
          data: params.data.concat({ vips: data.vips, standard: data.ads }),
          ads_count: data.ads_count,
          cursor: data.ads?.[data.ads.length - 1]?.cursor || null
        }
      });

      yield put({ type: 'ADS_FETCH_SUCCESS' });

      if (callback) yield call(callback, { error: false, message });
    } catch ({ message }) {
      yield put({ type: 'ADS_FETCH_FAILURE' });
      if (callback) yield call(callback, { error: true, message });
    }
  });
}

function* loading() {
  yield takeLatest([
    'ADS_INITIAL_REQUEST',
    'ADS_FETCH_REQUEST',
  ], function* () {
    yield put({
      type: 'ADS_LOADING',
      payload: { value: true }
    });
  });

  yield takeLatest([
    'ADS_FETCH_SUCCESS',
    'ADS_FETCH_FAILURE'
  ], function* () {
    yield put({
      type: 'ADS_LOADING',
      payload: { value: false }
    });
  });
}

function* refreshing() {
  yield takeLatest([
    'ADS_REFRESH_REQUEST'
  ], function* () {
    yield put({
      type: 'ADS_REFRESHING',
      payload: { value: true }
    });
  });

  yield takeLatest([
    'ADS_FETCH_SUCCESS',
    'ADS_FETCH_FAILURE'
  ], function* () {
    yield put({
      type: 'ADS_REFRESHING',
      payload: { value: false }
    });
  });
}
// import { createSelector } from 'reselect';

const getData = state => state.ads.data;
const getCursor = state => state.ads.cursor;

export default { getData, getCursor };
// import { createSelector } from 'reselect';

const getVipsData = state => state.ads.vips;
const getStandardData = state => state.ads.standard;

export default { getVipsData, getStandardData };
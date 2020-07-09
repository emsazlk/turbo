import { createSelector } from 'reselect';
import chunk from 'app/utils/chunk'

const getData = state => state.ads.data;
const getCursor = state => state.ads.cursor;

const getList = createSelector(getData, data => {
  return data.reduce((acc, cur) => {
    const page = Object.keys(cur).map(item => ({
      title: item,
      data: chunk(cur[item], 2),
      key: cur[item][0].id
    }))

    return acc.concat(page);
  }, []);

  // return data.reduce((acc, current) => {
  //   const vips = [...current.vips];
  //   const standard = [...current.standard];
  //   vips[0].label = 'vips';
  //   standard[0].label = 'standard';

  //   return acc.concat(vips, standard);
  // }, []);

  return data.reduce((acc, current) => {
    let array = [];

    Object.keys(current).forEach(key => {
      let header = [{ header: key, id: `${current[key][0].id}-a` }, { header: key, id: `${current[key][0].id}-z` }]
      array.push(...header, ...current[key])
    })
    // const vips = [...current.vips];
    // const standard = [...current.standard];
    // vips[0].label = 'vips';
    // standard[0].label = 'standard';

    return acc.concat(array);
  }, []);

});

export default { getData, getCursor, getList };
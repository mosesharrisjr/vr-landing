import * as types from './types';

export const getLogos = () => ({
  type: types.GET_LOGOS
});

export const updateLogos = (logos) => ({
    type: types.UPDATE_LOGOS,
    logos,
});

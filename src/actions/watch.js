import * as types from './types';

export const getWatch = () => ({
  type: types.GET_WATCH
});

export const updateWatch = (watch) => ({
    type: types.UPDATE_WATCH,
    watch,
});

import * as types from '../actions/types';

const logosReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_LOGOS:
      return state;
    case types.UPDATE_LOGOS:
      return action.logos;
    default:
      return state;
  }
}

export default logosReducer;

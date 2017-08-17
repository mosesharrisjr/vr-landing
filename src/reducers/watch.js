import * as types from '../actions/types';

const watchReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_WATCH:
      return state;
    case types.UPDATE_WATCH:
      return action.watch;
    default:
      return state;
  }
}

export default watchReducer;

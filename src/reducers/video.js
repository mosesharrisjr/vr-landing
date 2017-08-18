import * as types from '../actions/types';

const videoReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_VIDEO:
      return state;
    case types.UPDATE_VIDEO:
      return action.video;
    default:
      return state;
  }
}

export default videoReducer;

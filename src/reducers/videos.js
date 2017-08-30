import * as types from '../actions/types';

const videosReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_VIDEOS:
        return state;
    case types.UPDATE_VIDEOS:
        return action.videos;
    default:
      return state;
  }
}

export default videosReducer;

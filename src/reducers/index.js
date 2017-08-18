import { combineReducers } from 'redux';

import videoReducer from './video';
import videosReducer from './videos';
import logosReducer from './logos';
import watchReducer from './watch';

const rootReducer = combineReducers({
  video: videoReducer,
  logos: logosReducer,
  watch: watchReducer,
  videos: videosReducer,
  // put reducers here
});

export default rootReducer;

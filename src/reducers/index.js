import { combineReducers } from 'redux';

import videoReducer from './videos';
import logosReducer from './logos';
import watchReducer from './watch';

const rootReducer = combineReducers({
  video: videoReducer,
  logos: logosReducer,
  watch: watchReducer,
  videos: videoReducer,
  // put reducers here
});

export default rootReducer;

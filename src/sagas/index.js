import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as API from '../api/client';


function* getVideo(action) {
  try {
    const slug = action.video.slug;
    const video = yield call(API.getVideo, slug);
    yield put({ type: types.UPDATE_VIDEO, video });
  } catch(e) {
    // error happened oops
    console.log(e);
  }
}

function* watchGetVideo() {
  yield takeEvery(types.GET_VIDEO, getVideo);
}

function* getVideos() {
  try{
    const videos = yield call(API.getVideos);
    yield put({type: types.UPDATE_VIDEOS, videos});
  } catch(e) {
    console.log(e);
  }
}

function* watchGetVideos() {
  yield takeEvery(types.GET_VIDEOS, getVideos);
}

function* getLogos() {
  try{
    const logos = yield call(API.getLogos);
    yield put({type: types.UPDATE_LOGOS, logos});
  } catch(e) {
    console.log(e);
  }
}

function* watchGetLogos() {
  yield takeEvery(types.GET_LOGOS, getLogos);
}

function* getWatch() {
  try{
    const watch = yield call(API.getWatch);
    yield put({type: types.UPDATE_WATCH, watch});
  } catch(e) {
    console.log(e);
  }
}

function* watchGetWatch() {
  yield takeEvery(types.GET_WATCH, getWatch);
}

export default function* rootSaga() {
  yield [
    watchGetVideo(),
    watchGetVideos(),
    watchGetLogos(),
    watchGetWatch(),
  ];
};

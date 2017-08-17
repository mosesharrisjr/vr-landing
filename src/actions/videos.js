import * as types from './types';

export const getVideos = () => ({
  type: types.GET_VIDEOS
});

export const updateVideos = (videos) => ({
    type: types.UPDATE_VIDEOS,
    videos,
});

export const getVideo = (video) => ({
  type: types.GET_VIDEO,
  video
});

export const updateVideo = (video) => ({
    type: types.UPDATE_VIDEO,
    video,
});

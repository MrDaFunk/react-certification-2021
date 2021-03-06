import { path, key } from './constants/api';

const searchPath = `${path}search?part=snippet&type=video`;

const searchVideoList = async (query) =>
  fetch(
    `${searchPath}&maxResults=24&q=${encodeURIComponent(
      query
    )}&key=${key}&videoCaption=closedCaption`
  );

const searchRelatedVideoList = async (id) =>
  fetch(`${searchPath}&maxResults=16&relatedToVideoId=${id}&key=${key}`);

const searchVideo = async (id) => fetch(`${path}videos?part=snippet&id=${id}&key=${key}`);

export { searchVideoList, searchVideo, searchRelatedVideoList };

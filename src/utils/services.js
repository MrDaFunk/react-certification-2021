import { path, key, errorMessage } from './constants/api';

import { getFavoriteList } from './fns';

const searchPath = `${path}search?part=snippet&type=video`;

const handler = (err) => console.error(errorMessage, err);

const call = async (response) => {
  try {
    const { ok, message } = await response;

    if (!ok) {
      throw Error(message);
    }

    return response;
  } catch (err) {
    handler(err);
  }
};

const searchVideoList = async (query) =>
  call(
    await fetch(
      `${searchPath}&maxResults=24&q=${encodeURIComponent(
        query
      )}&key=${key}&videoCaption=closedCaption`
    )
  );

const searchRelatedVideoList = async (id) =>
  call(await fetch(`${searchPath}&maxResults=16&relatedToVideoId=${id}&key=${key}`));

const searchVideo = async (id) =>
  call(await fetch(`${path}videos?part=snippet&id=${id}&key=${key}`));

const getFavorite = async () =>
  call(
    await new Promise((resolve) => {
      setTimeout(
        () => resolve({ ok: true, statusText: '', json: () => getFavoriteList() }),
        500
      );
    })
  );

const login = async ({ username, password }) =>
  call(
    await new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            ok: true,
            statusText: '',
            json: () => ({
              success: username === 'wizeline' && password === 'Rocks!',
              message:
                username === 'wizeline' && password === 'Rocks!'
                  ? 'esta usted Autenticado'
                  : 'Combinacion de llaves incorrecta',
            }),
          }),
        500
      );
    })
  );

const logout = async () =>
  call(
    await new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            ok: true,
            statusText: '',
            json: () => ({
              success: true,
            }),
          }),
        500
      );
    })
  );

export {
  searchVideoList,
  searchVideo,
  searchRelatedVideoList,
  getFavorite as getFavoriteList,
  login,
  logout,
};

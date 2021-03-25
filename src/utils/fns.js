import { storage } from './storage';

const safeHTML = (html) => ({ __html: html });

const stopPropagation = (event) => event.stopPropagation();

const getFavoriteList = () => {
  const list = JSON.parse(storage.get('favorites') || '[]');
  if (list.length === 0) {
    list.items = [];
  }

  return list;
};

const setFavoriteList = (items) => {
  const list = items;
  const favoriteList = getFavoriteList();

  favoriteList.items.forEach(({ etag }) => {
    list.filter((favorite) => {
      if (favorite.etag === etag) {
        // eslint-disable-next-line no-param-reassign
        favorite.favorites = true;
      }
    });
  });

  return list;
};

export { safeHTML, stopPropagation, getFavoriteList, setFavoriteList };

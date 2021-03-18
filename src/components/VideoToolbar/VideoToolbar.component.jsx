import React, { useState } from 'react';

import { FavoriteIcon } from './VideoToolbar.styled';

import { stopPropagation, getFavoriteList } from '../../utils/fns';

import { storage } from '../../utils/storage';

const VideoToolbar = ({
  showing = false,
  isFavorite = false,
  etag,
  src,
  title,
  description,
  videoID,
}) => {
  const [isFavoriteOn, setIsFavoriteOn] = useState(isFavorite);

  const toggleFavorites = (event) => {
    stopPropagation(event);
    const favoriteList = getFavoriteList();
    if (isFavoriteOn) {
      storage.set(
        'favorites',
        JSON.stringify({
          items: favoriteList.items.filter((favorite) => favorite.etag !== etag),
        })
      );
    } else {
      storage.set(
        'favorites',
        JSON.stringify({
          items: [
            ...favoriteList.items,
            {
              etag,
              id: { videoId: videoID },
              snippet: {
                title,
                description,
                thumbnails: {
                  high: { url: src },
                },
              },
              favorites: true,
            },
          ],
        })
      );
    }
    setIsFavoriteOn(!isFavoriteOn);
  };

  return (
    <>
      {(showing || isFavoriteOn) && (
        <FavoriteIcon
          // eslint-disable-next-line jsx-a11y/aria-role
          role="favorite-icon"
          hover={showing.toString()}
          active={isFavoriteOn.toString()}
          onClick={toggleFavorites}
          size={20}
        />
      )}
    </>
  );
};

export default VideoToolbar;

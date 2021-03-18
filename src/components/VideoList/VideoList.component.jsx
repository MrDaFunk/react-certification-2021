import React from 'react';

import { Container } from './VideoList.styled';

import Video from '../Video';

import { useState } from '../Store';

const VideoList = ({ data, isInModal = false }) => {
  const { videos } = useState();
  const videoList = data || videos;

  return (
    <Container>
      {videoList.length > 0 ? (
        videoList.map(
          ({
            etag,
            id: { videoId },
            snippet: {
              title,
              description,
              thumbnails: {
                high: { url },
              },
            } = {
              title: '',
              description: '',
              thumbnails: { high: { url: '' } },
            },
            favorites = false,
          }) =>
            videoId &&
            title && (
              <Video
                videoID={videoId}
                key={etag}
                etag={etag}
                src={url}
                title={title}
                description={description}
                favorites={favorites}
                isInModal={isInModal}
              />
            )
        )
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </Container>
  );
};

export default VideoList;

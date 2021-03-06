import React from 'react';

import { Container } from './VideoList.styled';

import Video from '../Video';

const VideoList = ({ data, setIsLoading, setCurrentVideo, isInModal = false }) => (
  <Container>
    {data.length > 0 ? (
      data.map(
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
        }) =>
          videoId &&
          title && (
            <Video
              isInModal={isInModal}
              videoID={videoId}
              key={etag}
              src={url}
              title={title}
              description={description}
              setIsLoading={setIsLoading}
              setCurrentVideo={setCurrentVideo}
            />
          )
      )
    ) : (
      <p>No se encontraron resultados</p>
    )}
  </Container>
);

export default VideoList;

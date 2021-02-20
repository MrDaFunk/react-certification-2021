import React from 'react';

import { Container } from './VideoList.styled';

import Video from '../Video';

import mockData from '../../assets/mock/videolist.mock.json';

const VideoList = ({ data }) => {
  const videos = data ?? mockData.items;

  return (
    <Container>
      {videos.length > 0 ? (
        videos.map(
          ({
            etag,
            snippet: {
              title,
              description,
              thumbnails: {
                medium: { url },
              },
            },
          }) => <Video key={etag} src={url} title={title} description={description} />
        )
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </Container>
  );
};

export default VideoList;

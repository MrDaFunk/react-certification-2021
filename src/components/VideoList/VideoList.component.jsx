import React from 'react';

import { Container } from './VideoList.styled';

import Video from '../Video';

const VideoList = ({ data }) => 
  <Container>
    {data.length > 0 ? (
      data.map(
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
  </Container>;

export default VideoList;

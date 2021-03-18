import React, { useState } from 'react';

import { Card, Header, Title, Description } from './Video.styled';
import { safeHTML } from '../../utils/fns';

import VideoToolbar from '../VideoToolbar';

import { useDispatch } from '../Store';

const Video = ({
  etag,
  src,
  title,
  description,
  videoID,
  isInModal = false,
  favorites = false,
}) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const selectVideo = (event) => {
    dispatch({ type: 'toggleIsLoading', payload: true });
    dispatch({ type: 'setCurrent', payload: videoID });
    dispatch({ type: 'toggleIsLoading', payload: false });
  };
  const [showing, setShowing] = useState(false);

  const showTools = (show) => setShowing(show);

  return (
    <Card
      image={src}
      onClick={selectVideo}
      isInModal={isInModal}
      onMouseEnter={() => showTools(true)}
      onMouseLeave={() => showTools(false)}
    >
      <VideoToolbar
        showing={showing}
        isFavorite={favorites}
        etag={etag}
        src={src}
        title={title}
        description={description}
        videoID={videoID}
      />
      <Header>
        <Title dangerouslySetInnerHTML={safeHTML(title)} />
        <Description
          dangerouslySetInnerHTML={safeHTML(description)}
          isInModal={isInModal}
        />
      </Header>
    </Card>
  );
};

export default Video;

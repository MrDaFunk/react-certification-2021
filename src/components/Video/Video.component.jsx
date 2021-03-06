import React from 'react';

import { Card, Header, Title, Description } from './Video.styled';
import { safeHTML } from '../../utils/fns';

const Video = ({
  src,
  title,
  description,
  videoID,
  setIsLoading,
  setCurrentVideo,
  isInModal = false,
}) => {
  // eslint-disable-next-line no-unused-vars
  const selectVideo = (event) => {
    setIsLoading(true);
    setCurrentVideo(videoID);
    setIsLoading(false);
  };

  return (
    <Card image={src} onClick={selectVideo} isInModal={isInModal}>
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

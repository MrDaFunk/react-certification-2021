import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import { Card, Header, Title, Description } from './Video.styled';
import { safeHTML } from '../../utils/fns';

import VideoToolbar from '../VideoToolbar';

import { useState as useStoreState, useDispatch } from '../State';

const Video = ({
  etag,
  src,
  title,
  description,
  videoID,
  isInModal = false,
  favorites = false,
}) => {
  const location = useLocation();
  const history = useHistory();
  const { hasAuth, current } = useStoreState();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const selectVideo = (event) => {
    let pushHistory = false;
    if (current === '') {
      pushHistory = true;
    }
    dispatch({ type: 'toggleIsLoading', payload: true });
    dispatch({ type: 'setCurrent', payload: videoID });
    if (pushHistory) {
      history.push({ pathname: '/video', state: { background: location } });
    }
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
      {hasAuth && (
        <VideoToolbar
          showing={showing}
          isFavorite={favorites}
          etag={etag}
          src={src}
          title={title}
          description={description}
          videoID={videoID}
        />
      )}
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

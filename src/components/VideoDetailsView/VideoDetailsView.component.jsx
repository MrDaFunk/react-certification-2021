import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Suggestions,
  Container,
  RightTitle,
  RightSection,
  Card,
  Video,
  Player,
  Title,
  Description,
} from './VideoDetailsView.styled';

import VideoList from '../VideoList';

import { safeHTML, stopPropagation } from '../../utils/fns';
import { searchVideo, searchRelatedVideoList } from '../../utils/services';

import { md } from '../../utils/constants/responsive-sizes';

import { useState as useStoreState, useDispatch } from '../State';

const VideoDetailsView = () => {
  const history = useHistory();
  const { isLoading, current } = useStoreState();
  const dispatch = useDispatch();
  const compareWindowSize = () => window.innerWidth <= md.replace('px', '');

  const videoPath = `https://youtube.com/embed/${current}?autoplay=1&origin=http://localhost:3000`;
  const [isMobile, setIsMobile] = useState(compareWindowSize());
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [videos, setVideos] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const closeVideoHandler = (event) => {
    history.push('/');
    dispatch({ type: 'setCurrent', payload: '' });
  };

  useEffect(() => {
    const getDetails = async () => {
      const response = await searchVideo(current);
      if (response) {
        const {
          items: [
            {
              snippet: { title, description },
            },
          ],
        } = await response.json();
        setCurrentTitle(title);
        setCurrentDescription(description);
      }
    };
    const getRelatedVideos = async () => {
      const response = await searchRelatedVideoList(current);
      if (response) {
        const { items } = await response.json();
        setVideos(items);
      }
    };

    // eslint-disable-next-line no-unused-vars
    const resize = (event) => setIsMobile(compareWindowSize());

    if (current !== '') {
      window.addEventListener('resize', resize);

      getDetails();
      getRelatedVideos();
    }

    return () => window.removeEventListener('resize', resize);
  }, [current, isMobile]);

  if (isLoading || current === '') {
    return null;
  }

  return (
    <Container onClick={closeVideoHandler}>
      {/* eslint-disable-next-line jsx-a11y/aria-role */}
      <Card role="player" onClick={stopPropagation}>
        <Video>
          <Player type="text/html" src={videoPath} />
          <Title dangerouslySetInnerHTML={safeHTML(currentTitle)} />
          <Description dangerouslySetInnerHTML={safeHTML(currentDescription)} />
        </Video>
        <Suggestions>
          <RightTitle>Videos Sugeridos</RightTitle>
          <RightSection>
            <VideoList data={videos} isInModal />
          </RightSection>
        </Suggestions>
      </Card>
    </Container>
  );
};

export default VideoDetailsView;

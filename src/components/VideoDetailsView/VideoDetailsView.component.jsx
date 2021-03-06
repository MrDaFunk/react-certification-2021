import React, { useState, useEffect } from 'react';

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

import { errorMessage } from '../../utils/constants/api';

const VideoDetailsView = ({ isLoading, setIsLoading, currentVideo, setCurrentVideo }) => {
  const compareWindowSize = () => window.innerWidth <= md.replace('px', '');

  const videoPath = `https://youtube.com/embed/${currentVideo}?autoplay=1&origin=http://localhost:3000`;
  const [isMobile, setIsMobile] = useState(compareWindowSize());
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [videos, setVideos] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const closeVideoHandler = (event) => setCurrentVideo('');

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await searchVideo(currentVideo);
        if (!response.ok) {
          throw Error(`${errorMessage} ${response.statusText}`);
        }
        const {
          items: [
            {
              snippet: { title, description },
            },
          ],
        } = await response.json();
        setCurrentTitle(title);
        setCurrentDescription(description);
      } catch (err) {
        console.error(err);
      }

      if (!isMobile) {
        try {
          const response = await searchRelatedVideoList(currentVideo);
          if (!response.ok) {
            throw Error(`${errorMessage} ${response.statusText}`);
          }
          const { items } = await response.json();
          setVideos(items);
        } catch (err) {
          console.error(err);
        }
      }
    };

    // eslint-disable-next-line no-unused-vars
    const resize = (event) => setIsMobile(compareWindowSize());

    window.addEventListener('resize', resize);
    getDetails();
    return () => window.removeEventListener('resize', resize);
  }, [currentVideo, isMobile]);

  if (isLoading || currentVideo === '') {
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
            <VideoList
              data={videos}
              setIsLoading={setIsLoading}
              setCurrentVideo={setCurrentVideo}
              isInModal
            />
          </RightSection>
        </Suggestions>
      </Card>
    </Container>
  );
};

export default VideoDetailsView;

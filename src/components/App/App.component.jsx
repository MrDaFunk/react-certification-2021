import React, { useState } from 'react';

import HomePage from '../../pages/Home';
import Header from '../Header';
import Layout from '../Layout';
import Loading from '../Loading';
import Theme from '../Theme';
import VideoDetailsView from '../VideoDetailsView';
import LoginModal from '../LoginModal';

import GlobalStyle from '../../utils/styled/global';
import { storage } from '../../utils/storage';

import mockData from '../../assets/mock/videolist.mock.json';

const App = () => {
  const [videoList, setVideoList] = useState(mockData.items);
  const [isDarkModeOn, setIsDarkModeOn] = useState(storage.get('isDarkModeOn') ?? true);
  const [isLoading, setIsLoading] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [showLogInModal, setShowLogInModal] = useState(false);

  const searchVideoList = (video) => setVideoList(video);

  const selectVideoList = (video) => setCurrentVideo(video);

  const loadingHandler = (loading) => setIsLoading(loading);

  const toggleLogInModal = () => setShowLogInModal(!showLogInModal);

  const toggleDarkMode = () => {
    storage.set('isDarkModeOn', !isDarkModeOn);
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <Theme isDarkModeOn={isDarkModeOn}>
      <GlobalStyle />
      <Header
        searchVideoList={searchVideoList}
        isDarkModeOn={isDarkModeOn}
        toggleDarkMode={toggleDarkMode}
        setIsLoading={loadingHandler}
        toggleLogInModal={toggleLogInModal}
      />
      <Layout>
        {isLoading && <Loading />}
        <HomePage
          data={videoList}
          setIsLoading={loadingHandler}
          setCurrentVideo={selectVideoList}
        />
      </Layout>
      {currentVideo && (
        <VideoDetailsView
          isLoading={isLoading}
          setIsLoading={loadingHandler}
          currentVideo={currentVideo}
          setCurrentVideo={selectVideoList}
        />
      )}
      {showLogInModal && <LoginModal toggleLogInModal={toggleLogInModal} />}
    </Theme>
  );
};

export default App;

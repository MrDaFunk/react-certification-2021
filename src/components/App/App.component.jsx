import React, { useState } from 'react';

import HomePage from '../../pages/Home';
import Header from '../Header';
import Layout from '../Layout';
import Theme from '../Theme';

import GlobalStyle from '../../utils/styled/global';

import mockData from '../../assets/mock/videolist.mock.json';

const App = () => {
  const [ videoList, setVideoList ] = useState(mockData.items);
  const [ isDarkModeOn, setIsDarkModeOn ] = useState(true);

  const searchVideoList = (video) => setVideoList(video);

  const toggleDarkMode = () => setIsDarkModeOn(!isDarkModeOn);

  return (
    <Theme isDarkModeOn={isDarkModeOn}>
      <GlobalStyle />
      <Header searchVideoList={searchVideoList} isDarkModeOn={isDarkModeOn} toggleDarkMode={toggleDarkMode} />
      <Layout>
        <HomePage data={videoList} />
      </Layout>
    </Theme>
  );
};

export default App;

import React from 'react';

import VideoList from '../../components/VideoList';

const HomePage = ({ data, setIsLoading, setCurrentVideo }) => (
  <VideoList data={data} setIsLoading={setIsLoading} setCurrentVideo={setCurrentVideo} />
);

export default HomePage;

import React from 'react';

import HomePage from '../../pages/Home';
import Header from '../Header';
import Layout from '../Layout';
import Loading from '../Loading';
import Theme from '../Theme';
import VideoDetailsView from '../VideoDetailsView';
import LoginModal from '../LoginModal';
import { Store } from '../Store';

import GlobalStyle from '../../utils/styled/global';

const App = () => (
  <Store>
    <Theme>
      <GlobalStyle />
      <Header />
      <Layout>
        <Loading />
        <HomePage />
      </Layout>
      <VideoDetailsView />
      <LoginModal />
    </Theme>
  </Store>
);

export default App;

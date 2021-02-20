import React from 'react';

import HomePage from '../../pages/Home';
import Header from '../Header';
import Layout from '../Layout';
import Theme from '../Theme';

import GlobalStyle from '../../utils/styled/global';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Layout>
        <HomePage />
      </Layout>
    </Theme>
  );
};

export default App;
